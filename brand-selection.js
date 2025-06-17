// Brand Selection with ○× functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeBrandSelection();
});

function initializeBrandSelection() {
    // Add click handlers to all brand selection buttons
    const brandButtons = document.querySelectorAll('.brand-select-btn');
    
    brandButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const brand = this.dataset.brand;
            const preference = this.dataset.preference;
            const brandItem = this.closest('.brand-selection-item');
            const hiddenInput = brandItem.querySelector('input[type="hidden"]');
            
            // Find the other button (like/dislike)
            const otherPreference = preference === 'like' ? 'dislike' : 'like';
            const otherButton = brandItem.querySelector(`.brand-select-btn.${otherPreference}`);
            
            // Toggle selection
            if (this.classList.contains('selected')) {
                // Deselect
                this.classList.remove('selected');
                hiddenInput.value = '';
            } else {
                // Select this and deselect other
                this.classList.add('selected');
                otherButton.classList.remove('selected');
                hiddenInput.value = preference;
            }
            
            // Update form state if state manager exists
            if (window.formStateManager) {
                window.formStateManager.handleChange({ target: hiddenInput });
            }
        });
    });
}

// Function to get all brand preferences
function getBrandPreferences() {
    const preferences = {
        liked: [],
        disliked: []
    };
    
    const brandItems = document.querySelectorAll('.brand-selection-item');
    brandItems.forEach(item => {
        const brand = item.dataset.brand;
        const hiddenInput = item.querySelector('input[type="hidden"]');
        const value = hiddenInput.value;
        
        if (value === 'like') {
            preferences.liked.push(brand);
        } else if (value === 'dislike') {
            preferences.disliked.push(brand);
        }
    });
    
    return preferences;
}

// Function to set brand preferences (for loading saved state)
function setBrandPreferences(preferences) {
    if (!preferences) return;
    
    // Clear all selections first
    document.querySelectorAll('.brand-select-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Set liked brands
    if (preferences.liked && Array.isArray(preferences.liked)) {
        preferences.liked.forEach(brand => {
            const likeBtn = document.querySelector(`.brand-select-btn.like[data-brand="${brand}"]`);
            if (likeBtn) {
                likeBtn.click();
            }
        });
    }
    
    // Set disliked brands
    if (preferences.disliked && Array.isArray(preferences.disliked)) {
        preferences.disliked.forEach(brand => {
            const dislikeBtn = document.querySelector(`.brand-select-btn.dislike[data-brand="${brand}"]`);
            if (dislikeBtn) {
                dislikeBtn.click();
            }
        });
    }
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeBrandSelection,
        getBrandPreferences,
        setBrandPreferences
    };
}