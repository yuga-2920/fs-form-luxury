// Gender-specific Image Configuration
// 性別固有の画像設定を管理

const GenderImageConfig = {
    // 画像マッピングの詳細設定
    mappings: {
        // シーン画像
        scenes: [
            // ビジネスシーン
            {
                selector: 'img[src*="scene-internal-meeting"]',
                male: 'images/scene-internal-meeting.webp',
                female: 'images/scene-internal-meeting.webp' // 女性用がある場合は変更
            },
            {
                selector: 'img[src*="scene-external-meeting"]',
                male: 'images/scene-external-meeting.webp',
                female: 'images/scene-external-meeting.webp'
            },
            {
                selector: 'img[src*="scene-business-dining"]',
                male: 'images/scene-business-dining.webp',
                female: 'images/scene-business-dining.webp'
            },
            
            // プライベートシーン
            {
                selector: 'img[src*="scene-luxury-dining"]',
                male: 'images/scene-luxury-dining.webp',
                female: 'images/scene-luxury-dining.webp'
            },
            {
                selector: 'img[src*="scene-casual-dining"]',
                male: 'images/scene-casual-dining.webp',
                female: 'images/scene-casual-dining.webp'
            },
            {
                selector: 'img[src*="scene-shopping"]',
                male: 'images/scene-shopping.webp',
                female: 'images/scene-shopping.webp'
            },
            {
                selector: 'img[src*="scene-culture"]',
                male: 'images/scene-culture.webp',
                female: 'images/scene-culture.webp'
            },
            {
                selector: 'img[src*="scene-sports-watching"]',
                male: 'images/scene-sports-watching.webp',
                female: 'images/scene-sports-watching.webp'
            },
            {
                selector: 'img[src*="scene-golf"]',
                male: 'images/scene-golf.webp',
                female: 'images/scene-golf.webp'
            },
            {
                selector: 'img[src*="scene-fitness"]',
                male: 'images/scene-fitness.webp',
                female: 'images/scene-fitness.webp'
            },
            {
                selector: 'img[src*="scene-party"]',
                male: 'images/scene-party.webp',
                female: 'images/scene-party.webp'
            },
            {
                selector: 'img[src*="scene-ceremony"]',
                male: 'images/scene-ceremony.webp',
                female: 'images/scene-ceremony.webp'
            },
            {
                selector: 'img[src*="scene-school-event"]',
                male: 'images/scene-school-event.webp',
                female: 'images/scene-school-event.webp'
            }
        ],
        
        // アイテム画像
        items: [
            {
                selector: 'img[src*="item-suit"]',
                male: 'images/item-suit.webp',
                female: 'images/item-suit-female.webp',
                fallback: true // 女性用画像がない場合は男性用を使用
            },
            {
                selector: 'img[src*="item-jacket"]',
                male: 'images/item-jacket1.webp',
                female: 'images/item-jacket-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="item-shirt"]',
                male: 'images/item-shirt2.webp',
                female: 'images/item-blouse.webp',
                fallback: true
            },
            {
                selector: 'img[src*="item-pants"]',
                male: 'images/item-pants1.webp',
                female: 'images/item-skirt.webp',
                fallback: true
            },
            {
                selector: 'img[src*="item-shoes"]',
                male: 'images/item-shoes1.webp',
                female: 'images/item-heels.webp',
                fallback: true
            }
        ],
        
        // 避けたいアイテム画像
        avoidItems: [
            {
                selector: 'img[src*="avoid-logo"]',
                male: 'images/avoid-logo.webp',
                female: 'images/avoid-logo.webp'
            },
            {
                selector: 'img[src*="avoid-bold-print"]',
                male: 'images/avoid-bold-print.webp',
                female: 'images/avoid-bold-print.webp'
            },
            {
                selector: 'img[src*="avoid-animal-pattern"]',
                male: 'images/avoid-animal-pattern.webp',
                female: 'images/avoid-animal-pattern.webp'
            },
            {
                selector: 'img[src*="avoid-oversized"]',
                male: 'images/avoid-oversized.webp',
                female: 'images/avoid-oversized.webp'
            },
            {
                selector: 'img[src*="avoid-tight"]',
                male: 'images/avoid-tight.webp',
                female: 'images/avoid-tight.webp'
            },
            {
                selector: 'img[src*="avoid-mini-length"]',
                male: 'images/avoid-mini-length.webp',
                female: 'images/avoid-mini-length.webp'
            },
            {
                selector: 'img[src*="avoid-high-heels"]',
                male: 'images/avoid-high-heels.webp',
                female: 'images/avoid-high-heels.webp'
            }
        ],
        
        // コーディネーション画像
        coordination: [
            {
                selector: '.coordination-image[data-coordination-type="7"]',
                male: 'images/coordination-7.webp',
                female: 'images/coordination-7-female.webp',
                fallback: true
            },
            {
                selector: '.coordination-image[data-coordination-type="14"]',
                male: 'images/coordination-14.webp',
                female: 'images/coordination-14-female.webp',
                fallback: true
            }
        ],
        
        // 背景とUI要素
        ui: [
            {
                selector: '.background-style',
                male: 'images/fashion-store-background.webp',
                female: 'images/fashion-store-background-female.webp',
                type: 'background'
            },
            {
                selector: '.hero-section',
                male: 'images/hero-male.webp',
                female: 'images/hero-female.webp',
                type: 'background',
                fallback: true
            }
        ]
    },
    
    // 画像を適用
    applyGenderImages: function(gender) {
        // シーン画像
        this.applyImageSet(this.mappings.scenes, gender);
        
        // アイテム画像
        this.applyImageSet(this.mappings.items, gender);
        
        // 避けたいアイテム画像
        this.applyImageSet(this.mappings.avoidItems, gender);
        
        // コーディネーション画像
        this.applyImageSet(this.mappings.coordination, gender);
        
        // UI要素
        this.applyUIImages(this.mappings.ui, gender);
    },
    
    // 画像セットを適用
    applyImageSet: function(imageSet, gender) {
        imageSet.forEach(config => {
            const elements = document.querySelectorAll(config.selector);
            elements.forEach(element => {
                const newSrc = config[gender];
                
                if (newSrc) {
                    // fallbackオプションがtrueで、画像が存在しない場合は反対の性別の画像を使用
                    if (config.fallback) {
                        this.updateImageWithFallback(element, newSrc, config[gender === 'male' ? 'female' : 'male']);
                    } else {
                        this.updateImage(element, newSrc);
                    }
                }
            });
        });
    },
    
    // UI画像を適用
    applyUIImages: function(uiSet, gender) {
        uiSet.forEach(config => {
            const elements = document.querySelectorAll(config.selector);
            elements.forEach(element => {
                const newImage = config[gender];
                
                if (newImage) {
                    if (config.type === 'background') {
                        element.style.backgroundImage = `url(${newImage})`;
                    } else {
                        this.updateImage(element, newImage);
                    }
                }
            });
        });
    },
    
    // 画像を更新
    updateImage: function(element, src) {
        if (element.tagName === 'IMG') {
            element.style.transition = 'opacity 0.3s ease';
            element.style.opacity = '0';
            
            setTimeout(() => {
                element.src = src;
                element.onload = () => {
                    element.style.opacity = '1';
                };
            }, 300);
        }
    },
    
    // フォールバック付きで画像を更新
    updateImageWithFallback: function(element, primarySrc, fallbackSrc) {
        const img = new Image();
        img.onload = () => {
            this.updateImage(element, primarySrc);
        };
        img.onerror = () => {
            if (fallbackSrc) {
                this.updateImage(element, fallbackSrc);
            }
        };
        img.src = primarySrc;
    },
    
    // カスタムマッピングを追加
    addCustomMapping: function(category, config) {
        if (!this.mappings[category]) {
            this.mappings[category] = [];
        }
        this.mappings[category].push(config);
    },
    
    // 初期化
    init: function() {
        // 現在の性別を取得して適用
        const gender = this.getCurrentGender();
        this.applyGenderImages(gender);
        
        // GenderImageSwitcherと連携
        if (window.GenderImageSwitcher) {
            // カスタムマッピングを追加
            Object.entries(this.mappings).forEach(([category, configs]) => {
                if (category !== 'ui') {
                    configs.forEach(config => {
                        const key = config.selector.match(/\[(.*?)\]/)?.[1] || category;
                        window.GenderImageSwitcher.addImageMapping(category, key, config.male, config.female);
                    });
                }
            });
        }
    },
    
    // 現在の性別を取得
    getCurrentGender: function() {
        const femaleRadio = document.getElementById('gender-female');
        return (femaleRadio && femaleRadio.checked) ? 'female' : 'male';
    }
};

// DOMContentLoadedで初期化
document.addEventListener('DOMContentLoaded', () => {
    GenderImageConfig.init();
    
    // 性別変更時の処理
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                const gender = radio.value;
                GenderImageConfig.applyGenderImages(gender);
            }
        });
    });
});