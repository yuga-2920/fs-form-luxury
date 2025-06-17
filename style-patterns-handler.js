// Style Patterns Handler - 5×3 = 15 patterns display
document.addEventListener('DOMContentLoaded', function() {
    initializeStylePatterns();
});

// Style pattern data - 5 patterns for each style
const stylePatternData = {
    mode: {
        name: 'モード',
        patterns: [
            { id: 'mode-1', name: 'アヴァンギャルド', image: 'style-mode-level1.jpg' },
            { id: 'mode-2', name: 'ミニマルモード', image: 'style-mode-level2.jpg' },
            { id: 'mode-3', name: 'ダークモード', image: 'style-mode-level3.jpg' },
            { id: 'mode-4', name: 'フューチャリスティック', image: 'style-mode-level4.jpg' },
            { id: 'mode-5', name: 'アーキテクチュラル', image: 'style-mode-level5.jpg' }
        ]
    },
    classic: {
        name: 'エレガント/シック',
        patterns: [
            { id: 'classic-1', name: 'トラディショナル', image: 'style-classic-1.jpg' },
            { id: 'classic-2', name: 'ブリティッシュ', image: 'style-classic-2.jpg' },
            { id: 'classic-3', name: 'プレッピー', image: 'style-classic-3.jpg' },
            { id: 'classic-4', name: 'アイビー', image: 'style-classic-4.jpg' },
            { id: 'classic-5', name: 'コンテンポラリー', image: 'style-classic-5.jpg' }
        ]
    },
    minimal: {
        name: 'ミニマル/シンプル',
        patterns: [
            { id: 'minimal-1', name: 'エッセンシャル', image: 'style-minimal-1.jpg' },
            { id: 'minimal-2', name: 'モノトーン', image: 'style-minimal-2.jpg' },
            { id: 'minimal-3', name: 'ノームコア', image: 'style-minimal-3.jpg' },
            { id: 'minimal-4', name: 'スカンジナビアン', image: 'style-minimal-4.jpg' },
            { id: 'minimal-5', name: 'ジャパニーズミニマル', image: 'style-minimal-5.jpg' }
        ]
    },
    elegant: {
        name: 'エレガント',
        patterns: [
            { id: 'elegant-1', name: 'クラシックエレガント', image: 'style-elegant-1.jpg' },
            { id: 'elegant-2', name: 'モダンエレガント', image: 'style-elegant-2.jpg' },
            { id: 'elegant-3', name: 'フェミニンエレガント', image: 'style-elegant-3.jpg' },
            { id: 'elegant-4', name: 'ラグジュアリー', image: 'style-elegant-4.jpg' },
            { id: 'elegant-5', name: 'ソフィスティケート', image: 'style-elegant-5.jpg' }
        ]
    },
    'casual-chic': {
        name: 'ストリート/スポーティー',
        patterns: [
            { id: 'street-1', name: 'アーバンストリート', image: 'style-street-1.jpg' },
            { id: 'street-2', name: 'スケーター', image: 'style-street-2.jpg' },
            { id: 'street-3', name: 'アスレジャー', image: 'style-street-3.jpg' },
            { id: 'street-4', name: 'テックウェア', image: 'style-street-4.jpg' },
            { id: 'street-5', name: 'ストリートラグジュアリー', image: 'style-street-5.jpg' }
        ]
    },
    relax: {
        name: 'サーフ',
        patterns: [
            { id: 'surf-1', name: 'ビーチカジュアル', image: 'style-searf-1.jpg' },
            { id: 'surf-2', name: 'カリフォルニア', image: 'style-searf-2.jpg' },
            { id: 'surf-3', name: 'ボヘミアン', image: 'style-searf-3.jpg' },
            { id: 'surf-4', name: 'トロピカル', image: 'style-searf-4.jpg' },
            { id: 'surf-5', name: 'リゾート', image: 'style-searf-5.jpg' }
        ]
    },
    'american-casual': {
        name: 'アメカジ',
        patterns: [
            { id: 'amecas-1', name: 'ヴィンテージアメリカン', image: 'style-amecas-1.jpg' },
            { id: 'amecas-2', name: 'ワークウェア', image: 'style-amecas-2.jpg' },
            { id: 'amecas-3', name: 'ウエスタン', image: 'style-amecas-3.jpg' },
            { id: 'amecas-4', name: 'ミリタリー', image: 'style-amecas-4.jpg' },
            { id: 'amecas-5', name: 'ヘリテージ', image: 'style-amecas-5.jpg' }
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
        <p>選択された各スタイルから、お好みのパターンを選んでください。合計で最大15パターンまで選択可能です。</p>
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
                    <p class="style-category-description">以下の5つのパターンからお選びください</p>
                </div>
                <span class="style-category-badge">カテゴリー ${index + 1}</span>
            </div>
            <div class="style-patterns-grid" id="patterns-${styleKey}">
                ${styleData.patterns.map((pattern, i) => `
                    <div class="style-pattern-card">
                        <input type="checkbox" 
                               name="stylePattern_${styleKey}" 
                               value="${pattern.id}" 
                               id="${pattern.id}">
                        <label for="${pattern.id}" class="pattern-content">
                            <span class="pattern-level">パターン ${i + 1}</span>
                            <img src="images/${pattern.image}" 
                                 alt="${pattern.name}" 
                                 class="pattern-image"
                                 onerror="this.src='images/placeholder.jpg'">
                            <div class="pattern-name">${pattern.name}</div>
                            <div class="pattern-number">No.${(index * 5) + i + 1}</div>
                        </label>
                    </div>
                `).join('')}
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
            <span class="selected-count">選択中: <strong id="patternCount">0</strong> / 15 パターン</span>
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