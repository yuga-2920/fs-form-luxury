// Style Patterns 3x5 Grid Enforcer
// Ensures that pattern display is always in 3x5 grid format

document.addEventListener('DOMContentLoaded', function() {
    enforcePatternGrid();
    
    // Monitor for dynamic changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                enforcePatternGrid();
            }
        });
    });
    
    // Observe pattern container
    const patternContainer = document.getElementById('patternSelectionsContainer');
    if (patternContainer) {
        observer.observe(patternContainer, { childList: true, subtree: true });
    }
});

function enforcePatternGrid() {
    // Find all pattern grids
    const patternGrids = document.querySelectorAll('.style-patterns-grid-3x5');
    
    patternGrids.forEach(grid => {
        // Ensure grid has exactly 15 visible items
        const cards = grid.querySelectorAll('.style-pattern-card');
        
        cards.forEach((card, index) => {
            if (index < 15) {
                card.style.display = 'block';
                // Add row/column data attributes
                const row = Math.floor(index / 5) + 1;
                const col = (index % 5) + 1;
                card.setAttribute('data-row', row);
                card.setAttribute('data-col', col);
                
                // Update grid position indicator if exists
                const positionIndicator = card.querySelector('.pattern-grid-position');
                if (positionIndicator) {
                    positionIndicator.textContent = `${row}-${col}`;
                }
            } else {
                // Hide any cards beyond the 15th
                card.style.display = 'none';
            }
        });
        
        // Apply strict grid CSS
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(5, 1fr)';
        grid.style.gridTemplateRows = 'repeat(3, 1fr)';
        
        // Log for debugging
        console.log(`Pattern grid enforced: ${cards.length} cards, showing first 15 in 3x5 grid`);
    });
}

// Function to validate pattern data
function validatePatternData() {
    if (typeof stylePatternData !== 'undefined') {
        Object.keys(stylePatternData).forEach(styleKey => {
            const style = stylePatternData[styleKey];
            if (style.patterns && style.patterns.length !== 15) {
                console.warn(`Style "${style.name}" has ${style.patterns.length} patterns instead of 15`);
            }
        });
    }
}

// Run validation on load
setTimeout(validatePatternData, 1000);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        enforcePatternGrid,
        validatePatternData
    };
}