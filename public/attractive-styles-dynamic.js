// Dynamic attractive styles grid builder
window.rebuildAttractiveStylesGrid = function(gender) {
    const container = document.querySelector('.style-preference-grid');
    if (!container || !window.imageMapping || !window.imageMapping.attractiveStyles) {
        console.error('Container or imageMapping not found');
        return;
    }

    // Clear existing content
    container.innerHTML = '';

    // Get styles for the selected gender
    const styles = window.imageMapping.attractiveStyles[gender] || window.imageMapping.attractiveStyles.male;

    // Create style items
    Object.entries(styles).forEach(([key, style]) => {
        const styleItem = document.createElement('div');
        styleItem.className = 'style-preference-item';
        
        styleItem.innerHTML = `
            <input type="checkbox" name="attractiveStyle" value="${key}" id="style-${key}">
            <label for="style-${key}" class="style-preference-label">
                <img src="${style.image}" alt="${style.name}">
                <span class="style-name">${style.name}</span>
            </label>
        `;
        
        container.appendChild(styleItem);
    });

    // Add change event listeners to limit selection to 3
    const checkboxes = container.querySelectorAll('input[name="attractiveStyle"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkedBoxes = container.querySelectorAll('input[name="attractiveStyle"]:checked');
            
            if (checkedBoxes.length > 3) {
                this.checked = false;
                alert('最大3つまで選択できます。');
            }
            
            // Trigger pattern selection display if function exists
            if (typeof window.handleAttractiveStyleSelection === 'function') {
                window.handleAttractiveStyleSelection();
            }
        });
    });
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // Get current gender selection
    const currentGender = document.querySelector('input[name="gender"]:checked');
    const gender = currentGender ? currentGender.value : 'male';
    
    // Build the grid
    if (window.rebuildAttractiveStylesGrid) {
        window.rebuildAttractiveStylesGrid(gender);
    }
    
    // Listen for gender changes
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked && window.rebuildAttractiveStylesGrid) {
                window.rebuildAttractiveStylesGrid(this.value);
            }
        });
    });
});

// Also rebuild when called from other scripts
if (typeof window.ensureAttractiveStylesDisplay === 'undefined') {
    window.ensureAttractiveStylesDisplay = function() {
        const currentGender = document.querySelector('input[name="gender"]:checked');
        const gender = currentGender ? currentGender.value : 'male';
        
        if (window.rebuildAttractiveStylesGrid) {
            window.rebuildAttractiveStylesGrid(gender);
        }
    };
}