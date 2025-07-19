// Google Sheets Easy Setup
// Google スプレッドシート連携を簡単にセットアップ

const GoogleSheetsEasySetup = {
    // セットアップ状態を確認
    checkSetup: function() {
        const scriptUrl = GoogleSheetsIntegration?.SCRIPT_URL || '';
        return scriptUrl && scriptUrl !== 'YOUR_SCRIPT_URL_HERE';
    },
    
    // セットアップダイアログを表示
    showSetupDialog: function() {
        // 既存のダイアログを削除
        const existingDialog = document.getElementById('sheets-setup-dialog');
        if (existingDialog) {
            existingDialog.remove();
        }
        
        const dialog = document.createElement('div');
        dialog.id = 'sheets-setup-dialog';
        dialog.innerHTML = `
            <div class="setup-overlay">
                <div class="setup-content">
                    <h2>Google スプレッドシート連携設定</h2>
                    
                    <div class="setup-status">
                        ${this.checkSetup() 
                            ? '<span class="status-ok">✓ 設定済み</span>' 
                            : '<span class="status-not-set">✗ 未設定</span>'}
                    </div>
                    
                    <div class="setup-steps">
                        <h3>セットアップ手順</h3>
                        <ol>
                            <li>
                                <a href="https://sheets.google.com" target="_blank" class="setup-link">
                                    新しいGoogleスプレッドシートを作成
                                </a>
                            </li>
                            <li>拡張機能 → Apps Script を開く</li>
                            <li>
                                <button onclick="GoogleSheetsEasySetup.copyScript()" class="copy-btn">
                                    スクリプトをコピー
                                </button>
                                して貼り付け
                            </li>
                            <li>デプロイ → 新しいデプロイ → ウェブアプリ</li>
                            <li>アクセス: 全員、実行: 自分 → デプロイ</li>
                            <li>URLをコピーして下に貼り付け：</li>
                        </ol>
                        
                        <div class="url-input-section">
                            <input type="text" 
                                   id="script-url-input" 
                                   placeholder="https://script.google.com/macros/s/.../exec"
                                   value="${GoogleSheetsIntegration?.SCRIPT_URL || ''}"
                                   class="url-input">
                            <button onclick="GoogleSheetsEasySetup.saveUrl()" class="save-btn">
                                保存
                            </button>
                        </div>
                        
                        <div class="test-section">
                            <button onclick="GoogleSheetsEasySetup.testConnection()" class="test-btn">
                                接続テスト
                            </button>
                            <div id="test-result"></div>
                        </div>
                    </div>
                    
                    <div class="setup-actions">
                        <button onclick="GoogleSheetsEasySetup.closeDialog()" class="close-btn">
                            閉じる
                        </button>
                        <a href="google-sheets-setup.md" target="_blank" class="help-link">
                            詳細なヘルプ
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        // スタイルを追加
        const style = document.createElement('style');
        style.textContent = `
            #sheets-setup-dialog {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
            }
            
            .setup-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }
            
            .setup-content {
                background: white;
                border-radius: 12px;
                padding: 30px;
                max-width: 600px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            }
            
            .setup-content h2 {
                margin: 0 0 20px;
                color: #333;
                font-size: 24px;
            }
            
            .setup-content h3 {
                margin: 20px 0 10px;
                color: #555;
                font-size: 18px;
            }
            
            .setup-status {
                padding: 15px;
                background: #f5f5f5;
                border-radius: 8px;
                margin-bottom: 20px;
                text-align: center;
            }
            
            .status-ok {
                color: #10B981;
                font-weight: bold;
                font-size: 18px;
            }
            
            .status-not-set {
                color: #EF4444;
                font-weight: bold;
                font-size: 18px;
            }
            
            .setup-steps ol {
                line-height: 2;
                color: #333;
            }
            
            .setup-link {
                color: #3B82F6;
                text-decoration: none;
                border-bottom: 1px solid #3B82F6;
            }
            
            .setup-link:hover {
                color: #2563EB;
            }
            
            .copy-btn, .save-btn, .test-btn {
                padding: 8px 16px;
                background: #3B82F6;
                color: white;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-size: 14px;
                transition: background 0.2s;
            }
            
            .copy-btn:hover, .save-btn:hover, .test-btn:hover {
                background: #2563EB;
            }
            
            .url-input-section {
                margin: 20px 0;
                display: flex;
                gap: 10px;
            }
            
            .url-input {
                flex: 1;
                padding: 10px;
                border: 2px solid #ddd;
                border-radius: 6px;
                font-size: 14px;
            }
            
            .url-input:focus {
                outline: none;
                border-color: #3B82F6;
            }
            
            .test-section {
                margin: 20px 0;
                text-align: center;
            }
            
            #test-result {
                margin-top: 15px;
                padding: 10px;
                border-radius: 6px;
                font-size: 14px;
            }
            
            #test-result.success {
                background: #D1FAE5;
                color: #065F46;
            }
            
            #test-result.error {
                background: #FEE2E2;
                color: #991B1B;
            }
            
            .setup-actions {
                margin-top: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .close-btn {
                padding: 10px 20px;
                background: #6B7280;
                color: white;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-size: 16px;
            }
            
            .close-btn:hover {
                background: #4B5563;
            }
            
            .help-link {
                color: #6B7280;
                text-decoration: none;
            }
            
            .help-link:hover {
                text-decoration: underline;
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(dialog);
    },
    
    // スクリプトをコピー
    copyScript: async function() {
        try {
            const response = await fetch('google-apps-script.gs');
            const script = await response.text();
            
            await navigator.clipboard.writeText(script);
            alert('スクリプトをコピーしました！\nGoogle Apps Scriptエディタに貼り付けてください。');
        } catch (error) {
            alert('スクリプトのコピーに失敗しました。\nファイル google-apps-script.gs を手動でコピーしてください。');
        }
    },
    
    // URLを保存
    saveUrl: function() {
        const urlInput = document.getElementById('script-url-input');
        const url = urlInput.value.trim();
        
        if (!url) {
            alert('URLを入力してください');
            return;
        }
        
        if (!url.includes('script.google.com/macros/s/')) {
            alert('正しいGoogle Apps Script URLを入力してください');
            return;
        }
        
        // GoogleSheetsIntegrationのURLを更新
        if (typeof GoogleSheetsIntegration !== 'undefined') {
            GoogleSheetsIntegration.SCRIPT_URL = url;
            
            // ローカルストレージに保存
            localStorage.setItem('google_sheets_script_url', url);
            
            alert('URLを保存しました！');
            
            // ステータスを更新
            const statusElement = document.querySelector('.setup-status');
            if (statusElement) {
                statusElement.innerHTML = '<span class="status-ok">✓ 設定済み</span>';
            }
        }
    },
    
    // 接続テスト
    testConnection: async function() {
        const resultDiv = document.getElementById('test-result');
        resultDiv.textContent = 'テスト中...';
        resultDiv.className = '';
        
        try {
            // テストデータ
            const testData = {
                action: 'test',
                timestamp: new Date().toISOString()
            };
            
            const response = await fetch(GoogleSheetsIntegration.SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(testData)
            });
            
            // no-corsモードでは実際のレスポンスは取得できないが、
            // エラーが発生しなければ成功とみなす
            resultDiv.textContent = '✓ 接続成功！スプレッドシートを確認してください。';
            resultDiv.className = 'success';
            
        } catch (error) {
            resultDiv.textContent = '✗ 接続失敗: ' + error.message;
            resultDiv.className = 'error';
        }
    },
    
    // ダイアログを閉じる
    closeDialog: function() {
        const dialog = document.getElementById('sheets-setup-dialog');
        if (dialog) {
            dialog.remove();
        }
    },
    
    // 初期化
    init: function() {
        // ローカルストレージから保存されたURLを読み込む
        const savedUrl = localStorage.getItem('google_sheets_script_url');
        if (savedUrl && typeof GoogleSheetsIntegration !== 'undefined') {
            GoogleSheetsIntegration.SCRIPT_URL = savedUrl;
        }
        
        // セットアップボタンは追加しない（無効化）
        // this.addSetupButton();
    },
    
    // セットアップボタンを追加
    addSetupButton: function() {
        const button = document.createElement('button');
        button.id = 'sheets-setup-button';
        button.innerHTML = `
            <span>📊</span>
            <span>スプレッドシート設定</span>
        `;
        button.onclick = () => this.showSetupDialog();
        
        button.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 12px 20px;
            background: ${this.checkSetup() ? '#10B981' : '#EF4444'};
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s;
            z-index: 1000;
        `;
        
        button.onmouseover = () => {
            button.style.transform = 'translateY(-2px)';
            button.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
        };
        
        button.onmouseout = () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        };
        
        document.body.appendChild(button);
    }
};

// DOMContentLoadedで初期化
document.addEventListener('DOMContentLoaded', () => {
    GoogleSheetsEasySetup.init();
});

// グローバルアクセス用
window.GoogleSheetsEasySetup = GoogleSheetsEasySetup;