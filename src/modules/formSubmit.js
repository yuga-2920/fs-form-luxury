// Form Submit Module
export const FormSubmit = {
  // フォームからデータを取得
  getFormData: function (form) {
    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
      if (data[key]) {
        // 既に値が存在する場合は配列にする（複数選択対応）
        if (!Array.isArray(data[key])) {
          data[key] = [data[key]];
        }
        data[key].push(value);
      } else {
        data[key] = value;
      }
    }

    // チェックボックスの特別な処理
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      if (checkbox.checked && !data[checkbox.name]) {
        data[checkbox.name] = checkbox.value;
      }
    });

    // 複数選択セレクトボックスの処理
    const multiSelects = form.querySelectorAll('select[multiple]');
    multiSelects.forEach(select => {
      const selected = Array.from(select.selectedOptions).map(option => option.value);
      if (selected.length > 0) {
        data[select.name] = selected;
      }
    });

    return data;
  },

  // フォームの検証
  validateForm: function (form) {
    const requiredFields = form.querySelectorAll('[required]');

    for (const field of requiredFields) {
      if (!field.value || field.value.trim() === '') {
        return false;
      }
    }

    return true;
  },

  // フォームを送信
  submit: async function (form, url) {
    const data = this.getFormData(form);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`送信に失敗しました: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  },

  // 進捗状態付きでフォームを送信
  submitWithProgress: async function (form, url, progressCallback) {
    try {
      // バリデーション中
      progressCallback('validating');

      if (!this.validateForm(form)) {
        throw new Error('バリデーションエラー');
      }

      // 送信中
      progressCallback('sending');

      const result = await this.submit(form, url);

      // 成功
      progressCallback('success');

      return result;
    } catch (error) {
      // エラー
      progressCallback('error');
      throw error;
    }
  },

  // ダウンロード用にデータをシリアライズ
  serializeForDownload: function (form, format) {
    const data = this.getFormData(form);

    switch (format) {
      case 'json':
        return JSON.stringify(data, null, 2);

      case 'csv':
        const keys = Object.keys(data);
        const header = keys.join(',');
        const values = keys
          .map(key => {
            const value = data[key];
            // 値に引用符を追加（CSVのエスケープ）
            return `"${value}"`;
          })
          .join(',');
        return `${header}\n${values}`;

      default:
        return null;
    }
  },
};
