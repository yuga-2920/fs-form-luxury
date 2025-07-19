// Form Validator Module
export const FormValidator = {
  // 必須フィールドの検証
  validateRequired: function (input) {
    if (!input.required) return true;
    return input.value.trim() !== '';
  },

  // メールアドレスの検証
  validateEmail: function (email) {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // 電話番号の検証
  validatePhoneNumber: function (phoneNumber) {
    if (!phoneNumber) return false;
    // 日本の電話番号形式（ハイフンあり・なし両対応）
    const phoneRegex = /^(0[0-9]{1,4}-?[0-9]{1,4}-?[0-9]{3,4}|0[0-9]{9,10})$/;
    return phoneRegex.test(phoneNumber);
  },

  // 郵便番号の検証
  validatePostalCode: function (postalCode) {
    if (!postalCode) return false;
    // 日本の郵便番号形式（xxx-xxxx または xxxxxxx）
    const postalRegex = /^(\d{3}-\d{4}|\d{7})$/;
    return postalRegex.test(postalCode);
  },

  // フォーム全体の検証
  validateForm: function (form) {
    const errors = [];
    const inputs = form.querySelectorAll('input, textarea, select');

    inputs.forEach(input => {
      // 必須チェック
      if (!this.validateRequired(input)) {
        errors.push({
          field: input.name,
          message: 'このフィールドは必須です',
          element: input,
        });
      }
      // メールアドレスの検証
      else if (input.type === 'email' && input.value && !this.validateEmail(input.value)) {
        errors.push({
          field: input.name,
          message: '有効なメールアドレスを入力してください',
          element: input,
        });
      }
      // 電話番号の検証
      else if (input.type === 'tel' && input.value && !this.validatePhoneNumber(input.value)) {
        errors.push({
          field: input.name,
          message: '有効な電話番号を入力してください',
          element: input,
        });
      }
      // 郵便番号の検証
      else if (
        input.getAttribute('data-validate') === 'postal' &&
        input.value &&
        !this.validatePostalCode(input.value)
      ) {
        errors.push({
          field: input.name,
          message: '有効な郵便番号を入力してください',
          element: input,
        });
      }
    });

    return {
      isValid: errors.length === 0,
      errors: errors,
    };
  },

  // エラーメッセージの表示
  showError: function (input, message) {
    // 既存のエラーをクリア
    this.clearError(input);

    // エラークラスを追加
    input.classList.add('error');

    // エラーメッセージ要素を作成
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.textContent = message;

    // 入力要素の後に挿入
    input.parentNode.insertBefore(errorElement, input.nextSibling);
  },

  // エラーメッセージのクリア
  clearError: function (input) {
    // エラークラスを削除
    input.classList.remove('error');

    // エラーメッセージ要素を削除
    const errorElement = input.parentNode.querySelector('.error-message');
    if (errorElement) {
      errorElement.remove();
    }
  },
};
