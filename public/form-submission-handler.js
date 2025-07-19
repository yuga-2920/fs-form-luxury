// Form Submission Handler
// フォーム送信処理を管理

const FormSubmissionHandler = {
    // 初期化
    init: function() {
        const form = document.getElementById('personalStyleForm');
        const submitBtn = document.getElementById('submitBtn');
        
        if (form && submitBtn) {
            form.addEventListener('submit', this.handleSubmit.bind(this));
        }
    },
    
    // フォーム送信処理
    handleSubmit: async function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submitBtn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        try {
            // ボタンの状態を変更
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-block';
            
            // Google Sheetsに送信
            const success = await GoogleSheetsConnector.submitForm();
            
            if (success) {
                // 成功メッセージ
                this.showSuccessMessage();
                
                // フォームをリセット（オプション）
                // form.reset();
                
                // ローカルストレージをクリア（オプション）
                // localStorage.removeItem('formData');
            }
            
        } catch (error) {
            console.error('送信エラー:', error);
            this.showErrorMessage();
        } finally {
            // ボタンの状態を元に戻す
            submitBtn.disabled = false;
            btnText.style.display = 'inline-block';
            btnLoading.style.display = 'none';
        }
    },
    
    // 成功メッセージ表示
    showSuccessMessage: function() {
        const message = document.createElement('div');
        message.className = 'submission-message success';
        message.innerHTML = `
            <div class="message-content">
                <h3>送信完了</h3>
                <p>フォームが正常に送信されました。</p>
                <p>ご回答ありがとうございました。</p>
            </div>
        `;
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            z-index: 10000;
            text-align: center;
            max-width: 400px;
        `;
        
        document.body.appendChild(message);
        
        // 5秒後に削除
        setTimeout(() => {
            message.remove();
        }, 5000);
    },
    
    // エラーメッセージ表示
    showErrorMessage: function() {
        const message = document.createElement('div');
        message.className = 'submission-message error';
        message.innerHTML = `
            <div class="message-content">
                <h3>送信エラー</h3>
                <p>フォームの送信中にエラーが発生しました。</p>
                <p>しばらく待ってから再度お試しください。</p>
            </div>
        `;
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            z-index: 10000;
            text-align: center;
            max-width: 400px;
            border: 2px solid #f44336;
        `;
        
        document.body.appendChild(message);
        
        // 5秒後に削除
        setTimeout(() => {
            message.remove();
        }, 5000);
    }
};

// DOMContentLoadedで初期化
document.addEventListener('DOMContentLoaded', () => {
    FormSubmissionHandler.init();
});

// グローバルアクセス用
window.FormSubmissionHandler = FormSubmissionHandler;