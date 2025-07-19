// Form API Connector
// Vercel APIと連携してフォームデータを送信

const FormAPIConnector = {
    // API設定
    config: {
        // 開発環境とプロダクション環境で自動切り替え
        apiUrl: window.location.hostname === 'localhost' 
            ? 'http://localhost:3000/api/submit-form'
            : '/api/submit-form'
    },
    
    // フォームデータを送信
    submitForm: async function() {
        try {
            // FormDataExporterを使用してデータを収集
            if (typeof FormDataExporter === 'undefined') {
                throw new Error('FormDataExporter が見つかりません');
            }
            
            // ローディング表示
            this.showLoading();
            
            // フォームデータを収集
            const formData = FormDataExporter.collectFormData();
            
            // APIに送信
            const response = await fetch(this.config.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (!response.ok) {
                throw new Error(result.message || 'サーバーエラーが発生しました');
            }
            
            // 成功処理
            this.handleSuccess(result);
            
            return result;
            
        } catch (error) {
            console.error('Form submission error:', error);
            this.showError(error.message);
            throw error;
        } finally {
            this.hideLoading();
        }
    },
    
    // 成功処理
    handleSuccess: function(result) {
        // 成功メッセージを表示
        this.showSuccess(result.message || 'データが正常に送信されました');
        
        // お問い合わせ番号を表示
        if (result.id) {
            const inquiryNumber = document.getElementById('inquiryNumber');
            if (inquiryNumber) {
                inquiryNumber.textContent = result.id;
            }
        }
        
        // 完了画面を表示
        const completionScreen = document.getElementById('completionScreen');
        const formContainer = document.querySelector('.complete-form-container');
        
        if (completionScreen && formContainer) {
            formContainer.style.display = 'none';
            completionScreen.style.display = 'flex';
            
            // 上部にスクロール
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // ローカルストレージをクリア（オプション）
        if (typeof LocalStorageHandler !== 'undefined') {
            LocalStorageHandler.clearAll();
        }
    },
    
    // ローディング表示
    showLoading: function() {
        // 既存のローディングを削除
        this.hideLoading();
        
        const loading = document.createElement('div');
        loading.id = 'api-loading';
        loading.innerHTML = `
            <div class="loading-overlay">
                <div class="loading-content">
                    <div class="spinner"></div>
                    <p>送信中...</p>
                </div>
            </div>
        `;
        
        // スタイルを追加
        const style = document.createElement('style');
        style.id = 'api-loading-style';
        style.textContent = `
            #api-loading {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
            }
            
            .loading-content {
                text-align: center;
                color: white;
            }
            
            .spinner {
                width: 60px;
                height: 60px;
                margin: 0 auto 20px;
                border: 4px solid rgba(255, 255, 255, 0.3);
                border-top-color: #D4AF37;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
            
            .loading-content p {
                font-size: 18px;
                font-weight: 300;
                letter-spacing: 0.1em;
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(loading);
    },
    
    // ローディング非表示
    hideLoading: function() {
        const loading = document.getElementById('api-loading');
        const style = document.getElementById('api-loading-style');
        
        if (loading) loading.remove();
        if (style) style.remove();
    },
    
    // 成功メッセージ
    showSuccess: function(message) {
        const notification = document.createElement('div');
        notification.className = 'api-notification success';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">✓</span>
                <span class="notification-message">${message}</span>
            </div>
        `;
        
        // スタイルを追加
        if (!document.getElementById('api-notification-style')) {
            const style = document.createElement('style');
            style.id = 'api-notification-style';
            style.textContent = `
                .api-notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 16px 24px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    z-index: 10000;
                    animation: slideIn 0.3s ease;
                    max-width: 400px;
                }
                
                .api-notification.success {
                    background: #10B981;
                    color: white;
                }
                
                .api-notification.error {
                    background: #EF4444;
                    color: white;
                }
                
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                
                .notification-icon {
                    font-size: 20px;
                    font-weight: bold;
                }
                
                .notification-message {
                    font-size: 16px;
                    line-height: 1.4;
                }
                
                @keyframes slideIn {
                    from {
                        transform: translateX(120%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        // 5秒後に自動削除
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    },
    
    // エラーメッセージ
    showError: function(message) {
        const notification = document.createElement('div');
        notification.className = 'api-notification error';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">✗</span>
                <span class="notification-message">${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // 8秒後に自動削除（エラーは長めに表示）
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }, 8000);
    },
    
    // CSVダウンロード（バックアップ用）
    downloadBackup: function() {
        if (typeof FormDataExporter !== 'undefined') {
            FormDataExporter.downloadCSV(`form_backup_${new Date().toISOString().split('T')[0]}.csv`);
        }
    }
};

// フォーム送信イベントの設定
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.submit-btn');
    const form = document.querySelector('#personalStyleForm');
    
    if (submitButton && form) {
        // 既存のイベントリスナーを削除
        const newSubmitButton = submitButton.cloneNode(true);
        submitButton.parentNode.replaceChild(newSubmitButton, submitButton);
        
        // 新しいイベントリスナーを追加
        newSubmitButton.addEventListener('click', async (e) => {
            e.preventDefault();
            
            // フォームバリデーション
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            
            try {
                // APIに送信
                await FormAPIConnector.submitForm();
            } catch (error) {
                console.error('Submission failed:', error);
            }
        });
    }
    
    // バックアップダウンロードボタン（開発用）
    if (window.location.hostname === 'localhost') {
        const backupBtn = document.createElement('button');
        backupBtn.textContent = 'CSVバックアップ';
        backupBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            padding: 10px 20px;
            background: #6B7280;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            z-index: 1000;
        `;
        backupBtn.onclick = () => FormAPIConnector.downloadBackup();
        document.body.appendChild(backupBtn);
    }
});

// グローバルアクセス用
window.FormAPIConnector = FormAPIConnector;