// Local Storage Handler Module
export const LocalStorageHandler = {
  // ストレージキー
  FORM_DATA_KEY: 'styleFormData',
  FORM_IMAGES_KEY: 'styleFormImages',

  // フォームデータを保存
  saveFormData: function () {
    const form = document.getElementById('styleForm');
    if (!form) return;

    const formData = {};
    const inputs = form.querySelectorAll('input, textarea, select');

    inputs.forEach(input => {
      if (input.type === 'checkbox') {
        formData[input.name] = input.checked;
      } else if (input.type === 'radio') {
        if (input.checked) {
          formData[input.name] = input.value;
        }
      } else {
        formData[input.name] = input.value;
      }
    });

    localStorage.setItem(this.FORM_DATA_KEY, JSON.stringify(formData));
  },

  // フォームデータを復元
  restoreFormData: function () {
    const form = document.getElementById('styleForm');
    if (!form) return;

    const savedData = localStorage.getItem(this.FORM_DATA_KEY);
    if (!savedData) return;

    try {
      const formData = JSON.parse(savedData);
      const inputs = form.querySelectorAll('input, textarea, select');

      inputs.forEach(input => {
        if (formData.hasOwnProperty(input.name)) {
          if (input.type === 'checkbox') {
            input.checked = formData[input.name];
          } else if (input.type === 'radio') {
            input.checked = input.value === formData[input.name];
          } else {
            input.value = formData[input.name];
          }
        }
      });
    } catch (e) {
      console.error('Failed to restore form data:', e);
    }
  },

  // 保存データをクリア
  clearFormData: function () {
    localStorage.removeItem(this.FORM_DATA_KEY);
    localStorage.removeItem(this.FORM_IMAGES_KEY);
  },
};
