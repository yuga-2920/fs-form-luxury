// Fashion Literacy Conditional Display
document.addEventListener('DOMContentLoaded', function() {
    initializeFashionLiteracyConditional();
});

function initializeFashionLiteracyConditional() {
    const basicKnowledgeCheckbox = document.getElementById('basic-knowledge-check');
    const conditionalContent = document.getElementById('basic-knowledge-details');
    
    if (!basicKnowledgeCheckbox || !conditionalContent) {
        console.log('Fashion literacy elements not found, will retry...');
        // Try again after a short delay in case elements are loaded dynamically
        setTimeout(initializeFashionLiteracyConditional, 500);
        return;
    }
    
    // Function to toggle the display
    function toggleBasicKnowledgeDetails() {
        if (basicKnowledgeCheckbox.checked) {
            conditionalContent.style.display = 'block';
            // Add animation
            conditionalContent.classList.add('fade-in');
            
            // Focus on the first input in the revealed section
            setTimeout(() => {
                const firstInput = conditionalContent.querySelector('input, select, textarea');
                if (firstInput) {
                    firstInput.focus();
                }
            }, 300);
        } else {
            conditionalContent.style.display = 'none';
            conditionalContent.classList.remove('fade-in');
            
            // Clear any selections in the hidden section
            const inputs = conditionalContent.querySelectorAll('input[type="checkbox"], input[type="radio"]');
            inputs.forEach(input => {
                input.checked = false;
            });
        }
    }
    
    // Add event listener
    basicKnowledgeCheckbox.addEventListener('change', toggleBasicKnowledgeDetails);
    
    // Check initial state
    toggleBasicKnowledgeDetails();
    
    console.log('Fashion literacy conditional display initialized');
}

// Add CSS for smooth animation
const style = document.createElement('style');
style.textContent = `
.basic-knowledge-details {
    display: none;
    margin-top: 20px;
    padding: 20px;
    background: rgba(212, 175, 55, 0.05);
    border: 1px solid var(--accent-gold);
    border-radius: var(--radius-md);
}

.basic-knowledge-details.fade-in {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.basic-knowledge-details .form-group {
    margin-bottom: 16px;
}

.basic-knowledge-details .form-group:last-child {
    margin-bottom: 0;
}

.basic-knowledge-details .section-subtitle {
    font-size: 16px;
    font-weight: 600;
    color: var(--accent-gold);
    margin-bottom: 16px;
}

.basic-knowledge-details .checkbox-group {
    gap: 12px;
}

.basic-knowledge-details .hint {
    display: block;
    font-size: 13px;
    color: var(--text-secondary);
    margin-top: 8px;
    line-height: 1.4;
}
`;
document.head.appendChild(style);