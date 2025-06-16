#!/bin/bash

# ブランドロゴプレースホルダー画像を生成するスクリプト

# ImageMagickを使用して画像を生成
brands=(
    "brand-hermes.jpg:#FF6600"
    "brand-lv.jpg:#964B00"
    "brand-chanel.jpg:#000000"
    "brand-gucci.jpg:#006B54"
    "brand-prada.jpg:#000000"
    "brand-bottega.jpg:#4B5320"
    "brand-celine.jpg:#000000"
    "brand-sl.jpg:#000000"
    "brand-balenciaga.jpg:#000000"
    "brand-dior.jpg:#8B7355"
)

for brand in "${brands[@]}"; do
    IFS=':' read -r filename color <<< "$brand"
    
    # 200x200の画像を生成（シンプルな色のみ）
    convert -size 200x200 xc:"$color" \
            -bordercolor "#333333" -border 2 \
            "$filename"
    
    echo "Created $filename"
done

echo "All brand placeholder images have been created!"