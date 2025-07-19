// Other option text input handler
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle other option checkbox changes
    function handleOtherOption(element) {
        // Try multiple parent selectors to cover all cases
        let parentContainer = element.closest('.budget-options-inline, .budget-option-inline, .checkbox-grid, .radio-group, .form-group, .checkbox-option, label');

        // For budget options, look for the specific label container
        if (!parentContainer && element.closest('.budget-option-inline')) {
            parentContainer = element.closest('.budget-option-inline');
        }

        if (!parentContainer) return;

        // Check if text input already exists - look in parent and siblings
        let otherInput = parentContainer.querySelector('.other-text-input');
        if (!otherInput && parentContainer.nextElementSibling && parentContainer.nextElementSibling.classList.contains('other-text-input')) {
            otherInput = parentContainer.nextElementSibling;
        }

        if (element.checked && element.value === 'other') {
            // Create text input if it doesn't exist
        } else if (!element.checked && element.value === 'other' && otherInput) {
            // Remove text input when unchecked
            otherInput.remove();
        }
    }

    // Handle all checkboxes with value="other"
    document.querySelectorAll('input[type="checkbox"][value="other"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            handleOtherOption(this);
        });
    });

    // Handle all radio buttons with value="other"
    document.querySelectorAll('input[type="radio"][value="other"]').forEach(radio => {
        radio.addEventListener('change', function() {
            // First, remove any existing other inputs for this radio group
            const radioGroup = document.querySelectorAll(`input[name="${this.name}"]`);
            radioGroup.forEach(r => {
                const parent = r.closest('.radio-option, .checkbox-option, label');
                if (parent) {
                    const existingInput = parent.querySelector('.other-text-input');
                    if (existingInput && r !== this) {
                        existingInput.remove();
                    }
                }
            });
        });
    });

    // Also handle dynamically added elements
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) { // Element node
                    // Check if the added node is an other option
                    if (node.matches && node.matches('input[type="checkbox"][value="other"], input[type="radio"][value="other"]')) {
                        node.addEventListener('change', function() {
                            handleOtherOption(this);
                        });
                    }
                    // Check children
                    const otherOptions = node.querySelectorAll && node.querySelectorAll('input[type="checkbox"][value="other"], input[type="radio"][value="other"]');
                    if (otherOptions) {
                        otherOptions.forEach(option => {
                            option.addEventListener('change', function() {
                                handleOtherOption(this);
                            });
                        });
                    }
                }
            });
        });
    });

    // Start observing
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});