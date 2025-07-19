// Gender Image Manager - 統合版
// 性別に応じた画像の切り替えを一元管理

const GenderImageManager = {
    // 全画像マッピングの定義
    imageMappings: {
        // ライフスタイル・オフィス画像
        lifestyleOffice: [
            {
                selector: 'img[src*="lifestyle-office-internal"]',
                male: 'images/lifestyle-office-internal.webp',
                female: 'images/lifestyle-office-internal-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="lifestyle-office-external"]',
                male: 'images/lifestyle-office-external.webp',
                female: 'images/lifestyle-office-external-female.webp'
            },
            {
                selector: 'img[src*="lifestyle-office-desk"]',
                male: 'images/lifestyle-office-desk.webp',
                female: 'images/lifestyle-office-desk-female.webp'
            },
            {
                selector: 'img[src*="lifestyle-hybrid"]',
                male: 'images/lifestyle-hybrid.webp',
                female: 'images/lifestyle-hybrid-female.webp'
            },
            {
                selector: 'img[src*="lifestyle-remote"]',
                male: 'images/lifestyle-remote.webp',
                female: 'images/lifestyle-remote-female.webp'
            },
            {
                selector: 'img[src*="lifestyle-home"]',
                male: 'images/lifestyle-home.webp',
                female: 'images/lifestyle-home-female.webp'
            }
        ],

        // ビジネスシーン画像
        businessScenes: [
            {
                selector: 'img[src*="scene-internal-meeting"]',
                male: 'images/scene-internal-meeting.webp',
                female: 'images/scene-internal-meeting-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="scene-external-meeting"]',
                male: 'images/scene-external-meeting.webp',
                female: 'images/scene-external-meeting-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="scene-business-dining"]',
                male: 'images/scene-business-dining.webp',
                female: 'images/scene-business-dining-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="scene-domestic-trip"]',
                male: 'images/scene-domestic-trip.webp',
                female: 'images/scene-domestic-trip-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="scene-overseas-trip"]',
                male: 'images/scene-overseas-trip.webp',
                female: 'images/scene-overseas-trip-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="scene-seminar"]',
                male: 'images/scene-seminar.webp',
                female: 'images/scene-seminar-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="scene-exhibition"]',
                male: 'images/scene-exhibition.webp',
                female: 'images/scene-exhibition-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="scene-site-visit"]',
                male: 'images/scene-site-visit.webp',
                female: 'images/scene-site-visit-female.webp',
                fallback: true
            }
        ],

        // プライベートシーン画像
        privateScenes: [
            {
                selector: 'img[src*="scene-luxury-dining"]',
                male: 'images/scene-luxury-dining.webp',
                female: 'images/scene-luxury-dining-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="scene-casual-dining"]',
                male: 'images/scene-casual-dining.webp',
                female: 'images/scene-casual-dining-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="scene-shopping"]',
                male: 'images/scene-shopping.webp',
                female: 'images/scene-shopping-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="scene-culture"]',
                male: 'images/scene-culture.webp',
                female: 'images/scene-culture-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="scene-sports-watching"]',
                male: 'images/scene-sports-watching.webp',
                female: 'images/scene-sports-watching-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="scene-golf"]',
                male: 'images/scene-golf.webp',
                female: 'images/scene-golf-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="scene-fitness"]',
                male: 'images/scene-fitness.webp',
                female: 'images/scene-fitness-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="scene-party"]',
                male: 'images/scene-party.webp',
                female: 'images/scene-party-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="scene-ceremony"]',
                male: 'images/scene-ceremony.webp',
                female: 'images/scene-ceremony-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="scene-school-event"]',
                male: 'images/scene-school-event.webp',
                female: 'images/scene-school-event-female.webp',
                fallback: true
            }
        ],

        // ドレスコード画像
        dressCodes: [
            {
                selector: 'img[src*="dress-code-suit"]',
                male: 'images/dress-code-suit.webp',
                female: 'images/dress-code-suit-required-female.webp'
            },
            {
                selector: 'img[src*="dress-code-business-casual"]',
                male: 'images/dress-code-business-casual.webp',
                female: 'images/dress-code-business-casual-female.webp'
            },
            {
                selector: 'img[src*="dress-code-flexible"]',
                male: 'images/dress-code-flexible.webp',
                female: 'images/dress-code-flexible-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="dress-code-smart-casual"]',
                male: 'images/dress-code-smart-casual.webp',
                female: 'images/dress-code-smart-casual-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="dress-code-casual"]',
                male: 'images/dress-code-casual.webp',
                female: 'images/dress-code-casual-female.webp',
                fallback: true
            }
        ],

        // 週末活動画像
        weekendActivities: [
            {
                selector: 'img[src*="weekend-business"]',
                male: 'images/weekend-business.webp',
                female: 'images/weekend-business-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="weekend-dining"]',
                male: 'images/weekend-dining.webp',
                female: 'images/weekend-dining-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="weekend-date"]',
                male: 'images/weekend-date.webp',
                female: 'images/weekend-date-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="weekend-family"]',
                male: 'images/weekend-family.webp',
                female: 'images/weekend-family-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="weekend-sports"]',
                male: 'images/weekend-sports.webp',
                female: 'images/weekend-sports-female.webp',
                fallback: true
            }
        ],

        // アイテム画像
        items: [
            {
                selector: 'img[src*="item-suit"]',
                male: 'images/item-suit.webp',
                female: 'images/item-suit-female.webp',
                fallback: true
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
            },
            {
                selector: 'img[src*="item-bag"]',
                male: 'images/item-bag1.webp',
                female: 'images/item-bag-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="item-accessories"]',
                male: 'images/item-accessories.webp',
                female: 'images/item-accessories-female.webp',
                fallback: true
            }
        ],

        // アイテムごとの予算感の画像
        clothingItems: [
            {
                selector: 'img[src*="item-tshirt"]',
                male: 'images/item-tshirt.webp',
                female: 'images/item-tshirt-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="shirt1"]',
                male: 'images/shirt1.webp',
                female: 'images/shirt1-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="item-knit"]',
                male: 'images/item-knit.webp',
                female: 'images/item-knit-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="item-jacket1"]',
                male: 'images/item-jacket1.webp',
                female: 'images/item-jacket1-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="item-jacket2"]',
                male: 'images/item-jacket2.webp',
                female: 'images/item-jacket2-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="item-pants1"]',
                male: 'images/item-pants1.webp',
                female: 'images/item-pants1-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="item-pants2"]',
                male: 'images/item-pants2.webp',
                female: 'images/item-pants2-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="item-shoes1"]',
                male: 'images/item-shoes1.webp',
                female: 'images/item-shoes1-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="item-shoes2"]',
                male: 'images/item-shoes2.webp',
                female: 'images/item-shoes2-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="item-underwear"]',
                male: 'images/item-underwear.webp',
                female: 'images/item-underwear.webp',
                fallback: true
            },
            {
                selector: 'img[src*="item-hat"]',
                male: 'images/item-hat.webp',
                female: 'images/item-hat.webp',
                fallback: true
            },
            {
                selector: 'img[src*="item-glasses"]',
                male: 'images/item-glasses.webp',
                female: 'images/item-glasses.webp',
                fallback: true
            },
            {
                selector: 'img[src*="item-watch"]',
                male: 'images/item-watch.webp',
                female: 'images/item-watch-female.webp',
                fallback: true
            }
        ],

        // 避けたいアイテム画像
        avoidItems: [
            {
                selector: 'img[src*="avoid-logo"]',
                male: 'images/avoid-logo.webp',
                female: 'images/avoid-logo-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="avoid-bold-print"]',
                male: 'images/avoid-bold-print.webp',
                female: 'images/avoid-bold-print-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="avoid-animal-pattern"]',
                male: 'images/avoid-animal-pattern.webp',
                female: 'images/avoid-animal-pattern-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="avoid-oversized"]',
                male: 'images/avoid-oversized.webp',
                female: 'images/avoid-oversized-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="avoid-tight"]',
                male: 'images/avoid-tight.webp',
                female: 'images/avoid-tight-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="avoid-mini-length"]',
                male: 'images/avoid-mini-length.webp',
                female: 'images/avoid-mini-length-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="avoid-high-heels"]',
                male: 'images/avoid-high-heels.webp',
                female: 'images/avoid-high-heels-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="avoid-bright-color"]',
                male: 'images/avoid-bright-color.webp',
                female: 'images/avoid-bright-color-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="avoid-complex-pattern"]',
                male: 'images/avoid-complex-pattern.webp',
                female: 'images/avoid-complex-pattern-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="avoid-excessive-exposure"]',
                male: 'images/avoid-excessive-exposure.webp',
                female: 'images/avoid-excessive-exposure-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="avoid-flashy-decoration"]',
                male: 'images/avoid-flashy-decoration.webp',
                female: 'images/avoid-flashy-decoration-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="avoid-frills-lace"]',
                male: 'images/avoid-frills-lace.webp',
                female: 'images/avoid-frills-lace-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="avoid-rough-texture"]',
                male: 'images/avoid-rough-texture.webp',
                female: 'images/avoid-rough-texture-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="avoid-sporty-casual"]',
                male: 'images/avoid-sporty-casual.webp',
                female: 'images/avoid-sporty-casual.webp',
                fallback: true
            },
            {
                selector: 'img[src*="avoid-synthetic"]',
                male: 'images/avoid-synthetic.webp',
                female: 'images/avoid-synthetic-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="avoid-thin-material"]',
                male: 'images/avoid-thin-material.webp',
                female: 'images/avoid-thin-material-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="avoid-other"]',
                male: 'images/avoid-other.webp',
                female: 'images/avoid-other-female.webp',
                fallback: true
            }
        ],

        // スタイルパターン画像
        stylePatterns: [
            {
                selector: 'img[src*="style-male"]',
                male: 'self', // 元のパスを維持
                female: function(src) {
                    return src.replace('style-male', 'style-female');
                },
                dynamic: true
            },
            {
                selector: 'img[src*="style-female"]',
                male: function(src) {
                    return src.replace('style-female', 'style-male');
                },
                female: 'self',
                dynamic: true
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
        backgrounds: [
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
        ],

        // プレースホルダー画像
        placeholders: [
            {
                selector: 'img[src*="placeholder"]',
                male: 'images/placeholder-male.webp',
                female: 'images/placeholder.webp',
                fallback: true
            }
        ],

        // 旅行画像
        travelImages: [
            {
                selector: 'img[src*="travel-domestic-city"]',
                male: 'images/travel-domestic-city.webp',
                female: 'images/travel-domestic-city-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="travel-domestic-resort"]',
                male: 'images/travel-domestic-resort.webp',
                female: 'images/travel-domestic-resort-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="travel-hot-springs"]',
                male: 'images/travel-hot-springs.webp',
                female: 'images/travel-hot-springs-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="travel-outdoor"]',
                male: 'images/travel-outdoor.webp',
                female: 'images/travel-outdoor-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="travel-overseas-asia"]',
                male: 'images/travel-overseas-asia.webp',
                female: 'images/travel-overseas-asia-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="travel-overseas-western"]',
                male: 'images/travel-overseas-western.webp',
                female: 'images/travel-overseas-western-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="travel-overseas-resort"]',
                male: 'images/travel-overseas-resort.webp',
                female: 'images/travel-overseas-resort-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="travel-dest-france"]',
                male: 'images/travel-dest-france.webp',
                female: 'images/travel-dest-france-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="travel-dest-italy"]',
                male: 'images/travel-dest-italy.webp',
                female: 'images/travel-dest-italy-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="travel-dest-spain"]',
                male: 'images/travel-dest-spain.webp',
                female: 'images/travel-dest-spain-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="travel-dest-germany"]',
                male: 'images/travel-dest-germany.webp',
                female: 'images/travel-dest-germany-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="travel-dest-dubai"]',
                male: 'images/travel-dest-dubai.webp',
                female: 'images/travel-dest-dubai-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="travel-dest-korea"]',
                male: 'images/travel-dest-korea.webp',
                female: 'images/travel-dest-korea-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="travel-dest-thailand"]',
                male: 'images/travel-dest-thailand.webp',
                female: 'images/travel-dest-thailand-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="travel-dest-malaysia"]',
                male: 'images/travel-dest-malaysia.webp',
                female: 'images/travel-dest-malaysia-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="travel-dest-other-asia"]',
                male: 'images/travel-dest-other-asia.webp',
                female: 'images/travel-dest-other-asia-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="travel-other"]',
                male: 'images/travel-other.webp',
                female: 'images/travel-other-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="travel-overseas-hawaii"]',
                male: 'images/travel-overseas-hawaii.webp',
                female: 'images/travel-overseas-hawaii-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="travel-overseas-other"]',
                male: 'images/travel-overseas-other.webp',
                female: 'images/travel-overseas-other-female.webp',
                fallback: true
            }
        ],

        // サービス画像
        serviceImages: [
            {
                selector: 'img[src*="service-app"]',
                male: 'images/service-app.webp',
                female: 'images/service-app-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="service-expectations"]',
                male: 'images/service-expectations.webp',
                female: 'images/service-expectations-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="service-gift"]',
                male: 'images/service-gift.webp',
                female: 'images/service-gift-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="service-partner"]',
                male: 'images/service-partner.webp',
                female: 'images/service-partner-female.webp',
                fallback: true
            },
            {
                selector: 'img[src*="service-transport"]',
                male: 'images/service-transport.webp',
                female: 'images/service-transport-female.webp',
                fallback: true
            }
        ],

        // その他のライフスタイル画像
        otherImages: [
            {
                selector: 'img[src*="lifestyle-other"]',
                male: 'images/lifestyle-other.webp',
                female: 'images/lifestyle-other-female.webp',
                fallback: true
            },
            {
                selector: 'img[src="images/hat.webp"]',
                male: 'images/hat.webp',
                female: 'images/hat-female.webp',
                fallback: true
            }
        ]
    },

    // 初期化
    init: function() {
        console.log('[GenderImageManager] Initializing...');
        this.setupGenderListener();
        this.updateAllImages();
        console.log('[GenderImageManager] Initialization complete');
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
        console.log(`[GenderImageManager] Updating all images for gender: ${gender}`);

        // すべてのカテゴリーを処理
        Object.entries(this.imageMappings).forEach(([category, mappings]) => {
            console.log(`[GenderImageManager] Updating category: ${category} with ${mappings.length} mappings`);
            this.updateImageCategory(mappings, gender);
        });

        // カスタム更新関数を呼び出し
        this.updateCustomImages(gender);
    },

    // カテゴリー別の画像更新
    updateImageCategory: function(mappings, gender) {
        mappings.forEach(config => {
            const elements = document.querySelectorAll(config.selector);
            elements.forEach(element => {
                this.updateElement(element, config, gender);
            });
        });
    },

    // 要素の更新
    updateElement: function(element, config, gender) {
        let newSrc = config[gender];

        // 動的な画像パスの処理
        if (config.dynamic) {
            if (newSrc === 'self') {
                return; // 現在のパスを維持
            } else if (typeof newSrc === 'function') {
                newSrc = newSrc(element.src || element.style.backgroundImage);
            }
        }

        // 背景画像の処理
        if (config.type === 'background') {
            this.updateBackgroundImage(element, newSrc, config, gender);
        } else {
            this.updateImageSrc(element, newSrc, config, gender);
        }
    },

    // 画像srcの更新
    updateImageSrc: function(img, newSrc, config, gender) {
        if (!newSrc || img.src === newSrc) return;

        if (config.fallback) {
            this.updateWithFallback(img, newSrc, config[gender === 'male' ? 'female' : 'male']);
        } else {
            this.applyImageUpdate(img, newSrc);
        }
    },

    // 背景画像の更新
    updateBackgroundImage: function(element, newSrc, config, gender) {
        if (!newSrc) return;

        const updateBg = (src) => {
            element.style.transition = 'opacity 0.3s ease';
            element.style.opacity = '0';
            setTimeout(() => {
                element.style.backgroundImage = `url(${src})`;
                element.style.opacity = '1';
            }, 300);
        };

        if (config.fallback) {
            this.checkImageExists(newSrc).then(exists => {
                updateBg(exists ? newSrc : config[gender === 'male' ? 'female' : 'male']);
            });
        } else {
            updateBg(newSrc);
        }
    },

    // フォールバック付き更新
    updateWithFallback: function(img, primarySrc, fallbackSrc) {
        this.checkImageExists(primarySrc).then(exists => {
            this.applyImageUpdate(img, exists ? primarySrc : fallbackSrc);
        });
    },

    // 画像更新の適用
    applyImageUpdate: function(img, src) {
        img.style.transition = 'opacity 0.3s ease';
        img.style.opacity = '0';

        setTimeout(() => {
            img.src = src;
            img.onload = () => {
                img.style.opacity = '1';
            };
            img.onerror = () => {
                console.warn(`Failed to load image: ${src}`);
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

    // カスタム画像更新
    updateCustomImages: function(gender) {
        // form-fixes.jsのcoordination画像更新関数を呼び出し
        if (typeof updateCoordinationImages === 'function') {
            updateCoordinationImages(gender);
        }

        // スタイルパターン更新
        if (typeof updatePatternDisplay === 'function') {
            const patternContainer = document.querySelector('.pattern-selections-container');
            const patternSelections = document.querySelector('.pattern-selections');
            if (patternContainer && patternSelections) {
                updatePatternDisplay(patternContainer, patternSelections);
            }
        }
    },

    // カスタムマッピングを追加
    addCustomMapping: function(category, config) {
        if (!this.imageMappings[category]) {
            this.imageMappings[category] = [];
        }
        this.imageMappings[category].push(config);
    },

    // 特定の画像を手動更新
    updateSpecificImage: function(selector, maleImage, femaleImage) {
        const gender = this.getCurrentGender();
        const elements = document.querySelectorAll(selector);

        elements.forEach(img => {
            const newSrc = gender === 'male' ? maleImage : femaleImage;
            this.applyImageUpdate(img, newSrc);
        });
    }
};

// 既存のupdateFormContent関数を保存
if (window.updateFormContent && !window.originalUpdateFormContent) {
    window.originalUpdateFormContent = window.updateFormContent;
}

// updateFormContent関数を拡張
window.updateFormContent = function(gender) {
    if (window.originalUpdateFormContent) {
        window.originalUpdateFormContent(gender);
    }
    GenderImageManager.updateAllImages();
};

// グローバルアクセス用
window.GenderImageManager = GenderImageManager;

// DOMContentLoadedで初期化
document.addEventListener('DOMContentLoaded', () => {
    GenderImageManager.init();
});