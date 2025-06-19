// Enhanced Pattern Evaluation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Add enhanced interactions to pattern evaluations
    function enhancePatternEvaluations() {
        // Get all pattern items
        const patternItems = document.querySelectorAll('.pattern-item');
        
        patternItems.forEach(item => {
            const evalRadios = item.querySelectorAll('.good-bad-selection input[type="radio"]');
            const ratingSection = item.querySelector('.rating-section');
            const ratingButtons = item.querySelectorAll('.rating-btn');
            
            // Handle evaluation radio changes
            evalRadios.forEach(radio => {
                radio.addEventListener('change', function() {
                    if (this.checked) {
                        // Add class to pattern item
                        item.classList.add('has-evaluation');
                        
                        // Add good/bad class
                        if (this.value === 'good') {
                            item.classList.add('good-selected');
                            item.classList.remove('bad-selected');
                        } else {
                            item.classList.add('bad-selected');
                            item.classList.remove('good-selected');
                        }
                        
                        // Show rating section with animation
                        if (ratingSection) {
                            ratingSection.classList.add('visible');
                        }
                        
                        // Trigger ripple effect
                        triggerRipple(this.parentElement);
                    }
                });
            });
            
            // Handle rating button clicks
            ratingButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remove active class from siblings
                    ratingButtons.forEach(b => b.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Add animation
                    animateButton(this);
                });
            });
        });
    }
    
    // Trigger ripple effect
    function triggerRipple(element) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Animate button click
    function animateButton(button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 100);
    }
    
    // Initialize enhancements when patterns are loaded
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1 && node.querySelector('.pattern-item')) {
                        enhancePatternEvaluations();
                    }
                });
            }
        });
    });
    
    // Start observing
    const container = document.querySelector('.complete-form-container');
    if (container) {
        observer.observe(container, {
            childList: true,
            subtree: true
        });
    }
    
    // Initial enhancement
    enhancePatternEvaluations();
    
    // Re-enhance when gender changes
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            setTimeout(enhancePatternEvaluations, 500);
        });
    });
});