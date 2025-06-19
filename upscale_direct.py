#!/usr/bin/env python3
"""
Direct Image Upscaling using PIL/Pillow with Lanczos resampling
Simple approach that doesn't require complex ML models
"""

import os
from PIL import Image
from pathlib import Path
import concurrent.futures
from tqdm import tqdm

def upscale_image(img_path, scale_factor=4):
    """Upscale a single image using Lanczos resampling"""
    try:
        # Open image
        with Image.open(img_path) as img:
            # Calculate new dimensions
            width, height = img.size
            new_width = width * scale_factor
            new_height = height * scale_factor
            
            # Upscale using Lanczos (high-quality resampling)
            upscaled = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            
            # Save with high quality
            if img_path.lower().endswith('.jpg') or img_path.lower().endswith('.jpeg'):
                upscaled.save(img_path, 'JPEG', quality=95, optimize=True)
            elif img_path.lower().endswith('.png'):
                upscaled.save(img_path, 'PNG', optimize=True)
            else:
                upscaled.save(img_path)
                
            return True, img_path
    except Exception as e:
        return False, f"{img_path}: {str(e)}"

def main():
    # Get all images in the images directory (direct children only)
    image_extensions = {'.jpg', '.jpeg', '.png', '.bmp', '.gif', '.tiff', '.tif'}
    images_dir = Path('images')
    
    image_files = [
        f for f in images_dir.iterdir() 
        if f.is_file() and f.suffix.lower() in image_extensions
    ]
    
    print(f"Found {len(image_files)} images to upscale")
    
    if not image_files:
        print("No images found in the images directory")
        return
    
    # Process images in parallel for speed
    successful = 0
    failed = []
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        # Submit all tasks
        future_to_file = {
            executor.submit(upscale_image, str(img_file)): img_file 
            for img_file in image_files
        }
        
        # Process results with progress bar
        with tqdm(total=len(image_files), desc="Upscaling images") as pbar:
            for future in concurrent.futures.as_completed(future_to_file):
                success, result = future.result()
                if success:
                    successful += 1
                else:
                    failed.append(result)
                pbar.update(1)
    
    # Report results
    print(f"\nUpscaling complete!")
    print(f"Successfully upscaled: {successful} images")
    if failed:
        print(f"Failed: {len(failed)} images")
        for error in failed:
            print(f"  - {error}")
    
    # Show file size comparison
    print("\nFile size comparison:")
    total_before = sum(f.stat().st_size for f in image_files if f.exists())
    images_dir_after = Path('images')
    image_files_after = [
        f for f in images_dir_after.iterdir() 
        if f.is_file() and f.suffix.lower() in image_extensions
    ]
    total_after = sum(f.stat().st_size for f in image_files_after)
    
    print(f"Total size before: {total_before / 1024 / 1024:.1f} MB")
    print(f"Total size after: {total_after / 1024 / 1024:.1f} MB")
    print(f"Size increase: {total_after / total_before:.1f}x")

if __name__ == "__main__":
    main()