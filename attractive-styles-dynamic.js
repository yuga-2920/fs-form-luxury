// Dynamic Attractive Styles Display Based on Gender
document.addEventListener('DOMContentLoaded', function() {

    // Use imageMapping if available, otherwise use default config
    const attractiveStylesConfig = (typeof imageMapping !== 'undefined' && imageMapping.attractiveStyles) ?
        imageMapping.attractiveStyles :
        {
            male: {
                'suit': { value: 'suit', name: 'スーツ/トラッド', image: 'images/style-suit-level1.jpg' },
                'mode': { value: 'mode', name: 'モード', image: 'images/style-mode-level1.jpg' },
                'elegant': { value: 'elegant', name: 'エレガント/シック', image: 'images/attractive-classic1.jpg' },
                'minimal': { value: 'minimal', name: 'ミニマム/シンプル', image: 'images/style-minimal-1.jpg' },
                'street': { value: 'street', name: 'ストリート/スポーティー', image: 'images/pattern-street1.jpg' },
                'relax': { value: 'relax', name: 'サーフ', image: 'images/style-searf-1.jpg' },
                'american-casual': { value: 'american-casual', name: 'アメカジ', image: 'images/style-amecas-1.jpg' }
            },
            female: {
                'mode': { value: 'mode', name: 'モード', image: 'images/style-female-mode-1.jpg' },
                'elegant': { value: 'elegant', name: 'エレガント/シック', image: 'images/style-female-elegant-1.jpg' },
                'urban-conservative': { value: 'urban-conservative', name: 'アーバン/コンサバティブ', image: 'images/style-female-urban-conservative-1.jpg' },
                'feminine': { value: 'feminine', name: 'フェミニン', image: 'images/style-female-feminine-1.jpg' },
                'sporty': { value: 'sporty', name: 'スポーティー', image: 'images/style-female-sporty-1.jpg' },
                'natural': { value: 'natural', name: 'ナチュラル', image: 'images/style-female-natural-1.jpg' }
            }
        };

    // Function to rebuild attractive styles grid
    function rebuildAttractiveStylesGrid(gender) {
        const gridContainer = document.querySelector('.style-preference-grid');
        if (!gridContainer) return;

        // Clear existing content
        gridContainer.innerHTML = '';

        // Get styles for the selected gender
        const genderStyles = attractiveStylesConfig[gender] || attractiveStylesConfig.male;

        // Convert object to array if necessary
        const styles = Array.isArray(genderStyles) ? genderStyles : Object.values(genderStyles);

        // Create style cards
        styles.forEach(style => {
            const card = document.createElement('div');
            card.className = 'style-preference-card';

            card.innerHTML = `
                <input type="checkbox" name="attractiveStyle" value="${style.value}" id="attractive-${gender}-${style.value}">
                <label for="attractive-${gender}-${style.value}">
                    <img src="${style.image}" alt="${style.name}" class="style-pattern-image">
                    <span>${style.name}</span>
                </label>
            `;

            gridContainer.appendChild(card);
        });

        // Re-attach event listeners for pattern display
        attachStyleCheckboxListeners();
        
        // Re-initialize gender integrated style patterns if available
        setTimeout(() => {
            if (typeof initializeGenderIntegratedStylePatterns === 'function') {
                initializeGenderIntegratedStylePatterns();
            }
        }, 200);
    }

    // Function to attach event listeners to style checkboxes
    function attachStyleCheckboxListeners() {
        const styleCheckboxes = document.querySelectorAll('input[name="attractiveStyle"]');

        styleCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                // Trigger pattern update if the integrated script is loaded
                if (typeof initializeGenderIntegratedStylePatterns === 'function') {
                    // The integrated script already handles this
                    return;
                }
            });
        });
    }

    // Listen for gender changes
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                rebuildAttractiveStylesGrid(this.value);
            }
        });
    });

    // Initialize with current gender
    const currentGender = document.querySelector('input[name="gender"]:checked');
    if (currentGender) {
        rebuildAttractiveStylesGrid(currentGender.value);
    }

    // Export functions for external use
    window.rebuildAttractiveStylesGrid = rebuildAttractiveStylesGrid;
});