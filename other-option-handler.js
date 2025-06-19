// Unified handler for all "その他" (Other) options with text inputs
document.addEventListener('DOMContentLoaded', function() {
    
    // Configuration for all "その他" options
    const otherOptionConfigs = [
        // Travel section
        {
            checkboxSelector: '#domestic-other',
            textInputName: 'domesticTravelOther',
            createIfMissing: false
        },
        {
            checkboxSelector: '#overseas-other',
            textInputName: 'overseasTravelOther',
            createIfMissing: false
        },
        // Budget section - need to create text inputs
        {
            checkboxSelector: 'input[name="shirtBudget"][value="other"]',
            textInputName: 'shirtBudgetOther',
            placeholder: '具体的な予算をご記入ください',
            createIfMissing: true
        },
        {
            checkboxSelector: 'input[name="tshirtBudget"][value="other"]',
            textInputName: 'tshirtBudgetOther',
            placeholder: '具体的な予算をご記入ください',
            createIfMissing: true
        },
        {
            checkboxSelector: 'input[name="pantsBudget"][value="other"]',
            textInputName: 'pantsBudgetOther',
            placeholder: '具体的な予算をご記入ください',
            createIfMissing: true
        },
        {
            checkboxSelector: 'input[name="shoesBudget"][value="other"]',
            textInputName: 'shoesBudgetOther',
            placeholder: '具体的な予算をご記入ください',
            createIfMissing: true
        },
        {
            checkboxSelector: 'input[name="bagBudget"][value="other"]',
            textInputName: 'bagBudgetOther',
            placeholder: '具体的な予算をご記入ください',
            createIfMissing: true
        },
        {
            checkboxSelector: 'input[name="knitBudget"][value="other"]',
            textInputName: 'knitBudgetOther',
            placeholder: '具体的な予算をご記入ください',
            createIfMissing: true
        },
        {
            checkboxSelector: 'input[name="jacketBudget"][value="other"]',
            textInputName: 'jacketBudgetOther',
            placeholder: '具体的な予算をご記入ください',
            createIfMissing: true
        },
        {
            checkboxSelector: 'input[name="watchBudget"][value="other"]',
            textInputName: 'watchBudgetOther',
            placeholder: '具体的な予算をご記入ください',
            createIfMissing: true
        },
        {
            checkboxSelector: 'input[name="accessoriesBudget"][value="other"]',
            textInputName: 'accessoriesBudgetOther',
            placeholder: '具体的な予算をご記入ください',
            createIfMissing: true
        },
        {
            checkboxSelector: 'input[name="hatBudget"][value="other"]',
            textInputName: 'hatBudgetOther',
            placeholder: '具体的な予算をご記入ください',
            createIfMissing: true
        },
        {
            checkboxSelector: 'input[name="glassesBudget"][value="other"]',
            textInputName: 'glassesBudgetOther',
            placeholder: '具体的な予算をご記入ください',
            createIfMissing: true
        },
        // Weekday lifestyle
        {
            checkboxSelector: '#weekday-other',
            textInputName: 'weekdayLifestyleOther',
            placeholder: '具体的にご記入ください',
            createIfMissing: true
        }
    ];
    
    // Function to create text input field
    function createTextInput(config, checkbox) {
        const wrapper = document.createElement('div');
        wrapper.className = 'other-text-input-wrapper';
        wrapper.style.display = 'none';
        wrapper.style.marginTop = '10px';
        wrapper.style.marginLeft = '24px';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.name = config.textInputName;
        input.className = 'other-text-input';
        input.placeholder = config.placeholder || '具体的にご記入ください';
        input.style.width = '100%';
        input.style.padding = '8px 12px';
        input.style.border = '1px solid #ddd';
        input.style.borderRadius = '4px';
        input.style.fontSize = '14px';
        
        wrapper.appendChild(input);
        
        // Insert after the checkbox's parent label
        const label = checkbox.closest('label');
        if (label && label.parentNode) {
            label.parentNode.insertBefore(wrapper, label.nextSibling);
        }
        
        return wrapper;
    }
    
    // Function to handle checkbox change
    function handleOtherCheckbox(checkbox, textInputWrapper) {
        if (checkbox.checked) {
            textInputWrapper.style.display = 'block';
            const input = textInputWrapper.querySelector('input');
            if (input) {
                input.focus();
            }
        } else {
            textInputWrapper.style.display = 'none';
            const input = textInputWrapper.querySelector('input');
            if (input) {
                input.value = '';
            }
        }
    }
    
    // Initialize all "その他" options
    otherOptionConfigs.forEach(config => {
        const checkbox = document.querySelector(config.checkboxSelector);
        if (!checkbox) return;
        
        let textInputWrapper = null;
        
        // Try to find existing text input
        const existingInput = document.querySelector(`input[name="${config.textInputName}"]`);
        if (existingInput) {
            textInputWrapper = existingInput.closest('.other-text-input-wrapper') || existingInput.parentElement;
        } else if (config.createIfMissing) {
            // Create text input if it doesn't exist
            textInputWrapper = createTextInput(config, checkbox);
        }
        
        if (textInputWrapper) {
            // Add event listener
            checkbox.addEventListener('change', function() {
                handleOtherCheckbox(this, textInputWrapper);
            });
            
            // Initialize visibility based on current state
            handleOtherCheckbox(checkbox, textInputWrapper);
        }
    });
    
    // Special handling for budget radio buttons (since they're radio, not checkbox)
    const budgetRadioGroups = ['shirtBudget', 'tshirtBudget', 'knitBudget', 'jacketBudget', 'pantsBudget', 'shoesBudget', 'bagBudget', 'watchBudget', 'accessoriesBudget', 'hatBudget', 'glassesBudget'];
    
    budgetRadioGroups.forEach(groupName => {
        const radios = document.querySelectorAll(`input[name="${groupName}"]`);
        const otherRadio = document.querySelector(`input[name="${groupName}"][value="other"]`);
        const textInputWrapper = document.querySelector(`input[name="${groupName}Other"]`)?.parentElement;
        
        if (otherRadio && textInputWrapper) {
            radios.forEach(radio => {
                radio.addEventListener('change', function() {
                    if (this.value === 'other' && this.checked) {
                        textInputWrapper.style.display = 'block';
                        const input = textInputWrapper.querySelector('input');
                        if (input) input.focus();
                    } else if (this.value !== 'other' && this.checked) {
                        textInputWrapper.style.display = 'none';
                        const input = textInputWrapper.querySelector('input');
                        if (input) input.value = '';
                    }
                });
            });
            
            // Initialize visibility
            if (!otherRadio.checked) {
                textInputWrapper.style.display = 'none';
            }
        }
    });
    
    // Add validation for form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            let isValid = true;
            const errors = [];
            
            // Check all configured "その他" options
            otherOptionConfigs.forEach(config => {
                const checkbox = document.querySelector(config.checkboxSelector);
                const textInput = document.querySelector(`input[name="${config.textInputName}"]`);
                
                if (checkbox && checkbox.checked && textInput && !textInput.value.trim()) {
                    isValid = false;
                    errors.push(`「その他」を選択した項目の詳細を入力してください: ${config.textInputName}`);
                    textInput.style.borderColor = '#ff4444';
                }
            });
            
            // Check budget radio "その他" options
            budgetRadioGroups.forEach(groupName => {
                const otherRadio = document.querySelector(`input[name="${groupName}"][value="other"]:checked`);
                const textInput = document.querySelector(`input[name="${groupName}Other"]`);
                
                if (otherRadio && textInput && !textInput.value.trim()) {
                    isValid = false;
                    errors.push(`「その他」を選択した予算の詳細を入力してください: ${groupName}`);
                    textInput.style.borderColor = '#ff4444';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert(errors.join('\n'));
            }
        });
    }
});