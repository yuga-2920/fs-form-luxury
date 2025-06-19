// Fashion Literacy Conditional Display - Final Version
(function() {
    'use strict';
    
    console.log('Fashion Literacy Final: Loading...');
    
    // Wait for DOM to be ready
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }
    
    ready(function() {
        console.log('Fashion Literacy Final: DOM Ready');
        
        // Define trigger values
        const triggerValues = [
            'not-interested',
            'vaguely-interested',
            'conversational',
            'personal-curiosity',
            'basic-knowledge'
        ];
        
        // Get all checkboxes
        const allCheckboxes = document.querySelectorAll('input[name="fashionLiteracy"]');
        console.log('Found checkboxes:', allCheckboxes.length);
        
        // Get conditional items
        const conditionalItems = document.querySelectorAll('.fashion-literacy-conditional');
        console.log('Found conditional items:', conditionalItems.length);
        
        // List conditional items for debugging
        conditionalItems.forEach((item, index) => {
            const checkbox = item.querySelector('input[type="checkbox"]');
            if (checkbox) {
                console.log(`Conditional item ${index}: ${checkbox.value}`);
            }
        });
        
        // Initial hide with stronger CSS override
        conditionalItems.forEach(item => {
            item.style.setProperty('display', 'none', 'important');
            item.style.setProperty('visibility', 'hidden', 'important');
            item.style.setProperty('opacity', '0', 'important');
            item.style.setProperty('transition', 'all 0.3s ease', 'important');
        });
        
        // Function to update display
        function updateDisplay() {
            console.log('=== Updating display ===');
            
            // Check if any trigger is checked
            let showConditional = false;
            const checkedTriggers = [];
            
            allCheckboxes.forEach(checkbox => {
                if (triggerValues.includes(checkbox.value) && checkbox.checked) {
                    showConditional = true;
                    checkedTriggers.push(checkbox.value);
                }
            });
            
            console.log('Checked triggers:', checkedTriggers);
            console.log('Show conditional items:', showConditional);
            
            // Update conditional items
            conditionalItems.forEach((item, index) => {
                if (showConditional) {
                    console.log(`Showing conditional item ${index}`);
                    // Remove all inline styles first
                    item.style.removeProperty('display');
                    item.style.removeProperty('visibility');
                    item.style.removeProperty('opacity');
                    // Then set display
                    item.style.setProperty('display', 'flex', 'important');
                    item.style.setProperty('visibility', 'visible', 'important');
                    // Force reflow
                    void item.offsetHeight;
                    // Animate
                    item.style.setProperty('opacity', '1', 'important');
                } else {
                    console.log(`Hiding conditional item ${index}`);
                    // Hide
                    item.style.setProperty('opacity', '0', 'important');
                    item.style.setProperty('visibility', 'hidden', 'important');
                    setTimeout(() => {
                        if (!showConditional) {
                            item.style.setProperty('display', 'none', 'important');
                        }
                    }, 300);
                    
                    // Uncheck any checked conditional items
                    const checkbox = item.querySelector('input[type="checkbox"]');
                    if (checkbox && checkbox.checked) {
                        console.log(`Unchecking: ${checkbox.value}`);
                        checkbox.checked = false;
                    }
                }
            });
            
            console.log('=== Update complete ===');
        }
        
        // Add event listeners
        allCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                console.log(`Checkbox changed: ${this.value} = ${this.checked}`);
                updateDisplay();
            });
        });
        
        // Initial update
        console.log('Running initial update...');
        updateDisplay();
        
        // Double-check after a short delay
        setTimeout(() => {
            console.log('Running delayed update check...');
            updateDisplay();
        }, 100);
        
        console.log('Fashion Literacy Final: Setup complete!');
    });
})();