// Fix postal code validation error display
document.addEventListener('DOMContentLoaded', function() {
    // Override the setFieldError function for postal code fields
    const originalSetFieldError = window.formValidator ? window.formValidator.setFieldError : null;
    
    if (originalSetFieldError && window.formValidator) {
        window.formValidator.setFieldError = function(field, message) {
            // Check if this is a postal code field
            if (field.name === 'postalCode1' || field.name === 'postalCode2') {
                // Find the postal-code-group container
                const postalGroup = field.closest('.postal-code-group');
                if (postalGroup) {
                    // Remove any existing error messages in the group
                    const existingErrors = postalGroup.querySelectorAll('.error-message');
                    existingErrors.forEach(error => error.remove());
                    
                    // Create new error message
                    const errorElement = document.createElement('div');
                    errorElement.className = 'error-message';
                    errorElement.textContent = message;
                    
                    // Add error class to the group
                    postalGroup.classList.add('has-error');
                    
                    // Append error to the group (not the inputs container)
                    postalGroup.appendChild(errorElement);
                    
                    // Mark fields as error
                    const postal1 = postalGroup.querySelector('[name="postalCode1"]');
                    const postal2 = postalGroup.querySelector('[name="postalCode2"]');
                    if (postal1) postal1.classList.add('error');
                    if (postal2) postal2.classList.add('error');
                }
            } else {
                // For non-postal fields, use original function
                originalSetFieldError.call(this, field, message);
            }
        };
    }
    
    // Also override clearFieldError for postal fields
    const originalClearFieldError = window.formValidator ? window.formValidator.clearFieldError : null;
    
    if (originalClearFieldError && window.formValidator) {
        window.formValidator.clearFieldError = function(field) {
            if (field.name === 'postalCode1' || field.name === 'postalCode2') {
                const postalGroup = field.closest('.postal-code-group');
                if (postalGroup) {
                    // Remove error messages
                    const errors = postalGroup.querySelectorAll('.error-message');
                    errors.forEach(error => error.remove());
                    
                    // Remove error class
                    postalGroup.classList.remove('has-error');
                    
                    // Remove error class from fields
                    const postal1 = postalGroup.querySelector('[name="postalCode1"]');
                    const postal2 = postalGroup.querySelector('[name="postalCode2"]');
                    if (postal1) postal1.classList.remove('error');
                    if (postal2) postal2.classList.remove('error');
                }
            } else {
                originalClearFieldError.call(this, field);
            }
        };
    }
});