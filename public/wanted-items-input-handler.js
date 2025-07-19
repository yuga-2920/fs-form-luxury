// Wanted Items Input Handler
// 希望アイテムの数値入力を管理

const WantedItemsInputHandler = {
    // 初期化
    init: function() {
        this.setupQuantityInputs();
        this.setupKeyboardShortcuts();
        this.setupAutoFocus();
    },
    
    // 数量入力フィールドの設定
    setupQuantityInputs: function() {
        const quantityInputs = document.querySelectorAll('.wanted-items-grid .quantity-input');
        console.log('Found quantity inputs:', quantityInputs.length);
        
        quantityInputs.forEach((input, index) => {
            console.log(`Setting up input ${index}:`, input);
            // 入力フィールドを確実に有効化
            input.disabled = false;
            input.removeAttribute('readonly');
            input.style.pointerEvents = 'auto';
            input.style.cursor = 'text';
            
            // より強制的にスタイルを設定
            input.style.cssText += '; pointer-events: auto !important; cursor: text !important; opacity: 1 !important; user-select: text !important;';
            
            // タブインデックスを設定
            input.tabIndex = 100 + index;
            
            // 入力イベントの処理
            input.addEventListener('input', function(e) {
                this.handleQuantityInput(e.target);
            }.bind(this));
            
            // フォーカスイベント
            input.addEventListener('focus', function(e) {
                e.target.select(); // フォーカス時に全選択
                this.highlightItem(e.target);
            }.bind(this));
            
            // ブラーイベント
            input.addEventListener('blur', function(e) {
                this.removeHighlight(e.target);
            }.bind(this));
            
            // ホイールイベントで数値を増減
            input.addEventListener('wheel', function(e) {
                e.preventDefault();
                this.handleWheel(e);
            }.bind(this));
            
            // キーボードイベント
            input.addEventListener('keydown', function(e) {
                this.handleKeydown(e);
            }.bind(this));
        });
    },
    
    // 数量入力の処理
    handleQuantityInput: function(input) {
        let value = parseInt(input.value);
        
        // 範囲チェック
        if (isNaN(value) || value < 0) {
            input.value = '';
        } else if (value > 10) {
            input.value = 10;
            this.showTooltip(input, '最大数量は10です');
        }
        
        // 自動的に関連チェックボックスをチェック
        this.updateRelatedCheckbox(input, value > 0);
    },
    
    // ホイールイベントの処理
    handleWheel: function(e) {
        const input = e.target;
        const delta = e.deltaY < 0 ? 1 : -1;
        const currentValue = parseInt(input.value) || 0;
        const newValue = Math.max(0, Math.min(10, currentValue + delta));
        
        input.value = newValue || '';
        this.handleQuantityInput(input);
    },
    
    // キーボードイベントの処理
    handleKeydown: function(e) {
        const input = e.target;
        
        switch(e.key) {
            case 'ArrowUp':
                e.preventDefault();
                this.incrementValue(input, 1);
                break;
            case 'ArrowDown':
                e.preventDefault();
                this.incrementValue(input, -1);
                break;
            case 'Enter':
                // 次の入力フィールドに移動
                this.focusNextInput(input);
                break;
        }
    },
    
    // 値の増減
    incrementValue: function(input, delta) {
        const currentValue = parseInt(input.value) || 0;
        const newValue = Math.max(0, Math.min(10, currentValue + delta));
        input.value = newValue || '';
        this.handleQuantityInput(input);
    },
    
    // 次の入力フィールドにフォーカス
    focusNextInput: function(currentInput) {
        const allInputs = Array.from(document.querySelectorAll('.wanted-items-grid .quantity-input'));
        const currentIndex = allInputs.indexOf(currentInput);
        
        if (currentIndex < allInputs.length - 1) {
            allInputs[currentIndex + 1].focus();
        }
    },
    
    // アイテムのハイライト
    highlightItem: function(input) {
        const itemRequest = input.closest('.item-request');
        if (itemRequest) {
            itemRequest.classList.add('focused');
            itemRequest.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
            itemRequest.style.borderColor = 'var(--accent-gold)';
        }
    },
    
    // ハイライトの削除
    removeHighlight: function(input) {
        const itemRequest = input.closest('.item-request');
        if (itemRequest) {
            itemRequest.classList.remove('focused');
            itemRequest.style.backgroundColor = '';
            itemRequest.style.borderColor = '';
        }
    },
    
    // ツールチップの表示
    showTooltip: function(input, message) {
        // 既存のツールチップを削除
        const existingTooltip = input.parentElement.querySelector('.quantity-tooltip');
        if (existingTooltip) {
            existingTooltip.remove();
        }
        
        // 新しいツールチップを作成
        const tooltip = document.createElement('div');
        tooltip.className = 'quantity-tooltip';
        tooltip.textContent = message;
        tooltip.style.cssText = `
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            background: #333;
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            white-space: nowrap;
            z-index: 1000;
            pointer-events: none;
        `;
        
        input.parentElement.style.position = 'relative';
        input.parentElement.appendChild(tooltip);
        
        // 2秒後に削除
        setTimeout(() => {
            tooltip.remove();
        }, 2000);
    },
    
    // 関連するチェックボックスの更新
    updateRelatedCheckbox: function(input, shouldCheck) {
        // hasWantedItemsのラジオボタンを更新
        const hasWantedItems = document.querySelector('[name="hasWantedItems"][value="yes"]');
        if (hasWantedItems && shouldCheck) {
            hasWantedItems.checked = true;
            
            // wantedItemsDetailを表示
            const wantedItemsDetail = document.getElementById('wantedItemsDetail');
            if (wantedItemsDetail) {
                wantedItemsDetail.style.display = 'block';
            }
        }
    },
    
    // キーボードショートカットの設定
    setupKeyboardShortcuts: function() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + 数字キーでクイック入力
            if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '8') {
                const index = parseInt(e.key) - 1;
                const inputs = document.querySelectorAll('.wanted-items-grid .quantity-input');
                if (inputs[index]) {
                    inputs[index].focus();
                    inputs[index].value = 1;
                    this.handleQuantityInput(inputs[index]);
                }
            }
        });
    },
    
    // オートフォーカスの設定
    setupAutoFocus: function() {
        // hasWantedItemsが"yes"に変更されたときに最初の入力にフォーカス
        const hasWantedItemsRadios = document.querySelectorAll('[name="hasWantedItems"]');
        hasWantedItemsRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                if (e.target.value === 'yes' && e.target.checked) {
                    setTimeout(() => {
                        const firstInput = document.querySelector('.wanted-items-grid .quantity-input');
                        if (firstInput) {
                            firstInput.focus();
                        }
                    }, 300);
                }
            });
        });
    },
    
    // すべてクリア
    clearAll: function() {
        const inputs = document.querySelectorAll('.wanted-items-grid .quantity-input');
        inputs.forEach(input => {
            input.value = '';
        });
    },
    
    // データの取得
    getQuantityData: function() {
        const data = {};
        const inputs = document.querySelectorAll('.wanted-items-grid .quantity-input');
        
        inputs.forEach(input => {
            if (input.value) {
                data[input.name] = parseInt(input.value);
            }
        });
        
        return data;
    }
};

// DOMContentLoadedで初期化
document.addEventListener('DOMContentLoaded', () => {
    console.log('WantedItemsInputHandler: DOMContentLoaded');
    WantedItemsInputHandler.init();
    
    // wantedItemsDetailが表示された時にも再初期化
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                const wantedItemsDetail = document.getElementById('wantedItemsDetail');
                if (wantedItemsDetail && wantedItemsDetail.style.display !== 'none') {
                    console.log('wantedItemsDetail is now visible, reinitializing inputs');
                    WantedItemsInputHandler.setupQuantityInputs();
                }
            }
        });
    });
    
    const wantedItemsDetail = document.getElementById('wantedItemsDetail');
    if (wantedItemsDetail) {
        observer.observe(wantedItemsDetail, { attributes: true });
    }
});

// グローバルアクセス用
window.WantedItemsInputHandler = WantedItemsInputHandler;