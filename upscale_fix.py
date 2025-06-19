#!/usr/bin/env python3
"""
Fixed Image Upscaling - handles different image modes properly
"""

import os
from PIL import Image
from pathlib import Path
import concurrent.futures
from tqdm import tqdm

def upscale_image(img_path, scale_factor=4):
    """Upscale a single image with proper mode handling"""
    try:
        with Image.open(img_path) as img:
            # Calculate new dimensions
            width, height = img.size
            new_width = width * scale_factor
            new_height = height * scale_factor
            
            # Convert image mode if necessary
            if img_path.lower().endswith(('.jpg', '.jpeg')):
                # Convert to RGB for JPEG
                if img.mode in ('RGBA', 'LA', 'P'):
                    # Create white background
                    rgb_img = Image.new('RGB', img.size, (255, 255, 255))
                    # Paste image using alpha channel as mask
                    if img.mode == 'RGBA' or img.mode == 'LA':
                        rgb_img.paste(img, mask=img.split()[-1])
                    else:
                        rgb_img.paste(img)
                    img = rgb_img
                elif img.mode not in ('RGB', 'L'):
                    img = img.convert('RGB')
            
            # Upscale using Lanczos
            upscaled = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            
            # Save with appropriate settings
            if img_path.lower().endswith(('.jpg', '.jpeg')):
                upscaled.save(img_path, 'JPEG', quality=95, optimize=True)
            elif img_path.lower().endswith('.png'):
                upscaled.save(img_path, 'PNG', optimize=True)
            else:
                upscaled.save(img_path)
                
            return True, img_path
    except Exception as e:
        return False, f"{img_path}: {str(e)}"

def main():
    # Get failed images from previous run
    failed_images = [
        'images/dress-code-suit.jpg',
        'images/brand-valentino.jpg',
        'images/brand-supreme.jpg',
        'images/brand-yohji.jpg',
        'images/brand-snowpeak.jpg',
        'images/avoid-animal-pattern.jpg',
        'images/service-app.jpg',
        'images/brand-prada.jpg',
        'images/brand-jilsander.jpg',
        'images/travel-overseas-western.jpg',
        'images/brand-agnesb.jpg',
        'images/investment-outer.jpg',
        'images/dress-code-smart-casual.jpg',
        'images/avoid-excessive-exposure.jpg',
        'images/brand-sl.jpg',
        'images/brand-gu.jpg',
        'images/brand-hm.jpg',
        'images/brand-lacoste.jpg',
        'images/brand-canadagoose.jpg',
        'images/avoid-bold-print.jpg',
        'images/avoid-logo.jpg',
        'images/brand-unitedarrows.jpg',
        'images/brand-lv.jpg',
        'images/brand-fendi.jpg',
        'images/ avoid-excessive-exposure.jpg',
        'images/brand-adidas.jpg',
        'images/service-transport.jpg',
        'images/brand-hermes.jpg',
        'images/dress-code-flexible.jpg',
        'images/avoid-complex-pattern.jpg',
        'images/dress-code-business-casual.jpg'
    ]
    
    # Filter out files that don't exist
    existing_files = [f for f in failed_images if os.path.exists(f)]
    
    print(f"Processing {len(existing_files)} previously failed images...")
    
    successful = 0
    failed = []
    
    # Process images
    with tqdm(total=len(existing_files), desc="Fixing failed images") as pbar:
        for img_path in existing_files:
            success, result = upscale_image(img_path)
            if success:
                successful += 1
            else:
                failed.append(result)
            pbar.update(1)
    
    # Report results
    print(f"\nProcessing complete!")
    print(f"Successfully upscaled: {successful} images")
    if failed:
        print(f"Still failed: {len(failed)} images")
        for error in failed:
            print(f"  - {error}")

if __name__ == "__main__":
    main()