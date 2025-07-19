import { describe, it, expect, beforeEach, vi } from 'vitest';
import { GenderImageManager } from '../genderImageManager';

describe('GenderImageManager', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });

  describe('imageMappings', () => {
    it('画像マッピングの構造が定義されている', () => {
      expect(GenderImageManager.imageMappings).toBeDefined();
      expect(GenderImageManager.imageMappings.lifestyleOffice).toBeDefined();
      expect(GenderImageManager.imageMappings.businessScenes).toBeDefined();
      expect(GenderImageManager.imageMappings.dressCodes).toBeDefined();
      expect(GenderImageManager.imageMappings.avoidItems).toBeDefined();
    });

    it('各マッピングに必要なプロパティが含まれている', () => {
      const firstOfficeMapping = GenderImageManager.imageMappings.lifestyleOffice[0];
      expect(firstOfficeMapping).toHaveProperty('selector');
      expect(firstOfficeMapping).toHaveProperty('male');
      expect(firstOfficeMapping).toHaveProperty('female');
    });
  });

  describe('init', () => {
    it('初期化時にリスナー設定と画像更新が実行される', () => {
      const setupListenerSpy = vi.spyOn(GenderImageManager, 'setupGenderListener');
      const updateAllSpy = vi.spyOn(GenderImageManager, 'updateAllImages');

      GenderImageManager.init();

      expect(setupListenerSpy).toHaveBeenCalled();
      expect(updateAllSpy).toHaveBeenCalled();
    });
  });

  describe('setupGenderListener', () => {
    it('性別ラジオボタンにイベントリスナーが設定される', () => {
      document.body.innerHTML = `
        <input type="radio" name="gender" value="male" id="gender-male" checked>
        <input type="radio" name="gender" value="female" id="gender-female">
      `;

      const updateAllSpy = vi
        .spyOn(GenderImageManager, 'updateAllImages')
        .mockImplementation(() => {});

      GenderImageManager.setupGenderListener();

      const femaleRadio = document.getElementById('gender-female');
      femaleRadio.checked = true;
      femaleRadio.dispatchEvent(new Event('change'));

      expect(updateAllSpy).toHaveBeenCalled();
    });
  });

  describe('getCurrentGender', () => {
    it('男性が選択されている場合はmaleを返す', () => {
      document.body.innerHTML = `
        <input type="radio" name="gender" value="male" id="gender-male" checked>
        <input type="radio" name="gender" value="female" id="gender-female">
      `;

      expect(GenderImageManager.getCurrentGender()).toBe('male');
    });

    it('女性が選択されている場合はfemaleを返す', () => {
      document.body.innerHTML = `
        <input type="radio" name="gender" value="male" id="gender-male">
        <input type="radio" name="gender" value="female" id="gender-female" checked>
      `;

      expect(GenderImageManager.getCurrentGender()).toBe('female');
    });

    it('性別ラジオボタンが存在しない場合はデフォルトでmaleを返す', () => {
      expect(GenderImageManager.getCurrentGender()).toBe('male');
    });
  });

  describe('updateAllImages', () => {
    it('すべてのカテゴリーの画像が更新される', () => {
      const updateCategorySpy = vi
        .spyOn(GenderImageManager, 'updateImageCategory')
        .mockImplementation(() => {});
      const updateCustomSpy = vi
        .spyOn(GenderImageManager, 'updateCustomImages')
        .mockImplementation(() => {});

      GenderImageManager.updateAllImages();

      // 各カテゴリーに対してupdateImageCategoryが呼ばれることを確認
      const categories = Object.keys(GenderImageManager.imageMappings);
      expect(updateCategorySpy).toHaveBeenCalledTimes(categories.length);
      expect(updateCustomSpy).toHaveBeenCalled();
    });
  });

  describe('updateElement', () => {
    it('通常の画像srcが更新される', () => {
      const img = document.createElement('img');
      img.src = 'images/test-male.jpg';

      const config = {
        selector: 'img',
        male: 'images/test-male.jpg',
        female: 'images/test-female.jpg',
      };

      const updateImageSrcSpy = vi
        .spyOn(GenderImageManager, 'updateImageSrc')
        .mockImplementation(() => {});

      GenderImageManager.updateElement(img, config, 'female');

      expect(updateImageSrcSpy).toHaveBeenCalledWith(
        img,
        'images/test-female.jpg',
        config,
        'female'
      );
    });

    it('背景画像が更新される', () => {
      const div = document.createElement('div');

      const config = {
        selector: '.background',
        male: 'images/bg-male.jpg',
        female: 'images/bg-female.jpg',
        type: 'background',
      };

      const updateBgSpy = vi
        .spyOn(GenderImageManager, 'updateBackgroundImage')
        .mockImplementation(() => {});

      GenderImageManager.updateElement(div, config, 'female');

      expect(updateBgSpy).toHaveBeenCalledWith(div, 'images/bg-female.jpg', config, 'female');
    });

    it('動的パスの場合は関数が実行される', () => {
      const img = document.createElement('img');
      img.src = 'images/style-male-minimal-1.jpg';

      const dynamicFunction = vi.fn().mockReturnValue('images/style-female-minimal-1.jpg');
      const config = {
        selector: 'img',
        male: 'self',
        female: dynamicFunction,
        dynamic: true,
      };

      const updateImageSrcSpy = vi
        .spyOn(GenderImageManager, 'updateImageSrc')
        .mockImplementation(() => {});

      GenderImageManager.updateElement(img, config, 'female');

      expect(dynamicFunction).toHaveBeenCalledWith(img.src);
      expect(updateImageSrcSpy).toHaveBeenCalledWith(
        img,
        'images/style-female-minimal-1.jpg',
        config,
        'female'
      );
    });
  });

  describe('applyImageUpdate', () => {
    it('画像の更新時にフェード効果が適用される', () => {
      vi.useFakeTimers();

      const img = document.createElement('img');
      img.src = 'images/old.jpg';

      const onloadSpy = vi.fn();
      Object.defineProperty(img, 'onload', {
        set: function (handler) {
          onloadSpy.mockImplementation(handler);
        },
      });

      GenderImageManager.applyImageUpdate(img, 'images/new.jpg');

      expect(img.style.transition).toBe('opacity 0.3s ease');
      expect(img.style.opacity).toBe('0');

      vi.advanceTimersByTime(300);

      expect(img.src).toContain('images/new.jpg');

      // onloadを手動で呼び出し
      onloadSpy();
      expect(img.style.opacity).toBe('1');

      vi.useRealTimers();
    });
  });

  describe('checkImageExists', () => {
    it('画像が存在する場合はtrueを返す', async () => {
      const mockImage = {
        src: '',
        onload: null,
        onerror: null,
      };

      vi.spyOn(window, 'Image').mockImplementation(() => mockImage);

      const promise = GenderImageManager.checkImageExists('images/test.jpg');

      // onloadを呼び出し
      mockImage.onload();

      const result = await promise;
      expect(result).toBe(true);
    });

    it('画像が存在しない場合はfalseを返す', async () => {
      const mockImage = {
        src: '',
        onload: null,
        onerror: null,
      };

      vi.spyOn(window, 'Image').mockImplementation(() => mockImage);

      const promise = GenderImageManager.checkImageExists('images/not-found.jpg');

      // onerrorを呼び出し
      mockImage.onerror();

      const result = await promise;
      expect(result).toBe(false);
    });
  });

  describe('updateWithFallback', () => {
    it('画像が存在する場合はプライマリ画像を使用', async () => {
      const img = document.createElement('img');

      vi.spyOn(GenderImageManager, 'checkImageExists').mockResolvedValue(true);
      const applyUpdateSpy = vi
        .spyOn(GenderImageManager, 'applyImageUpdate')
        .mockImplementation(() => {});

      await GenderImageManager.updateWithFallback(img, 'images/primary.jpg', 'images/fallback.jpg');

      expect(applyUpdateSpy).toHaveBeenCalledWith(img, 'images/primary.jpg');
    });

    it('画像が存在しない場合はフォールバック画像を使用', async () => {
      const img = document.createElement('img');

      vi.spyOn(GenderImageManager, 'checkImageExists').mockResolvedValue(false);
      const applyUpdateSpy = vi
        .spyOn(GenderImageManager, 'applyImageUpdate')
        .mockImplementation(() => {});

      await GenderImageManager.updateWithFallback(img, 'images/primary.jpg', 'images/fallback.jpg');

      expect(applyUpdateSpy).toHaveBeenCalledWith(img, 'images/fallback.jpg');
    });
  });

  describe('addCustomMapping', () => {
    it('新しいカテゴリーにマッピングを追加できる', () => {
      const customConfig = {
        selector: '.custom-image',
        male: 'images/custom-male.jpg',
        female: 'images/custom-female.jpg',
      };

      GenderImageManager.addCustomMapping('customCategory', customConfig);

      expect(GenderImageManager.imageMappings.customCategory).toBeDefined();
      expect(GenderImageManager.imageMappings.customCategory).toContain(customConfig);
    });

    it('既存のカテゴリーにマッピングを追加できる', () => {
      const initialLength = GenderImageManager.imageMappings.lifestyleOffice.length;

      const newConfig = {
        selector: '.new-office',
        male: 'images/new-male.jpg',
        female: 'images/new-female.jpg',
      };

      GenderImageManager.addCustomMapping('lifestyleOffice', newConfig);

      expect(GenderImageManager.imageMappings.lifestyleOffice.length).toBe(initialLength + 1);
      expect(GenderImageManager.imageMappings.lifestyleOffice).toContain(newConfig);
    });
  });

  describe('updateSpecificImage', () => {
    it('特定のセレクターの画像を手動で更新できる', () => {
      document.body.innerHTML = `
        <img class="specific" src="images/old.jpg">
        <img class="specific" src="images/old2.jpg">
        <input type="radio" name="gender" value="female" id="gender-female" checked>
      `;

      const applyUpdateSpy = vi
        .spyOn(GenderImageManager, 'applyImageUpdate')
        .mockImplementation(() => {});

      GenderImageManager.updateSpecificImage('.specific', 'images/male.jpg', 'images/female.jpg');

      expect(applyUpdateSpy).toHaveBeenCalledTimes(2);
      expect(applyUpdateSpy).toHaveBeenCalledWith(
        expect.any(HTMLImageElement),
        'images/female.jpg'
      );
    });
  });

  describe('updateCustomImages', () => {
    it('カスタム更新関数が存在する場合は呼び出される', () => {
      const mockUpdateCoordination = vi.fn();
      const mockUpdatePattern = vi.fn();

      window.updateCoordinationImages = mockUpdateCoordination;
      window.updatePatternDisplay = mockUpdatePattern;

      document.body.innerHTML = `
        <div class="pattern-selections-container"></div>
        <div class="pattern-selections"></div>
      `;

      GenderImageManager.updateCustomImages('female');

      expect(mockUpdateCoordination).toHaveBeenCalledWith('female');
      expect(mockUpdatePattern).toHaveBeenCalled();

      // クリーンアップ
      delete window.updateCoordinationImages;
      delete window.updatePatternDisplay;
    });
  });

  describe('updateBackgroundImage', () => {
    it('フォールバックなしで背景画像を更新', () => {
      vi.useFakeTimers();
      const div = document.createElement('div');

      const config = {
        male: 'images/bg-male.jpg',
        female: 'images/bg-female.jpg',
        type: 'background',
      };

      GenderImageManager.updateBackgroundImage(div, 'images/bg-female.jpg', config, 'female');

      expect(div.style.opacity).toBe('0');
      expect(div.style.transition).toBe('opacity 0.3s ease');

      vi.advanceTimersByTime(300);

      expect(div.style.backgroundImage).toBe('url("images/bg-female.jpg")');
      expect(div.style.opacity).toBe('1');

      vi.useRealTimers();
    });
  });

  describe('imageMappings categories', () => {
    it('privateScenes カテゴリーが正しく定義されている', () => {
      expect(GenderImageManager.imageMappings.privateScenes).toBeDefined();
      expect(GenderImageManager.imageMappings.privateScenes.length).toBeGreaterThan(0);
    });

    it('weekendActivities カテゴリーが正しく定義されている', () => {
      expect(GenderImageManager.imageMappings.weekendActivities).toBeDefined();
      expect(GenderImageManager.imageMappings.weekendActivities.length).toBeGreaterThan(0);
    });

    it('backgrounds カテゴリーが正しく定義されている', () => {
      expect(GenderImageManager.imageMappings.backgrounds).toBeDefined();
      expect(GenderImageManager.imageMappings.backgrounds.length).toBeGreaterThan(0);
    });
  });

  describe('updateImageSrc edge cases', () => {
    it('同じsrcの場合は更新しない', () => {
      const img = document.createElement('img');
      img.src = 'images/test.jpg';

      const applyUpdateSpy = vi.spyOn(GenderImageManager, 'applyImageUpdate');

      GenderImageManager.updateImageSrc(img, 'images/test.jpg', {}, 'male');

      expect(applyUpdateSpy).not.toHaveBeenCalled();
    });

    it('newSrcがnullの場合は更新しない', () => {
      const img = document.createElement('img');

      const applyUpdateSpy = vi.spyOn(GenderImageManager, 'applyImageUpdate');

      GenderImageManager.updateImageSrc(img, null, {}, 'male');

      expect(applyUpdateSpy).not.toHaveBeenCalled();
    });
  });

  describe('applyImageUpdate error handling', () => {
    it('画像読み込みエラー時の処理', () => {
      vi.useFakeTimers();
      const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      const img = document.createElement('img');
      const onerrorSpy = vi.fn();

      Object.defineProperty(img, 'onerror', {
        set: function (handler) {
          onerrorSpy.mockImplementation(handler);
        },
      });

      GenderImageManager.applyImageUpdate(img, 'images/error.jpg');

      vi.advanceTimersByTime(300);

      // onerrorを手動で呼び出し
      onerrorSpy();

      expect(consoleWarnSpy).toHaveBeenCalledWith('Failed to load image: images/error.jpg');
      expect(img.style.opacity).toBe('1');

      consoleWarnSpy.mockRestore();
      vi.useRealTimers();
    });
  });

  describe('updateBackgroundImage with fallback', () => {
    it('フォールバック付きで背景画像を更新（画像が存在しない場合）', async () => {
      vi.useFakeTimers();
      const div = document.createElement('div');

      const config = {
        male: 'images/bg-male.jpg',
        female: 'images/bg-female.jpg',
        type: 'background',
        fallback: true,
      };

      vi.spyOn(GenderImageManager, 'checkImageExists').mockResolvedValue(false);

      GenderImageManager.updateBackgroundImage(div, 'images/bg-female.jpg', config, 'female');

      // Promiseの解決を待つ
      await vi.runAllTimersAsync();

      expect(div.style.backgroundImage).toBe('url("images/bg-male.jpg")');

      vi.useRealTimers();
    });
  });

  describe('updateElement with self value', () => {
    it('dynamic設定でselfの場合は更新しない', () => {
      const img = document.createElement('img');
      img.src = 'images/style-male-1.jpg';

      const config = {
        selector: 'img',
        male: 'self',
        female: 'images/style-female-1.jpg',
        dynamic: true,
      };

      const updateImageSrcSpy = vi.spyOn(GenderImageManager, 'updateImageSrc');

      GenderImageManager.updateElement(img, config, 'male');

      expect(updateImageSrcSpy).not.toHaveBeenCalled();
    });
  });

  describe('updateImageCategory', () => {
    it('マッピング配列内のすべての要素を更新する', () => {
      document.body.innerHTML = `
        <img class="test-img" src="images/test1.jpg">
        <img class="test-img" src="images/test2.jpg">
        <div class="test-bg"></div>
      `;

      const updateElementSpy = vi.spyOn(GenderImageManager, 'updateElement');

      const mappings = [
        {
          selector: '.test-img',
          male: 'images/male.jpg',
          female: 'images/female.jpg',
        },
        {
          selector: '.test-bg',
          male: 'images/bg-male.jpg',
          female: 'images/bg-female.jpg',
          type: 'background',
        },
      ];

      GenderImageManager.updateImageCategory(mappings, 'female');

      expect(updateElementSpy).toHaveBeenCalledTimes(3); // 2 img + 1 div
      expect(updateElementSpy).toHaveBeenCalledWith(
        expect.any(HTMLImageElement),
        mappings[0],
        'female'
      );
      expect(updateElementSpy).toHaveBeenCalledWith(
        expect.any(HTMLDivElement),
        mappings[1],
        'female'
      );
    });

    it('セレクターにマッチする要素がない場合でもエラーにならない', () => {
      document.body.innerHTML = '';

      const mappings = [
        {
          selector: '.non-existent',
          male: 'images/male.jpg',
          female: 'images/female.jpg',
        },
      ];

      expect(() => {
        GenderImageManager.updateImageCategory(mappings, 'male');
      }).not.toThrow();
    });
  });

  describe('stylePatterns dynamic functions', () => {
    it('style-male画像をfemaleに変換する関数が正しく動作する', () => {
      const stylePattern = GenderImageManager.imageMappings.stylePatterns[0];
      const result = stylePattern.female('images/style-male-minimal-1.jpg');
      expect(result).toBe('images/style-female-minimal-1.jpg');
    });

    it('style-female画像をmaleに変換する関数が正しく動作する', () => {
      const stylePattern = GenderImageManager.imageMappings.stylePatterns[1];
      const result = stylePattern.male('images/style-female-elegant-1.jpg');
      expect(result).toBe('images/style-male-elegant-1.jpg');
    });
  });

  describe('updateImageSrc with fallback', () => {
    it('fallback設定がある場合はupdateWithFallbackを呼ぶ', () => {
      const img = document.createElement('img');
      img.src = 'http://localhost/images/test.jpg';

      const updateWithFallbackSpy = vi
        .spyOn(GenderImageManager, 'updateWithFallback')
        .mockImplementation(() => {});

      const config = {
        male: 'images/male.jpg',
        female: 'images/female.jpg',
        fallback: true,
      };

      GenderImageManager.updateImageSrc(img, 'images/female.jpg', config, 'female');

      expect(updateWithFallbackSpy).toHaveBeenCalledWith(
        img,
        'images/female.jpg',
        'images/male.jpg'
      );
    });
  });
});
