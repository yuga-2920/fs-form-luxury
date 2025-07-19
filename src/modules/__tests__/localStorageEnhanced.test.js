import { describe, it, expect, beforeEach, vi } from 'vitest';
import { LocalStorageEnhanced } from '../localStorageEnhanced';

describe('LocalStorageEnhanced', () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.innerHTML = '';
    vi.clearAllMocks();
    vi.restoreAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  describe('ストレージキー', () => {
    it('FORM_DATA_KEYが定義されている', () => {
      expect(LocalStorageEnhanced.FORM_DATA_KEY).toBe('styleFormData');
    });

    it('FORM_IMAGES_KEYが定義されている', () => {
      expect(LocalStorageEnhanced.FORM_IMAGES_KEY).toBe('styleFormImages');
    });
  });

  describe('init', () => {
    it('初期化メソッドが各設定を呼び出す', () => {
      const setupAutoSaveSpy = vi.spyOn(LocalStorageEnhanced, 'setupAutoSave');
      const restoreFormDataSpy = vi.spyOn(LocalStorageEnhanced, 'restoreFormData');
      const setupButtonsSpy = vi.spyOn(LocalStorageEnhanced, 'setupButtons');

      LocalStorageEnhanced.init();

      expect(setupAutoSaveSpy).toHaveBeenCalled();
      expect(restoreFormDataSpy).toHaveBeenCalled();
      expect(setupButtonsSpy).toHaveBeenCalled();
    });
  });

  describe('setupAutoSave', () => {
    it('テキスト入力フィールドで自動保存が設定される', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input type="text" name="name">
          <input type="email" name="email">
          <textarea name="comment"></textarea>
        </form>
      `;

      const saveFormDataSpy = vi
        .spyOn(LocalStorageEnhanced, 'saveFormData')
        .mockImplementation(() => {});

      LocalStorageEnhanced.setupAutoSave();

      const nameInput = document.querySelector('input[name="name"]');
      nameInput.value = 'テスト';
      nameInput.dispatchEvent(new Event('input'));

      // 1秒後に保存されることを確認
      expect(saveFormDataSpy).not.toHaveBeenCalled();
      vi.advanceTimersByTime(1000);
      expect(saveFormDataSpy).toHaveBeenCalled();
    });

    it('チェックボックスとラジオボタンで即座に保存される', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input type="checkbox" name="agree" value="yes">
          <input type="radio" name="gender" value="male">
        </form>
      `;

      const saveFormDataSpy = vi
        .spyOn(LocalStorageEnhanced, 'saveFormData')
        .mockImplementation(() => {});

      LocalStorageEnhanced.setupAutoSave();

      const checkbox = document.querySelector('input[type="checkbox"]');
      checkbox.checked = true;
      checkbox.dispatchEvent(new Event('change'));

      expect(saveFormDataSpy).toHaveBeenCalled();
    });

    it('ファイル入力で画像保存が呼ばれる', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input type="file" name="photo">
        </form>
      `;

      const saveImageFileSpy = vi
        .spyOn(LocalStorageEnhanced, 'saveImageFile')
        .mockImplementation(() => {});

      LocalStorageEnhanced.setupAutoSave();

      const fileInput = document.querySelector('input[type="file"]');
      fileInput.dispatchEvent(new Event('change'));

      expect(saveImageFileSpy).toHaveBeenCalledWith(fileInput);
    });
  });

  describe('saveFormData', () => {
    it('フォームデータを正しく保存する', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input type="text" name="name" value="山田太郎">
          <input type="email" name="email" value="test@example.com">
          <input type="checkbox" name="interests" value="fashion" checked>
          <input type="checkbox" name="interests" value="sports">
          <input type="radio" name="gender" value="male" checked>
        </form>
      `;

      LocalStorageEnhanced.saveFormData();

      const savedData = JSON.parse(localStorage.getItem(LocalStorageEnhanced.FORM_DATA_KEY));
      expect(savedData).toBeDefined();
      expect(savedData.name).toBe('山田太郎');
      expect(savedData.email).toBe('test@example.com');
      expect(savedData.interests).toEqual(['fashion']);
      expect(savedData.gender).toBe('male');
      expect(savedData.lastSaved).toBeDefined();
    });

    it('フォームが存在しない場合は何もしない', () => {
      LocalStorageEnhanced.saveFormData();
      expect(localStorage.getItem(LocalStorageEnhanced.FORM_DATA_KEY)).toBeNull();
    });

    it('QuotaExceededErrorの場合はアラートを表示', () => {
      document.body.innerHTML = '<form id="styleForm"><input name="test" value="test"></form>';

      const mockSetItem = vi.spyOn(Storage.prototype, 'setItem').mockImplementationOnce(() => {
        const error = new Error('QuotaExceededError');
        error.name = 'QuotaExceededError';
        throw error;
      });
      const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

      LocalStorageEnhanced.saveFormData();

      expect(alertSpy).toHaveBeenCalledWith(
        'ローカルストレージの容量が不足しています。不要なデータを削除してください。'
      );
    });
  });

  describe('saveImageFile', () => {
    it('画像ファイルをBase64として保存', () => {
      const mockFile = new File(['test image data'], 'test.jpg', { type: 'image/jpeg' });
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.name = 'photo';
      Object.defineProperty(fileInput, 'files', {
        value: [mockFile],
        writable: false,
      });

      // FileReaderのモック
      let capturedOnload;
      const mockFileReader = {
        readAsDataURL: vi.fn(),
        set onload(handler) {
          capturedOnload = handler;
        },
        get onload() {
          return capturedOnload;
        },
      };
      vi.spyOn(window, 'FileReader').mockImplementation(() => mockFileReader);

      LocalStorageEnhanced.saveImageFile(fileInput);

      // readAsDataURLが呼ばれたことを確認
      expect(mockFileReader.readAsDataURL).toHaveBeenCalledWith(mockFile);

      // onloadコールバックを手動で実行
      const mockResult = 'data:image/jpeg;base64,dGVzdCBpbWFnZSBkYXRh';
      capturedOnload({ target: { result: mockResult } });

      const savedImages = JSON.parse(localStorage.getItem(LocalStorageEnhanced.FORM_IMAGES_KEY));
      expect(savedImages.photo).toBeDefined();
      expect(savedImages.photo.data).toBe(mockResult);
      expect(savedImages.photo.name).toBe('test.jpg');
      expect(savedImages.photo.type).toBe('image/jpeg');
    });

    it('ファイルが選択されていない場合は何もしない', () => {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';

      LocalStorageEnhanced.saveImageFile(fileInput);

      expect(localStorage.getItem(LocalStorageEnhanced.FORM_IMAGES_KEY)).toBeNull();
    });
  });

  describe('restoreFormData', () => {
    it('保存されたデータをフォームに復元', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input type="text" name="name">
          <input type="checkbox" name="interests" value="fashion">
          <input type="checkbox" name="interests" value="sports">
          <input type="radio" name="gender" value="male">
          <input type="radio" name="gender" value="female">
        </form>
      `;

      const testData = {
        name: '復元太郎',
        interests: ['fashion', 'sports'],
        gender: 'female',
        lastSaved: new Date().toISOString(),
      };
      localStorage.setItem(LocalStorageEnhanced.FORM_DATA_KEY, JSON.stringify(testData));

      LocalStorageEnhanced.restoreFormData();

      expect(document.querySelector('input[name="name"]').value).toBe('復元太郎');
      expect(document.querySelector('input[name="interests"][value="fashion"]').checked).toBe(true);
      expect(document.querySelector('input[name="interests"][value="sports"]').checked).toBe(true);
      expect(document.querySelector('input[name="gender"][value="female"]').checked).toBe(true);
    });

    it('画像の復元も呼び出される', () => {
      document.body.innerHTML = '<form id="styleForm"></form>';
      localStorage.setItem(LocalStorageEnhanced.FORM_DATA_KEY, JSON.stringify({}));

      const restoreImagesSpy = vi
        .spyOn(LocalStorageEnhanced, 'restoreImages')
        .mockImplementation(() => {});

      LocalStorageEnhanced.restoreFormData();

      expect(restoreImagesSpy).toHaveBeenCalled();
    });
  });

  describe('restoreImages', () => {
    it('保存された画像をプレビューに表示', () => {
      document.body.innerHTML = `
        <div id="facePhotoPreview"></div>
        <div id="bodyPhotoPreview"></div>
      `;

      const imageData = {
        facePhoto: {
          data: 'data:image/jpeg;base64,face',
          name: 'face.jpg',
        },
        bodyPhoto: {
          data: 'data:image/jpeg;base64,body',
          name: 'body.jpg',
        },
      };
      localStorage.setItem(LocalStorageEnhanced.FORM_IMAGES_KEY, JSON.stringify(imageData));

      LocalStorageEnhanced.restoreImages();

      const facePreview = document.getElementById('facePhotoPreview');
      const bodyPreview = document.getElementById('bodyPhotoPreview');

      expect(facePreview.innerHTML).toContain('data:image/jpeg;base64,face');
      expect(bodyPreview.innerHTML).toContain('data:image/jpeg;base64,body');
    });
  });

  describe('clearAllData', () => {
    it('すべてのデータをクリアしフォームをリセット', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input type="text" name="name" value="テスト">
        </form>
        <div id="facePhotoPreview"><img src="test.jpg"></div>
      `;

      localStorage.setItem(LocalStorageEnhanced.FORM_DATA_KEY, JSON.stringify({ test: 'data' }));
      localStorage.setItem(LocalStorageEnhanced.FORM_IMAGES_KEY, JSON.stringify({ test: 'image' }));

      // form.reset()をモック
      const form = document.getElementById('styleForm');
      const resetSpy = vi.spyOn(form, 'reset').mockImplementation(() => {
        form.querySelectorAll('input').forEach(input => {
          if (input.type === 'text') input.value = '';
          if (input.type === 'checkbox' || input.type === 'radio') input.checked = false;
        });
      });

      LocalStorageEnhanced.clearAllData();

      expect(localStorage.getItem(LocalStorageEnhanced.FORM_DATA_KEY)).toBeNull();
      expect(localStorage.getItem(LocalStorageEnhanced.FORM_IMAGES_KEY)).toBeNull();
      expect(resetSpy).toHaveBeenCalled();
      expect(document.querySelector('input[name="name"]').value).toBe('');
      expect(document.getElementById('facePhotoPreview').innerHTML).toBe('');
    });
  });

  describe('exportData', () => {
    it('データをJSONファイルとしてエクスポート', () => {
      const testFormData = { name: 'テスト' };
      const testImageData = { photo: { data: 'test' } };
      localStorage.setItem(LocalStorageEnhanced.FORM_DATA_KEY, JSON.stringify(testFormData));
      localStorage.setItem(LocalStorageEnhanced.FORM_IMAGES_KEY, JSON.stringify(testImageData));

      // URLオブジェクトにcreateObjectURLを追加
      global.URL.createObjectURL = vi.fn().mockReturnValue('blob:test');
      const createObjectURLSpy = vi.spyOn(URL, 'createObjectURL');

      const clickSpy = vi.fn();
      const linkElement = document.createElement('a');
      linkElement.click = clickSpy;

      vi.spyOn(document, 'createElement').mockImplementation(tag => {
        if (tag === 'a') {
          return linkElement;
        }
        return document.createElement(tag);
      });

      LocalStorageEnhanced.exportData();

      expect(createObjectURLSpy).toHaveBeenCalled();
      expect(clickSpy).toHaveBeenCalled();
    });
  });

  describe('importData', () => {
    it('JSONファイルからデータをインポート', () => {
      document.body.innerHTML = '<form id="styleForm"></form>';

      const importData = {
        formData: { name: 'インポートテスト' },
        images: { photo: { data: 'imported' } },
      };
      const file = new File([JSON.stringify(importData)], 'import.json', {
        type: 'application/json',
      });

      const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(true);
      const restoreFormDataSpy = vi
        .spyOn(LocalStorageEnhanced, 'restoreFormData')
        .mockImplementation(() => {});

      // FileReaderのモック
      let capturedOnload;
      const mockFileReader = {
        readAsText: vi.fn(),
        set onload(handler) {
          capturedOnload = handler;
        },
        get onload() {
          return capturedOnload;
        },
      };
      vi.spyOn(window, 'FileReader').mockImplementation(() => mockFileReader);

      LocalStorageEnhanced.importData(file);

      // readAsTextが呼ばれたことを確認
      expect(mockFileReader.readAsText).toHaveBeenCalledWith(file);

      // onloadコールバックを手動で実行
      capturedOnload({ target: { result: JSON.stringify(importData) } });

      expect(confirmSpy).toHaveBeenCalledWith('現在のデータを上書きしますか？');
      expect(localStorage.getItem(LocalStorageEnhanced.FORM_DATA_KEY)).toBe(
        JSON.stringify(importData.formData)
      );
      expect(localStorage.getItem(LocalStorageEnhanced.FORM_IMAGES_KEY)).toBe(
        JSON.stringify(importData.images)
      );
      expect(restoreFormDataSpy).toHaveBeenCalled();
    });

    it('不正なデータの場合はアラートを表示', () => {
      const file = new File(['invalid json'], 'import.json');
      const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

      // FileReaderのモック
      let capturedOnload;
      const mockFileReader = {
        readAsText: vi.fn(),
        set onload(handler) {
          capturedOnload = handler;
        },
        get onload() {
          return capturedOnload;
        },
      };
      vi.spyOn(window, 'FileReader').mockImplementation(() => mockFileReader);

      LocalStorageEnhanced.importData(file);
      capturedOnload({ target: { result: 'invalid json' } });

      expect(alertSpy).toHaveBeenCalledWith(
        'インポートに失敗しました。正しいファイルを選択してください。'
      );
    });
  });

  describe('showSaveNotification', () => {
    it('保存通知を表示する', () => {
      LocalStorageEnhanced.showSaveNotification('テスト通知');

      vi.advanceTimersByTime(100);

      const notification = document.querySelector('.save-notification');
      expect(notification).toBeTruthy();
      expect(notification.textContent).toContain('テスト通知');
      expect(notification.classList.contains('show')).toBe(true);

      // 3秒後に非表示になる
      vi.advanceTimersByTime(3000);
      expect(notification.classList.contains('show')).toBe(false);
    });
  });

  describe('setupButtons', () => {
    it('ボタンの設定（実装予定）', () => {
      // ボタン設定のテストは実装に応じて追加
      expect(LocalStorageEnhanced.setupButtons).toBeDefined();
    });
  });
});
