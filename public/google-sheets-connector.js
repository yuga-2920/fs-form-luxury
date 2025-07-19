// Google Sheets Connector
// Google Sheets APIを使用してフォームデータを保存

const GoogleSheetsConnector = {
    // Google Sheets APIの設定
    config: {
        // Config.jsから読み込む、存在しない場合はlocalStorageから読み込む
        scriptUrl: (typeof Config !== 'undefined' && Config.GOOGLE_SHEETS_URL) 
                   ? Config.GOOGLE_SHEETS_URL 
                   : (localStorage.getItem('googleSheetsUrl') || 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'),
        sheetName: (typeof Config !== 'undefined' && Config.SHEET_NAME) ? Config.SHEET_NAME : 'フォーム回答'
    },
    
    // フォームデータをGoogle Sheetsに送信
    submitToGoogleSheets: async function(formData, images = null) {
        try {
            // ローディング表示
            this.showLoading();
            
            // データの準備
            const payload = {
                action: 'append',
                data: formData,
                sheetName: this.config.sheetName,
                images: images // 画像データを追加
            };
            
            // Google Apps Scriptに送信
            const response = await fetch(this.config.scriptUrl, {
                method: 'POST',
                mode: 'no-cors', // CORSエラーを回避
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            
            // 成功メッセージ
            this.showSuccess();
            
            return true;
        } catch (error) {
            console.error('Google Sheets送信エラー:', error);
            this.showError(error.message);
            return false;
        } finally {
            this.hideLoading();
        }
    },
    
    // フォームデータを整形してGoogle Sheetsに送信
    submitForm: async function() {
        // FormDataExporterを使用してデータを収集
        if (typeof FormDataExporter === 'undefined') {
            console.error('FormDataExporter が見つかりません');
            return false;
        }
        
        const formData = FormDataExporter.collectFormData();
        
        // データを配列形式に変換（Google Sheetsの行形式）
        const rowData = [
            formData.timestamp,
            formData.gender,
            formData.lastName,
            formData.firstName,
            formData.lastNameKana,
            formData.firstNameKana,
            formData.birthDate,
            formData.height,
            formData.weight,
            formData.email,
            formData.phoneNumber,
            formData.postalCode,
            formData.prefecture,
            formData.city,
            formData.address,
            formData.workStyle,
            formData.businessScenes,
            formData.privateScenes,
            formData.weekendActivities,
            formData.domesticTravel,
            formData.overseasTravel,
            formData.dressRegulation,
            formData.attractiveStyles,
            formData.avoidItems,
            formData.brandPreferences,
            formData.fashionKnowledge,
            formData.clothingItems,
            formData.wantedItems,
            formData.companyName,
            formData.department,
            formData.companySize,
            formData.annualRevenue,
            formData.ageDemo,
            formData.appUsage,
            formData.partnerService,
            formData.fittingTime,
            formData.giftService,
            formData.giftFrequency,
            formData.transportService,
            formData.serviceExpectations,
            formData.fashionLiteracy,
            formData.comments
        ];
        
        // 画像データを取得
        const images = formData.images;
        
        return await this.submitToGoogleSheets(rowData, images);
    },
    
    // ローディング表示
    showLoading: function() {
        const loading = document.createElement('div');
        loading.id = 'sheets-loading';
        loading.innerHTML = `
            <div class="loading-overlay">
                <div class="loading-spinner">
                    <div class="spinner"></div>
                    <p>Google Sheetsに送信中...</p>
                </div>
            </div>
        `;
        loading.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        `;
        document.body.appendChild(loading);
    },
    
    // ローディング非表示
    hideLoading: function() {
        const loading = document.getElementById('sheets-loading');
        if (loading) {
            loading.remove();
        }
    },
    
    // 成功メッセージ
    showSuccess: function() {
        const notification = document.createElement('div');
        notification.className = 'sheets-notification success';
        notification.innerHTML = `
            <span>✓ Google Sheetsへの送信が完了しました</span>
        `;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4caf50;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 5000);
    },
    
    // エラーメッセージ
    showError: function(message) {
        const notification = document.createElement('div');
        notification.className = 'sheets-notification error';
        notification.innerHTML = `
            <span>✗ エラー: ${message}</span>
        `;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #f44336;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
};

// スタイルを追加
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .loading-spinner {
        text-align: center;
        color: white;
    }
    
    .spinner {
        width: 50px;
        height: 50px;
        margin: 0 auto 20px;
        border: 5px solid rgba(255, 255, 255, 0.3);
        border-top-color: white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// グローバルアクセス用
window.GoogleSheetsConnector = GoogleSheetsConnector;