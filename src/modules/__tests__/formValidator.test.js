import { describe, it, expect, beforeEach } from 'vitest';
import { FormValidator } from '../formValidator';

describe('FormValidator', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  describe('validateRequired', () => {
    it('必須フィールドが空の場合はfalseを返す', () => {
      const input = document.createElement('input');
      input.value = '';
      input.required = true;

      expect(FormValidator.validateRequired(input)).toBe(false);
    });

    it('必須フィールドに値がある場合はtrueを返す', () => {
      const input = document.createElement('input');
      input.value = 'テスト値';
      input.required = true;

      expect(FormValidator.validateRequired(input)).toBe(true);
    });

    it('必須でないフィールドは常にtrueを返す', () => {
      const input = document.createElement('input');
      input.value = '';
      input.required = false;

      expect(FormValidator.validateRequired(input)).toBe(true);
    });
  });

  describe('validateEmail', () => {
    it('有効なメールアドレスの場合はtrueを返す', () => {
      expect(FormValidator.validateEmail('test@example.com')).toBe(true);
      expect(FormValidator.validateEmail('user.name+tag@example.co.jp')).toBe(true);
    });

    it('無効なメールアドレスの場合はfalseを返す', () => {
      expect(FormValidator.validateEmail('invalid')).toBe(false);
      expect(FormValidator.validateEmail('test@')).toBe(false);
      expect(FormValidator.validateEmail('@example.com')).toBe(false);
      expect(FormValidator.validateEmail('test@.com')).toBe(false);
    });

    it('空の文字列の場合はfalseを返す', () => {
      expect(FormValidator.validateEmail('')).toBe(false);
    });
  });

  describe('validatePhoneNumber', () => {
    it('有効な電話番号の場合はtrueを返す', () => {
      expect(FormValidator.validatePhoneNumber('090-1234-5678')).toBe(true);
      expect(FormValidator.validatePhoneNumber('09012345678')).toBe(true);
      expect(FormValidator.validatePhoneNumber('03-1234-5678')).toBe(true);
      expect(FormValidator.validatePhoneNumber('0312345678')).toBe(true);
    });

    it('無効な電話番号の場合はfalseを返す', () => {
      expect(FormValidator.validatePhoneNumber('123')).toBe(false);
      expect(FormValidator.validatePhoneNumber('abc-defg-hijk')).toBe(false);
      expect(FormValidator.validatePhoneNumber('12-3456-7890')).toBe(false);
    });
  });

  describe('validatePostalCode', () => {
    it('有効な郵便番号の場合はtrueを返す', () => {
      expect(FormValidator.validatePostalCode('123-4567')).toBe(true);
      expect(FormValidator.validatePostalCode('1234567')).toBe(true);
    });

    it('無効な郵便番号の場合はfalseを返す', () => {
      expect(FormValidator.validatePostalCode('123')).toBe(false);
      expect(FormValidator.validatePostalCode('123-456')).toBe(false);
      expect(FormValidator.validatePostalCode('abc-defg')).toBe(false);
    });
  });

  describe('validateForm', () => {
    it('すべての検証が通る場合はtrueを返す', () => {
      document.body.innerHTML = `
        <form id="testForm">
          <input type="text" name="name" value="山田太郎" required>
          <input type="email" name="email" value="test@example.com" required>
          <input type="tel" name="phone" value="090-1234-5678">
          <input type="text" name="postal" value="123-4567" data-validate="postal">
        </form>
      `;

      const form = document.getElementById('testForm');
      const result = FormValidator.validateForm(form);

      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('検証エラーがある場合はfalseを返す', () => {
      document.body.innerHTML = `
        <form id="testForm">
          <input type="text" name="name" value="" required>
          <input type="email" name="email" value="invalid-email" required>
          <input type="tel" name="phone" value="123">
          <input type="text" name="postal" value="123" data-validate="postal">
        </form>
      `;

      const form = document.getElementById('testForm');
      const result = FormValidator.validateForm(form);

      expect(result.isValid).toBe(false);
      expect(result.errors).toHaveLength(4);
      expect(result.errors[0].field).toBe('name');
      expect(result.errors[0].message).toBe('このフィールドは必須です');
    });
  });

  describe('showError', () => {
    it('エラーメッセージを表示する', () => {
      const input = document.createElement('input');
      input.id = 'testInput';
      document.body.appendChild(input);

      FormValidator.showError(input, 'エラーメッセージ');

      const errorElement = document.querySelector('.error-message');
      expect(errorElement).toBeTruthy();
      expect(errorElement.textContent).toBe('エラーメッセージ');
      expect(input.classList.contains('error')).toBe(true);
    });
  });

  describe('clearError', () => {
    it('エラーメッセージをクリアする', () => {
      document.body.innerHTML = `
        <div>
          <input id="testInput" class="error">
          <span class="error-message">エラー</span>
        </div>
      `;

      const input = document.getElementById('testInput');
      FormValidator.clearError(input);

      expect(input.classList.contains('error')).toBe(false);
      expect(document.querySelector('.error-message')).toBeNull();
    });
  });
});
