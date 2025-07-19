import { describe, it, expect, beforeEach, vi } from 'vitest';
import { FileDownloadHandler } from '../fileDownloadHandler';

describe('FileDownloadHandler', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    vi.clearAllMocks();
    vi.restoreAllMocks();

    // LocalStorageHandlerのモック
    global.LocalStorageHandler = {
      showSaveNotification: vi.fn(),
    };

    // Blobのモック
    global.Blob = vi.fn().mockImplementation((content, options) => ({
      content,
      options,
    }));

    // URLのモック
    global.URL = {
      createObjectURL: vi.fn().mockReturnValue('blob:test-url'),
    };

    // atobのモック
    global.atob = vi.fn().mockReturnValue('test-binary-data');

    // alertのモック
    global.alert = vi.fn();
  });

  describe('init', () => {
    it('初期化時にsetupDownloadButtonsが呼ばれる', () => {
      const setupSpy = vi
        .spyOn(FileDownloadHandler, 'setupDownloadButtons')
        .mockImplementation(() => {});

      FileDownloadHandler.init();

      expect(setupSpy).toHaveBeenCalled();
    });
  });

  describe('collectFormDataWithLabels', () => {
    it('フォームが存在しない場合は空オブジェクトを返す', () => {
      const result = FileDownloadHandler.collectFormDataWithLabels();

      expect(result).toEqual({});
    });

    it('基本情報フィールドが正しく収集される', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input name="name" value="テスト太郎">
          <input name="email" value="test@example.com">
          <input name="phone" value="09012345678">
          <input type="radio" name="gender" value="male" checked>
          <input type="radio" name="gender" value="female">
          <input name="birthYear" value="1990">
          <input name="birthMonth" value="5">
          <input name="birthDay" value="15">
          <input name="height" value="170">
          <input name="weight" value="65">
        </form>
      `;

      const result = FileDownloadHandler.collectFormDataWithLabels();

      expect(result['基本情報']['お名前']).toBe('テスト太郎');
      expect(result['基本情報']['メールアドレス']).toBe('test@example.com');
      expect(result['基本情報']['電話番号']).toBe('09012345678');
      expect(result['基本情報']['性別']).toBe('男性');
      expect(result['基本情報']['生年月日']).toBe('1990年5月15日');
      expect(result['基本情報']['身長']).toBe('170cm');
      expect(result['基本情報']['体重']).toBe('65kg');
    });

    it('女性が選択されている場合は性別が女性になる', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input type="radio" name="gender" value="male">
          <input type="radio" name="gender" value="female" checked>
        </form>
      `;

      const result = FileDownloadHandler.collectFormDataWithLabels();

      expect(result['基本情報']['性別']).toBe('女性');
    });

    it('住所フィールドが正しく収集される', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input name="postalCode" value="123-4567">
          <input name="prefecture" value="東京都">
          <input name="city" value="新宿区">
          <input name="address" value="1-1-1">
          <input name="building" value="テストビル101">
        </form>
      `;

      const result = FileDownloadHandler.collectFormDataWithLabels();

      expect(result['基本情報']['郵便番号']).toBe('123-4567');
      expect(result['基本情報']['都道府県']).toBe('東京都');
      expect(result['基本情報']['市区町村']).toBe('新宿区');
      expect(result['基本情報']['番地']).toBe('1-1-1');
      expect(result['基本情報']['建物名']).toBe('テストビル101');
    });

    it('ビジネスシーンの複数選択が正しく処理される', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input type="checkbox" name="businessScenes" value="internal-meeting" checked>
          <span>内部会議</span>
          <input type="checkbox" name="businessScenes" value="external-meeting" checked>
          <span>外部会議</span>
          <input type="checkbox" name="businessScenes" value="presentation">
          <span>プレゼンテーション</span>
        </form>
      `;

      const result = FileDownloadHandler.collectFormDataWithLabels();

      expect(result['ライフスタイル']['ビジネスシーン']).toBe('内部会議、外部会議');
    });

    it('プライベートシーンの複数選択が正しく処理される', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input type="checkbox" name="privateScenes" value="dinner" checked>
          <span>食事</span>
          <input type="checkbox" name="privateScenes" value="shopping" checked>
          <span>ショッピング</span>
        </form>
      `;

      const result = FileDownloadHandler.collectFormDataWithLabels();

      expect(result['ライフスタイル']['プライベートシーン']).toBe('食事、ショッピング');
    });

    it('登録日時が含まれる', () => {
      document.body.innerHTML = '<form id="styleForm"></form>';

      const result = FileDownloadHandler.collectFormDataWithLabels();

      expect(result['その他']['登録日時']).toBeDefined();
      expect(typeof result['その他']['登録日時']).toBe('string');
    });
  });

  describe('downloadAsTextFile', () => {
    it('テキストファイルのダウンロードが実行される', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input name="name" value="テスト太郎">
          <input name="email" value="test@example.com">
        </form>
      `;

      const createElementSpy = vi.spyOn(document, 'createElement');
      const clickSpy = vi.fn();

      createElementSpy.mockReturnValue({
        href: '',
        download: '',
        click: clickSpy,
      });

      FileDownloadHandler.downloadAsTextFile();

      expect(createElementSpy).toHaveBeenCalledWith('a');
      expect(clickSpy).toHaveBeenCalled();
      expect(global.LocalStorageHandler.showSaveNotification).toHaveBeenCalledWith(
        'テキストファイルを保存しました'
      );
    });

    it('Blobが正しい内容で作成される', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input name="name" value="テスト太郎">
        </form>
      `;

      const BlobSpy = vi.spyOn(global, 'Blob');

      FileDownloadHandler.downloadAsTextFile();

      expect(BlobSpy).toHaveBeenCalledWith(
        expect.arrayContaining([expect.stringContaining('スタイルフォーム入力内容')]),
        { type: 'text/plain;charset=utf-8' }
      );
    });
  });

  describe('downloadAsCSV', () => {
    it('フォームが存在しない場合は何も実行しない', () => {
      const createElementSpy = vi.spyOn(document, 'createElement');

      FileDownloadHandler.downloadAsCSV();

      expect(createElementSpy).not.toHaveBeenCalled();
    });

    it('CSVファイルのダウンロードが実行される', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input name="name" value="テスト太郎">
          <input name="email" value="test@example.com">
          <input type="checkbox" name="options" value="option1" checked>
          <input type="checkbox" name="options" value="option2" checked>
        </form>
      `;

      const createElementSpy = vi.spyOn(document, 'createElement');
      const clickSpy = vi.fn();

      createElementSpy.mockReturnValue({
        href: '',
        download: '',
        click: clickSpy,
      });

      FileDownloadHandler.downloadAsCSV();

      expect(createElementSpy).toHaveBeenCalledWith('a');
      expect(clickSpy).toHaveBeenCalled();
      expect(global.LocalStorageHandler.showSaveNotification).toHaveBeenCalledWith(
        'CSVファイルを保存しました'
      );
    });

    it('チェックボックスの複数選択が正しく処理される', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input type="checkbox" name="options" value="option1" checked>
          <input type="checkbox" name="options" value="option2" checked>
          <input type="checkbox" name="options" value="option3">
        </form>
      `;

      const BlobSpy = vi.spyOn(global, 'Blob');

      FileDownloadHandler.downloadAsCSV();

      expect(BlobSpy).toHaveBeenCalledWith(
        expect.arrayContaining([expect.stringContaining('option1；option2')]),
        { type: 'text/csv;charset=utf-8;' }
      );
    });
  });

  describe('downloadImages', () => {
    it('保存された画像がない場合はアラートを表示', () => {
      vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);

      FileDownloadHandler.downloadImages();

      expect(global.alert).toHaveBeenCalledWith('保存された画像がありません');
    });

    it('保存された画像をダウンロードする', () => {
      const mockImages = {
        facePhoto: {
          data: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/',
          type: 'image/jpeg',
          name: 'face.jpg',
        },
      };

      vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify(mockImages));

      const createElementSpy = vi.spyOn(document, 'createElement');
      const clickSpy = vi.fn();

      createElementSpy.mockReturnValue({
        href: '',
        download: '',
        click: clickSpy,
      });

      FileDownloadHandler.downloadImages();

      expect(createElementSpy).toHaveBeenCalledWith('a');
      expect(clickSpy).toHaveBeenCalled();
      expect(global.LocalStorageHandler.showSaveNotification).toHaveBeenCalledWith(
        '1個の画像を保存しました'
      );
    });
  });

  describe('createFullBackup', () => {
    it('完全バックアップのHTMLファイルが作成される', () => {
      document.body.innerHTML = `
        <form id="styleForm">
          <input name="name" value="テスト太郎">
        </form>
      `;

      vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('{}');

      const createElementSpy = vi.spyOn(document, 'createElement');
      const clickSpy = vi.fn();

      createElementSpy.mockReturnValue({
        href: '',
        download: '',
        click: clickSpy,
      });

      const BlobSpy = vi.spyOn(global, 'Blob');

      FileDownloadHandler.createFullBackup();

      expect(BlobSpy).toHaveBeenCalledWith(
        expect.arrayContaining([expect.stringContaining('<!DOCTYPE html>')]),
        { type: 'text/html;charset=utf-8' }
      );
      expect(createElementSpy).toHaveBeenCalledWith('a');
      expect(clickSpy).toHaveBeenCalled();
      expect(global.LocalStorageHandler.showSaveNotification).toHaveBeenCalledWith(
        '完全バックアップを作成しました'
      );
    });

    it('画像データが含まれている場合はHTMLに埋め込まれる', () => {
      document.body.innerHTML = '<form id="styleForm"></form>';

      const mockImages = {
        facePhoto: {
          data: 'data:image/jpeg;base64,test',
          name: 'face.jpg',
        },
      };

      vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify(mockImages));

      const BlobSpy = vi.spyOn(global, 'Blob');

      FileDownloadHandler.createFullBackup();

      expect(BlobSpy).toHaveBeenCalledWith(
        expect.arrayContaining([expect.stringContaining('顔写真')]),
        { type: 'text/html;charset=utf-8' }
      );
    });
  });

  describe('setupDownloadButtons', () => {
    it('setupDownloadButtonsメソッドが存在し呼び出し可能', () => {
      expect(typeof FileDownloadHandler.setupDownloadButtons).toBe('function');
      expect(() => FileDownloadHandler.setupDownloadButtons()).not.toThrow();
    });
  });

  describe('エラーケース', () => {
    it('LocalStorageHandlerが存在しない場合でもエラーにならない', () => {
      delete global.LocalStorageHandler;

      document.body.innerHTML = `
        <form id="styleForm">
          <input name="name" value="テスト太郎">
        </form>
      `;

      expect(() => {
        FileDownloadHandler.downloadAsTextFile();
      }).not.toThrow();

      expect(() => {
        FileDownloadHandler.downloadAsCSV();
      }).not.toThrow();

      expect(() => {
        FileDownloadHandler.createFullBackup();
      }).not.toThrow();
    });

    it('画像データがないエントリをスキップする', () => {
      const mockImages = {
        facePhoto: {
          data: 'data:image/jpeg;base64,test',
          type: 'image/jpeg',
          name: 'face.jpg',
        },
        invalidPhoto: {
          data: null,
          type: 'image/jpeg',
          name: 'invalid.jpg',
        },
      };

      vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify(mockImages));

      const createElementSpy = vi.spyOn(document, 'createElement');
      const clickSpy = vi.fn();

      createElementSpy.mockReturnValue({
        href: '',
        download: '',
        click: clickSpy,
      });

      FileDownloadHandler.downloadImages();

      // 有効な画像のみ処理される
      expect(clickSpy).toHaveBeenCalledTimes(1);
    });

    it('空のフォームデータでもテキストファイルが作成される', () => {
      document.body.innerHTML = '<form id="styleForm"></form>';

      const BlobSpy = vi.spyOn(global, 'Blob');

      FileDownloadHandler.downloadAsTextFile();

      expect(BlobSpy).toHaveBeenCalledWith(
        expect.arrayContaining([expect.stringContaining('スタイルフォーム入力内容')]),
        { type: 'text/plain;charset=utf-8' }
      );
    });
  });
});
