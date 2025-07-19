// Form Data Exporter
// フォームデータをCSV形式でエクスポートし、Google Sheetsと連携

const FormDataExporter = {
    // フォームデータを収集
    collectFormData: function() {
        // 画像データを取得
        const uploadedImages = window.ImageUploadHandler ? 
            window.ImageUploadHandler.getUploadedImages() : {};
        
        const formData = {
            // 基本情報
            timestamp: new Date().toISOString(),
            gender: document.querySelector('input[name="gender"]:checked')?.value || '',
            lastName: document.getElementById('lastName')?.value || '',
            firstName: document.getElementById('firstName')?.value || '',
            lastNameKana: document.getElementById('lastNameKana')?.value || '',
            firstNameKana: document.getElementById('firstNameKana')?.value || '',
            birthDate: document.getElementById('birthDate')?.value || '',
            height: document.getElementById('height')?.value || '',
            weight: document.getElementById('weight')?.value || '',
            
            // 連絡先情報
            email: document.getElementById('email')?.value || '',
            phoneNumber: document.getElementById('phoneNumber')?.value || '',
            postalCode: document.getElementById('postalCode')?.value || '',
            prefecture: document.getElementById('prefecture')?.value || '',
            city: document.getElementById('city')?.value || '',
            address: document.getElementById('address')?.value || '',
            
            // ライフスタイル情報
            workStyle: this.getCheckboxValues('workStyle'),
            businessScenes: this.getCheckboxValues('businessScene'),
            privateScenes: this.getCheckboxValues('privateScene'),
            weekendActivities: this.getCheckboxValues('weekendActivity'),
            
            // 旅行情報
            domesticTravel: this.getCheckboxValues('domesticTravel'),
            overseasTravel: this.getCheckboxValues('overseasTravel'),
            
            // ドレスコード
            dressRegulation: this.getDressCodeData(),
            
            // スタイル情報
            attractiveStyles: this.getCheckboxValues('attractiveStyle'),
            avoidItems: this.getCheckboxValues('avoidItems'),
            
            // ブランド好み
            brandPreferences: this.getBrandPreferences(),
            
            // ファッション知識
            fashionKnowledge: document.querySelector('input[name="fashionKnowledge"]:checked')?.value || '',
            
            // 所持アイテム
            clothingItems: this.getClothingItemsWithBudget(),
            
            // 希望アイテム
            wantedItems: this.getWantedItemsData(),
            
            // 法人情報
            companyName: document.getElementById('companyName')?.value || '',
            department: document.getElementById('department')?.value || '',
            companySize: document.querySelector('input[name="companySize"]:checked')?.value || '',
            annualRevenue: document.querySelector('input[name="annualRevenue"]:checked')?.value || '',
            ageDemo: this.getCheckboxValues('ageDemo'),
            
            // サービス要望
            appUsage: document.querySelector('input[name="appUsage"]:checked')?.value || '',
            partnerService: document.querySelector('input[name="partnerService"]:checked')?.value || '',
            fittingTime: document.querySelector('input[name="fittingTime"]:checked')?.value || '',
            giftService: document.querySelector('input[name="giftService"]:checked')?.value || '',
            giftFrequency: document.querySelector('input[name="giftFrequency"]:checked')?.value || '',
            transportService: document.querySelector('input[name="transportService"]:checked')?.value || '',
            serviceExpectations: this.getCheckboxValues('serviceExpectations'),
            
            // その他
            fashionLiteracy: document.querySelector('input[name="fashionLiteracy"]:checked')?.value || '',
            comments: document.getElementById('comments')?.value || '',
            
            // 画像データ
            images: uploadedImages
        };
        
        return formData;
    },
    
    // チェックボックスの値を取得
    getCheckboxValues: function(name) {
        const checkedBoxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        return Array.from(checkedBoxes).map(cb => cb.value).join(';');
    },
    
    // ドレスコードデータを取得
    getDressCodeData: function() {
        if (typeof DressCodeGenderSwitch !== 'undefined') {
            const data = DressCodeGenderSwitch.getDressCodeData();
            return data.dressCodes.map(dc => {
                if (dc.otherText) {
                    return `${dc.value}:${dc.otherText}`;
                }
                return dc.value;
            }).join(';');
        }
        return this.getCheckboxValues('dressRegulation');
    },
    
    // ブランド好みを取得
    getBrandPreferences: function() {
        const brandInputs = document.querySelectorAll('input[name^="brandPreference_"]');
        const preferences = [];
        
        brandInputs.forEach(input => {
            if (input.value) {
                const brandName = input.name.replace('brandPreference_', '');
                preferences.push(`${brandName}:${input.value}`);
            }
        });
        
        return preferences.join(';');
    },
    
    // 衣類アイテムと予算を取得
    getClothingItemsWithBudget: function() {
        const items = [];
        const checkedItems = document.querySelectorAll('input[name="clothingItems"]:checked');
        
        checkedItems.forEach(item => {
            const itemValue = item.value;
            const budgetName = `${itemValue}Budget`;
            const budgets = this.getCheckboxValues(budgetName);
            
            if (budgets) {
                items.push(`${itemValue}:${budgets}`);
            } else {
                items.push(itemValue);
            }
        });
        
        return items.join(';');
    },
    
    // 希望アイテムデータを取得
    getWantedItemsData: function() {
        const wantedItems = [];
        const quantityInputs = document.querySelectorAll('.wanted-items-grid .quantity-input');
        
        quantityInputs.forEach(input => {
            if (input.value && parseInt(input.value) > 0) {
                const itemName = input.name || input.closest('.item-request').querySelector('.item-name').textContent;
                wantedItems.push(`${itemName}:${input.value}`);
            }
        });
        
        return wantedItems.join(';');
    },
    
    // CSVヘッダーを生成
    generateCSVHeader: function() {
        return [
            'タイムスタンプ', '性別', '姓', '名', '姓（カナ）', '名（カナ）', '生年月日', '身長', '体重',
            'メールアドレス', '電話番号', '郵便番号', '都道府県', '市区町村', '住所',
            '働き方', 'ビジネスシーン', 'プライベートシーン', '週末の活動',
            '国内旅行', '海外旅行', 'ドレスコード',
            '魅力を感じるスタイル', '避けたいアイテム', 'ブランド好み',
            'ファッション知識', '所持アイテム', '希望アイテム',
            '会社名', '役職', '社員数', '年間売上', '社員年齢層',
            'アプリ利用', 'パートナー制度', 'フィッティング時間', 'ギフトサービス', 'ギフト頻度',
            '配送サービス', 'サービス期待', 'ファッションリテラシー', 'コメント'
        ].join(',');
    },
    
    // データをCSV行に変換
    formatDataAsCSVRow: function(data) {
        const values = [
            data.timestamp,
            data.gender,
            data.lastName,
            data.firstName,
            data.lastNameKana,
            data.firstNameKana,
            data.birthDate,
            data.height,
            data.weight,
            data.email,
            data.phoneNumber,
            data.postalCode,
            data.prefecture,
            data.city,
            data.address,
            data.workStyle,
            data.businessScenes,
            data.privateScenes,
            data.weekendActivities,
            data.domesticTravel,
            data.overseasTravel,
            data.dressRegulation,
            data.attractiveStyles,
            data.avoidItems,
            data.brandPreferences,
            data.fashionKnowledge,
            data.clothingItems,
            data.wantedItems,
            data.companyName,
            data.department,
            data.companySize,
            data.annualRevenue,
            data.ageDemo,
            data.appUsage,
            data.partnerService,
            data.fittingTime,
            data.giftService,
            data.giftFrequency,
            data.transportService,
            data.serviceExpectations,
            data.fashionLiteracy,
            data.comments
        ];
        
        // CSVエスケープ処理
        return values.map(value => {
            if (typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))) {
                return `"${value.replace(/"/g, '""')}"`;
            }
            return value;
        }).join(',');
    },
    
    // CSVファイルをダウンロード
    downloadCSV: function(filename = 'form_data.csv') {
        const data = this.collectFormData();
        const csvContent = this.generateCSVHeader() + '\n' + this.formatDataAsCSVRow(data);
        
        // BOMを追加（Excelで開いた時の文字化け対策）
        const bom = '\uFEFF';
        const blob = new Blob([bom + csvContent], { type: 'text/csv;charset=utf-8;' });
        
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        URL.revokeObjectURL(url);
    },
    
    // データをJSONとして取得
    getDataAsJSON: function() {
        return JSON.stringify(this.collectFormData(), null, 2);
    }
};

// グローバルアクセス用
window.FormDataExporter = FormDataExporter;