#!/bin/bash

# WebP変換スクリプト
# public/images内のすべてのJPG/PNG画像をWebP形式に変換

echo "🖼️  WebP変換を開始します..."

# カウンター
converted=0
failed=0

# public/imagesディレクトリに移動
cd "$(dirname "$0")/public/images" || exit 1

# 変換前のファイル数を確認
total=$(find . -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) | wc -l)
echo "📊 変換対象: $total ファイル"

# cwebpコマンドの存在確認
if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebpコマンドが見つかりません"
    echo "📝 インストール方法:"
    echo "   macOS: brew install webp"
    echo "   Ubuntu/Debian: sudo apt-get install webp"
    exit 1
fi

# 各画像ファイルを処理
find . -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) | while read -r file; do
    # ファイル名から拡張子を除去
    base="${file%.*}"
    webp_file="${base}.webp"
    
    # WebPに変換（品質85%）
    if cwebp -q 85 "$file" -o "$webp_file" 2>/dev/null; then
        # 変換成功したら元のファイルを削除
        rm "$file"
        ((converted++))
        echo "✅ 変換完了: $file → $webp_file"
    else
        ((failed++))
        echo "❌ 変換失敗: $file"
    fi
done

echo ""
echo "🎉 変換完了！"
echo "✅ 成功: $converted ファイル"
echo "❌ 失敗: $failed ファイル"

# HTMLやCSSファイル内の参照を更新するための情報を出力
echo ""
echo "📝 次のステップ:"
echo "1. HTMLファイル内の画像参照を更新"
echo "2. CSSファイル内の画像参照を更新"
echo "3. JavaScriptファイル内の画像参照を更新"