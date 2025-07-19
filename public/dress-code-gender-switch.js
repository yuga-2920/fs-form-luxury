// Dress Code Gender Switch
// 性別によってドレスコードセクションの表示を切り替える

const DressCodeGenderSwitch = {
    // 初期化
    init: function() {
        this.setupGenderListener();
        this.updateDressCodeDisplay();
        this.setupOtherTextInput();
    },

    // 性別変更リスナーの設定
    setupGenderListener: function() {
        const genderRadios = document.querySelectorAll('input[name="gender"]');
        
        genderRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                if (radio.checked) {
                    this.updateDressCodeDisplay();
                }
            });
        });
    },

    // 現在の性別を取得
    getCurrentGender: function() {
        const femaleRadio = document.getElementById('gender-female');
        return (femaleRadio && femaleRadio.checked) ? 'female' : 'male';
    },

    // ドレスコードセクションの表示を更新
    updateDressCodeDisplay: function() {
        const gender = this.getCurrentGender();
        const maleSection = document.getElementById('male-dress-regulations');
        const femaleSection = document.getElementById('female-dress-regulations');

        if (maleSection && femaleSection) {
            if (gender === 'female') {
                // 女性用を表示
                maleSection.style.display = 'none';
                femaleSection.style.display = 'grid';
                
                // 男性用の選択をクリア
                const maleCheckboxes = maleSection.querySelectorAll('input[type="checkbox"]');
                maleCheckboxes.forEach(cb => cb.checked = false);
            } else {
                // 男性用を表示
                maleSection.style.display = 'grid';
                femaleSection.style.display = 'none';
                
                // 女性用の選択をクリア
                const femaleCheckboxes = femaleSection.querySelectorAll('input[type="checkbox"]');
                femaleCheckboxes.forEach(cb => cb.checked = false);
                
                // その他のテキスト入力もクリア
                const otherTextInput = document.getElementById('dress-regulation-other-female-text');
                if (otherTextInput) {
                    otherTextInput.value = '';
                }
            }
        }
    },

    // その他のテキスト入力の設定
    setupOtherTextInput: function() {
        // 女性用その他チェックボックス
        const otherCheckbox = document.getElementById('regulation-other-female');
        const otherTextInput = document.getElementById('dress-regulation-other-female-text');

        if (otherCheckbox && otherTextInput) {
            // チェックボックスが変更されたときにテキスト入力を表示/非表示
            otherCheckbox.addEventListener('change', function() {
                if (this.checked) {
                    otherTextInput.style.display = 'block';
                    otherTextInput.focus();
                } else {
                    otherTextInput.style.display = 'none';
                    otherTextInput.value = '';
                }
            });

            // テキスト入力に何か入力されたら自動的にチェックボックスをチェック
            otherTextInput.addEventListener('input', function() {
                if (this.value.trim()) {
                    otherCheckbox.checked = true;
                }
            });
        }
    },

    // フォームデータの取得（性別に応じて適切なデータを返す）
    getDressCodeData: function() {
        const gender = this.getCurrentGender();
        const data = {
            gender: gender,
            dressCodes: []
        };

        if (gender === 'female') {
            // 女性用ドレスコードを取得
            const femaleCheckboxes = document.querySelectorAll('#female-dress-regulations input[type="checkbox"]:checked');
            femaleCheckboxes.forEach(checkbox => {
                const dressCode = {
                    value: checkbox.value,
                    label: checkbox.closest('label').querySelector('.regulation-title').textContent
                };
                
                // その他の場合はテキスト入力も含める
                if (checkbox.value === 'other-female') {
                    const otherText = document.getElementById('dress-regulation-other-female-text').value;
                    dressCode.otherText = otherText;
                }
                
                data.dressCodes.push(dressCode);
            });
        } else {
            // 男性用ドレスコードを取得
            const maleCheckboxes = document.querySelectorAll('#male-dress-regulations input[type="checkbox"]:checked');
            maleCheckboxes.forEach(checkbox => {
                data.dressCodes.push({
                    value: checkbox.value,
                    label: checkbox.closest('label').querySelector('.regulation-title').textContent
                });
            });
        }

        return data;
    }
};

// DOMContentLoadedで初期化
document.addEventListener('DOMContentLoaded', () => {
    DressCodeGenderSwitch.init();
});

// グローバルアクセス用
window.DressCodeGenderSwitch = DressCodeGenderSwitch;