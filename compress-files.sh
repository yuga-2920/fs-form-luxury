#!/bin/bash

# ファイル圧縮スクリプト
# CSS、JSファイルの圧縮とgzip化

echo "🗜️  ファイル圧縮を開始します..."

cd "$(dirname "$0")/public" || exit 1

# CSS圧縮関数
compress_css() {
    local input="$1"
    local output="$2"
    
    # CSS圧縮（コメント削除、余分な空白削除、改行削除）
    sed -e 's/\/\*[^*]*\*\///g' \
        -e 's/^[ \t]*//g' \
        -e 's/[ \t]*$//g' \
        -e '/^$/d' \
        -e 's/[ \t]*{[ \t]*/{/g' \
        -e 's/[ \t]*}[ \t]*/}/g' \
        -e 's/[ \t]*;[ \t]*/;/g' \
        -e 's/[ \t]*:[ \t]*/:/g' \
        -e 's/[ \t]*,[ \t]*/,/g' \
        "$input" | tr -d '\n' > "$output"
}

# JS圧縮関数（基本的な圧縮のみ）
compress_js() {
    local input="$1"
    local output="$2"
    
    # JS圧縮（コメント削除、余分な空白削除）
    sed -e 's/\/\/.*$//g' \
        -e 's/\/\*[^*]*\*\///g' \
        -e 's/^[ \t]*//g' \
        -e 's/[ \t]*$//g' \
        -e '/^$/d' \
        "$input" > "$output"
}

# 既存の結合ファイルを圧縮
if [ -f "styles-combined.min.css" ]; then
    echo "📦 CSS圧縮中..."
    cp "styles-combined.min.css" "styles-combined.min.css.backup"
    compress_css "styles-combined.min.css.backup" "styles-combined.min.css"
    
    # gzip圧縮版も作成
    gzip -c "styles-combined.min.css" > "styles-combined.min.css.gz"
    
    echo "✅ CSS圧縮完了"
    echo "  元のサイズ: $(du -h styles-combined.min.css.backup | cut -f1)"
    echo "  圧縮後: $(du -h styles-combined.min.css | cut -f1)"
    echo "  gzip: $(du -h styles-combined.min.css.gz | cut -f1)"
fi

if [ -f "scripts-combined.min.js" ]; then
    echo "📦 JavaScript圧縮中..."
    cp "scripts-combined.min.js" "scripts-combined.min.js.backup"
    compress_js "scripts-combined.min.js.backup" "scripts-combined.min.js"
    
    # gzip圧縮版も作成
    gzip -c "scripts-combined.min.js" > "scripts-combined.min.js.gz"
    
    echo "✅ JavaScript圧縮完了"
    echo "  元のサイズ: $(du -h scripts-combined.min.js.backup | cut -f1)"
    echo "  圧縮後: $(du -h scripts-combined.min.js | cut -f1)"
    echo "  gzip: $(du -h scripts-combined.min.js.gz | cut -f1)"
fi

# HTMLファイルの圧縮
if [ -f "index-optimized.html" ]; then
    echo "📦 HTML圧縮中..."
    cp "index-optimized.html" "index-optimized.html.backup"
    
    # HTML圧縮（余分な空白とコメント削除）
    sed -e 's/<!--[^>]*-->//g' \
        -e 's/^[ \t]*//g' \
        -e 's/[ \t]*$//g' \
        -e '/^$/d' \
        "index-optimized.html.backup" > "index-optimized.html"
    
    # gzip圧縮版も作成
    gzip -c "index-optimized.html" > "index-optimized.html.gz"
    
    echo "✅ HTML圧縮完了"
    echo "  元のサイズ: $(du -h index-optimized.html.backup | cut -f1)"
    echo "  圧縮後: $(du -h index-optimized.html | cut -f1)"
    echo "  gzip: $(du -h index-optimized.html.gz | cut -f1)"
fi

# 圧縮統計
echo ""
echo "📊 圧縮統計:"
total_original=0
total_compressed=0
total_gzipped=0

for file in *.backup; do
    if [ -f "$file" ]; then
        original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        base_name="${file%.backup}"
        
        if [ -f "$base_name" ]; then
            compressed_size=$(stat -f%z "$base_name" 2>/dev/null || stat -c%s "$base_name" 2>/dev/null)
            total_original=$((total_original + original_size))
            total_compressed=$((total_compressed + compressed_size))
        fi
        
        if [ -f "${base_name}.gz" ]; then
            gzipped_size=$(stat -f%z "${base_name}.gz" 2>/dev/null || stat -c%s "${base_name}.gz" 2>/dev/null)
            total_gzipped=$((total_gzipped + gzipped_size))
        fi
    fi
done

if [ $total_original -gt 0 ]; then
    compression_ratio=$(echo "scale=1; (100 - $total_compressed * 100 / $total_original)" | bc 2>/dev/null || echo "計算不可")
    gzip_ratio=$(echo "scale=1; (100 - $total_gzipped * 100 / $total_original)" | bc 2>/dev/null || echo "計算不可")
    
    echo "合計削減: ${compression_ratio}% (圧縮), ${gzip_ratio}% (gzip)"
fi

# Brotli圧縮（利用可能な場合）
if command -v brotli &> /dev/null; then
    echo "📦 Brotli圧縮を実行中..."
    for file in styles-combined.min.css scripts-combined.min.js index-optimized.html; do
        if [ -f "$file" ]; then
            brotli -c "$file" > "${file}.br"
            echo "✅ ${file}.br 作成完了"
        fi
    done
fi

echo ""
echo "🎉 ファイル圧縮が完了しました！"

# クリーンアップ用のオプション
echo ""
echo "📝 バックアップファイルを削除しますか？ (y/N)"
read -r response
if [[ "$response" =~ ^[Yy]$ ]]; then
    rm -f *.backup
    echo "✅ バックアップファイルを削除しました"
fi