// File Download Handler
// フォームデータをテキストファイルや画像として直接ダウンロード

const FileDownloadHandler = {
    // 初期化
    init: function() {
        this.setupDownloadButtons();
    },

    // ダウンロードボタンの設定
    // setupDownloadButtons: function() {
    //     // ボタンコンテナを作成
    //     const container = document.createElement('div');
    //     container.className = 'file-download-container';
    //     container.style.cssText = `
    //         position: fixed;
    //         bottom: 80px;
    //         right: 20px;
    //         display: flex;
    //         flex-direction: column;
    //         gap: 10px;
    //         z-index: 999;
    //     `;

    //     // テキストファイルダウンロードボタン
    //     const textDownloadBtn = document.createElement('button');
    //     textDownloadBtn.type = 'button';
    //     textDownloadBtn.textContent = '📄 テキストで保存';
    //     textDownloadBtn.className = 'btn btn-download-text';
    //     textDownloadBtn.style.cssText = `
    //         padding: 10px 20px;
    //         background: #6c757d;
    //         color: white;
    //         border: none;
    //         border-radius: 4px;
    //         cursor: pointer;
    //         font-size: 14px;
    //         white-space: nowrap;
    //     `;
    //     textDownloadBtn.addEventListener('click', () => {
    //         this.downloadAsTextFile();
    //     });

    //     // CSVダウンロードボタン
    //     const csvDownloadBtn = document.createElement('button');
    //     csvDownloadBtn.type = 'button';
    //     csvDownloadBtn.textContent = '📊 CSVで保存';
    //     csvDownloadBtn.className = 'btn btn-download-csv';
    //     csvDownloadBtn.style.cssText = `
    //         padding: 10px 20px;
    //         background: #20c997;
    //         color: white;
    //         border: none;
    //         border-radius: 4px;
    //         cursor: pointer;
    //         font-size: 14px;
    //         white-space: nowrap;
    //     `;
    //     csvDownloadBtn.addEventListener('click', () => {
    //         this.downloadAsCSV();
    //     });

    //     // 画像ダウンロードボタン
    //     const imageDownloadBtn = document.createElement('button');
    //     imageDownloadBtn.type = 'button';
    //     imageDownloadBtn.textContent = '🖼️ 画像を保存';
    //     imageDownloadBtn.className = 'btn btn-download-images';
    //     imageDownloadBtn.style.cssText = `
    //         padding: 10px 20px;
    //         background: #fd7e14;
    //         color: white;
    //         border: none;
    //         border-radius: 4px;
    //         cursor: pointer;
    //         font-size: 14px;
    //         white-space: nowrap;
    //     `;
    //     imageDownloadBtn.addEventListener('click', () => {
    //         this.downloadImages();
    //     });

    //     // 完全バックアップボタン
    //     const fullBackupBtn = document.createElement('button');
    //     fullBackupBtn.type = 'button';
    //     fullBackupBtn.textContent = '💾 完全バックアップ';
    //     fullBackupBtn.className = 'btn btn-full-backup';
    //     fullBackupBtn.style.cssText = `
    //         padding: 10px 20px;
    //         background: #e83e8c;
    //         color: white;
    //         border: none;
    //         border-radius: 4px;
    //         cursor: pointer;
    //         font-size: 14px;
    //         white-space: nowrap;
    //     `;
    //     fullBackupBtn.addEventListener('click', () => {
    //         this.createFullBackup();
    //     });

    //     container.appendChild(textDownloadBtn);
    //     container.appendChild(csvDownloadBtn);
    //     container.appendChild(imageDownloadBtn);
    //     container.appendChild(fullBackupBtn);
    //     document.body.appendChild(container);
    // },

    // フォームデータを収集（日本語ラベル付き）
    collectFormDataWithLabels: function() {
        const form = document.getElementById('styleForm');
        if (!form) return {};

        const data = {
            '基本情報': {},
            'ライフスタイル': {},
            'スタイル選好': {},
            'サービス期待': {},
            'その他': {}
        };

        // 基本情報
        data['基本情報']['お名前'] = form.querySelector('[name="name"]')?.value || '';
        data['基本情報']['メールアドレス'] = form.querySelector('[name="email"]')?.value || '';
        data['基本情報']['電話番号'] = form.querySelector('[name="phone"]')?.value || '';
        data['基本情報']['性別'] = form.querySelector('[name="gender"]:checked')?.value === 'male' ? '男性' : '女性';
        data['基本情報']['生年月日'] = `${form.querySelector('[name="birthYear"]')?.value || ''}年${form.querySelector('[name="birthMonth"]')?.value || ''}月${form.querySelector('[name="birthDay"]')?.value || ''}日`;
        data['基本情報']['身長'] = form.querySelector('[name="height"]')?.value ? `${form.querySelector('[name="height"]').value}cm` : '';
        data['基本情報']['体重'] = form.querySelector('[name="weight"]')?.value ? `${form.querySelector('[name="weight"]').value}kg` : '';

        // 住所
        data['基本情報']['郵便番号'] = form.querySelector('[name="postalCode"]')?.value || '';
        data['基本情報']['都道府県'] = form.querySelector('[name="prefecture"]')?.value || '';
        data['基本情報']['市区町村'] = form.querySelector('[name="city"]')?.value || '';
        data['基本情報']['番地'] = form.querySelector('[name="address"]')?.value || '';
        data['基本情報']['建物名'] = form.querySelector('[name="building"]')?.value || '';

        // ビジネスシーン
        const businessScenes = Array.from(form.querySelectorAll('[name="businessScenes"]:checked'))
            .map(cb => cb.nextElementSibling?.textContent || cb.value);
        data['ライフスタイル']['ビジネスシーン'] = businessScenes.join('、');

        // プライベートシーン
        const privateScenes = Array.from(form.querySelectorAll('[name="privateScenes"]:checked'))
            .map(cb => cb.nextElementSibling?.textContent || cb.value);
        data['ライフスタイル']['プライベートシーン'] = privateScenes.join('、');

        // その他のデータも収集
        data['その他']['登録日時'] = new Date().toLocaleString('ja-JP');

        return data;
    },

    // テキストファイルとしてダウンロード
    downloadAsTextFile: function() {
        const data = this.collectFormDataWithLabels();
        let textContent = 'スタイルフォーム入力内容\n';
        textContent += '=' .repeat(50) + '\n\n';

        for (const [category, items] of Object.entries(data)) {
            textContent += `【${category}】\n`;
            textContent += '-'.repeat(30) + '\n';

            for (const [label, value] of Object.entries(items)) {
                if (value) {
                    textContent += `${label}: ${value}\n`;
                }
            }
            textContent += '\n';
        }

        const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `style-form-${new Date().toISOString().split('T')[0]}.txt`;
        link.click();

        LocalStorageHandler.showSaveNotification('テキストファイルを保存しました');
    },

    // CSVファイルとしてダウンロード
    downloadAsCSV: function() {
        const form = document.getElementById('styleForm');
        if (!form) return;

        const headers = [];
        const values = [];

        // すべての入力フィールドを収集
        const inputs = form.querySelectorAll('input:not([type="file"]), textarea, select');

        inputs.forEach(input => {
            let value = '';
            let label = input.name || 'unknown';

            if (input.type === 'checkbox' || input.type === 'radio') {
                if (input.checked) {
                    // 既存のヘッダーを確認
                    const existingIndex = headers.indexOf(label);
                    if (existingIndex >= 0) {
                        // 複数選択の場合は追加
                        values[existingIndex] = values[existingIndex] ?
                            values[existingIndex] + '；' + input.value : input.value;
                    } else {
                        headers.push(label);
                        values.push(input.value);
                    }
                }
            } else {
                if (!headers.includes(label)) {
                    headers.push(label);
                    values.push(input.value || '');
                }
            }
        });

        // CSV形式に変換
        let csv = '\uFEFF'; // BOM for Excel
        csv += headers.map(h => `"${h}"`).join(',') + '\n';
        csv += values.map(v => `"${v.toString().replace(/"/g, '""')}"`).join(',') + '\n';

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `style-form-${new Date().toISOString().split('T')[0]}.csv`;
        link.click();

        LocalStorageHandler.showSaveNotification('CSVファイルを保存しました');
    },

    // 画像をダウンロード
    downloadImages: function() {
        const savedImages = localStorage.getItem('styleFormImages');
        if (!savedImages) {
            alert('保存された画像がありません');
            return;
        }

        const images = JSON.parse(savedImages);
        let imageCount = 0;

        Object.entries(images).forEach(([inputName, imageData]) => {
            if (imageData.data) {
                // Base64データからBlobを作成
                const base64Data = imageData.data.split(',')[1];
                const byteCharacters = atob(base64Data);
                const byteNumbers = new Array(byteCharacters.length);

                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }

                const byteArray = new Uint8Array(byteNumbers);
                const blob = new Blob([byteArray], { type: imageData.type });

                // ダウンロード
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                const extension = imageData.type.split('/')[1] || 'jpg';
                link.download = `${inputName}-${new Date().toISOString().split('T')[0]}.${extension}`;
                link.click();

                imageCount++;
            }
        });

        if (imageCount > 0) {
            LocalStorageHandler.showSaveNotification(`${imageCount}個の画像を保存しました`);
        }
    },

    // 完全バックアップ（ZIP形式）
    createFullBackup: function() {
        // 注: ZIPファイルの作成にはJSZipライブラリが必要ですが、
        // ここでは簡易的にHTMLファイルとして保存します

        const data = this.collectFormDataWithLabels();
        const savedImages = localStorage.getItem('styleFormImages');
        const images = savedImages ? JSON.parse(savedImages) : {};

        let htmlContent = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>フォームバックアップ - ${new Date().toLocaleDateString('ja-JP')}</title>
    <style>
        body { font-family: 'Noto Sans JP', sans-serif; margin: 20px; background: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h1 { color: #333; border-bottom: 3px solid #ddd; padding-bottom: 10px; }
        .section { margin: 20px 0; }
        .section h2 { color: #555; background: #f8f9fa; padding: 10px; border-radius: 4px; }
        .field { margin: 10px 0; padding: 10px; background: #fafafa; border-left: 3px solid #007bff; }
        .field-label { font-weight: bold; color: #666; }
        .field-value { margin-left: 10px; color: #333; }
        .images { margin-top: 30px; }
        .image-container { margin: 20px 0; text-align: center; }
        .image-container img { max-width: 500px; max-height: 500px; border: 1px solid #ddd; border-radius: 4px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>スタイルフォーム バックアップ</h1>
        <p>保存日時: ${new Date().toLocaleString('ja-JP')}</p>
`;

        // データセクション
        for (const [category, items] of Object.entries(data)) {
            htmlContent += `
        <div class="section">
            <h2>${category}</h2>`;

            for (const [label, value] of Object.entries(items)) {
                if (value) {
                    htmlContent += `
            <div class="field">
                <span class="field-label">${label}:</span>
                <span class="field-value">${value}</span>
            </div>`;
                }
            }

            htmlContent += `
        </div>`;
        }

        // 画像セクション
        if (Object.keys(images).length > 0) {
            htmlContent += `
        <div class="images">
            <h2>アップロード画像</h2>`;

            Object.entries(images).forEach(([inputName, imageData]) => {
                if (imageData.data) {
                    const label = inputName === 'facePhoto' ? '顔写真' : '全身写真';
                    htmlContent += `
            <div class="image-container">
                <h3>${label}</h3>
                <img src="${imageData.data}" alt="${label}">
                <p>ファイル名: ${imageData.name}</p>
            </div>`;
                }
            });

            htmlContent += `
        </div>`;
        }

        htmlContent += `
    </div>
</body>
</html>`;

        const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `form-backup-${new Date().toISOString().split('T')[0]}.html`;
        link.click();

        LocalStorageHandler.showSaveNotification('完全バックアップを作成しました');
    }
};

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    FileDownloadHandler.init();
});