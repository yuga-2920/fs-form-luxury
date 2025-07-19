// Gender Image Manager Module
export const GenderImageManager = {
  // 画像マッピングの定義
  imageMappings: {
    // ライフスタイル・オフィス画像
    lifestyleOffice: [
      {
        selector: 'img[src*="lifestyle-office-internal"]',
        male: 'images/lifestyle-office-internal.jpg',
        female: 'images/lifestyle-office-internal-female.jpg',
        fallback: true,
      },
      {
        selector: 'img[src*="lifestyle-office-external"]',
        male: 'images/lifestyle-office-external.jpg',
        female: 'images/lifestyle-office-external-female.jpg',
      },
      {
        selector: 'img[src*="lifestyle-office-desk"]',
        male: 'images/lifestyle-office-desk.jpg',
        female: 'images/lifestyle-office-desk-female.jpg',
      },
      {
        selector: 'img[src*="lifestyle-hybrid"]',
        male: 'images/lifestyle-hybrid.jpg',
        female: 'images/lifestyle-hybrid-female.jpg',
      },
      {
        selector: 'img[src*="lifestyle-remote"]',
        male: 'images/lifestyle-remote.jpg',
        female: 'images/lifestyle-remote-female.jpg',
      },
      {
        selector: 'img[src*="lifestyle-home"]',
        male: 'images/lifestyle-home.jpg',
        female: 'images/lifestyle-home-female.jpg',
      },
    ],

    // ビジネスシーン画像
    businessScenes: [
      {
        selector: 'img[src*="scene-internal-meeting"]',
        male: 'images/scene-internal-meeting.jpg',
        female: 'images/scene-internal-meeting-female.jpg',
        fallback: true,
      },
      {
        selector: 'img[src*="scene-external-meeting"]',
        male: 'images/scene-external-meeting.jpg',
        female: 'images/scene-external-meeting-female.jpg',
        fallback: true,
      },
      {
        selector: 'img[src*="scene-business-dining"]',
        male: 'images/scene-business-dining.jpg',
        female: 'images/scene-business-dining-female.jpg',
        fallback: true,
      },
      {
        selector: 'img[src*="scene-domestic-trip"]',
        male: 'images/scene-domestic-trip.jpg',
        female: 'images/scene-domestic-trip-female.jpg',
        fallback: true,
      },
      {
        selector: 'img[src*="scene-overseas-trip"]',
        male: 'images/scene-overseas-trip.jpg',
        female: 'images/scene-overseas-trip-female.jpg',
        fallback: true,
      },
      {
        selector: 'img[src*="scene-seminar"]',
        male: 'images/scene-seminar.jpg',
        female: 'images/scene-seminar-female.jpg',
        fallback: true,
      },
      {
        selector: 'img[src*="scene-exhibition"]',
        male: 'images/scene-exhibition.jpg',
        female: 'images/scene-exhibition-female.jpg',
        fallback: true,
      },
      {
        selector: 'img[src*="scene-site-visit"]',
        male: 'images/scene-site-visit.jpg',
        female: 'images/scene-site-visit-female.jpg',
        fallback: true,
      },
    ],

    // ドレスコード画像
    dressCodes: [
      {
        selector: 'img[src*="dress-code-suit"]',
        male: 'images/dress-code-suit.jpg',
        female: 'images/dress-code-suit-required-female.jpg',
      },
      {
        selector: 'img[src*="dress-code-business-casual"]',
        male: 'images/dress-code-business-casual.jpg',
        female: 'images/dress-code-business-casual-female.jpg',
      },
      {
        selector: 'img[src*="dress-code-flexible"]',
        male: 'images/dress-code-flexible.jpg',
        female: 'images/dress-code-flexible-female.jpg',
        fallback: true,
      },
      {
        selector: 'img[src*="dress-code-smart-casual"]',
        male: 'images/dress-code-smart-casual.jpg',
        female: 'images/dress-code-smart-casual-female.jpg',
        fallback: true,
      },
    ],

    // 避けたいアイテム画像
    avoidItems: [
      {
        selector: 'img[src*="avoid-logo"]',
        male: 'images/avoid-logo.jpg',
        female: 'images/avoid-logo.jpg',
      },
      {
        selector: 'img[src*="avoid-bold-print"]',
        male: 'images/avoid-bold-print.jpg',
        female: 'images/avoid-bold-print.jpg',
      },
      {
        selector: 'img[src*="avoid-animal-pattern"]',
        male: 'images/avoid-animal-pattern.jpg',
        female: 'images/avoid-animal-pattern.jpg',
      },
      {
        selector: 'img[src*="avoid-oversized"]',
        male: 'images/avoid-oversized.jpg',
        female: 'images/avoid-oversized.jpg',
      },
      {
        selector: 'img[src*="avoid-tight"]',
        male: 'images/avoid-tight.jpg',
        female: 'images/avoid-tight.jpg',
      },
    ],

    // プライベートシーン画像
    privateScenes: [
      {
        selector: 'img[src*="scene-luxury-dining"]',
        male: 'images/scene-luxury-dining.jpg',
        female: 'images/scene-luxury-dining-female.jpg',
        fallback: true,
      },
      {
        selector: 'img[src*="scene-casual-dining"]',
        male: 'images/scene-casual-dining.jpg',
        female: 'images/scene-casual-dining-female.jpg',
        fallback: true,
      },
      {
        selector: 'img[src*="scene-shopping"]',
        male: 'images/scene-shopping.jpg',
        female: 'images/scene-shopping-female.jpg',
        fallback: true,
      },
      {
        selector: 'img[src*="scene-party"]',
        male: 'images/scene-party.jpg',
        female: 'images/scene-party-female.jpg',
        fallback: true,
      },
      {
        selector: 'img[src*="scene-fitness"]',
        male: 'images/scene-fitness.jpg',
        female: 'images/scene-fitness-female.jpg',
        fallback: true,
      },
    ],

    // 週末活動画像
    weekendActivities: [
      {
        selector: 'img[src*="weekend-business"]',
        male: 'images/weekend-business.jpg',
        female: 'images/weekend-business-female.jpg',
        fallback: true,
      },
      {
        selector: 'img[src*="weekend-dining"]',
        male: 'images/weekend-dining.jpg',
        female: 'images/weekend-dining-female.jpg',
        fallback: true,
      },
      {
        selector: 'img[src*="weekend-date"]',
        male: 'images/weekend-date.jpg',
        female: 'images/weekend-date-female.jpg',
        fallback: true,
      },
      {
        selector: 'img[src*="weekend-family"]',
        male: 'images/weekend-family.jpg',
        female: 'images/weekend-family-female.jpg',
        fallback: true,
      },
      {
        selector: 'img[src*="weekend-sports"]',
        male: 'images/weekend-sports.jpg',
        female: 'images/weekend-sports-female.jpg',
        fallback: true,
      },
    ],

    // 背景とUI要素
    backgrounds: [
      {
        selector: '.background-style',
        male: 'images/fashion-store-background.jpg',
        female: 'images/fashion-store-background-female.jpg',
        type: 'background',
      },
      {
        selector: '.hero-section',
        male: 'images/hero-male.jpg',
        female: 'images/hero-female.jpg',
        type: 'background',
        fallback: true,
      },
    ],

    // スタイルパターン画像
    stylePatterns: [
      {
        selector: 'img[src*="style-male"]',
        male: 'self',
        female: function (src) {
          return src.replace('style-male', 'style-female');
        },
        dynamic: true,
      },
      {
        selector: 'img[src*="style-female"]',
        male: function (src) {
          return src.replace('style-female', 'style-male');
        },
        female: 'self',
        dynamic: true,
      },
    ],
  },

  // 初期化
  init: function () {
    this.setupGenderListener();
    this.updateAllImages();
  },

  // 性別変更リスナーの設定
  setupGenderListener: function () {
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
  getCurrentGender: function () {
    const femaleRadio = document.getElementById('gender-female');
    return femaleRadio && femaleRadio.checked ? 'female' : 'male';
  },

  // すべての画像を更新
  updateAllImages: function () {
    const gender = this.getCurrentGender();

    // すべてのカテゴリーを処理
    Object.entries(this.imageMappings).forEach(([category, mappings]) => {
      this.updateImageCategory(mappings, gender);
    });

    // カスタム更新関数を呼び出し
    this.updateCustomImages(gender);
  },

  // カテゴリー別の画像更新
  updateImageCategory: function (mappings, gender) {
    mappings.forEach(config => {
      const elements = document.querySelectorAll(config.selector);
      elements.forEach(element => {
        this.updateElement(element, config, gender);
      });
    });
  },

  // 要素の更新
  updateElement: function (element, config, gender) {
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
  updateImageSrc: function (img, newSrc, config, gender) {
    if (!newSrc) return;

    // URLを正規化して比較
    const currentSrc = img.src.split('/').pop();
    const newSrcFile = newSrc.split('/').pop();
    if (currentSrc === newSrcFile) return;

    if (config.fallback) {
      this.updateWithFallback(img, newSrc, config[gender === 'male' ? 'female' : 'male']);
    } else {
      this.applyImageUpdate(img, newSrc);
    }
  },

  // 背景画像の更新
  updateBackgroundImage: function (element, newSrc, config, gender) {
    if (!newSrc) return;

    const updateBg = src => {
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
  updateWithFallback: function (img, primarySrc, fallbackSrc) {
    this.checkImageExists(primarySrc).then(exists => {
      this.applyImageUpdate(img, exists ? primarySrc : fallbackSrc);
    });
  },

  // 画像更新の適用
  applyImageUpdate: function (img, src) {
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
  checkImageExists: function (url) {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  },

  // カスタム画像更新
  updateCustomImages: function (gender) {
    // form-fixes.jsのcoordination画像更新関数を呼び出し
    if (typeof window.updateCoordinationImages === 'function') {
      window.updateCoordinationImages(gender);
    }

    // スタイルパターン更新
    if (typeof window.updatePatternDisplay === 'function') {
      const patternContainer = document.querySelector('.pattern-selections-container');
      const patternSelections = document.querySelector('.pattern-selections');
      if (patternContainer && patternSelections) {
        window.updatePatternDisplay(patternContainer, patternSelections);
      }
    }
  },

  // カスタムマッピングを追加
  addCustomMapping: function (category, config) {
    if (!this.imageMappings[category]) {
      this.imageMappings[category] = [];
    }
    this.imageMappings[category].push(config);
  },

  // 特定の画像を手動更新
  updateSpecificImage: function (selector, maleImage, femaleImage) {
    const gender = this.getCurrentGender();
    const elements = document.querySelectorAll(selector);

    elements.forEach(img => {
      const newSrc = gender === 'male' ? maleImage : femaleImage;
      this.applyImageUpdate(img, newSrc);
    });
  },
};
