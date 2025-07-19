// Image Upload Handler
// 画像のアップロードと処理を管理

const ImageUploadHandler = {
    // 設定
    config: {
        maxFileSize: 10 * 1024 * 1024, // 10MB
        allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
        imageQuality: 0.8, // 圧縮品質
        maxWidth: 1200, // 最大幅
        maxHeight: 1200 // 最大高さ
    },
    

    // 初期化
    init: function() {
        // アップロードセクションを追加
        this.addUploadSection();

        // イベントリスナーを設定
        this.setupEventListeners();

        // スタイルを追加
        this.addStyles();
    },

    // アップロードセクションを追加
    addUploadSection: function() {
        // セクション1の後に追加
        const section1 = document.getElementById('section1');
        if (section1) {
            const uploadSection = this.createUploadSection();
            section1.appendChild(uploadSection);
        }
    },

    // イベントリスナーを設定
    setupEventListeners: function() {
        // 顔写真
        this.setupUploadArea('face');

        // 全身写真
        this.setupUploadArea('body');

        // その他の写真
        this.setupUploadArea('other', true);
    },

    // アップロードエリアの設定
    setupUploadArea: function(type, multiple = false) {
        const area = document.getElementById(`${type}-upload-area`);
        const input = document.getElementById(`${type}-photo-input`);
        const placeholder = document.getElementById(`${type}-upload-placeholder`);

        if (!area || !input || !placeholder) return;

        // クリックイベント
        placeholder.addEventListener('click', () => input.click());

        // ドラッグ&ドロップ
        area.addEventListener('dragover', (e) => {
            e.preventDefault();
            area.classList.add('drag-over');
        });

        area.addEventListener('dragleave', () => {
            area.classList.remove('drag-over');
        });

        area.addEventListener('drop', (e) => {
            e.preventDefault();
            area.classList.remove('drag-over');

            const files = multiple ? e.dataTransfer.files : [e.dataTransfer.files[0]];
            this.handleFiles(type, files, multiple);
        });

        // ファイル選択
        input.addEventListener('change', (e) => {
            const files = multiple ? e.target.files : [e.target.files[0]];
            this.handleFiles(type, files, multiple);
        });
    },

    // ファイル処理
    handleFiles: async function(type, files, multiple = false) {
        const validFiles = [];

        for (const file of files) {
            if (this.validateFile(file)) {
                validFiles.push(file);
            }
        }

        if (validFiles.length === 0) return;

        if (multiple) {
            // 複数ファイルの処理
            for (const file of validFiles) {
                await this.processImage(type, file, true);
            }
        } else {
            // 単一ファイルの処理
            await this.processImage(type, validFiles[0]);
        }
    },

    // ファイル検証
    validateFile: function(file) {
        // ファイルタイプチェック
        if (!this.config.allowedTypes.includes(file.type)) {
            alert('対応していないファイル形式です。JPEG、PNG、WebPのみ対応しています。');
            return false;
        }

        // ファイルサイズチェック
        if (file.size > this.config.maxFileSize) {
            alert('ファイルサイズが大きすぎます。10MB以下の画像を選択してください。');
            return false;
        }

        return true;
    },

    // 画像処理
    processImage: async function(type, file, isMultiple = false) {
        try {
            // 画像を読み込む
            const originalDataUrl = await this.readFile(file);

            // 画像を圧縮・リサイズ
            const compressedDataUrl = await this.compressImage(originalDataUrl);

            // プレビューを表示
            this.showPreview(type, compressedDataUrl, isMultiple);

            // データを保存
            this.saveImageData(type, compressedDataUrl, file.name);

        } catch (error) {
            console.error('画像処理エラー:', error);
            alert('画像の処理中にエラーが発生しました。');
        }
    },

    // ファイル読み込み
    readFile: function(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    },

    // 画像圧縮・リサイズ
    compressImage: function(dataUrl) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // サイズ計算
                let { width, height } = img;

                if (width > this.config.maxWidth || height > this.config.maxHeight) {
                    const ratio = Math.min(
                        this.config.maxWidth / width,
                        this.config.maxHeight / height
                    );
                    width *= ratio;
                    height *= ratio;
                }

                canvas.width = width;
                canvas.height = height;

                // 描画
                ctx.drawImage(img, 0, 0, width, height);

                // 圧縮
                resolve(canvas.toDataURL('image/jpeg', this.config.imageQuality));
            };
            img.src = dataUrl;
        });
    },

    // プレビュー表示
    showPreview: function(type, dataUrl, isMultiple = false) {
        const placeholder = document.getElementById(`${type}-upload-placeholder`);
        const preview = document.getElementById(`${type}-preview`);

        if (isMultiple) {
            // 複数画像の場合
            placeholder.style.display = 'none';
            preview.style.display = 'block';

            const container = document.getElementById('other-preview-container');
            const imageDiv = document.createElement('div');
            imageDiv.className = 'preview-item';
            imageDiv.innerHTML = `
                <img src="${dataUrl}" alt="プレビュー">
                <button type="button" class="remove-btn" onclick="this.parentElement.remove()">×</button>
            `;
            container.appendChild(imageDiv);
        } else {
            // 単一画像の場合
            const img = document.getElementById(`${type}-preview-img`);
            placeholder.style.display = 'none';
            preview.style.display = 'block';
            img.src = dataUrl;
        }
    },

    // 画像削除
    removeImage: function(type) {
        const placeholder = document.getElementById(`${type}-upload-placeholder`);
        const preview = document.getElementById(`${type}-preview`);
        const img = document.getElementById(`${type}-preview-img`);

        placeholder.style.display = 'block';
        preview.style.display = 'none';
        img.src = '';

        // 保存データをクリア
        this.clearImageData(type);
    },

    // 画像データを保存
    saveImageData: function(type, dataUrl, fileName) {
        if (!window.uploadedImages) {
            window.uploadedImages = {};
        }

        if (type === 'other') {
            if (!window.uploadedImages.other) {
                window.uploadedImages.other = [];
            }
            window.uploadedImages.other.push({
                dataUrl: dataUrl,
                fileName: fileName,
                uploadedAt: new Date().toISOString()
            });
        } else {
            window.uploadedImages[type] = {
                dataUrl: dataUrl,
                fileName: fileName,
                uploadedAt: new Date().toISOString()
            };
        }
    },

    // 画像データをクリア
    clearImageData: function(type) {
        if (window.uploadedImages) {
            delete window.uploadedImages[type];
        }
    },

    // アップロードされた画像を取得
    getUploadedImages: function() {
        return window.uploadedImages || {};
    },

    // スタイルを追加
    addStyles: function() {
        const style = document.createElement('style');
        style.textContent = `
            .image-upload-section {
                margin-top: 40px;
                padding-top: 40px;
                border-top: 1px solid #eee;
            }

            .upload-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 30px;
                margin-top: 30px;
            }

            .upload-card {
                background: #f9f9f9;
                border-radius: 12px;
                padding: 20px;
            }

            .upload-title {
                margin: 0 0 15px;
                font-size: 16px;
                font-weight: 600;
                color: #333;
            }

            .upload-area {
                border: 2px dashed #ddd;
                border-radius: 8px;
                background: white;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }

            .upload-area.drag-over {
                border-color: var(--accent-gold);
                background: #fffef5;
            }

            .upload-placeholder {
                padding: 40px 20px;
                text-align: center;
                cursor: pointer;
            }

            .upload-icon {
                font-size: 48px;
                margin-bottom: 10px;
                opacity: 0.6;
            }

            .upload-placeholder p {
                margin: 5px 0;
                color: #666;
                font-size: 14px;
            }

            .upload-hint {
                font-size: 12px !important;
                color: #999 !important;
            }

            .upload-preview {
                position: relative;
            }

            .upload-preview img {
                width: 100%;
                height: 250px;
                object-fit: cover;
                border-radius: 8px;
            }

            .remove-btn {
                position: absolute;
                top: 10px;
                right: 10px;
                background: rgba(0, 0, 0, 0.7);
                color: white;
                border: none;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                cursor: pointer;
                font-size: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background 0.2s;
            }

            .remove-btn:hover {
                background: rgba(0, 0, 0, 0.9);
            }

            .multiple-preview {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                gap: 10px;
                padding: 10px;
            }

            .preview-item {
                position: relative;
            }

            .preview-item img {
                width: 100%;
                height: 100px;
                object-fit: cover;
                border-radius: 4px;
            }

            .preview-item .remove-btn {
                width: 24px;
                height: 24px;
                font-size: 14px;
            }

            .upload-note {
                margin-top: 20px;
                font-size: 12px;
                color: #666;
                text-align: center;
            }

            @media (max-width: 768px) {
                .upload-grid {
                    grid-template-columns: 1fr;
                }
            }
        `;
        document.head.appendChild(style);
    }
};

// DOMContentLoadedで初期化
document.addEventListener('DOMContentLoaded', () => {
    ImageUploadHandler.init();
});

// グローバルアクセス用
window.ImageUploadHandler = ImageUploadHandler;