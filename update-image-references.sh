#!/bin/bash

# 画像参照更新スクリプト
# HTML、CSS、JSファイル内の画像参照を.webpに更新

echo "📝 画像参照の更新を開始します..."

# public ディレクトリに移動
cd "$(dirname "$0")/public" || exit 1

# 更新対象のファイルタイプ
file_types=("*.html" "*.css" "*.js")

# 各ファイルタイプを処理
for pattern in "${file_types[@]}"; do
    echo "🔍 $pattern ファイルを処理中..."
    
    # 該当するファイルを検索
    find . -name "$pattern" -type f | while read -r file; do
        # 一時ファイルを作成
        temp_file="${file}.tmp"
        
        # 画像参照を更新
        # .jpg → .webp
        # .jpeg → .webp
        # .png → .webp
        sed -e 's/\.jpg/\.webp/g' \
            -e 's/\.jpeg/\.webp/g' \
            -e 's/\.png/\.webp/g' \
            "$file" > "$temp_file"
        
        # 変更があった場合のみファイルを置き換え
        if ! cmp -s "$file" "$temp_file"; then
            mv "$temp_file" "$file"
            echo "✅ 更新: $file"
        else
            rm "$temp_file"
        fi
    done
done

echo ""
echo "🎉 画像参照の更新が完了しました！"

# 更新された参照をカウント
echo ""
echo "📊 更新統計:"
echo "HTMLファイル内のwebp参照: $(grep -r "\.webp" --include="*.html" . | wc -l)"
echo "CSSファイル内のwebp参照: $(grep -r "\.webp" --include="*.css" . | wc -l)"
echo "JSファイル内のwebp参照: $(grep -r "\.webp" --include="*.js" . | wc -l)"