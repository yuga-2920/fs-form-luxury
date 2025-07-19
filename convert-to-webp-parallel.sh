#!/bin/bash

# WebP並列変換スクリプト
# public/images内のすべてのJPG/PNG画像を並列でWebP形式に変換

echo "🚀 WebP並列変換を開始します..."

# public/imagesディレクトリに移動
cd "$(dirname "$0")/public/images" || exit 1

# cwebpコマンドの存在確認
if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebpコマンドが見つかりません"
    echo "📝 インストール方法:"
    echo "   macOS: brew install webp"
    echo "   Ubuntu/Debian: sudo apt-get install webp"
    exit 1
fi

# 変換関数
convert_to_webp() {
    local file="$1"
    local base="${file%.*}"
    local webp_file="${base}.webp"
    
    if cwebp -q 85 "$file" -o "$webp_file" 2>/dev/null; then
        rm "$file"
        echo "✅ $file → $webp_file"
    else
        echo "❌ 失敗: $file"
    fi
}

# 関数をエクスポート
export -f convert_to_webp

# 残りのJPG/PNG画像を取得
echo "📊 残りの画像を確認中..."
remaining=$(find . -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) | wc -l)
echo "📊 変換対象: $remaining ファイル"

if [ "$remaining" -eq 0 ]; then
    echo "✨ すべての画像がすでにWebP形式に変換されています！"
    exit 0
fi

# 並列処理で変換（最大8プロセス）
echo "🔄 並列変換中..."
find . -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) -print0 | \
    xargs -0 -n 1 -P 8 -I {} bash -c 'convert_to_webp "$@"' _ {}

echo ""
echo "🎉 WebP変換が完了しました！"

# 結果を表示
webp_count=$(find . -name "*.webp" | wc -l)
echo "📊 WebPファイル総数: $webp_count"