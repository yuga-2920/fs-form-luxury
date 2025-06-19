#!/usr/bin/env python3
"""
Simple Image Upscaling Script using Real-ESRGAN
A more user-friendly alternative that's easier to install and run
"""

import os
import sys
import subprocess
from pathlib import Path

def install_realesrgan():
    """Install Real-ESRGAN if not already installed"""
    try:
        import realesrgan
    except ImportError:
        print("Installing Real-ESRGAN...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "realesrgan"])
        subprocess.check_call([sys.executable, "-m", "pip", "install", "basicsr"])
        subprocess.check_call([sys.executable, "-m", "pip", "install", "facexlib"])
        subprocess.check_call([sys.executable, "-m", "pip", "install", "gfpgan"])

def upscale_with_realesrgan():
    """Upscale images using Real-ESRGAN"""
    from basicsr.archs.rrdbnet_arch import RRDBNet
    from realesrgan import RealESRGANer
    import cv2
    import numpy as np
    from tqdm import tqdm
    
    # Model configuration
    model = RRDBNet(num_in_ch=3, num_out_ch=3, num_feat=64, num_block=23, num_grow_ch=32, scale=4)
    
    # Initialize upsampler
    upsampler = RealESRGANer(
        scale=4,
        model_path='https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth',
        model=model,
        tile=0,
        tile_pad=10,
        pre_pad=0,
        half=False
    )
    
    # Create output directory
    output_dir = 'images_upscaled'
    os.makedirs(output_dir, exist_ok=True)
    
    # Get all images
    image_extensions = {'.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.tif'}
    image_files = []
    
    for root, dirs, files in os.walk('images'):
        for file in files:
            if any(file.lower().endswith(ext) for ext in image_extensions):
                image_files.append(os.path.join(root, file))
    
    print(f"Found {len(image_files)} images to upscale")
    
    # Process each image
    for img_path in tqdm(image_files, desc="Upscaling images"):
        try:
            # Read image
            img = cv2.imread(img_path, cv2.IMREAD_UNCHANGED)
            if img is None:
                print(f"Warning: Could not read {img_path}")
                continue
            
            # Upscale
            output, _ = upsampler.enhance(img, outscale=4)
            
            # Save
            rel_path = os.path.relpath(img_path, 'images')
            output_path = os.path.join(output_dir, rel_path)
            os.makedirs(os.path.dirname(output_path), exist_ok=True)
            cv2.imwrite(output_path, output)
            
        except Exception as e:
            print(f"Error processing {img_path}: {e}")
    
    print(f"Upscaling complete! Images saved to: {output_dir}")

def main():
    print("=== Image Upscaling Script ===")
    print("This script will upscale all images in the 'images' directory")
    print("Upscaled images will be saved to 'images_upscaled' directory")
    print()
    
    # Check if images directory exists
    if not os.path.exists('images'):
        print("Error: 'images' directory not found!")
        print("Please ensure you're running this script from the fs-form directory")
        return
    
    # Install dependencies
    print("Checking dependencies...")
    install_realesrgan()
    
    # Upscale images
    print("\nStarting upscaling process...")
    upscale_with_realesrgan()

if __name__ == "__main__":
    main()