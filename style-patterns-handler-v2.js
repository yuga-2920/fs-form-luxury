// Style Patterns Handler - 3×5 = 15 patterns display per style
document.addEventListener('DOMContentLoaded', function() {
    initializeStylePatterns();
});

// Style pattern data - 15 patterns for each style
const stylePatternData = {
    mode: {
        name: 'モード',
        patterns: [
            // Row 1
            { id: 'mode-1', name: 'アヴァンギャルド', image: 'style-mode-1.jpg' },
            { id: 'mode-2', name: 'ミニマルモード', image: 'style-mode-2.jpg' },
            { id: 'mode-3', name: 'ダークモード', image: 'style-mode-3.jpg' },
            { id: 'mode-4', name: 'フューチャリスティック', image: 'style-mode-4.jpg' },
            { id: 'mode-5', name: 'アーキテクチュラル', image: 'style-mode-5.jpg' },
            // Row 2
            { id: 'mode-6', name: 'デコンストラクション', image: 'style-mode-6.jpg' },
            { id: 'mode-7', name: 'オールブラック', image: 'style-mode-7.jpg' },
            { id: 'mode-8', name: 'ニュートラル', image: 'style-mode-8.jpg' },
            { id: 'mode-9', name: 'エクスペリメンタル', image: 'style-mode-9.jpg' },
            { id: 'mode-10', name: 'ジオメトリック', image: 'style-mode-10.jpg' },
            // Row 3
            { id: 'mode-11', name: 'モノクローム', image: 'style-mode-11.jpg' },
            { id: 'mode-12', name: 'レイヤード', image: 'style-mode-12.jpg' },
            { id: 'mode-13', name: 'アシンメトリー', image: 'style-mode-13.jpg' },
            { id: 'mode-14', name: 'テクスチャー', image: 'style-mode-14.jpg' },
            { id: 'mode-15', name: 'モダンミニマル', image: 'style-mode-15.jpg' }
        ]
    },
    classic: {
        name: 'クラシック/エレガント',
        patterns: [
            // Row 1
            { id: 'classic-1', name: 'トラディショナル', image: 'style-classic-1.jpg' },
            { id: 'classic-2', name: 'ブリティッシュ', image: 'style-classic-2.jpg' },
            { id: 'classic-3', name: 'プレッピー', image: 'style-classic-3.jpg' },
            { id: 'classic-4', name: 'アイビー', image: 'style-classic-4.jpg' },
            { id: 'classic-5', name: 'コンテンポラリー', image: 'style-classic-5.jpg' },
            // Row 2
            { id: 'classic-6', name: 'フレンチシック', image: 'style-classic-6.jpg' },
            { id: 'classic-7', name: 'イタリアンクラシック', image: 'style-classic-7.jpg' },
            { id: 'classic-8', name: 'アメリカントラッド', image: 'style-classic-8.jpg' },
            { id: 'classic-9', name: 'ネオクラシック', image: 'style-classic-9.jpg' },
            { id: 'classic-10', name: 'モダンクラシック', image: 'style-classic-10.jpg' },
            // Row 3
            { id: 'classic-11', name: 'ビジネスエレガント', image: 'style-classic-11.jpg' },
            { id: 'classic-12', name: 'カジュアルエレガント', image: 'style-classic-12.jpg' },
            { id: 'classic-13', name: 'サヴィルロウ', image: 'style-classic-13.jpg' },
            { id: 'classic-14', name: 'ジェントルマン', image: 'style-classic-14.jpg' },
            { id: 'classic-15', name: 'タイムレス', image: 'style-classic-15.jpg' }
        ]
    },
    minimal: {
        name: 'ミニマル/シンプル',
        patterns: [
            // Row 1
            { id: 'minimal-1', name: 'エッセンシャル', image: 'style-minimal-1.jpg' },
            { id: 'minimal-2', name: 'モノトーン', image: 'style-minimal-2.jpg' },
            { id: 'minimal-3', name: 'ノームコア', image: 'style-minimal-3.jpg' },
            { id: 'minimal-4', name: 'スカンジナビアン', image: 'style-minimal-4.jpg' },
            { id: 'minimal-5', name: 'ジャパニーズミニマル', image: 'style-minimal-5.jpg' },
            // Row 2
            { id: 'minimal-6', name: 'クリーンライン', image: 'style-minimal-6.jpg' },
            { id: 'minimal-7', name: 'ニュートラルトーン', image: 'style-minimal-8.jpg' },
            { id: 'minimal-8', name: 'モダンベーシック', image: 'style-minimal-8.jpg' },
            { id: 'minimal-9', name: 'アーバンミニマル', image: 'style-minimal-9.jpg' },
            { id: 'minimal-10', name: 'ソフトミニマル', image: 'style-minimal-10.jpg' },
            // Row 3
            { id: 'minimal-11', name: 'ラグジュアリーミニマル', image: 'style-minimal-11.jpg' },
            { id: 'minimal-12', name: 'テクニカルミニマル', image: 'style-minimal-12.jpg' },
            { id: 'minimal-13', name: 'オーガニックミニマル', image: 'style-minimal-13.jpg' },
            { id: 'minimal-14', name: 'アーキテクチュラルミニマル', image: 'style-minimal-14.jpg' },
            { id: 'minimal-15', name: 'ゼロウェイスト', image: 'style-minimal-15.jpg' }
        ]
    },
    elegant: {
        name: 'エレガント',
        patterns: [
            // Row 1
            { id: 'elegant-1', name: 'クラシックエレガント', image: 'style-elegant-1.jpg' },
            { id: 'elegant-2', name: 'モダンエレガント', image: 'style-elegant-2.jpg' },
            { id: 'elegant-3', name: 'フェミニンエレガント', image: 'style-elegant-3.jpg' },
            { id: 'elegant-4', name: 'ラグジュアリー', image: 'style-elegant-4.jpg' },
            { id: 'elegant-5', name: 'ソフィスティケート', image: 'style-elegant-5.jpg' },
            // Row 2
            { id: 'elegant-6', name: 'グレースフル', image: 'style-elegant-6.jpg' },
            { id: 'elegant-7', name: 'ロマンティック', image: 'style-elegant-7.jpg' },
            { id: 'elegant-8', name: 'パリジャンシック', image: 'style-elegant-8.jpg' },
            { id: 'elegant-9', name: 'ハリウッドグラマー', image: 'style-elegant-9.jpg' },
            { id: 'elegant-10', name: 'クチュール', image: 'style-elegant-10.jpg' },
            // Row 3
            { id: 'elegant-11', name: 'イブニングエレガント', image: 'style-elegant-11.jpg' },
            { id: 'elegant-12', name: 'ビジネスエレガント', image: 'style-elegant-12.jpg' },
            { id: 'elegant-13', name: 'カジュアルエレガント', image: 'style-elegant-13.jpg' },
            { id: 'elegant-14', name: 'モダンフェミニン', image: 'style-elegant-14.jpg' },
            { id: 'elegant-15', name: 'タイムレスエレガント', image: 'style-elegant-15.jpg' }
        ]
    },
    'casual-chic': {
        name: 'カジュアルシック',
        patterns: [
            // Row 1
            { id: 'casual-1', name: 'アーバンカジュアル', image: 'style-casual-1.jpg' },
            { id: 'casual-2', name: 'スマートカジュアル', image: 'style-casual-2.jpg' },
            { id: 'casual-3', name: 'ウィークエンドカジュアル', image: 'style-casual-3.jpg' },
            { id: 'casual-4', name: 'リラックスシック', image: 'style-casual-4.jpg' },
            { id: 'casual-5', name: 'モダンカジュアル', image: 'style-casual-5.jpg' },
            // Row 2
            { id: 'casual-6', name: 'デイリーシック', image: 'style-casual-6.jpg' },
            { id: 'casual-7', name: 'エフォートレスシック', image: 'style-casual-7.jpg' },
            { id: 'casual-8', name: 'フレンチカジュアル', image: 'style-casual-8.jpg' },
            { id: 'casual-9', name: 'アメリカンカジュアル', image: 'style-casual-9.jpg' },
            { id: 'casual-10', name: 'ヨーロピアンカジュアル', image: 'style-casual-10.jpg' },
            // Row 3
            { id: 'casual-11', name: 'アスレジャーシック', image: 'style-casual-11.jpg' },
            { id: 'casual-12', name: 'ボヘミアンシック', image: 'style-casual-12.jpg' },
            { id: 'casual-13', name: 'プレッピーカジュアル', image: 'style-casual-13.jpg' },
            { id: 'casual-14', name: 'ネオカジュアル', image: 'style-casual-14.jpg' },
            { id: 'casual-15', name: 'コンフォートシック', image: 'style-casual-15.jpg' }
        ]
    },
    street: {
        name: 'ストリート/スポーティー',
        patterns: [
            // Row 1
            { id: 'street-1', name: 'アーバンストリート', image: 'style-street-1.jpg' },
            { id: 'street-2', name: 'スケーター', image: 'style-street-2.jpg' },
            { id: 'street-3', name: 'アスレジャー', image: 'style-street-3.jpg' },
            { id: 'street-4', name: 'テックウェア', image: 'style-street-4.jpg' },
            { id: 'street-5', name: 'ストリートラグジュアリー', image: 'style-street-5.jpg' },
            // Row 2
            { id: 'street-6', name: 'ヒップホップ', image: 'style-street-6.jpg' },
            { id: 'street-7', name: 'グラフィティ', image: 'style-street-7.jpg' },
            { id: 'street-8', name: 'スポーツミックス', image: 'style-street-8.jpg' },
            { id: 'street-9', name: 'アウトドアアーバン', image: 'style-street-9.jpg' },
            { id: 'street-10', name: 'サイバーパンク', image: 'style-street-10.jpg' },
            // Row 3
            { id: 'street-11', name: 'ジャパニーズストリート', image: 'style-street-11.jpg' },
            { id: 'street-12', name: 'ヴィンテージスポーツ', image: 'style-street-12.jpg' },
            { id: 'street-13', name: 'ニューウェーブ', image: 'style-street-13.jpg' },
            { id: 'street-14', name: 'フューチャースポーツ', image: 'style-street-14.jpg' },
            { id: 'street-15', name: 'アーバンアスリート', image: 'style-street-15.jpg' }
        ]
    },
    relax: {
        name: 'リラックス/ナチュラル',
        patterns: [
            // Row 1
            { id: 'relax-1', name: 'ビーチカジュアル', image: 'style-relax-1.jpg' },
            { id: 'relax-2', name: 'カリフォルニア', image: 'style-relax-2.jpg' },
            { id: 'relax-3', name: 'ボヘミアン', image: 'style-relax-3.jpg' },
            { id: 'relax-4', name: 'トロピカル', image: 'style-relax-4.jpg' },
            { id: 'relax-5', name: 'リゾート', image: 'style-relax-5.jpg' },
            // Row 2
            { id: 'relax-6', name: 'サーフスタイル', image: 'style-relax-6.jpg' },
            { id: 'relax-7', name: 'ナチュラルリネン', image: 'style-relax-7.jpg' },
            { id: 'relax-8', name: 'アーシートーン', image: 'style-relax-8.jpg' },
            { id: 'relax-9', name: 'コンフォートウェア', image: 'style-relax-9.jpg' },
            { id: 'relax-10', name: 'ヨガウェア', image: 'style-relax-10.jpg' },
            // Row 3
            { id: 'relax-11', name: 'オーガニック', image: 'style-relax-11.jpg' },
            { id: 'relax-12', name: 'ルーズフィット', image: 'style-relax-12.jpg' },
            { id: 'relax-13', name: 'ホームウェア', image: 'style-relax-13.jpg' },
            { id: 'relax-14', name: 'ウィークエンド', image: 'style-relax-14.jpg' },
            { id: 'relax-15', name: 'エコフレンドリー', image: 'style-relax-15.jpg' }
        ]
    },
    'american-casual': {
        name: 'アメリカンカジュアル',
        patterns: [
            // Row 1
            { id: 'amecas-1', name: 'ヴィンテージアメリカン', image: 'style-amecas-1.jpg' },
            { id: 'amecas-2', name: 'ワークウェア', image: 'style-amecas-2.jpg' },
            { id: 'amecas-3', name: 'ウエスタン', image: 'style-amecas-3.jpg' },
            { id: 'amecas-4', name: 'ミリタリー', image: 'style-amecas-4.jpg' },
            { id: 'amecas-5', name: 'ヘリテージ', image: 'style-amecas-5.jpg' },
            // Row 2
            { id: 'amecas-6', name: 'ルードボーイ', image: 'style-amecas-6.jpg' },
            { id: 'amecas-7', name: 'バイカー', image: 'style-amecas-7.jpg' },
            { id: 'amecas-8', name: 'グランジ', image: 'style-amecas-8.jpg' },
            { id: 'amecas-9', name: 'カレッジ', image: 'style-amecas-9.jpg' },
            { id: 'amecas-10', name: 'デニムオンデニム', image: 'style-amecas-10.jpg' },
            // Row 3
            { id: 'amecas-11', name: 'ヴィンテージスポーツ', image: 'style-amecas-11.jpg' },
            { id: 'amecas-12', name: 'アウトドア', image: 'style-amecas-12.jpg' },
            { id: 'amecas-13', name: 'ネイティブアメリカン', image: 'style-amecas-13.jpg' },
            { id: 'amecas-14', name: 'ルート66', image: 'style-amecas-14.jpg' },
            { id: 'amecas-15', name: 'ラギッド', image: 'style-amecas-15.jpg' }
        ]
    },
    conservative: {
        name: 'コンサバティブ',
        patterns: [
            // Row 1
            { id: 'conservative-1', name: 'トラディショナル', image: 'style-conservative-1.jpg' },
            { id: 'conservative-2', name: 'ビジネスフォーマル', image: 'style-conservative-2.jpg' },
            { id: 'conservative-3', name: 'クラシカル', image: 'style-conservative-3.jpg' },
            { id: 'conservative-4', name: 'プロフェッショナル', image: 'style-conservative-4.jpg' },
            { id: 'conservative-5', name: 'タイムレス', image: 'style-conservative-5.jpg' },
            // Row 2
            { id: 'conservative-6', name: 'オフィスウェア', image: 'style-conservative-6.jpg' },
            { id: 'conservative-7', name: 'バンカーズ', image: 'style-conservative-7.jpg' },
            { id: 'conservative-8', name: 'エグゼクティブ', image: 'style-conservative-8.jpg' },
            { id: 'conservative-9', name: 'アカデミック', image: 'style-conservative-9.jpg' },
            { id: 'conservative-10', name: 'ネイビースーツ', image: 'style-conservative-10.jpg' },
            // Row 3
            { id: 'conservative-11', name: 'ビジネスカジュアル', image: 'style-conservative-11.jpg' },
            { id: 'conservative-12', name: 'スマートドレス', image: 'style-conservative-12.jpg' },
            { id: 'conservative-13', name: 'フォーマルウェア', image: 'style-conservative-13.jpg' },
            { id: 'conservative-14', name: 'セレモニー', image: 'style-conservative-14.jpg' },
            { id: 'conservative-15', name: 'リクルート', image: 'style-conservative-15.jpg' }
        ]
    }
};

function initializeStylePatterns() {
    const styleCheckboxes = document.querySelectorAll('input[name="attractiveStyle"]');
    const patternSelections = document.getElementById('patternSelections');
    const patternContainer = document.getElementById('patternSelectionsContainer');
    
    if (!styleCheckboxes.length || !patternSelections || !patternContainer) return;
    
    // Track selected styles
    const selectedStyles = new Set();
    
    styleCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                selectedStyles.add(this.value);
                // Limit to 3 selections
                if (selectedStyles.size > 3) {
                    const firstStyle = Array.from(selectedStyles)[0];
                    document.querySelector(`input[name="attractiveStyle"][value="${firstStyle}"]`).checked = false;
                    selectedStyles.delete(firstStyle);
                    showNotification('最大3つのスタイルまで選択可能です', 'warning');
                }
            } else {
                selectedStyles.delete(this.value);
            }
            
            updatePatternDisplay(selectedStyles, patternContainer, patternSelections);
        });
    });
}

function updatePatternDisplay(selectedStyles, container, wrapper) {
    // Clear existing content
    container.innerHTML = '';
    
    if (selectedStyles.size === 0) {
        wrapper.style.display = 'none';
        return;
    }
    
    wrapper.style.display = 'block';
    
    // Add instructions
    const instructions = document.createElement('div');
    instructions.className = 'pattern-selection-instructions';
    instructions.innerHTML = `
        <h4>スタイルパターンを選択してください</h4>
        <p>選択された各スタイルから、お好みのパターンを選んでください（各スタイル15パターン）</p>
    `;
    container.appendChild(instructions);
    
    // Create sections for each selected style
    Array.from(selectedStyles).forEach((styleKey, index) => {
        const styleData = stylePatternData[styleKey];
        if (!styleData) return;
        
        const categorySection = document.createElement('div');
        categorySection.className = 'style-category-section';
        categorySection.innerHTML = `
            <div class="style-category-header">
                <div>
                    <h3 class="style-category-title">${styleData.name}</h3>
                    <p class="style-category-description">3×5グリッドから複数選択可能</p>
                </div>
                <span class="style-category-badge">スタイル ${index + 1}</span>
            </div>
            <div class="style-patterns-grid-3x5" id="patterns-${styleKey}">
                ${styleData.patterns.map((pattern, i) => {
                    const row = Math.floor(i / 5) + 1;
                    const col = (i % 5) + 1;
                    return `
                    <div class="style-pattern-card" data-row="${row}" data-col="${col}">
                        <input type="checkbox" 
                               name="stylePattern_${styleKey}" 
                               value="${pattern.id}" 
                               id="${pattern.id}">
                        <label for="${pattern.id}" class="pattern-content">
                            <span class="pattern-grid-position">${row}-${col}</span>
                            <img src="images/${pattern.image}" 
                                 alt="${pattern.name}" 
                                 class="pattern-image"
                                 onerror="this.src='images/placeholder.jpg'">
                            <div class="pattern-name">${pattern.name}</div>
                        </label>
                    </div>
                `}).join('')}
            </div>
        `;
        
        container.appendChild(categorySection);
    });
    
    // Add selected patterns summary
    updateSelectedPatternsSummary();
}

function updateSelectedPatternsSummary() {
    let summary = document.querySelector('.selected-patterns-summary');
    
    if (!summary) {
        summary = document.createElement('div');
        summary.className = 'selected-patterns-summary';
        summary.innerHTML = `
            <span class="selected-count">選択中: <strong id="patternCount">0</strong> パターン</span>
            <button type="button" class="btn-clear-patterns">選択をクリア</button>
        `;
        document.body.appendChild(summary);
        
        // Add clear button handler
        summary.querySelector('.btn-clear-patterns').addEventListener('click', clearAllPatterns);
    }
    
    // Update count
    const selectedPatterns = document.querySelectorAll('input[name^="stylePattern_"]:checked');
    const count = selectedPatterns.length;
    
    document.getElementById('patternCount').textContent = count;
    
    if (count > 0) {
        summary.classList.add('visible');
    } else {
        summary.classList.remove('visible');
    }
}

function clearAllPatterns() {
    const patternCheckboxes = document.querySelectorAll('input[name^="stylePattern_"]');
    patternCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    updateSelectedPatternsSummary();
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `pattern-notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 24px;
        background: ${type === 'warning' ? '#ff9800' : '#4caf50'};
        color: white;
        border-radius: 4px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add event delegation for pattern selection
document.addEventListener('change', function(e) {
    if (e.target.name && e.target.name.startsWith('stylePattern_')) {
        updateSelectedPatternsSummary();
    }
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeStylePatterns,
        stylePatternData
    };
}