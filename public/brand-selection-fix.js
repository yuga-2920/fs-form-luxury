// Brand Selection with ○× functionality - Enhanced version
(function() {
    // Initialize brand selection when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeBrandSelection);
    } else {
        // DOM is already loaded
        initializeBrandSelection();
    }

    function initializeBrandSelection() {
        console.log('Initializing brand selection...');
        
        // Use event delegation for better performance and dynamic content
        const brandGrid = document.querySelector('.brand-selection-grid');
        
        if (!brandGrid) {
            console.error('Brand selection grid not found');
            // Try again after a short delay
            setTimeout(initializeBrandSelection, 500);
            return;
        }
        
        // Add event listener to the grid container
        brandGrid.addEventListener('click', handleBrandButtonClick);
        
        // Also initialize any existing buttons
        initializeExistingButtons();
        
        console.log('Brand selection initialized successfully');
    }
    
    function handleBrandButtonClick(e) {
        // Check if clicked element is a brand button or its child
        const button = e.target.closest('.brand-select-btn');
        if (!button) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        const brand = button.dataset.brand;
        const preference = button.dataset.preference;
        const brandItem = button.closest('.brand-selection-item');
        
        if (!brandItem) {
            console.error('Brand item not found for button', button);
            return;
        }
        
        const hiddenInput = brandItem.querySelector('input[type="hidden"]');
        
        // Find the other button (like/dislike)
        const otherPreference = preference === 'like' ? 'dislike' : 'like';
        const otherButton = brandItem.querySelector(`.brand-select-btn.${otherPreference}`);
        
        // Toggle selection
        if (button.classList.contains('selected')) {
            // Deselect
            button.classList.remove('selected');
            if (hiddenInput) hiddenInput.value = '';
            console.log(`Deselected ${preference} for ${brand}`);
        } else {
            // Select this and deselect other
            button.classList.add('selected');
            if (otherButton) otherButton.classList.remove('selected');
            if (hiddenInput) hiddenInput.value = preference;
            console.log(`Selected ${preference} for ${brand}`);
        }
        
        // Update visual state
        updateBrandItemState(brandItem, preference, button.classList.contains('selected'));
        
        // Update form state if state manager exists
        if (window.formStateManager && hiddenInput) {
            window.formStateManager.handleChange({ target: hiddenInput });
        }
    }
    
    function updateBrandItemState(brandItem, preference, isSelected) {
        // Add visual feedback to the brand item
        brandItem.classList.remove('brand-liked', 'brand-disliked');
        
        if (isSelected) {
            if (preference === 'like') {
                brandItem.classList.add('brand-liked');
            } else {
                brandItem.classList.add('brand-disliked');
            }
        }
    }
    
    function initializeExistingButtons() {
        // Initialize any pre-selected buttons from saved state
        const brandItems = document.querySelectorAll('.brand-selection-item');
        
        brandItems.forEach(item => {
            const hiddenInput = item.querySelector('input[type="hidden"]');
            if (hiddenInput && hiddenInput.value) {
                const preference = hiddenInput.value;
                const button = item.querySelector(`.brand-select-btn.${preference}`);
                if (button && !button.classList.contains('selected')) {
                    button.classList.add('selected');
                    updateBrandItemState(item, preference, true);
                }
            }
        });
    }
    
    // Function to get all brand preferences
    window.getBrandPreferences = function() {
        const preferences = {
            liked: [],
            disliked: []
        };
        
        const brandItems = document.querySelectorAll('.brand-selection-item');
        brandItems.forEach(item => {
            const brand = item.dataset.brand;
            const hiddenInput = item.querySelector('input[type="hidden"]');
            const value = hiddenInput ? hiddenInput.value : '';
            
            if (value === 'like') {
                preferences.liked.push(brand);
            } else if (value === 'dislike') {
                preferences.disliked.push(brand);
            }
        });
        
        return preferences;
    };
    
    // Function to set brand preferences (for loading saved state)
    window.setBrandPreferences = function(preferences) {
        if (!preferences) return;
        
        // Clear all selections first
        document.querySelectorAll('.brand-select-btn.selected').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        document.querySelectorAll('.brand-selection-item').forEach(item => {
            item.classList.remove('brand-liked', 'brand-disliked');
            const hiddenInput = item.querySelector('input[type="hidden"]');
            if (hiddenInput) hiddenInput.value = '';
        });
        
        // Set liked brands
        if (preferences.liked && Array.isArray(preferences.liked)) {
            preferences.liked.forEach(brand => {
                const brandItem = document.querySelector(`.brand-selection-item[data-brand="${brand}"]`);
                if (brandItem) {
                    const likeBtn = brandItem.querySelector('.brand-select-btn.like');
                    const hiddenInput = brandItem.querySelector('input[type="hidden"]');
                    if (likeBtn) {
                        likeBtn.classList.add('selected');
                        if (hiddenInput) hiddenInput.value = 'like';
                        updateBrandItemState(brandItem, 'like', true);
                    }
                }
            });
        }
        
        // Set disliked brands
        if (preferences.disliked && Array.isArray(preferences.disliked)) {
            preferences.disliked.forEach(brand => {
                const brandItem = document.querySelector(`.brand-selection-item[data-brand="${brand}"]`);
                if (brandItem) {
                    const dislikeBtn = brandItem.querySelector('.brand-select-btn.dislike');
                    const hiddenInput = brandItem.querySelector('input[type="hidden"]');
                    if (dislikeBtn) {
                        dislikeBtn.classList.add('selected');
                        if (hiddenInput) hiddenInput.value = 'dislike';
                        updateBrandItemState(brandItem, 'dislike', true);
                    }
                }
            });
        }
    };
})();