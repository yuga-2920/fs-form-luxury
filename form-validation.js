// Form Validation Module
class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.errors = {};
        this.validationRules = {
            required: (value) => value && value.toString().trim() !== '',
            email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            phone: (value) => /^[\d\-\+\(\)\s]+$/.test(value) && value.replace(/\D/g, '').length >= 10,
            postal: (value) => /^\d{3}-?\d{4}$/.test(value),
            minLength: (value, min) => value && value.length >= min,
            maxLength: (value, max) => value && value.length <= max,
            number: (value) => !isNaN(value) && isFinite(value),
            date: (value) => !isNaN(Date.parse(value))
        };
        
        this.errorMessages = {
            required: 'この項目は必須です',
            email: '有効なメールアドレスを入力してください',
            phone: '有効な電話番号を入力してください',
            postal: '有効な郵便番号を入力してください（例: 123-4567）',
            minLength: (min) => `${min}文字以上入力してください`,
            maxLength: (max) => `${max}文字以内で入力してください`,
            number: '数値を入力してください',
            date: '有効な日付を入力してください'
        };
        
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        // Add real-time validation
        this.form.addEventListener('input', (e) => {
            if (e.target.matches('input, select, textarea')) {
                this.validateField(e.target);
            }
        });
        
        // Add blur validation for better UX
        this.form.addEventListener('blur', (e) => {
            if (e.target.matches('input, select, textarea')) {
                this.validateField(e.target);
            }
        }, true);
        
        // Add form submit validation
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.validateForm()) {
                this.submitForm();
            } else {
                this.showValidationSummary();
            }
        });
        
        // Add validation attributes to fields
        this.setupValidationAttributes();
    }
    
    setupValidationAttributes() {
        // Required fields
        const requiredFields = this.form.querySelectorAll('[required], label:has(.required) + *');
        requiredFields.forEach(field => {
            field.setAttribute('data-validate', 'required');
            field.setAttribute('aria-required', 'true');
        });
        
        // Email fields
        const emailFields = this.form.querySelectorAll('input[type="email"], input[name*="email"]');
        emailFields.forEach(field => {
            const rules = field.getAttribute('data-validate') || '';
            field.setAttribute('data-validate', `${rules} email`.trim());
        });
        
        // Phone fields
        const phoneFields = this.form.querySelectorAll('input[type="tel"], input[name*="phone"], input[name*="tel"]');
        phoneFields.forEach(field => {
            const rules = field.getAttribute('data-validate') || '';
            field.setAttribute('data-validate', `${rules} phone`.trim());
        });
        
        // Postal code fields
        const postalFields = this.form.querySelectorAll('input[name*="postal"], input[name*="zip"]');
        postalFields.forEach(field => {
            const rules = field.getAttribute('data-validate') || '';
            field.setAttribute('data-validate', `${rules} postal`.trim());
        });
    }
    
    validateField(field) {
        const fieldName = field.name || field.id;
        const value = field.value;
        const rules = field.getAttribute('data-validate');
        
        if (!rules) return true;
        
        const ruleList = rules.split(' ').filter(r => r);
        let isValid = true;
        
        for (const rule of ruleList) {
            if (rule === 'required' && !this.validationRules.required(value)) {
                this.setFieldError(field, this.errorMessages.required);
                isValid = false;
                break;
            } else if (rule === 'email' && value && !this.validationRules.email(value)) {
                this.setFieldError(field, this.errorMessages.email);
                isValid = false;
                break;
            } else if (rule === 'phone' && value && !this.validationRules.phone(value)) {
                this.setFieldError(field, this.errorMessages.phone);
                isValid = false;
                break;
            } else if (rule === 'postal' && value && !this.validationRules.postal(value)) {
                this.setFieldError(field, this.errorMessages.postal);
                isValid = false;
                break;
            }
        }
        
        if (isValid) {
            this.clearFieldError(field);
        }
        
        return isValid;
    }
    
    validateForm() {
        const fields = this.form.querySelectorAll('input, select, textarea');
        let isValid = true;
        
        fields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        
        // Validate checkbox groups (at least one checked)
        const checkboxGroups = this.form.querySelectorAll('.checkbox-group[data-required="true"]');
        checkboxGroups.forEach(group => {
            const checkedBoxes = group.querySelectorAll('input[type="checkbox"]:checked');
            if (checkedBoxes.length === 0) {
                this.setGroupError(group, '少なくとも1つ選択してください');
                isValid = false;
            } else {
                this.clearGroupError(group);
            }
        });
        
        // Validate radio groups
        const radioGroups = this.form.querySelectorAll('.radio-group[data-required="true"]');
        radioGroups.forEach(group => {
            const checkedRadio = group.querySelector('input[type="radio"]:checked');
            if (!checkedRadio) {
                this.setGroupError(group, 'いずれか1つを選択してください');
                isValid = false;
            } else {
                this.clearGroupError(group);
            }
        });
        
        return isValid;
    }
    
    setFieldError(field, message) {
        // Remove existing error
        this.clearFieldError(field);
        
        // Add error class
        field.classList.add('error');
        
        // Create error message element
        const errorEl = document.createElement('span');
        errorEl.className = 'error-message';
        errorEl.textContent = message;
        errorEl.setAttribute('role', 'alert');
        errorEl.setAttribute('aria-live', 'polite');
        
        // Insert error after field
        field.parentNode.insertBefore(errorEl, field.nextSibling);
        
        // Set aria-invalid
        field.setAttribute('aria-invalid', 'true');
        field.setAttribute('aria-describedby', errorEl.id);
    }
    
    clearFieldError(field) {
        field.classList.remove('error');
        field.removeAttribute('aria-invalid');
        field.removeAttribute('aria-describedby');
        
        const error = field.parentNode.querySelector('.error-message');
        if (error) {
            error.remove();
        }
    }
    
    setGroupError(group, message) {
        this.clearGroupError(group);
        
        group.classList.add('error');
        
        const errorEl = document.createElement('span');
        errorEl.className = 'error-message group-error';
        errorEl.textContent = message;
        errorEl.setAttribute('role', 'alert');
        
        group.appendChild(errorEl);
    }
    
    clearGroupError(group) {
        group.classList.remove('error');
        const error = group.querySelector('.group-error');
        if (error) {
            error.remove();
        }
    }
    
    showValidationSummary() {
        // Find first error and scroll to it
        const firstError = this.form.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Focus on the field if it's focusable
            const focusableField = firstError.matches('input, select, textarea') ? 
                firstError : firstError.querySelector('input, select, textarea');
            if (focusableField) {
                focusableField.focus();
            }
        }
        
        // Show a summary notification
        this.showNotification('入力内容にエラーがあります。赤く表示された項目を確認してください。', 'error');
    }
    
    showNotification(message, type = 'info') {
        // Remove existing notification
        const existing = document.querySelector('.validation-notification');
        if (existing) {
            existing.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = `validation-notification ${type}`;
        notification.setAttribute('role', 'alert');
        notification.innerHTML = `
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="閉じる">&times;</button>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
        
        // Close button
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
    }
    
    async submitForm() {
        // Collect form data
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        // Show loading state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '送信中...';
        submitBtn.disabled = true;
        
        try {
            // Here you would normally send data to server
            // For now, we'll just simulate a delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Success
            this.showNotification('フォームが正常に送信されました！', 'success');
            
            // Save to localStorage for now
            localStorage.setItem('formSubmission', JSON.stringify({
                data: data,
                timestamp: new Date().toISOString()
            }));
            
            // Reset form or redirect
            if (confirm('送信が完了しました。フォームをリセットしますか？')) {
                this.form.reset();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            
        } catch (error) {
            // Error
            this.showNotification('送信中にエラーが発生しました。もう一度お試しください。', 'error');
            console.error('Form submission error:', error);
        } finally {
            // Restore button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }
}

// Initialize validator when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.formValidator = new FormValidator('styleForm');
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormValidator;
}