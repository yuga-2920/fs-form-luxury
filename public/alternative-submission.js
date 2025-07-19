// Alternative Form Submission Handler
// Google Sheets APIの代わりにEmailやWebhookを使用

const AlternativeSubmission = {
    // Option 1: メールで送信（mailto:リンク）
    submitViaEmail: function(formData) {
        const subject = encodeURIComponent('フォーム送信 - ' + new Date().toLocaleString());
        let body = 'フォーム送信内容:\n\n';
        
        for (let [key, value] of formData.entries()) {
            if (value && !(value instanceof File)) {
                body += `${key}: ${value}\n`;
            }
        }
        
        const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    },
    
    // Option 2: JSONデータをダウンロード
    downloadAsJSON: function(formData) {
        const data = {};
        for (let [key, value] of formData.entries()) {
            if (!(value instanceof File)) {
                data[key] = value;
            }
        }
        
        const jsonStr = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `form-submission-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },
    
    // Option 3: ローカルストレージに保存
    saveToLocalStorage: function(formData) {
        const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
        const data = {
            timestamp: new Date().toISOString(),
            data: {}
        };
        
        for (let [key, value] of formData.entries()) {
            if (!(value instanceof File)) {
                data.data[key] = value;
            }
        }
        
        submissions.push(data);
        localStorage.setItem('formSubmissions', JSON.stringify(submissions));
        
        // 保存されたデータを表示
        console.log('Saved submissions:', submissions);
        alert('データがローカルに保存されました。');
    },
    
    // Option 4: Webhookサービスを使用（例：Webhook.site）
    submitToWebhook: async function(formData, webhookUrl) {
        const data = {};
        for (let [key, value] of formData.entries()) {
            if (!(value instanceof File)) {
                data[key] = value;
            }
        }
        
        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                alert('データが送信されました！');
            } else {
                throw new Error('送信に失敗しました');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('送信エラーが発生しました: ' + error.message);
        }
    }
};

// 使用例：フォーム送信時に呼び出す
function handleAlternativeSubmission() {
    const formData = GoogleSheetsIntegration.collectFormData();
    
    // 方法を選択（以下のいずれかを使用）
    // AlternativeSubmission.submitViaEmail(formData);
    // AlternativeSubmission.downloadAsJSON(formData);
    AlternativeSubmission.saveToLocalStorage(formData);
    // AlternativeSubmission.submitToWebhook(formData, 'YOUR_WEBHOOK_URL');
}