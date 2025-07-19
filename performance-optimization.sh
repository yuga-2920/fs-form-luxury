#!/bin/bash

# パフォーマンス最適化スクリプト
# CSS/JSファイルの結合・圧縮、画像の最適化、キャッシュ設定など

echo "🚀 パフォーマンス最適化を開始します..."

cd "$(dirname "$0")/public" || exit 1

# 1. CSS ファイルの結合
echo "📦 CSSファイルの結合中..."
cat \
    css/base.css \
    css/common.css \
    css/service-section.css \
    css/pattern-reasons.css \
    consolidated-styles.css \
    background-switcher.css \
    attractive-styles-reasons.css \
    service-horizontal-layout.css \
    style-pattern-reasons.css \
    combined-styles.css \
    > styles-combined.min.css 2>/dev/null

# 2. JavaScript ファイルの結合（順序重要）
echo "📦 JavaScriptファイルの結合中..."
cat \
    config.js \
    image-mapping.js \
    placeholder-functions.js \
    combined-scripts.js \
    form-fixes.js \
    conditional-options-fix.js \
    quantity-input-handler.js \
    local-storage-handler.js \
    file-download-handler.js \
    gender-image-manager.js \
    dress-code-gender-switch.js \
    wanted-items-input-handler.js \
    form-data-exporter.js \
    form-api-connector.js \
    image-upload-handler.js \
    google-sheets-connector.js \
    form-submission-handler.js \
    > scripts-combined.min.js 2>/dev/null

echo "✅ ファイル結合完了"

# 3. 画像の遅延読み込み用JavaScript
cat > lazy-loading.js << 'EOF'
// 画像の遅延読み込み
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        images.forEach(img => imageObserver.observe(img));
    }
});
EOF

# 4. Critical CSS抽出
cat > critical.css << 'EOF'
/* Critical CSS - Above the fold content */
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    background-color: #f8f9fa;
}

.form-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.section-header {
    margin-bottom: 2rem;
    text-align: center;
}

.section-title {
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-input, .form-textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #e1e5e9;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.2s;
}

.btn-submit {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
    width: 100%;
    margin-top: 2rem;
}
EOF

# 5. Service Worker作成
cat > sw.js << 'EOF'
const CACHE_NAME = 'fashion-form-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles-combined.min.css',
  '/scripts-combined.min.js',
  '/critical.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
EOF

# 6. .htaccess ファイル作成（Apache用）
cat > .htaccess << 'EOF'
# ブラウザキャッシュの設定
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Gzip圧縮の有効化
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE text/javascript
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/json
</IfModule>

# WebPサポートの確認
<IfModule mod_rewrite.c>
    RewriteEngine On
    
    # WebP画像の配信
    RewriteCond %{HTTP_ACCEPT} image/webp
    RewriteCond %{REQUEST_FILENAME} \.(jpe?g|png)$
    RewriteCond %{REQUEST_FILENAME}.webp -f
    RewriteRule (.+)\.(jpe?g|png)$ $1.$2.webp [T=image/webp,E=accept:1]
</IfModule>

# セキュリティヘッダー
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>
EOF

# 7. ファイルサイズ統計
echo ""
echo "📊 最適化結果:"
echo "結合CSS: $(du -h styles-combined.min.css 2>/dev/null | cut -f1 || echo '生成失敗')"
echo "結合JS: $(du -h scripts-combined.min.js 2>/dev/null | cut -f1 || echo '生成失敗')"
echo "Critical CSS: $(du -h critical.css | cut -f1)"
echo "Service Worker: $(du -h sw.js | cut -f1)"

echo ""
echo "🎉 パフォーマンス最適化が完了しました！"
echo ""
echo "📝 次のステップ:"
echo "1. index.htmlで結合されたファイルを使用するよう更新"
echo "2. 遅延読み込みの実装"
echo "3. Critical CSSのインライン化"
echo "4. Service Workerの登録"