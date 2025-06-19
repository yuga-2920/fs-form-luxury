#!/usr/bin/env python3
"""
SwinIR Image Upscaling Script
Uses SwinIR model to upscale all images in the images directory
"""

import os
import sys
import torch
import numpy as np
from PIL import Image
import argparse
from tqdm import tqdm

# Check if required packages are installed
try:
    from torchvision import transforms
except ImportError:
    print("Error: torchvision not installed. Please run: pip install torchvision")
    sys.exit(1)

try:
    import cv2
except ImportError:
    print("Error: opencv-python not installed. Please run: pip install opencv-python")
    sys.exit(1)

def setup_swinir():
    """Download and setup SwinIR model"""
    # Clone SwinIR repository if not exists
    if not os.path.exists('SwinIR'):
        print("Cloning SwinIR repository...")
        os.system('git clone https://github.com/JingyunLiang/SwinIR.git')
    
    # Add SwinIR to Python path
    sys.path.insert(0, 'SwinIR')
    
    # Download pretrained model if not exists
    model_dir = 'SwinIR/experiments/pretrained_models'
    os.makedirs(model_dir, exist_ok=True)
    
    # Real-world image super-resolution model (4x)
    model_url = 'https://github.com/JingyunLiang/SwinIR/releases/download/v0.0/003_realSR_BSRGAN_DFOWMFC_s64w8_SwinIR-L_x4_GAN.pth'
    model_path = os.path.join(model_dir, '003_realSR_BSRGAN_DFOWMFC_s64w8_SwinIR-L_x4_GAN.pth')
    
    if not os.path.exists(model_path):
        print(f"Downloading SwinIR model...")
        os.system(f'wget {model_url} -O {model_path}')
    
    return model_path

def load_swinir_model(model_path, device):
    """Load SwinIR model"""
    from models.network_swinir import SwinIR as net
    
    # Model configuration for real-world SR x4
    model = net(upscale=4, in_chans=3, img_size=64, window_size=8,
                img_range=1., depths=[6, 6, 6, 6, 6, 6, 6, 6, 6], 
                embed_dim=240, num_heads=[8, 8, 8, 8, 8, 8, 8, 8, 8],
                mlp_ratio=2, upsampler='nearest+conv', resi_connection='3conv')
    
    # Load pretrained weights
    pretrained_model = torch.load(model_path, map_location=device)
    model.load_state_dict(pretrained_model['params_ema'] if 'params_ema' in pretrained_model else pretrained_model, strict=True)
    
    model.eval()
    model = model.to(device)
    
    return model

def upscale_image(model, img_path, output_path, device):
    """Upscale a single image using SwinIR"""
    # Read image
    img = cv2.imread(img_path, cv2.IMREAD_COLOR).astype(np.float32) / 255.
    img = torch.from_numpy(np.transpose(img[:, :, [2, 1, 0]], (2, 0, 1))).float()
    img = img.unsqueeze(0).to(device)
    
    # Inference
    with torch.no_grad():
        # Pad to multiple of window_size
        _, _, h, w = img.size()
        mod_pad_h = (8 - h % 8) % 8
        mod_pad_w = (8 - w % 8) % 8
        img = torch.nn.functional.pad(img, (0, mod_pad_w, 0, mod_pad_h), 'reflect')
        
        # Super-resolution
        output = model(img)
        
        # Remove padding
        _, _, h, w = output.size()
        output = output[:, :, 0:h-mod_pad_h*4, 0:w-mod_pad_w*4]
    
    # Save image
    output = output.data.squeeze().float().cpu().clamp_(0, 1).numpy()
    output = np.transpose(output[[2, 1, 0], :, :], (1, 2, 0))
    output = (output * 255.0).round().astype(np.uint8)
    
    # Create output directory if needed
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    cv2.imwrite(output_path, output)

def main():
    parser = argparse.ArgumentParser(description='Upscale images using SwinIR')
    parser.add_argument('--input-dir', default='images', help='Input directory containing images')
    parser.add_argument('--output-dir', default='images_upscaled', help='Output directory for upscaled images')
    parser.add_argument('--scale', type=int, default=4, help='Upscaling factor (default: 4)')
    parser.add_argument('--gpu', action='store_true', help='Use GPU if available')
    args = parser.parse_args()
    
    # Setup device
    device = torch.device('cuda' if args.gpu and torch.cuda.is_available() else 'cpu')
    print(f"Using device: {device}")
    
    # Setup SwinIR
    print("Setting up SwinIR...")
    model_path = setup_swinir()
    
    # Load model
    print("Loading SwinIR model...")
    model = load_swinir_model(model_path, device)
    
    # Get all image files
    image_extensions = {'.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.tif'}
    image_files = []
    
    for root, dirs, files in os.walk(args.input_dir):
        for file in files:
            if any(file.lower().endswith(ext) for ext in image_extensions):
                image_files.append(os.path.join(root, file))
    
    print(f"Found {len(image_files)} images to upscale")
    
    # Process images
    for img_path in tqdm(image_files, desc="Upscaling images"):
        # Generate output path
        rel_path = os.path.relpath(img_path, args.input_dir)
        output_path = os.path.join(args.output_dir, rel_path)
        
        try:
            upscale_image(model, img_path, output_path, device)
        except Exception as e:
            print(f"Error processing {img_path}: {e}")
            continue
    
    print(f"Upscaling complete! Upscaled images saved to: {args.output_dir}")

if __name__ == "__main__":
    main()