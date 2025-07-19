import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { FormSubmit } from '../formSubmit';

describe('FormSubmit', () => {
  let mockFetch;

  beforeEach(() => {
    // fetchをモック
    mockFetch = vi.fn();
    global.fetch = mockFetch;

    // DOMをセットアップ
    document.body.innerHTML = `
      <form id="testForm">
        <input name="name" value="テスト太郎">
        <input name="email" value="test@example.com">
        <button type="submit">送信</button>
      </form>
    `;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('getFormData', () => {
    it('フォームからデータを取得できる', () => {
      const form = document.getElementById('testForm');
      const data = FormSubmit.getFormData(form);

      expect(data).toEqual({
        name: 'テスト太郎',
        email: 'test@example.com',
      });
    });

    it('チェックボックスの値を正しく取得できる', () => {
      document.body.innerHTML = `
        <form id="testForm">
          <input type="checkbox" name="agree" value="yes" checked>
          <input type="checkbox" name="subscribe" value="yes">
        </form>
      `;

      const form = document.getElementById('testForm');
      const data = FormSubmit.getFormData(form);

      expect(data.agree).toBe('yes');
      expect(data.subscribe).toBeUndefined();
    });

    it('ラジオボタンの値を正しく取得できる', () => {
      document.body.innerHTML = `
        <form id="testForm">
          <input type="radio" name="gender" value="male">
          <input type="radio" name="gender" value="female" checked>
          <input type="radio" name="gender" value="other">
        </form>
      `;

      const form = document.getElementById('testForm');
      const data = FormSubmit.getFormData(form);

      expect(data.gender).toBe('female');
    });

    it('複数選択の値を配列として取得できる', () => {
      document.body.innerHTML = `
        <form id="testForm">
          <select name="colors" multiple>
            <option value="red" selected>Red</option>
            <option value="green">Green</option>
            <option value="blue" selected>Blue</option>
          </select>
        </form>
      `;

      const form = document.getElementById('testForm');
      const data = FormSubmit.getFormData(form);

      expect(data.colors).toEqual(['red', 'blue']);
    });
  });

  describe('validateForm', () => {
    it('必須フィールドが空の場合はfalseを返す', () => {
      document.body.innerHTML = `
        <form id="testForm">
          <input name="name" value="" required>
          <input name="email" value="test@example.com">
        </form>
      `;

      const form = document.getElementById('testForm');
      const isValid = FormSubmit.validateForm(form);

      expect(isValid).toBe(false);
    });

    it('すべての必須フィールドが入力されている場合はtrueを返す', () => {
      document.body.innerHTML = `
        <form id="testForm">
          <input name="name" value="テスト" required>
          <input name="email" value="test@example.com" required>
        </form>
      `;

      const form = document.getElementById('testForm');
      const isValid = FormSubmit.validateForm(form);

      expect(isValid).toBe(true);
    });
  });

  describe('submit', () => {
    it('フォームデータを正しく送信する', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true, id: '123' }),
      });

      const form = document.getElementById('testForm');
      const result = await FormSubmit.submit(form, '/api/submit');

      expect(mockFetch).toHaveBeenCalledWith('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'テスト太郎',
          email: 'test@example.com',
        }),
      });

      expect(result).toEqual({ success: true, id: '123' });
    });

    it('送信エラーの場合はエラーをスローする', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 400,
        statusText: 'Bad Request',
      });

      const form = document.getElementById('testForm');

      await expect(FormSubmit.submit(form, '/api/submit')).rejects.toThrow(
        '送信に失敗しました: 400 Bad Request'
      );
    });

    it('ネットワークエラーの場合はエラーをスローする', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'));

      const form = document.getElementById('testForm');

      await expect(FormSubmit.submit(form, '/api/submit')).rejects.toThrow('Network error');
    });
  });

  describe('submitWithProgress', () => {
    it('進捗コールバックが呼ばれる', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      const progressCallback = vi.fn();
      const form = document.getElementById('testForm');

      await FormSubmit.submitWithProgress(form, '/api/submit', progressCallback);

      expect(progressCallback).toHaveBeenCalledWith('validating');
      expect(progressCallback).toHaveBeenCalledWith('sending');
      expect(progressCallback).toHaveBeenCalledWith('success');
    });

    it('エラー時にエラー状態が通知される', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'));

      const progressCallback = vi.fn();
      const form = document.getElementById('testForm');

      await expect(
        FormSubmit.submitWithProgress(form, '/api/submit', progressCallback)
      ).rejects.toThrow('Network error');

      expect(progressCallback).toHaveBeenCalledWith('error');
    });
  });

  describe('serializeForDownload', () => {
    it('フォームデータをCSV形式にシリアライズできる', () => {
      document.body.innerHTML = `
        <form id="testForm">
          <input name="name" value="山田太郎">
          <input name="email" value="yamada@example.com">
          <input name="age" value="30">
        </form>
      `;

      const form = document.getElementById('testForm');
      const csv = FormSubmit.serializeForDownload(form, 'csv');

      expect(csv).toBe('name,email,age\n"山田太郎","yamada@example.com","30"');
    });

    it('フォームデータをJSON形式にシリアライズできる', () => {
      const form = document.getElementById('testForm');
      const json = FormSubmit.serializeForDownload(form, 'json');

      const parsed = JSON.parse(json);
      expect(parsed).toEqual({
        name: 'テスト太郎',
        email: 'test@example.com',
      });
    });

    it('不明な形式の場合はnullを返す', () => {
      const form = document.getElementById('testForm');
      const result = FormSubmit.serializeForDownload(form, 'xml');

      expect(result).toBeNull();
    });
  });
});
