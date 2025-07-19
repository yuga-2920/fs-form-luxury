// Quantity Input Handler
// Ensures quantity inputs are always enabled and functional

document.addEventListener('DOMContentLoaded', function() {
    // すべての数量入力フィールドを有効化
    const quantityInputs = document.querySelectorAll('.quantity-input');
    
    quantityInputs.forEach(input => {
        // 入力フィールドを常に有効にする
        input.disabled = false;
        input.removeAttribute('readonly');
        
        // 入力イベントリスナーを追加
        input.addEventListener('input', function(e) {
            // 数値の範囲を制限
            let value = parseInt(e.target.value);
            if (isNaN(value) || value < 1) {
                e.target.value = '';
            } else if (value > 10) {
                e.target.value = 10;
            }
        });
        
        // フォーカスイベントで視覚的フィードバック
        input.addEventListener('focus', function(e) {
            e.target.style.borderColor = '#d4af37';
            e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.2)';
        });
        
        input.addEventListener('blur', function(e) {
            e.target.style.borderColor = '';
            e.target.style.boxShadow = '';
        });
    });
    
    // デバッグ情報
    console.log(`Quantity inputs enabled: ${quantityInputs.length}`);
});