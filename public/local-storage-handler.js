// Local Storage Handler for Form Data and Images
// 入力内容と画像をローカルストレージに保存

const LocalStorageHandler = {
    // ストレージキー
    FORM_DATA_KEY: 'styleFormData',
    FORM_IMAGES_KEY: 'styleFormImages',

    // 初期化
    init: function() {
        // フォームの自動保存を設定
        this.setupAutoSave();

        // ページ読み込み時に保存データを復元
        this.restoreFormData();

        // 保存・読み込みボタンの設定
        this.setupButtons();
    },

    // 自動保存の設定
    setupAutoSave: function() {
        const form = document.getElementById('styleForm');
        if (!form) return;

        // 入力フィールドの変更を監視
        const inputs = form.querySelectorAll('input, textarea, select');
        let saveTimeout;

        inputs.forEach(input => {
            // テキスト入力の場合
            if (input.type === 'text' || input.type === 'email' || input.type === 'tel' ||
                input.type === 'number' || input.tagName === 'TEXTAREA') {
                input.addEventListener('input', () => {
                    clearTimeout(saveTimeout);
                    saveTimeout = setTimeout(() => {
                        this.saveFormData();
                        // this.showSaveNotification();
                    }, 1000); // 1秒後に保存
                });
            }
            // チェックボックス、ラジオボタン、セレクトボックスの場合
            else if (input.type === 'checkbox' || input.type === 'radio' || input.tagName === 'SELECT') {
                input.addEventListener('change', () => {
                    this.saveFormData();
                    // this.showSaveNotification();
                });
            }
        });

        // ファイル入力の処理
        const fileInputs = form.querySelectorAll('input[type="file"]');
        fileInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                this.saveImageFile(e.target);
            });
        });
    },

    // フォームデータの保存
    saveFormData: function() {
        const form = document.getElementById('styleForm');
        if (!form) return;

        const formData = {};

        // すべての入力フィールドのデータを収集
        const inputs = form.querySelectorAll('input, textarea, select');

        inputs.forEach(input => {
            if (input.type === 'file') return; // ファイルは別処理

            if (input.type === 'checkbox') {
                if (!formData[input.name]) {
                    formData[input.name] = [];
                }
                if (input.checked) {
                    formData[input.name].push(input.value);
                }
            } else if (input.type === 'radio') {
                if (input.checked) {
                    formData[input.name] = input.value;
                }
            } else {
                formData[input.name] = input.value;
            }
        });

        // タイムスタンプを追加
        formData.lastSaved = new Date().toISOString();

        // ローカルストレージに保存
        try {
            localStorage.setItem(this.FORM_DATA_KEY, JSON.stringify(formData));
            console.log('Form data saved:', formData);
        } catch (e) {
            console.error('Failed to save form data:', e);
            if (e.name === 'QuotaExceededError') {
                alert('ローカルストレージの容量が不足しています。不要なデータを削除してください。');
            }
        }
    },

    // 画像ファイルの保存
    saveImageFile: function(fileInput) {
        if (!fileInput.files || !fileInput.files[0]) return;

        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                // 既存の画像データを取得
                const savedImages = JSON.parse(localStorage.getItem(this.FORM_IMAGES_KEY) || '{}');

                // 画像データを保存（Base64形式）
                savedImages[fileInput.name] = {
                    data: e.target.result,
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    lastModified: file.lastModified
                };

                localStorage.setItem(this.FORM_IMAGES_KEY, JSON.stringify(savedImages));
                console.log(`Image saved: ${fileInput.name}`);

                // this.showSaveNotification('画像を保存しました');
            } catch (error) {
                console.error('Failed to save image:', error);
                if (error.name === 'QuotaExceededError') {
                    alert('画像サイズが大きすぎます。より小さい画像を使用してください。');
                }
            }
        };

        reader.readAsDataURL(file);
    },

    // フォームデータの復元
    restoreFormData: function() {
        try {
            // 保存されたフォームデータを取得
            const savedData = localStorage.getItem(this.FORM_DATA_KEY);
            if (!savedData) return;

            const formData = JSON.parse(savedData);
            const form = document.getElementById('styleForm');
            if (!form) return;

            // フォームフィールドに値を設定
            Object.keys(formData).forEach(name => {
                if (name === 'lastSaved') return;

                const value = formData[name];

                // チェックボックスの処理
                if (Array.isArray(value)) {
                    value.forEach(val => {
                        const checkbox = form.querySelector(`input[name="${name}"][value="${val}"]`);
                        if (checkbox) checkbox.checked = true;
                    });
                }
                // ラジオボタンの処理
                else {
                    const radios = form.querySelectorAll(`input[name="${name}"][type="radio"]`);
                    if (radios.length > 0) {
                        radios.forEach(radio => {
                            if (radio.value === value) {
                                radio.checked = true;
                            }
                        });
                    }
                    // その他の入力フィールド
                    else {
                        const input = form.querySelector(`[name="${name}"]`);
                        if (input) {
                            input.value = value;
                        }
                    }
                }
            });

            // 画像の復元
            this.restoreImages();

            // 最終保存時刻を表示
            if (formData.lastSaved) {
                const lastSaved = new Date(formData.lastSaved);
                console.log(`Form data restored from: ${lastSaved.toLocaleString('ja-JP')}`);
            }

        } catch (error) {
            console.error('Failed to restore form data:', error);
        }
    },

    // 画像の復元
    restoreImages: function() {
        try {
            const savedImages = localStorage.getItem(this.FORM_IMAGES_KEY);
            if (!savedImages) return;

            const images = JSON.parse(savedImages);

            Object.keys(images).forEach(inputName => {
                const imageData = images[inputName];

                // プレビュー要素を探す
                let previewElement;
                if (inputName === 'facePhoto') {
                    previewElement = document.getElementById('facePhotoPreview');
                } else if (inputName === 'bodyPhoto') {
                    previewElement = document.getElementById('bodyPhotoPreview');
                }

                if (previewElement && imageData.data) {
                    previewElement.innerHTML = `<img src="${imageData.data}" alt="${imageData.name}">`;
                    console.log(`Image restored: ${inputName}`);
                }
            });

        } catch (error) {
            console.error('Failed to restore images:', error);
        }
    },

    // 保存通知の表示
    showSaveNotification: function(message = '自動保存しました') {
        let notification = document.getElementById('saveNotification');
        if (!notification) {
            // 既存の要素を確認
            notification = document.querySelector('.save-notification');
        }

        if (!notification) {
            // 通知要素を作成
            const notif = document.createElement('div');
            notif.id = 'saveNotification';
            notif.className = 'save-notification';
            notif.innerHTML = `<span>✓ ${message}</span>`;
            document.body.appendChild(notif);
            notification = notif;
        } else {
            notification.querySelector('span').textContent = `✓ ${message}`;
        }

        // 通知を表示
        setTimeout(() => {
            const notif = document.getElementById('saveNotification');
            if (notif) {
                notif.classList.add('show');

                // 3秒後に非表示
                setTimeout(() => {
                    notif.classList.remove('show');
                }, 3000);
            }
        }, 100);
    },


    // すべてのデータをクリア
    clearAllData: function() {
        localStorage.removeItem(this.FORM_DATA_KEY);
        localStorage.removeItem(this.FORM_IMAGES_KEY);
        // this.showSaveNotification('データをクリアしました');

        // フォームをリセット
        const form = document.getElementById('styleForm');
        if (form) {
            form.reset();
        }

        // 画像プレビューをクリア
        const previews = ['facePhotoPreview', 'bodyPhotoPreview'];
        previews.forEach(id => {
            const preview = document.getElementById(id);
            if (preview) {
                preview.innerHTML = '';
            }
        });
    },

    // データのエクスポート
    exportData: function() {
        const exportData = {
            formData: JSON.parse(localStorage.getItem(this.FORM_DATA_KEY) || '{}'),
            images: JSON.parse(localStorage.getItem(this.FORM_IMAGES_KEY) || '{}'),
            exportDate: new Date().toISOString()
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `form-data-${new Date().toISOString().split('T')[0]}.json`;
        link.click();

        // this.showSaveNotification('データをエクスポートしました');
    },

    // データのインポート
    importData: function(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);

                // データの検証
                if (!importedData.formData || typeof importedData.formData !== 'object') {
                    throw new Error('Invalid data format');
                }

                // 確認ダイアログ
                if (confirm('現在のデータを上書きしますか？')) {
                    // フォームデータを保存
                    localStorage.setItem(this.FORM_DATA_KEY, JSON.stringify(importedData.formData));

                    // 画像データを保存
                    if (importedData.images) {
                        localStorage.setItem(this.FORM_IMAGES_KEY, JSON.stringify(importedData.images));
                    }

                    // データを復元
                    this.restoreFormData();

                    // this.showSaveNotification('データをインポートしました');
                }
            } catch (error) {
                console.error('Import failed:', error);
                alert('インポートに失敗しました。正しいファイルを選択してください。');
            }
        };

        reader.readAsText(file);
    }
};

// DOMContentLoadedで初期化
document.addEventListener('DOMContentLoaded', () => {
    LocalStorageHandler.init();
});