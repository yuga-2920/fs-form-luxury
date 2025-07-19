// Resource Hints and Performance Optimization
// リソースのプリロードとパフォーマンス最適化

const ResourceOptimizer = {
    // 画像の遅延読み込み
    initLazyLoading: function() {
        if ('IntersectionObserver' in window) {
            const images = document.querySelectorAll('img[data-src]');
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        img.classList.add('fade-in');
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px' // 50px手前で読み込み開始
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // Intersection Observer未サポートの場合はフォールバック
            const images = document.querySelectorAll('img[data-src]');
            images.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }
    },

    // WebP対応確認と画像最適化
    optimizeImages: function() {
        // WebP対応確認
        const supportsWebP = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = 1;
            return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        };

        if (supportsWebP()) {
            // WebP対応ブラウザの場合、画像をWebPに置換
            const images = document.querySelectorAll('img[src$=".jpg"], img[src$=".jpeg"], img[src$=".png"]');
            images.forEach(img => {
                const webpSrc = img.src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
                img.src = webpSrc;
            });
        }
    },

    // リソースのプリロード
    preloadCriticalResources: function() {
        const criticalResources = [
            { href: 'styles-combined.min.css', as: 'style' },
            { href: 'scripts-combined.min.js', as: 'script' }
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource.href;
            link.as = resource.as;
            document.head.appendChild(link);
        });
    },

    // フォントの最適化
    optimizeFonts: function() {
        // フォントの遅延読み込み
        const fontLink = document.querySelector('link[href*="fonts.googleapis.com"]');
        if (fontLink) {
            fontLink.media = 'print';
            fontLink.onload = function() {
                this.media = 'all';
            };
        }
    },

    // パフォーマンスメトリクスの計測
    measurePerformance: function() {
        if ('performance' in window && 'PerformanceObserver' in window) {
            // Largest Contentful Paint (LCP) の計測
            new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    console.log('LCP:', entry.startTime);
                }
            }).observe({ entryTypes: ['largest-contentful-paint'] });

            // First Input Delay (FID) の計測
            new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    console.log('FID:', entry.processingStart - entry.startTime);
                }
            }).observe({ entryTypes: ['first-input'] });

            // Cumulative Layout Shift (CLS) の計測
            new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    if (!entry.hadRecentInput) {
                        console.log('CLS:', entry.value);
                    }
                }
            }).observe({ entryTypes: ['layout-shift'] });
        }
    },

    // 初期化
    init: function() {
        // DOMContentLoadedで実行
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initLazyLoading();
                this.optimizeImages();
                this.optimizeFonts();
                this.measurePerformance();
            });
        } else {
            this.initLazyLoading();
            this.optimizeImages();
            this.optimizeFonts();
            this.measurePerformance();
        }

        // ページロード完了後に追加の最適化
        window.addEventListener('load', () => {
            this.preloadCriticalResources();
        });
    }
};

// 自動初期化
ResourceOptimizer.init();