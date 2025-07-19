#!/bin/bash

# WebP完全変換スクリプト
# 残りの全画像を高速で並列変換

echo "🚀 WebP完全変換を開始します..."

cd "$(dirname "$0")/public/images" || exit 1

# cwebpコマンドの確認
if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebpコマンドが見つかりません"
    echo "📝 macOS: brew install webp"
    exit 1
fi

# 残りの画像数を確認
remaining=$(find . -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) | wc -l)
echo "📊 残り変換対象: $remaining ファイル"

if [ "$remaining" -eq 0 ]; then
    echo "✨ すべての画像がWebP形式です！"
    webp_count=$(find . -name "*.webp" | wc -l)
    echo "📊 WebPファイル総数: $webp_count"
    exit 0
fi

# 変換関数（最適化パラメータ付き）
convert_image() {
    local file="$1"
    local base="${file%.*}"
    local webp_file="${base}.webp"
    
    # 既にWebPファイルが存在する場合はスキップ
    if [ -f "$webp_file" ]; then
        rm "$file" 2>/dev/null
        return 0
    fi
    
    # WebP変換（品質85%、マルチスレッド有効）
    if cwebp -q 85 -m 6 -mt "$file" -o "$webp_file" 2>/dev/null; then
        rm "$file"
        echo "✅ $(basename "$file")"
        return 0
    else
        echo "❌ $(basename "$file")"
        return 1
    fi
}

# 関数をエクスポート
export -f convert_image

# 進捗表示用
echo "🔄 並列変換中（最大16プロセス）..."

# 並列変換実行（最大16プロセス）
find . -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) -print0 | \
    xargs -0 -n 1 -P 16 -I {} bash -c 'convert_image "$@"' _ {}

# 結果確認
echo ""
echo "📊 変換結果確認中..."

# 最終的な数をカウント
final_webp=$(find . -name "*.webp" | wc -l)
final_remaining=$(find . -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) | wc -l)

echo ""
echo "🎉 WebP変換完了！"
echo "✅ WebPファイル: $final_webp"
echo "📋 残り未変換: $final_remaining"

if [ "$final_remaining" -eq 0 ]; then
    echo "🌟 すべての画像がWebP化されました！"
    
    # ディスク使用量を表示
    total_size=$(du -sh . | cut -f1)
    echo "📦 画像フォルダ総サイズ: $total_size"
    
    # WebPファイルの平均サイズを表示
    if [ "$final_webp" -gt 0 ]; then
        avg_size=$(find . -name "*.webp" -exec du -k {} + | awk '{total+=$1; count++} END {if(count>0) printf "%.1fKB", total/count}')
        echo "📊 WebPファイル平均サイズ: $avg_size"
    fi
else
    echo "⚠️  変換に失敗したファイルがあります"
    echo "📝 失敗したファイルを確認してください"
    
    # 失敗したファイルをリスト表示
    echo ""
    echo "🔍 残り未変換ファイル:"
    find . -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) | head -10
    if [ "$final_remaining" -gt 10 ]; then
        echo "... および他 $((final_remaining - 10)) ファイル"
    fi
fi

echo ""
echo "✨ 処理完了"