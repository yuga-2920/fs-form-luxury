// Test Submission
// フォーム送信をテストするためのデバッグツール

const TestSubmission = {
    // テストデータを作成
    createTestData: function() {
        return {
            timestamp: new Date().toISOString(),
            gender: 'male',
            lastName: 'テスト',
            firstName: '太郎',
            lastNameKana: 'テスト',
            firstNameKana: 'タロウ',
            birthDate: '1990-01-01',
            height: '170',
            weight: '65',
            email: 'test@example.com',
            phoneNumber: '090-1234-5678',
            postalCode: '100-0001',
            prefecture: '東京都',
            city: '千代田区',
            address: '千代田1-1',
            workStyle: 'office',
            businessScenes: 'meeting',
            privateScenes: 'dining',
            weekendActivities: 'family',
            domesticTravel: 'city',
            overseasTravel: 'asia',
            dressRegulation: 'business-casual',
            attractiveStyles: 'classic',
            avoidItems: 'logo',
            brandPreferences: 'UNIQLO:like',
            fashionKnowledge: 'intermediate',
            clothingItems: 'shirt:30k-50k',
            wantedItems: 'シャツ:2',
            companyName: 'テスト会社',
            department: '営業部',
            companySize: '100-500',
            annualRevenue: '10-50億',
            ageDemo: '30-40',
            appUsage: 'active',
            partnerService: 'no',
            fittingTime: '',
            giftService: 'yes',
            giftFrequency: 'monthly-1',
            transportService: 'no',
            serviceExpectations: 'quality',
            fashionLiteracy: 'medium',
            comments: 'テスト送信です'
        };
    },
    
    // テスト送信を実行
    testSubmit: async function() {
        console.log('=== テスト送信開始 ===');
        
        // Config.jsの確認
        if (typeof Config === 'undefined' || !Config.GOOGLE_SHEETS_URL || Config.GOOGLE_SHEETS_URL.includes('YOUR_SCRIPT_ID')) {
            console.error('❌ config.jsにGoogle Apps Script URLが設定されていません');
            console.log('📝 config.jsファイルを開いて、GOOGLE_SHEETS_URLに実際のURLを設定してください');
            return;
        }
        
        console.log('✅ Google Apps Script URL:', Config.GOOGLE_SHEETS_URL);
        
        // テストデータを作成
        const testData = this.createTestData();
        console.log('📋 テストデータ:', testData);
        
        // データを配列形式に変換
        const rowData = Object.values(testData);
        console.log('📊 送信データ（配列）:', rowData);
        
        try {
            // GoogleSheetsConnectorを使用して送信
            console.log('📤 Google Sheetsに送信中...');
            
            const payload = {
                action: 'append',
                data: rowData,
                sheetName: Config.SHEET_NAME || 'フォーム回答'
            };
            
            const response = await fetch(Config.GOOGLE_SHEETS_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            
            console.log('✅ 送信完了');
            console.log('📝 Google スプレッドシートを確認してください');
            console.log('⚠️  no-corsモードのため、レスポンスは確認できません');
            
            // 成功通知
            const notification = document.createElement('div');
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
            `;
            notification.textContent = '✅ テスト送信完了 - スプレッドシートを確認してください';
            document.body.appendChild(notification);
            
            setTimeout(() => notification.remove(), 5000);
            
        } catch (error) {
            console.error('❌ 送信エラー:', error);
        }
    },
    
    // 画像付きテスト送信
    testSubmitWithImages: async function() {
        console.log('=== 画像付きテスト送信開始 ===');
        
        const testData = this.createTestData();
        const rowData = Object.values(testData);
        
        // ダミー画像データ
        const images = {
            face: {
                dataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
                fileName: 'test-face.webp',
                uploadedAt: new Date().toISOString()
            },
            body: {
                dataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
                fileName: 'test-body.webp',
                uploadedAt: new Date().toISOString()
            }
        };
        
        try {
            const payload = {
                action: 'append',
                data: rowData,
                sheetName: Config.SHEET_NAME || 'フォーム回答',
                images: images
            };
            
            console.log('📤 画像付きデータを送信中...');
            console.log('📸 画像データ:', images);
            
            const response = await fetch(Config.GOOGLE_SHEETS_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            
            console.log('✅ 画像付き送信完了');
            console.log('📝 Google スプレッドシートとGoogle Driveを確認してください');
            
        } catch (error) {
            console.error('❌ 送信エラー:', error);
        }
    }
};

// コンソールから実行できるようにグローバルに公開
window.TestSubmission = TestSubmission;

// 使い方を表示
console.log(`
🧪 フォーム送信テストツール
使い方:
1. TestSubmission.testSubmit() - 通常のテスト送信
2. TestSubmission.testSubmitWithImages() - 画像付きテスト送信

実行前に config.js の GOOGLE_SHEETS_URL を設定してください。
`);