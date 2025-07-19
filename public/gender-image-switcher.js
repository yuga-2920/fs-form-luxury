// Gender Image Switcher
// 性別に応じて画像を動的に切り替える機能

const GenderImageSwitcher = {
    // 性別ごとの画像マッピング
    imageMapping: {
        // ライフスタイル・シーン画像
        lifestyleScenes: {
            'lifestyle-office-internal': {
                male: 'images/lifestyle-office-internal.webp',
                female: 'images/lifestyle-office-internal.webp' // 女性用画像がある場合は変更
            },
            'lifestyle-office-external': {
                male: 'images/lifestyle-office-external.webp',
                female: 'images/lifestyle-office-external-female.webp'
            },
            'lifestyle-office-desk': {
                male: 'images/lifestyle-office-desk.webp',
                female: 'images/lifestyle-office-desk-female.webp'
            },
            'lifestyle-hybrid': {
                male: 'images/lifestyle-hybrid.webp',
                female: 'images/lifestyle-hybrid-female.webp'
            },
            'lifestyle-remote': {
                male: 'images/lifestyle-remote.webp',
                female: 'images/lifestyle-remote-female.webp'
            },
            'lifestyle-home': {
                male: 'images/lifestyle-home.webp',
                female: 'images/lifestyle-home-female.webp'
            }
        },
        
        // ドレスコード画像
        dressCodes: {
            'dress-code-suit': {
                male: 'images/dress-code-suit.webp',
                female: 'images/dress-code-suit-required-female.webp'
            },
            'dress-code-business-casual': {
                male: 'images/dress-code-business-casual.webp',
                female: 'images/dress-code-business-casual-female.webp'
            }
        },
        
        // 背景画像
        backgrounds: {
            'fashion-store': {
                male: 'images/fashion-store-background.webp',
                female: 'images/fashion-store-background-female.webp'
            }
        }
    },
    
    // 初期化
    init: function() {
        // 性別変更を監視
        this.setupGenderListener();
        
        // 初期表示の更新
        this.updateAllImages();
    },
    
    // 性別変更リスナーの設定
    setupGenderListener: function() {
        const genderRadios = document.querySelectorAll('input[name="gender"]');
        
        genderRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                if (radio.checked) {
                    this.updateAllImages();
                }
            });
        });
    },
    
    // 現在の性別を取得
    getCurrentGender: function() {
        const femaleRadio = document.getElementById('gender-female');
        return (femaleRadio && femaleRadio.checked) ? 'female' : 'male';
    },
    
    // すべての画像を更新
    updateAllImages: function() {
        const gender = this.getCurrentGender();
        
        // ライフスタイル画像の更新
        this.updateLifestyleImages(gender);
        
        // ドレスコード画像の更新
        this.updateDressCodeImages(gender);
        
        // 背景画像の更新
        this.updateBackgroundImages(gender);
        
        // その他の画像更新
        this.updateOtherImages(gender);
        
        // コーディネーション画像の更新
        this.updateCoordinationImages(gender);
    },
    
    // コーディネーション画像の更新
    updateCoordinationImages: function(gender) {
        // form-fixes.jsの関数を呼び出す
        if (typeof updateCoordinationImages === 'function') {
            updateCoordinationImages(gender);
        }
        
        // または直接更新
        const coordinationImages = document.querySelectorAll('.coordination-image[data-coordination-type]');
        coordinationImages.forEach(img => {
            const type = img.getAttribute('data-coordination-type');
            const maleSrc = `images/coordination-${type}.webp`;
            const femaleSrc = `images/coordination-${type}-female.webp`;
            const newSrc = gender === 'female' ? femaleSrc : maleSrc;
            
            // 女性用画像の存在確認
            this.checkImageExists(newSrc).then(exists => {
                if (exists || gender === 'male') {
                    this.updateImageSrc(img, newSrc);
                } else {
                    // 女性用画像が存在しない場合は男性用を使用
                    this.updateImageSrc(img, maleSrc);
                }
            });
        });
    },
    
    // ライフスタイル画像の更新
    updateLifestyleImages: function(gender) {
        Object.entries(this.imageMapping.lifestyleScenes).forEach(([key, images]) => {
            const elements = document.querySelectorAll(`img[src*="${key}"]`);
            elements.forEach(img => {
                if (images[gender]) {
                    this.updateImageSrc(img, images[gender]);
                }
            });
        });
    },
    
    // ドレスコード画像の更新
    updateDressCodeImages: function(gender) {
        Object.entries(this.imageMapping.dressCodes).forEach(([key, images]) => {
            const elements = document.querySelectorAll(`img[src*="${key}"]`);
            elements.forEach(img => {
                if (images[gender]) {
                    this.updateImageSrc(img, images[gender]);
                }
            });
        });
    },
    
    // 背景画像の更新
    updateBackgroundImages: function(gender) {
        const backgroundStyle = document.querySelector('.background-style');
        if (backgroundStyle) {
            const fashionStore = this.imageMapping.backgrounds['fashion-store'];
            if (fashionStore[gender]) {
                backgroundStyle.style.backgroundImage = `url(${fashionStore[gender]})`;
            }
        }
    },
    
    // その他の画像更新（必要に応じて追加）
    updateOtherImages: function(gender) {
        // プレースホルダー画像の更新
        const placeholderImages = document.querySelectorAll('img[src*="placeholder"]');
        placeholderImages.forEach(img => {
            if (gender === 'female' && img.src.includes('placeholder-male')) {
                this.updateImageSrc(img, img.src.replace('placeholder-male', 'placeholder'));
            } else if (gender === 'male' && img.src.includes('placeholder.webp')) {
                // 男性用のプレースホルダーがある場合
                const malePlaceholder = img.src.replace('placeholder.webp', 'placeholder-male.webp');
                // ファイルが存在するか確認してから更新
                this.checkImageExists(malePlaceholder).then(exists => {
                    if (exists) {
                        this.updateImageSrc(img, malePlaceholder);
                    }
                });
            }
        });
        
        // alt属性に基づく画像の更新
        this.updateImagesByAlt(gender);
    },
    
    // alt属性に基づく画像の更新
    updateImagesByAlt: function(gender) {
        // 特定のalt属性を持つ画像を性別に応じて更新
        const genderSpecificAlts = {
            'ビジネスシーン': {
                male: 'scene-business',
                female: 'scene-business-female'
            },
            'プライベートシーン': {
                male: 'scene-private',
                female: 'scene-private-female'
            }
        };
        
        Object.entries(genderSpecificAlts).forEach(([alt, paths]) => {
            const images = document.querySelectorAll(`img[alt*="${alt}"]`);
            images.forEach(img => {
                const newSrc = img.src.replace(
                    gender === 'male' ? paths.female : paths.male,
                    paths[gender]
                );
                if (newSrc !== img.src) {
                    this.checkImageExists(newSrc).then(exists => {
                        if (exists) {
                            this.updateImageSrc(img, newSrc);
                        }
                    });
                }
            });
        });
    },
    
    // 画像のsrcを更新（フェード効果付き）
    updateImageSrc: function(img, newSrc) {
        if (img.src === newSrc) return;
        
        // フェード効果
        img.style.transition = 'opacity 0.3s ease';
        img.style.opacity = '0';
        
        setTimeout(() => {
            img.src = newSrc;
            img.onload = () => {
                img.style.opacity = '1';
            };
            img.onerror = () => {
                console.warn(`Failed to load image: ${newSrc}`);
                img.style.opacity = '1';
            };
        }, 300);
    },
    
    // 画像の存在確認
    checkImageExists: function(url) {
        return new Promise(resolve => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });
    },
    
    // 手動で特定の画像を更新
    updateSpecificImage: function(selector, maleImage, femaleImage) {
        const gender = this.getCurrentGender();
        const elements = document.querySelectorAll(selector);
        
        elements.forEach(img => {
            const newSrc = gender === 'male' ? maleImage : femaleImage;
            this.updateImageSrc(img, newSrc);
        });
    },
    
    // カスタム画像マッピングを追加
    addImageMapping: function(category, key, maleImage, femaleImage) {
        if (!this.imageMapping[category]) {
            this.imageMapping[category] = {};
        }
        
        this.imageMapping[category][key] = {
            male: maleImage,
            female: femaleImage
        };
    }
};

// updateFormContent関数を拡張
window.updateFormContent = function(gender) {
    // 既存の処理があれば実行
    if (window.originalUpdateFormContent) {
        window.originalUpdateFormContent(gender);
    }
    
    // 画像の更新
    GenderImageSwitcher.updateAllImages();
    
    // スタイルパターンの画像も更新
    if (typeof updatePatternDisplay === 'function') {
        const patternContainer = document.querySelector('.pattern-selections-container');
        const patternSelections = document.querySelector('.pattern-selections');
        if (patternContainer && patternSelections) {
            updatePatternDisplay(patternContainer, patternSelections);
        }
    }
};

// 既存のupdateFormContent関数を保存
if (window.updateFormContent && !window.originalUpdateFormContent) {
    window.originalUpdateFormContent = window.updateFormContent;
}

// DOMContentLoadedで初期化
document.addEventListener('DOMContentLoaded', () => {
    GenderImageSwitcher.init();
});