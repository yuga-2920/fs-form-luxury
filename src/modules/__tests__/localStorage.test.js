import { describe, it, expect, beforeEach, vi } from 'vitest';
import { LocalStorageHandler } from '../localStorage';

describe('LocalStorageHandler', () => {
  beforeEach(() => {
    // localStorageをクリア
    localStorage.clear();
    // DOMをクリア
    document.body.innerHTML = '';
    // モックをリセット
    vi.clearAllMocks();
  });

  describe('ストレージキー', () => {
    it('FORM_DATA_KEYが定義されている', () => {
      expect(LocalStorageHandler.FORM_DATA_KEY).toBe('styleFormData');
    });

    it('FORM_IMAGES_KEYが定義されている', () => {
      expect(LocalStorageHandler.FORM_IMAGES_KEY).toBe('styleFormImages');
    });
  });

  describe('saveFormData', () => {
    it('フォームデータを保存できる', () => {
      // フォームを作成
      document.body.innerHTML = `
        <form id="styleForm">
          <input type="text" name="name" value="テスト太郎">
          <input type="email" name="email" value="test@example.com">
          <input type="checkbox" name="agree" checked>
          <select name="gender">
            <option value="male" selected>男性</option>
            <option value="female">女性</option>
          </select>
        </form>
      `;

      // 保存を実行
      LocalStorageHandler.saveFormData();

      // localStorageから取得
      const savedData = JSON.parse(localStorage.getItem(LocalStorageHandler.FORM_DATA_KEY));

      // 保存されたデータを検証
      expect(savedData).toBeDefined();
      expect(savedData.name).toBe('テスト太郎');
      expect(savedData.email).toBe('test@example.com');
      expect(savedData.agree).toBe(true);
      expect(savedData.gender).toBe('male');
    });

    it('ラジオボタンの値を保存できる', () => {
      // フォームを作成
      document.body.innerHTML = `
        <form id="styleForm">
          <input type="radio" name="plan" value="basic">
          <input type="radio" name="plan" value="premium" checked>
          <input type="radio" name="plan" value="enterprise">
        </form>
      `;

      // 保存を実行
      LocalStorageHandler.saveFormData();

      // localStorageから取得
      const savedData = JSON.parse(localStorage.getItem(LocalStorageHandler.FORM_DATA_KEY));

      // 保存されたデータを検証
      expect(savedData.plan).toBe('premium');
    });

    it('フォームが存在しない場合はエラーにならない', () => {
      // フォームがない状態で実行
      expect(() => LocalStorageHandler.saveFormData()).not.toThrow();
    });
  });

  describe('restoreFormData', () => {
    it('保存されたデータをフォームに復元できる', () => {
      // フォームを作成
      document.body.innerHTML = `
        <form id="styleForm">
          <input type="text" name="name" value="">
          <input type="email" name="email" value="">
          <input type="checkbox" name="agree">
          <select name="gender">
            <option value="male">男性</option>
            <option value="female">女性</option>
          </select>
        </form>
      `;

      // データを保存
      const testData = {
        name: '復元太郎',
        email: 'restore@example.com',
        agree: true,
        gender: 'female',
      };
      localStorage.setItem(LocalStorageHandler.FORM_DATA_KEY, JSON.stringify(testData));

      // 復元を実行
      LocalStorageHandler.restoreFormData();

      // フォームの値を検証
      const form = document.getElementById('styleForm');
      expect(form.elements.name.value).toBe('復元太郎');
      expect(form.elements.email.value).toBe('restore@example.com');
      expect(form.elements.agree.checked).toBe(true);
      expect(form.elements.gender.value).toBe('female');
    });

    it('ラジオボタンの値を復元できる', () => {
      // フォームを作成
      document.body.innerHTML = `
        <form id="styleForm">
          <input type="radio" name="plan" value="basic">
          <input type="radio" name="plan" value="premium">
          <input type="radio" name="plan" value="enterprise">
        </form>
      `;

      // データを保存
      const testData = {
        plan: 'enterprise',
      };
      localStorage.setItem(LocalStorageHandler.FORM_DATA_KEY, JSON.stringify(testData));

      // 復元を実行
      LocalStorageHandler.restoreFormData();

      // ラジオボタンの状態を検証
      const radios = document.querySelectorAll('input[name="plan"]');
      expect(radios[0].checked).toBe(false); // basic
      expect(radios[1].checked).toBe(false); // premium
      expect(radios[2].checked).toBe(true); // enterprise
    });

    it('不正なJSONデータの場合はエラーにならない', () => {
      document.body.innerHTML = '<form id="styleForm"></form>';
      localStorage.setItem(LocalStorageHandler.FORM_DATA_KEY, 'invalid json data');

      // consoleエラーをモック
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      expect(() => LocalStorageHandler.restoreFormData()).not.toThrow();
      expect(consoleSpy).toHaveBeenCalledWith('Failed to restore form data:', expect.any(Error));

      consoleSpy.mockRestore();
    });

    it('保存データがない場合はエラーにならない', () => {
      document.body.innerHTML = '<form id="styleForm"></form>';
      expect(() => LocalStorageHandler.restoreFormData()).not.toThrow();
    });

    it('フォームが存在しない場合はエラーにならない', () => {
      // フォームなし
      document.body.innerHTML = '';
      localStorage.setItem(LocalStorageHandler.FORM_DATA_KEY, JSON.stringify({ test: 'data' }));

      expect(() => LocalStorageHandler.restoreFormData()).not.toThrow();
    });
  });

  describe('clearFormData', () => {
    it('保存されたデータをクリアできる', () => {
      // データを保存
      localStorage.setItem(LocalStorageHandler.FORM_DATA_KEY, JSON.stringify({ test: 'data' }));
      localStorage.setItem(LocalStorageHandler.FORM_IMAGES_KEY, JSON.stringify({ test: 'image' }));

      // クリアを実行
      LocalStorageHandler.clearFormData();

      // クリアされたことを検証
      expect(localStorage.getItem(LocalStorageHandler.FORM_DATA_KEY)).toBeNull();
      expect(localStorage.getItem(LocalStorageHandler.FORM_IMAGES_KEY)).toBeNull();
    });
  });
});
