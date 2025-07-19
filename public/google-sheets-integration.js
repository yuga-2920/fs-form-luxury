// Google Sheets Integration for Form Submission
// This file handles form data submission to Google Sheets

const GoogleSheetsIntegration = {
    // Google Apps Script Web App URL (Replace with your deployed script URL)
    // 重要: 新しいデプロイ後のURLに更新してください
    // セットアップ手順: google-sheets-setup.md を参照
    SCRIPT_URL: 'YOUR_SCRIPT_URL_HERE',

    // Value mappings for Japanese display
    valueMappings: {
        // Gender
        gender: {
            'male': '男性',
            'female': '女性'
        },
        // Business scenes
        businessScenes: {
            'internal-meeting': '社内会議・ミーティング',
            'external-meeting': '社外との商談・プレゼンテーション',
            'business-dining': '接待・会食',
            'domestic-trip': '出張（国内）',
            'overseas-trip': '出張（海外）',
            'seminar': 'セミナー',
            'exhibition': '展示会',
            'site-visit': '現場視察'
        },
        // Private scenes
        privateScenes: {
            'luxury-dining': '高級レストランでの食事',
            'casual-dining': 'カジュアルレストラン・カフェ',
            'shopping': 'ショッピング',
            'culture': '美術館・博物館・劇場',
            'sports-watching': 'スポーツ観戦',
            'golf': 'ゴルフ',
            'fitness': 'フィットネス・ジム',
            'party': 'パーティー・懇親会',
            'ceremony': '冠婚葬祭',
            'school-event': '子供の学校行事'
        },
        // Dress regulation
        dressRegulation: {
            'suit-required': 'スーツ必須',
            'jacket-required': 'ジャケット必須',
            'business-casual': 'ビジネスカジュアル',
            'smart-casual': 'スマートカジュアル',
            'business-free': '自由な服装',
            'no-restriction': '特に指定なし',
            'uniform': '制服・作業着'
        },
        // Travel frequency
        travelFrequency: {
            'weekly': '毎週',
            'monthly': '毎月',
            'quarterly': '3ヶ月に1回',
            'yearly': '年に1回',
            'rarely': 'ほとんどない',
            'never': '全くない'
        },
        // Urgency
        urgency: {
            'urgent': '急いでいる',
            'not-urgent': '特に急ぎではないが、良いものがあれば欲しい',
            'regular': '定期的な提案を希望'
        },
        // Investment budget
        investmentBudget: {
            '50000': '5万円以下',
            '50000-100000': '5万円〜10万円',
            '100000-200000': '10万円〜20万円',
            '200000-300000': '20万円〜30万円',
            '300000-500000': '30万円〜50万円',
            '500000-1000000': '50万円〜100万円',
            '1000000': '100万円以上'
        },
        // Fashion stance
        fashionStance: {
            'minimum': '必要最低限で十分',
            'active': '積極的に取り入れたい',
            'professional': 'プロの意見を参考にしたい'
        },
        // Proposal frequency
        proposalFrequency: {
            'weekly': '毎週提案いただけると嬉しい',
            'monthly-2-3': '月に2-3回はフィッティングを行いたい',
            'monthly': '月に1度提案が欲しい',
            'bimonthly': '2ヶ月に1回ほどで一気に揃えたい',
            'quarterly': '3ヶ月に1回、季節ごとに',
            'occasional': '必要な時に相談したい'
        },
        // Wanted items
        hasWantedItems: {
            'yes': 'はい',
            'no': 'いいえ'
        },
        // Body concerns - Male
        bodyMaleConcerns: {
            'narrow-shoulders': '肩幅が狭く、スーツやジャケットが似合わない',
            'thin-chest': '胸板が薄く、Tシャツ一枚だと細さが目立つ',
            'thin-limbs': '手足が細すぎて、服に着られている感じがする',
            'muscle-building': '筋肉質になりたいけれど、なかなか体が大きくならない',
            'tight-waist': 'スーツのジャケットやシャツがお腹周りでパツパツになる',
            'protruding-belly': 'お腹だけ目立ってしまい、だらしない印象に見える',
            'face-roundness': '二重顎や顔の丸みが気になる',
            'brand-fit': 'せっかくのブランド服も、着こなせないと感じる',
            'large-hips': 'お尻の大きさが気になる',
            'neck-thickness': '首の太さ、短さが気になる',
            'poor-posture-impression': 'だらしない印象に見えたり、自信がなさそうに見えたりする',
            'forward-head': '首が前に出て、本来よりも身長が低く見えてしまう',
            'rounded-back': '肩甲骨が埋もれて見え、背中が丸く見える',
            'short-legs': '脚が短く見えて、スタイルが悪く見える',
            'leg-shape': 'O脚やX脚で、パンツのシルエットがきれいに見えない',
            'short-arms': '腕が短い',
            'large-face': '顔が大きく全体的なバランスが難しい',
            'shoulder-slope': '服のシルエットが崩れ、本来のデザインが活かせない'
        },
        // Body concerns - Female
        bodyFemaleConcerns: {
            'sitting-belly': '座った際のお腹が気になる',
            'lower-belly': 'ハイウエストのボトムスでも下腹部が気になる',
            'postpartum-belly': '産後のお腹のたるみが戻らない',
            'large-hips': 'お尻が大きく、パンツやスカートのサイズ選びに困る',
            'thick-thighs': '太ももの張りが強く、スキニーパンツが似合わない',
            'cellulite': 'セルライトが気になる',
            'wide-waist': '腰が張っていて、トップスをインすると強調される',
            'flabby-arms': '二の腕のたるみが気になるので、半袖やノースリーブを着られない',
            'broad-shoulders': '肩周りががっちりしていて、華奢に見えない',
            'large-bust': '胸が大きく太って見える、または服のラインが崩れる',
            'small-bust': '胸が小さく、女性らしいラインが出にくい',
            'bust-shape': '垂れや離れが気になる',
            'forward-shoulders': '肩が前に出て首が短く見える',
            'rounded-back-aging': '背中が丸まって、老けて見える',
            'posture-bust-belly': 'バストが本来の形でなく見えたり、お腹がぽっこりして見えたりする',
            'thick-ankles': '足首が太く、すらっと見えない',
            'muscular-calves': 'ふくらはぎの筋肉が張って、スカートが似合わない'
        },
        // Fashion literacy
        fashionLiteracy: {
            'not-interested': '興味ない',
            'vaguely-interested': '興味ある（漠然と）',
            'conversational': '人に話せるくらいにはなりたい',
            'personal-curiosity': '人には話さないが好奇心で自分が詳しくなりたい',
            'basic-knowledge': '最低限は知っておきたい',
            'brands': 'ブランドについて知りたい',
            'items': 'アイテムについて知りたい',
            'designers': 'デザイナーについて知りたい',
            'trends': '業界のトレンドについて知りたい',
            'color-matching': '自分に似合う色の見つけ方を知りたい',
            'coordination': 'コーディネートの組み方を知りたい',
            'materials': '素材の特性について知りたい',
            'history': 'ファッションの歴史について知りたい',
            'other': 'その他'
        },
        // Service expectations
        serviceExpectations: {
            'reaction-change': '周りからの反応変化',
            'cost-performance': 'コストパフォーマンス',
            'transport': '送迎サービス',
            'item-suggestions': 'アイテム提案',
            'app-usage': 'アプリ利用',
            'magazine': 'マガジン',
            'events': 'イベント',
            'community': 'コミュニティ',
            'hospitality': 'ホスピタリティ',
            'stylist-lifestyle': 'スタイリストがついているライフスタイル',
            'time-saving': '手間/時間の短縮',
            'new-selections': '普段、自分が選ばない服を提案してもらえる',
            'professional-advice': 'プロに相談できる',
            'trends': '最新のトレンドを取り入れたい',
            'self-discovery': '新しい自分を発見したい',
            'other': 'その他'
        }
    },

    // Convert values to Japanese
    convertToJapanese: function(value, category) {
        if (!value) return '';

        if (this.valueMappings[category]) {
            // For multiple values (comma-separated)
            if (value.includes(',')) {
                return value.split(',').map(v => {
                    const trimmed = v.trim();
                    return this.valueMappings[category][trimmed] || trimmed;
                }).join('、');
            }
            // For single value
            return this.valueMappings[category][value] || value;
        }

        return value;
    },

    // Collect all form data including images
    collectFormData: function() {
        const formData = new FormData();
        const form = document.getElementById('styleForm');

        // Basic Information
        formData.append('timestamp', new Date().toISOString());
        formData.append('name', form.querySelector('[name="name"]')?.value || '');
        formData.append('email', form.querySelector('[name="email"]')?.value || '');
        formData.append('phone', form.querySelector('[name="phone"]')?.value || '');

        const genderValue = form.querySelector('[name="gender"]:checked')?.value || '';
        formData.append('gender', this.convertToJapanese(genderValue, 'gender'));
        formData.append('birthYear', form.querySelector('[name="birthYear"]')?.value || '');
        formData.append('birthMonth', form.querySelector('[name="birthMonth"]')?.value || '');
        formData.append('birthDay', form.querySelector('[name="birthDay"]')?.value || '');
        formData.append('height', form.querySelector('[name="height"]')?.value || '');
        formData.append('weight', form.querySelector('[name="weight"]')?.value || '');

        // Address Information
        formData.append('postalCode', form.querySelector('[name="postalCode"]')?.value || '');
        formData.append('prefecture', form.querySelector('[name="prefecture"]')?.value || '');
        formData.append('city', form.querySelector('[name="city"]')?.value || '');
        formData.append('address', form.querySelector('[name="address"]')?.value || '');
        formData.append('building', form.querySelector('[name="building"]')?.value || '');

        // Lifestyle & Scenes (Multiple selections)
        const businessScenes = Array.from(form.querySelectorAll('[name="businessScenes"]:checked'))
            .map(cb => cb.value).join(', ');
        formData.append('businessScenes', this.convertToJapanese(businessScenes, 'businessScenes'));

        const privateScenes = Array.from(form.querySelectorAll('[name="privateScenes"]:checked'))
            .map(cb => cb.value).join(', ');
        formData.append('privateScenes', this.convertToJapanese(privateScenes, 'privateScenes'));

        // Dress Code
        const dressRegulation = Array.from(form.querySelectorAll('[name="dressRegulation"]:checked'))
            .map(cb => cb.value).join(', ');
        formData.append('dressRegulation', this.convertToJapanese(dressRegulation, 'dressRegulation'));

        // Travel Frequency
        const domesticTravel = form.querySelector('[name="domesticTravel"]:checked')?.value || '';
        formData.append('domesticTravel', this.convertToJapanese(domesticTravel, 'travelFrequency'));

        const overseasTravel = form.querySelector('[name="overseasTravel"]:checked')?.value || '';
        formData.append('overseasTravel', this.convertToJapanese(overseasTravel, 'travelFrequency'));

        // Style Preferences
        const attractiveStyles = Array.from(form.querySelectorAll('[name="attractiveStyle"]:checked'))
            .map(cb => cb.value).join(', ');
        formData.append('attractiveStyles', attractiveStyles);

        const avoidItems = Array.from(form.querySelectorAll('[name="avoidItem"]:checked'))
            .map(cb => cb.value).join(', ');
        formData.append('avoidItems', avoidItems);

        // Urgency
        const urgencyValue = form.querySelector('[name="urgency"]:checked')?.value || '';
        formData.append('urgency', this.convertToJapanese(urgencyValue, 'urgency'));
        formData.append('urgencyDate', form.querySelector('[name="urgencyDate"]')?.value || '');

        // Wanted Items
        const hasWantedItemsValue = form.querySelector('[name="hasWantedItems"]:checked')?.value || '';
        formData.append('hasWantedItems', this.convertToJapanese(hasWantedItemsValue, 'hasWantedItems'));
        const wantedItems = Array.from(form.querySelectorAll('[name="wantedItems"]:checked'))
            .map(cb => cb.value).join(', ');
        formData.append('wantedItems', wantedItems);

        // Wanted Items Quantities
        formData.append('wantedQuantitySuit', form.querySelector('[name="wantedQuantitySuit"]')?.value || '');
        formData.append('wantedQuantityJacket', form.querySelector('[name="wantedQuantityJacket"]')?.value || '');
        formData.append('wantedQuantityShirt', form.querySelector('[name="wantedQuantityShirt"]')?.value || '');
        formData.append('wantedQuantityTshirt', form.querySelector('[name="wantedQuantityTshirt"]')?.value || '');
        formData.append('wantedQuantityPants', form.querySelector('[name="wantedQuantityPants"]')?.value || '');
        formData.append('wantedQuantityShoes', form.querySelector('[name="wantedQuantityShoes"]')?.value || '');
        formData.append('wantedQuantityOuter', form.querySelector('[name="wantedQuantityOuter"]')?.value || '');
        formData.append('wantedQuantityBelt', form.querySelector('[name="wantedQuantityBelt"]')?.value || '');

        // Investment Amount
        const investmentBudgetValue = form.querySelector('[name="investmentBudget"]:checked')?.value || '';
        formData.append('investmentBudget', this.convertToJapanese(investmentBudgetValue, 'investmentBudget'));

        // Brands
        const favoredBrands = Array.from(form.querySelectorAll('[name="favoredBrands"]:checked'))
            .map(cb => cb.value).join(', ');
        formData.append('favoredBrands', favoredBrands);
        formData.append('favoredBrandsOther', form.querySelector('[name="favoredBrandsOther"]')?.value || '');

        // Body Concerns
        const bodyMaleConcerns = Array.from(form.querySelectorAll('[name="bodyMaleConcerns"]:checked'))
            .map(cb => cb.value).join(', ');
        formData.append('bodyMaleConcerns', this.convertToJapanese(bodyMaleConcerns, 'bodyMaleConcerns'));

        const bodyFemaleConcerns = Array.from(form.querySelectorAll('[name="bodyFemaleConcerns"]:checked'))
            .map(cb => cb.value).join(', ');
        formData.append('bodyFemaleConcerns', this.convertToJapanese(bodyFemaleConcerns, 'bodyFemaleConcerns'));

        formData.append('bodyOtherConcerns', form.querySelector('[name="bodyOtherConcerns"]')?.value || '');

        // Service Expectations
        const serviceExpectations = Array.from(form.querySelectorAll('[name="serviceExpectations"]:checked'))
            .map(cb => cb.value).join(', ');
        formData.append('serviceExpectations', this.convertToJapanese(serviceExpectations, 'serviceExpectations'));

        // Fashion Literacy
        const fashionLiteracy = Array.from(form.querySelectorAll('[name="fashionLiteracy"]:checked'))
            .map(cb => cb.value).join(', ');
        formData.append('fashionLiteracy', this.convertToJapanese(fashionLiteracy, 'fashionLiteracy'));

        // Other fields
        const fashionStanceValue = form.querySelector('[name="fashionStance"]:checked')?.value || '';
        formData.append('fashionStance', this.convertToJapanese(fashionStanceValue, 'fashionStance'));

        const proposalFrequencyValue = form.querySelector('[name="proposalFrequency"]:checked')?.value || '';
        formData.append('proposalFrequency', this.convertToJapanese(proposalFrequencyValue, 'proposalFrequency'));
        formData.append('comments', form.querySelector('[name="comments"]')?.value || '');

        // Handle image files
        const facePhotoInput = document.getElementById('facePhotoInput');
        const bodyPhotoInput = document.getElementById('bodyPhotoInput');

        if (facePhotoInput?.files[0]) {
            formData.append('facePhoto', facePhotoInput.files[0]);
        }

        if (bodyPhotoInput?.files[0]) {
            formData.append('bodyPhoto', bodyPhotoInput.files[0]);
        }

        return formData;
    },

    // Convert image to base64 for Google Sheets
    convertImageToBase64: function(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    },

    // Submit form data to Google Sheets
    submitToGoogleSheets: async function(formData) {
        try {
            // Convert FormData to regular object
            const data = {};
            for (let [key, value] of formData.entries()) {
                if (value instanceof File) {
                    // Convert image files to base64
                    data[key] = await this.convertImageToBase64(value);
                } else {
                    data[key] = value;
                }
            }

            // Send to Google Apps Script
            const response = await fetch(this.SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify(data)
            });

            console.log('Data submitted to Google Sheets successfully');
            return true;
        } catch (error) {
            console.error('Error submitting to Google Sheets:', error);
            return false;
        }
    },

    // Initialize form submission handler
    init: function() {
        const form = document.getElementById('styleForm');
        const submitBtn = document.getElementById('submitBtn');

        if (form && submitBtn) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();

                // Show loading state
                submitBtn.disabled = true;
                submitBtn.querySelector('.btn-text').style.display = 'none';
                submitBtn.querySelector('.btn-loading').style.display = 'inline-block';

                // Collect form data
                const formData = this.collectFormData();
                
                // ローカルに自動保存
                this.saveToLocal(formData);

                // Submit to Google Sheets
                const success = await this.submitToGoogleSheets(formData);

                if (success) {
                    alert('フォームが正常に送信されました。');
                    form.reset();
                } else {
                    // Google Sheetsへの送信が失敗した場合、代替方法を提供
                    const useAlternative = confirm('Google Sheetsへの送信が失敗しました。\nデータをローカルに保存しますか？');
                    if (useAlternative) {
                        // ローカルストレージに保存
                        const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
                        const saveData = {
                            timestamp: new Date().toISOString(),
                            data: {}
                        };
                        
                        for (let [key, value] of formData.entries()) {
                            if (!(value instanceof File)) {
                                saveData.data[key] = value;
                            }
                        }
                        
                        submissions.push(saveData);
                        localStorage.setItem('formSubmissions', JSON.stringify(submissions));
                        
                        alert('データがブラウザに保存されました。\n開発者ツールのコンソールで確認できます。');
                        console.log('Saved form data:', saveData);
                        form.reset();
                    }
                }

                // Reset button state
                submitBtn.disabled = false;
                submitBtn.querySelector('.btn-text').style.display = 'inline-block';
                submitBtn.querySelector('.btn-loading').style.display = 'none';
            });
        }
    },
    
    // ローカルに保存
    saveToLocal: function(formData) {
        try {
            // FormDataをオブジェクトに変換（完全なデータ収集）
            const dataObj = this.collectCompleteFormData(formData);
            
            // タイムスタンプを追加
            dataObj.submissionDate = new Date().toISOString();
            
            // 画像のアップロード状況を追加
            const facePhoto = formData.get('facePhoto');
            const bodyPhoto = formData.get('bodyPhoto');
            dataObj.facePhotoUploaded = (facePhoto && facePhoto instanceof File && facePhoto.size > 0) ? 'アップロード済み' : '未アップロード';
            dataObj.bodyPhotoUploaded = (bodyPhoto && bodyPhoto instanceof File && bodyPhoto.size > 0) ? 'アップロード済み' : '未アップロード';
            
            // 送信履歴を取得
            const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
            
            // 新しい送信を追加
            submissions.push({
                timestamp: dataObj.submissionDate,
                data: dataObj
            });
            
            // 最新の100件のみ保持
            if (submissions.length > 100) {
                submissions.splice(0, submissions.length - 100);
            }
            
            // 保存
            localStorage.setItem('formSubmissions', JSON.stringify(submissions));
            
            // テキストファイルとして自動ダウンロード
            this.downloadSubmissionAsText(dataObj);
            
            // 画像がある場合は画像もダウンロード
            this.downloadSubmissionImages(formData);
            
            console.log('Data saved locally:', dataObj);
        } catch (error) {
            console.error('Failed to save locally:', error);
        }
    },
    
    // 送信データをテキストファイルとしてダウンロード
    downloadSubmissionAsText: function(data) {
        let textContent = '【スタイルフォーム送信内容】\n';
        textContent += '送信日時: ' + new Date(data.submissionDate).toLocaleString('ja-JP') + '\n';
        textContent += '=' .repeat(50) + '\n\n';
        
        // 基本情報
        textContent += '■ 基本情報\n';
        textContent += '-'.repeat(30) + '\n';
        textContent += `お名前: ${data.name || '未入力'}\n`;
        textContent += `メールアドレス: ${data.email || '未入力'}\n`;
        textContent += `電話番号: ${data.phone || '未入力'}\n`;
        textContent += `性別: ${data.gender || '未選択'}\n`;
        textContent += `生年月日: ${data.birthYear || '未入力'}年${data.birthMonth || '未入力'}月${data.birthDay || '未入力'}日\n`;
        textContent += `身長: ${data.height ? data.height + 'cm' : '未入力'}\n`;
        textContent += `体重: ${data.weight ? data.weight + 'kg' : '未入力'}\n\n`;
        
        // 住所
        textContent += '■ ご住所\n';
        textContent += '-'.repeat(30) + '\n';
        textContent += `郵便番号: ${data.postalCode || '未入力'}\n`;
        textContent += `都道府県: ${data.prefecture || '未入力'}\n`;
        textContent += `市区町村: ${data.city || '未入力'}\n`;
        textContent += `番地: ${data.address || '未入力'}\n`;
        textContent += `建物名: ${data.building || '未入力'}\n\n`;
        
        // ライフスタイル
        textContent += '■ ライフスタイル\n';
        textContent += '-'.repeat(30) + '\n';
        textContent += `ビジネスシーン: ${data.businessScenes || '未選択'}\n`;
        textContent += `プライベートシーン: ${data.privateScenes || '未選択'}\n`;
        textContent += `服装規定: ${data.dressRegulation || '未選択'}\n`;
        textContent += `国内出張頻度: ${data.domesticTravel || '未選択'}\n`;
        textContent += `海外出張頻度: ${data.overseasTravel || '未選択'}\n`;
        textContent += `旅行先（国内）: ${data.domesticTravelDestinations || '未選択'}\n`;
        textContent += `旅行先（海外）: ${data.overseasTravelDestinations || '未選択'}\n\n`;
        
        // スタイル選好
        textContent += '■ スタイル選好\n';
        textContent += '-'.repeat(30) + '\n';
        textContent += `魅力を感じるスタイル: ${data.attractiveStyles || '未選択'}\n`;
        textContent += `避けたいアイテム: ${data.avoidItems || '未選択'}\n`;
        textContent += `その他避けたいアイテム: ${data.avoidItemOther || '未入力'}\n\n`;
        
        // 希望アイテム
        textContent += '■ 希望アイテム\n';
        textContent += '-'.repeat(30) + '\n';
        textContent += `希望アイテムの有無: ${data.hasWantedItems || '未選択'}\n`;
        textContent += `具体的なアイテム: ${data.wantedItems || '未選択'}\n`;
        textContent += `スーツ数量: ${data.wantedQuantitySuit || '未入力'}\n`;
        textContent += `ジャケット数量: ${data.wantedQuantityJacket || '未入力'}\n`;
        textContent += `シャツ数量: ${data.wantedQuantityShirt || '未入力'}\n`;
        textContent += `Tシャツ数量: ${data.wantedQuantityTshirt || '未入力'}\n`;
        textContent += `パンツ数量: ${data.wantedQuantityPants || '未入力'}\n`;
        textContent += `シューズ数量: ${data.wantedQuantityShoes || '未入力'}\n`;
        textContent += `アウター数量: ${data.wantedQuantityOuter || '未入力'}\n`;
        textContent += `ベルト数量: ${data.wantedQuantityBelt || '未入力'}\n`;
        textContent += `その他希望アイテム: ${data.wantedItemsOther || '未入力'}\n\n`;
        
        // 投資・ブランド
        textContent += '■ 投資・ブランド\n';
        textContent += '-'.repeat(30) + '\n';
        textContent += `投資予算: ${data.investmentBudget || '未選択'}\n`;
        textContent += `投資重点アイテム: ${data.investmentPriority || '未選択'}\n`;
        textContent += `好きなブランド: ${data.favoredBrands || '未選択'}\n`;
        textContent += `その他ブランド: ${data.favoredBrandsOther || '未入力'}\n\n`;
        
        // 身体の悩み
        textContent += '■ 身体に関する悩み\n';
        textContent += '-'.repeat(30) + '\n';
        textContent += `男性の悩み: ${data.bodyMaleConcerns || '未選択'}\n`;
        textContent += `女性の悩み: ${data.bodyFemaleConcerns || '未選択'}\n`;
        textContent += `その他の悩み: ${data.bodyOtherConcerns || '未入力'}\n\n`;
        
        // ファッションリテラシー
        textContent += '■ ファッションリテラシー\n';
        textContent += '-'.repeat(30) + '\n';
        textContent += `ファッションリテラシー: ${data.fashionLiteracy || '未選択'}\n`;
        textContent += `その他リテラシー: ${data.fashionLiteracyOther || '未入力'}\n\n`;
        
        // サービスへの期待
        textContent += '■ サービスへの期待\n';
        textContent += '-'.repeat(30) + '\n';
        textContent += `緊急度: ${data.urgency || '未選択'}\n`;
        textContent += `緊急日付: ${data.urgencyDate || '未入力'}\n`;
        textContent += `ファッションへの姿勢: ${data.fashionStance || '未選択'}\n`;
        textContent += `提案頻度: ${data.proposalFrequency || '未選択'}\n`;
        textContent += `サービスへの期待: ${data.serviceExpectations || '未選択'}\n`;
        textContent += `その他期待: ${data.serviceExpectationsOther || '未入力'}\n\n`;
        
        // その他
        textContent += '■ その他\n';
        textContent += '-'.repeat(30) + '\n';
        textContent += `ご要望・コメント: ${data.comments || '未入力'}\n\n`;
        
        // 画像アップロード状況
        textContent += '■ 画像アップロード\n';
        textContent += '-'.repeat(30) + '\n';
        textContent += `顔写真: ${data.facePhotoUploaded || '未アップロード'}\n`;
        textContent += `全身写真: ${data.bodyPhotoUploaded || '未アップロード'}\n`;
        
        // ファイルとしてダウンロード
        const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        const dateStr = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
        link.download = `form-submission-${dateStr}.txt`;
        link.click();
    },
    
    // 送信画像をダウンロード
    downloadSubmissionImages: function(formData) {
        // 顔写真
        const facePhoto = formData.get('facePhoto');
        if (facePhoto && facePhoto instanceof File && facePhoto.size > 0) {
            this.downloadImage(facePhoto, 'face-photo');
        }
        
        // 全身写真
        const bodyPhoto = formData.get('bodyPhoto');
        if (bodyPhoto && bodyPhoto instanceof File && bodyPhoto.size > 0) {
            this.downloadImage(bodyPhoto, 'body-photo');
        }
    },
    
    // 個別画像のダウンロード
    downloadImage: function(file, prefix) {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(file);
        const extension = file.name.split('.').pop() || 'jpg';
        const dateStr = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
        link.download = `${prefix}-${dateStr}.${extension}`;
        link.click();
    },
    
    // 完全なフォームデータを収集（未入力項目も含む）
    collectCompleteFormData: function(formData) {
        const dataObj = {};
        const form = document.getElementById('styleForm');
        
        // FormDataから既存のデータを取得
        for (let [key, value] of formData.entries()) {
            if (value instanceof File) continue;
            
            if (!dataObj[key]) {
                dataObj[key] = value;
            } else {
                // 複数値の場合は配列に
                if (!Array.isArray(dataObj[key])) {
                    dataObj[key] = [dataObj[key]];
                }
                dataObj[key].push(value);
            }
        }
        
        // 配列データを文字列に変換
        Object.keys(dataObj).forEach(key => {
            if (Array.isArray(dataObj[key])) {
                dataObj[key] = dataObj[key].join(', ');
            }
        });
        
        // 全ての可能なフィールドを定義（未入力でも含める）
        const allFields = {
            // 基本情報
            name: '',
            email: '',
            phone: '',
            gender: '',
            birthYear: '',
            birthMonth: '',
            birthDay: '',
            height: '',
            weight: '',
            postalCode: '',
            prefecture: '',
            city: '',
            address: '',
            building: '',
            
            // ライフスタイル
            businessScenes: '',
            privateScenes: '',
            dressRegulation: '',
            domesticTravel: '',
            overseasTravel: '',
            domesticTravelDestinations: '',
            overseasTravelDestinations: '',
            
            // スタイル選好
            attractiveStyles: '',
            avoidItems: '',
            avoidItemOther: '',
            
            // 希望アイテム
            hasWantedItems: '',
            wantedItems: '',
            wantedQuantitySuit: '',
            wantedQuantityJacket: '',
            wantedQuantityShirt: '',
            wantedQuantityTshirt: '',
            wantedQuantityPants: '',
            wantedQuantityShoes: '',
            wantedQuantityOuter: '',
            wantedQuantityBelt: '',
            wantedItemsOther: '',
            
            // 投資・ブランド
            investmentBudget: '',
            investmentPriority: '',
            favoredBrands: '',
            favoredBrandsOther: '',
            
            // 身体の悩み
            bodyMaleConcerns: '',
            bodyFemaleConcerns: '',
            bodyOtherConcerns: '',
            
            // ファッションリテラシー
            fashionLiteracy: '',
            fashionLiteracyOther: '',
            
            // サービスへの期待
            urgency: '',
            urgencyDate: '',
            fashionStance: '',
            proposalFrequency: '',
            serviceExpectations: '',
            serviceExpectationsOther: '',
            
            // その他
            comments: ''
        };
        
        // 全フィールドにデータをマージ（未入力は空文字列のまま）
        Object.keys(allFields).forEach(key => {
            if (dataObj[key] === undefined || dataObj[key] === null) {
                dataObj[key] = allFields[key];
            }
        });
        
        return dataObj;
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    GoogleSheetsIntegration.init();
});