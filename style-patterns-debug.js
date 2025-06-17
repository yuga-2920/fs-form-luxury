// Style Patterns Debug and Fix
document.addEventListener('DOMContentLoaded', function() {
    console.log('Style Patterns Debug: Initializing...');
    
    // Wait for other scripts to load
    setTimeout(() => {
        debugStylePatterns();
        fixStylePatternDisplay();
    }, 500);
});

function debugStylePatterns() {
    console.log('=== Style Patterns Debug Info ===');
    
    // Check if stylePatternData exists
    if (typeof stylePatternData !== 'undefined') {
        console.log('stylePatternData found:', Object.keys(stylePatternData));
        
        // Check pattern counts
        Object.keys(stylePatternData).forEach(key => {
            const style = stylePatternData[key];
            console.log(`Style "${style.name}": ${style.patterns.length} patterns`);
        });
    } else {
        console.error('stylePatternData not found!');
    }
    
    // Check style checkboxes
    const styleCheckboxes = document.querySelectorAll('input[name="attractiveStyle"]');
    console.log('Style checkboxes found:', styleCheckboxes.length);
    
    // Check pattern container
    const patternContainer = document.getElementById('patternSelectionsContainer');
    console.log('Pattern container found:', !!patternContainer);
    
    // Monitor style selections
    styleCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            console.log(`Style "${this.value}" ${this.checked ? 'selected' : 'deselected'}`);
            
            // Wait for DOM update
            setTimeout(() => {
                const grids = document.querySelectorAll('.style-patterns-grid-3x5');
                console.log('Pattern grids found:', grids.length);
                
                grids.forEach(grid => {
                    const cards = grid.querySelectorAll('.style-pattern-card');
                    console.log(`Grid has ${cards.length} pattern cards`);
                });
            }, 100);
        });
    });
}

function fixStylePatternDisplay() {
    // Fix any style value mismatches
    const styleMapping = {
        'mode': 'mode',
        'classic': 'classic',
        'minimal': 'minimal',
        'elegant': 'elegant',
        'casual-chic': 'casual-chic',
        'street': 'street',
        'relax': 'relax',
        'american-casual': 'american-casual',
        'conservative': 'conservative'
    };
    
    // Fix checkbox values
    const checkboxes = document.querySelectorAll('input[name="attractiveStyle"]');
    checkboxes.forEach(checkbox => {
        const label = checkbox.parentElement.querySelector('span');
        if (label) {
            const styleName = label.textContent.trim();
            
            // Map style names to values
            switch (styleName) {
                case 'スーツ/トラッド':
                    checkbox.value = 'classic';
                    break;
                case 'モード':
                    checkbox.value = 'mode';
                    break;
                case 'エレガント/シック':
                    checkbox.value = 'elegant';
                    break;
                case 'ミニマム/シンプル':
                    checkbox.value = 'minimal';
                    break;
                case 'エレガント':
                    checkbox.value = 'elegant';
                    break;
                case 'ストリート/スポーティー':
                    checkbox.value = 'street';
                    break;
                case 'サーフ':
                    checkbox.value = 'relax';
                    break;
                case 'アメカジ':
                    checkbox.value = 'american-casual';
                    break;
            }
            
            console.log(`Fixed checkbox value: "${styleName}" -> "${checkbox.value}"`);
        }
    });
    
    // Force grid display
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length > 0) {
                const grids = document.querySelectorAll('.style-patterns-grid-3x5');
                grids.forEach(grid => {
                    const cards = grid.querySelectorAll('.style-pattern-card');
                    if (cards.length > 0) {
                        // Force 3x5 display
                        grid.style.display = 'grid';
                        grid.style.gridTemplateColumns = 'repeat(5, 1fr)';
                        grid.style.gridTemplateRows = 'repeat(3, 1fr)';
                        grid.style.gap = '16px';
                        
                        console.log(`Forced 3x5 grid on element with ${cards.length} cards`);
                    }
                });
            }
        });
    });
    
    const container = document.getElementById('patternSelectionsContainer');
    if (container) {
        observer.observe(container, { childList: true, subtree: true });
    }
}

// Export for debugging
window.stylePatternDebug = {
    debugStylePatterns,
    fixStylePatternDisplay,
    checkCurrentState: () => {
        console.log('=== Current State ===');
        const selectedStyles = document.querySelectorAll('input[name="attractiveStyle"]:checked');
        console.log('Selected styles:', Array.from(selectedStyles).map(cb => cb.value));
        
        const grids = document.querySelectorAll('.style-patterns-grid-3x5');
        grids.forEach((grid, i) => {
            const cards = grid.querySelectorAll('.style-pattern-card');
            console.log(`Grid ${i + 1}: ${cards.length} cards`);
        });
    }
};