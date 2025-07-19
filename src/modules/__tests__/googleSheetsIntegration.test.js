import { describe, it, expect, beforeEach, vi } from 'vitest';
import { GoogleSheetsIntegration } from '../googleSheetsIntegration';

describe('GoogleSheetsIntegration', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    vi.clearAllMocks();
    vi.restoreAllMocks();

    // グローバルAPIのモック
    global.fetch = vi.fn();
    global.FormData = vi.fn().mockImplementation(() => ({
      append: vi.fn(),
      entries: vi.fn().mockReturnValue([]),
      get: vi.fn(),
    }));
    global.FileReader = vi.fn().mockImplementation(() => ({
      readAsDataURL: vi.fn(),
      onload: null,
      onerror: null,
      result: null,
    }));
    global.Blob = vi.fn().mockImplementation((content, options) => ({
      content,
      options,
    }));
    global.URL = {
      createObjectURL: vi.fn().mockReturnValue('blob:test-url'),
    };
    global.alert = vi.fn();
    global.confirm = vi.fn();
    global.console = {
      log: vi.fn(),
      error: vi.fn(),
    };
  });

  describe('init', () => {
    it('フォームとボタンが存在する場合にイベントリスナーを設定する', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <button id="submitBtn">
            <span class="btn-text">送信</span>
            <span class="btn-loading" style="display: none;">送信中...</span>
          </button>
        </form>
      `;

      const addEventListenerSpy = vi.spyOn(
        document.getElementById('styleForm'),
        'addEventListener'
      );

      GoogleSheetsIntegration.init();

      expect(addEventListenerSpy).toHaveBeenCalledWith('submit', expect.any(Function));
    });

    it('フォームまたはボタンが存在しない場合は何も実行しない', () => {
      GoogleSheetsIntegration.init();
      // エラーが発生しないことを確認
      expect(true).toBe(true);
    });

    it('フォーム送信時に正常処理を実行する', async () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input name="name" value="テスト太郎">
          <input name="email" value="test@example.com">
          <button type="submit" id="submitBtn">
            <span class="btn-text">送信</span>
            <span class="btn-loading" style="display: none;">送信中...</span>
          </button>
        </form>
      `;

      // 必要なメソッドをモック
      const collectFormDataSpy = vi
        .spyOn(GoogleSheetsIntegration, 'collectFormData')
        .mockReturnValue({ entries: vi.fn().mockReturnValue([]) });
      const saveToLocalSpy = vi
        .spyOn(GoogleSheetsIntegration, 'saveToLocal')
        .mockImplementation(() => {});
      const submitToGoogleSheetsSpy = vi
        .spyOn(GoogleSheetsIntegration, 'submitToGoogleSheets')
        .mockResolvedValue(true);

      GoogleSheetsIntegration.init();

      const form = document.getElementById('styleForm');
      const event = new Event('submit');

      form.dispatchEvent(event);

      // 非同期処理の完了を待つ
      await new Promise(resolve => setTimeout(resolve, 0));

      expect(collectFormDataSpy).toHaveBeenCalled();
      expect(saveToLocalSpy).toHaveBeenCalled();
      expect(submitToGoogleSheetsSpy).toHaveBeenCalled();
      expect(global.alert).toHaveBeenCalledWith('フォームが正常に送信されました。');
    });

    it('Google Sheets送信失敗時に代替処理を実行する', async () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input name="name" value="テスト太郎">
          <button type="submit" id="submitBtn">
            <span class="btn-text">送信</span>
            <span class="btn-loading" style="display: none;">送信中...</span>
          </button>
        </form>
      `;

      // 必要なメソッドをモック
      const collectFormDataSpy = vi
        .spyOn(GoogleSheetsIntegration, 'collectFormData')
        .mockReturnValue({
          entries: vi.fn().mockReturnValue([['name', 'テスト太郎']]),
          get: vi.fn(),
        });
      const saveToLocalSpy = vi
        .spyOn(GoogleSheetsIntegration, 'saveToLocal')
        .mockImplementation(() => {});
      const submitToGoogleSheetsSpy = vi
        .spyOn(GoogleSheetsIntegration, 'submitToGoogleSheets')
        .mockResolvedValue(false);

      // confirmで「はい」を選択
      global.confirm.mockReturnValue(true);

      // localStorageをモック
      const getItemSpy = vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('[]');
      const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

      GoogleSheetsIntegration.init();

      const form = document.getElementById('styleForm');
      const event = new Event('submit');

      form.dispatchEvent(event);

      // 非同期処理の完了を待つ
      await new Promise(resolve => setTimeout(resolve, 0));

      expect(global.confirm).toHaveBeenCalledWith(
        'Google Sheetsへの送信が失敗しました。\nデータをローカルに保存しますか？'
      );
      expect(setItemSpy).toHaveBeenCalledWith('formSubmissions', expect.any(String));
      expect(global.alert).toHaveBeenCalledWith(
        'データがブラウザに保存されました。\n開発者ツールのコンソールで確認できます。'
      );
    });
  });

  describe('convertToJapanese', () => {
    it('値がない場合は空文字を返す', () => {
      expect(GoogleSheetsIntegration.convertToJapanese('', 'gender')).toBe('');
      expect(GoogleSheetsIntegration.convertToJapanese(null, 'gender')).toBe('');
      expect(GoogleSheetsIntegration.convertToJapanese(undefined, 'gender')).toBe('');
    });

    it('性別の値を日本語に変換する', () => {
      expect(GoogleSheetsIntegration.convertToJapanese('male', 'gender')).toBe('男性');
      expect(GoogleSheetsIntegration.convertToJapanese('female', 'gender')).toBe('女性');
    });

    it('ビジネスシーンの複数値をカンマ区切りで日本語に変換する', () => {
      const result = GoogleSheetsIntegration.convertToJapanese(
        'internal-meeting, external-meeting',
        'businessScenes'
      );
      expect(result).toBe('社内会議・ミーティング、社外との商談・プレゼンテーション');
    });

    it('マッピングにない値はそのまま返す', () => {
      expect(GoogleSheetsIntegration.convertToJapanese('unknown-value', 'gender')).toBe(
        'unknown-value'
      );
    });

    it('マッピングにないカテゴリーの値はそのまま返す', () => {
      expect(GoogleSheetsIntegration.convertToJapanese('test-value', 'unknown-category')).toBe(
        'test-value'
      );
    });
  });

  describe('collectFormData', () => {
    it('基本的なフォームデータを収集する', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input name="name" value="テスト太郎">
          <input name="email" value="test@example.com">
          <input name="phone" value="09012345678">
          <input type="radio" name="gender" value="male" checked>
          <input name="birthYear" value="1990">
          <input name="birthMonth" value="5">
          <input name="birthDay" value="15">
          <input name="height" value="170">
          <input name="weight" value="65">
        </form>
      `;

      const mockFormData = {
        append: vi.fn(),
        entries: vi.fn().mockReturnValue([]),
      };
      global.FormData.mockReturnValue(mockFormData);

      const result = GoogleSheetsIntegration.collectFormData();

      expect(mockFormData.append).toHaveBeenCalledWith('name', 'テスト太郎');
      expect(mockFormData.append).toHaveBeenCalledWith('email', 'test@example.com');
      expect(mockFormData.append).toHaveBeenCalledWith('phone', '09012345678');
      expect(mockFormData.append).toHaveBeenCalledWith('gender', '男性');
      expect(mockFormData.append).toHaveBeenCalledWith('birthYear', '1990');
      expect(mockFormData.append).toHaveBeenCalledWith('birthMonth', '5');
      expect(mockFormData.append).toHaveBeenCalledWith('birthDay', '15');
      expect(mockFormData.append).toHaveBeenCalledWith('height', '170');
      expect(mockFormData.append).toHaveBeenCalledWith('weight', '65');
    });

    it('住所情報を収集する', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input name="postalCode" value="123-4567">
          <input name="prefecture" value="東京都">
          <input name="city" value="新宿区">
          <input name="address" value="1-1-1">
          <input name="building" value="テストビル101">
        </form>
      `;

      const mockFormData = {
        append: vi.fn(),
        entries: vi.fn().mockReturnValue([]),
      };
      global.FormData.mockReturnValue(mockFormData);

      GoogleSheetsIntegration.collectFormData();

      expect(mockFormData.append).toHaveBeenCalledWith('postalCode', '123-4567');
      expect(mockFormData.append).toHaveBeenCalledWith('prefecture', '東京都');
      expect(mockFormData.append).toHaveBeenCalledWith('city', '新宿区');
      expect(mockFormData.append).toHaveBeenCalledWith('address', '1-1-1');
      expect(mockFormData.append).toHaveBeenCalledWith('building', 'テストビル101');
    });

    it('チェックボックスの複数選択を処理する', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input type="checkbox" name="businessScenes" value="internal-meeting" checked>
          <input type="checkbox" name="businessScenes" value="external-meeting" checked>
          <input type="checkbox" name="businessScenes" value="business-dining">
        </form>
      `;

      const mockFormData = {
        append: vi.fn(),
        entries: vi.fn().mockReturnValue([]),
      };
      global.FormData.mockReturnValue(mockFormData);

      GoogleSheetsIntegration.collectFormData();

      expect(mockFormData.append).toHaveBeenCalledWith(
        'businessScenes',
        '社内会議・ミーティング、社外との商談・プレゼンテーション'
      );
    });

    it('画像ファイルを処理する', () => {
      const mockFaceFile = new File(['face'], 'face.jpg', { type: 'image/jpeg' });
      const mockBodyFile = new File(['body'], 'body.jpg', { type: 'image/jpeg' });

      document.body.innerHTML = `
        <form id="styleForm">
          <input type="file" id="facePhotoInput">
          <input type="file" id="bodyPhotoInput">
        </form>
      `;

      // ファイル入力をモック
      Object.defineProperty(document.getElementById('facePhotoInput'), 'files', {
        value: [mockFaceFile],
        writable: false,
      });
      Object.defineProperty(document.getElementById('bodyPhotoInput'), 'files', {
        value: [mockBodyFile],
        writable: false,
      });

      const mockFormData = {
        append: vi.fn(),
        entries: vi.fn().mockReturnValue([]),
      };
      global.FormData.mockReturnValue(mockFormData);

      GoogleSheetsIntegration.collectFormData();

      expect(mockFormData.append).toHaveBeenCalledWith('facePhoto', mockFaceFile);
      expect(mockFormData.append).toHaveBeenCalledWith('bodyPhoto', mockBodyFile);
    });
  });

  describe('convertImageToBase64', () => {
    it('画像ファイルをBase64に変換する', async () => {
      const mockFile = new File(['test'], 'test.jpg', { type: 'image/jpeg' });
      const mockReader = {
        readAsDataURL: vi.fn(),
        onload: null,
        onerror: null,
        result: 'data:image/jpeg;base64,dGVzdA==',
      };

      global.FileReader.mockReturnValue(mockReader);

      const promise = GoogleSheetsIntegration.convertImageToBase64(mockFile);

      // onloadを呼び出してPromiseを解決
      mockReader.onload();

      const result = await promise;
      expect(result).toBe('data:image/jpeg;base64,dGVzdA==');
      expect(mockReader.readAsDataURL).toHaveBeenCalledWith(mockFile);
    });

    it('エラーが発生した場合はrejectされる', async () => {
      const mockFile = new File(['test'], 'test.jpg', { type: 'image/jpeg' });
      const mockError = new Error('Failed to read file');
      const mockReader = {
        readAsDataURL: vi.fn(),
        onload: null,
        onerror: null,
      };

      global.FileReader.mockReturnValue(mockReader);

      const promise = GoogleSheetsIntegration.convertImageToBase64(mockFile);

      // onerrorを呼び出してPromiseをreject
      mockReader.onerror(mockError);

      await expect(promise).rejects.toBe(mockError);
    });
  });

  describe('submitToGoogleSheets', () => {
    it('FormDataを正常にGoogle Sheetsに送信する', async () => {
      const mockFormData = {
        entries: vi.fn().mockReturnValue([
          ['name', 'テスト太郎'],
          ['email', 'test@example.com'],
        ]),
      };

      global.fetch.mockResolvedValue(new Response('OK', { status: 200 }));

      const result = await GoogleSheetsIntegration.submitToGoogleSheets(mockFormData);

      expect(global.fetch).toHaveBeenCalledWith(
        GoogleSheetsIntegration.SCRIPT_URL,
        expect.objectContaining({
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: expect.stringContaining('テスト太郎'),
        })
      );
      expect(result).toBe(true);
    });

    it('画像ファイルをBase64に変換してから送信する', async () => {
      const mockFile = new File(['test'], 'test.jpg', { type: 'image/jpeg' });
      const mockFormData = {
        entries: vi.fn().mockReturnValue([
          ['name', 'テスト太郎'],
          ['facePhoto', mockFile],
        ]),
      };

      // convertImageToBase64をモック
      const convertSpy = vi
        .spyOn(GoogleSheetsIntegration, 'convertImageToBase64')
        .mockResolvedValue('data:image/jpeg;base64,dGVzdA==');

      global.fetch.mockResolvedValue(new Response('OK', { status: 200 }));

      const result = await GoogleSheetsIntegration.submitToGoogleSheets(mockFormData);

      expect(convertSpy).toHaveBeenCalledWith(mockFile);
      expect(global.fetch).toHaveBeenCalled();
      expect(result).toBe(true);
    });

    it('送信エラーが発生した場合はfalseを返す', async () => {
      const mockFormData = {
        entries: vi.fn().mockReturnValue([['name', 'テスト太郎']]),
      };

      global.fetch.mockRejectedValue(new Error('Network error'));

      const result = await GoogleSheetsIntegration.submitToGoogleSheets(mockFormData);

      expect(result).toBe(false);
      expect(global.console.error).toHaveBeenCalledWith(
        'Error submitting to Google Sheets:',
        expect.any(Error)
      );
    });
  });

  describe('saveToLocal', () => {
    it('フォームデータをローカルストレージに保存する', () => {
      const mockFormData = {
        entries: vi.fn().mockReturnValue([
          ['name', 'テスト太郎'],
          ['email', 'test@example.com'],
        ]),
        get: vi.fn().mockReturnValue(null),
      };

      // collectCompleteFormDataをモック
      const collectSpy = vi
        .spyOn(GoogleSheetsIntegration, 'collectCompleteFormData')
        .mockReturnValue({ name: 'テスト太郎', email: 'test@example.com' });

      // downloadSubmissionAsTextをモック
      const downloadTextSpy = vi
        .spyOn(GoogleSheetsIntegration, 'downloadSubmissionAsText')
        .mockImplementation(() => {});

      // downloadSubmissionImagesをモック
      const downloadImagesSpy = vi
        .spyOn(GoogleSheetsIntegration, 'downloadSubmissionImages')
        .mockImplementation(() => {});

      // localStorageをモック
      const getItemSpy = vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('[]');
      const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

      GoogleSheetsIntegration.saveToLocal(mockFormData);

      expect(collectSpy).toHaveBeenCalledWith(mockFormData);
      expect(downloadTextSpy).toHaveBeenCalled();
      expect(downloadImagesSpy).toHaveBeenCalledWith(mockFormData);
      expect(setItemSpy).toHaveBeenCalledWith(
        'formSubmissions',
        expect.stringContaining('テスト太郎')
      );
    });

    it('100件を超える送信履歴がある場合は古いものを削除する', () => {
      const mockFormData = {
        entries: vi.fn().mockReturnValue([
          ['name', 'テスト太郎'],
          ['email', 'test@example.com'],
        ]),
        get: vi.fn().mockReturnValue(null),
      };

      // 101件の既存データを作成
      const existingSubmissions = Array.from({ length: 101 }, (_, i) => ({
        timestamp: new Date(2023, 0, i + 1).toISOString(),
        data: { name: `User${i}` },
      }));

      // collectCompleteFormDataをモック
      const collectSpy = vi
        .spyOn(GoogleSheetsIntegration, 'collectCompleteFormData')
        .mockReturnValue({ name: 'テスト太郎', email: 'test@example.com' });

      // downloadSubmissionAsTextをモック
      const downloadTextSpy = vi
        .spyOn(GoogleSheetsIntegration, 'downloadSubmissionAsText')
        .mockImplementation(() => {});

      // downloadSubmissionImagesをモック
      const downloadImagesSpy = vi
        .spyOn(GoogleSheetsIntegration, 'downloadSubmissionImages')
        .mockImplementation(() => {});

      // localStorageをモック
      const getItemSpy = vi
        .spyOn(Storage.prototype, 'getItem')
        .mockReturnValue(JSON.stringify(existingSubmissions));
      const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

      GoogleSheetsIntegration.saveToLocal(mockFormData);

      // setItemが呼ばれた引数を確認
      const savedData = JSON.parse(setItemSpy.mock.calls[0][1]);
      expect(savedData).toHaveLength(100); // 最新100件のみ保持
      expect(savedData[99].data.name).toBe('テスト太郎'); // 新しいデータが最後に追加
    });

    it('エラーが発生した場合はコンソールにエラーを出力する', () => {
      const mockFormData = {
        entries: vi.fn().mockImplementation(() => {
          throw new Error('Test error');
        }),
      };

      GoogleSheetsIntegration.saveToLocal(mockFormData);

      expect(global.console.error).toHaveBeenCalledWith(
        'Failed to save locally:',
        expect.any(Error)
      );
    });
  });

  describe('downloadSubmissionAsText', () => {
    it('送信データをテキストファイルとしてダウンロードする', () => {
      const mockData = {
        name: 'テスト太郎',
        email: 'test@example.com',
        submissionDate: '2023-01-01T00:00:00.000Z',
      };

      const createElementSpy = vi.spyOn(document, 'createElement');
      const clickSpy = vi.fn();

      createElementSpy.mockReturnValue({
        href: '',
        download: '',
        click: clickSpy,
      });

      GoogleSheetsIntegration.downloadSubmissionAsText(mockData);

      expect(global.Blob).toHaveBeenCalledWith(
        expect.arrayContaining([expect.stringContaining('テスト太郎')]),
        { type: 'text/plain;charset=utf-8' }
      );
      expect(createElementSpy).toHaveBeenCalledWith('a');
      expect(clickSpy).toHaveBeenCalled();
    });
  });

  describe('downloadSubmissionImages', () => {
    it('フォームデータから画像をダウンロードする', () => {
      const mockFile = new File(['test'], 'test.jpg', { type: 'image/jpeg' });
      const mockFormData = {
        get: vi
          .fn()
          .mockReturnValueOnce(mockFile) // facePhoto
          .mockReturnValueOnce(null), // bodyPhoto
      };

      const downloadImageSpy = vi
        .spyOn(GoogleSheetsIntegration, 'downloadImage')
        .mockImplementation(() => {});

      GoogleSheetsIntegration.downloadSubmissionImages(mockFormData);

      expect(mockFormData.get).toHaveBeenCalledWith('facePhoto');
      expect(mockFormData.get).toHaveBeenCalledWith('bodyPhoto');
      expect(downloadImageSpy).toHaveBeenCalledWith(mockFile, 'face-photo');
    });

    it('bodyPhotoがある場合も正しく処理する', () => {
      const mockFaceFile = new File(['face'], 'face.jpg', { type: 'image/jpeg' });
      const mockBodyFile = new File(['body'], 'body.jpg', { type: 'image/jpeg' });
      const mockFormData = {
        get: vi
          .fn()
          .mockReturnValueOnce(mockFaceFile) // facePhoto
          .mockReturnValueOnce(mockBodyFile), // bodyPhoto
      };

      const downloadImageSpy = vi
        .spyOn(GoogleSheetsIntegration, 'downloadImage')
        .mockImplementation(() => {});

      GoogleSheetsIntegration.downloadSubmissionImages(mockFormData);

      expect(downloadImageSpy).toHaveBeenCalledWith(mockFaceFile, 'face-photo');
      expect(downloadImageSpy).toHaveBeenCalledWith(mockBodyFile, 'body-photo');
    });

    it('サイズが0の画像ファイルは処理しない', () => {
      const mockFile = new File([], 'empty.jpg', { type: 'image/jpeg' });
      const mockFormData = {
        get: vi
          .fn()
          .mockReturnValueOnce(mockFile) // facePhoto
          .mockReturnValueOnce(null), // bodyPhoto
      };

      const downloadImageSpy = vi
        .spyOn(GoogleSheetsIntegration, 'downloadImage')
        .mockImplementation(() => {});

      GoogleSheetsIntegration.downloadSubmissionImages(mockFormData);

      expect(downloadImageSpy).not.toHaveBeenCalled();
    });
  });

  describe('downloadImage', () => {
    it('個別画像ファイルをダウンロードする', () => {
      const mockFile = new File(['test'], 'test.jpg', { type: 'image/jpeg' });

      const createElementSpy = vi.spyOn(document, 'createElement');
      const clickSpy = vi.fn();

      createElementSpy.mockReturnValue({
        href: '',
        download: '',
        click: clickSpy,
      });

      GoogleSheetsIntegration.downloadImage(mockFile, 'test-prefix');

      expect(global.URL.createObjectURL).toHaveBeenCalledWith(mockFile);
      expect(createElementSpy).toHaveBeenCalledWith('a');
      expect(clickSpy).toHaveBeenCalled();
    });
  });

  describe('collectCompleteFormData', () => {
    it('FormDataから完全なデータオブジェクトを作成する', () => {
      const mockFormData = {
        entries: vi.fn().mockReturnValue([
          ['name', 'テスト太郎'],
          ['email', 'test@example.com'],
          ['businessScenes', 'internal-meeting'],
          ['businessScenes', 'external-meeting'],
        ]),
      };

      document.body.innerHTML = '<form id="styleForm"></form>';

      const result = GoogleSheetsIntegration.collectCompleteFormData(mockFormData);

      expect(result.name).toBe('テスト太郎');
      expect(result.email).toBe('test@example.com');
      expect(result.businessScenes).toBe('internal-meeting, external-meeting');

      // 未入力フィールドも含まれることを確認
      expect(result.phone).toBe('');
      expect(result.height).toBe('');
    });
  });
});
