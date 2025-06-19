// Form State Manager with Auto-save functionality
class FormStateManager {
    constructor(formId, options = {}) {
        this.form = document.getElementById(formId);
        this.storageKey = options.storageKey || 'formState';
        this.autoSaveInterval = options.autoSaveInterval || 5000; // 5 seconds
        this.autoSaveTimer = null;
        this.isDirty = false;
        this.lastSaved = null;

        // Event handlers bound to this instance
        this.handleChange = this.handleChange.bind(this);
        this.handleBeforeUnload = this.handleBeforeUnload.bind(this);

        this.init();
    }

    init() {
        if (!this.form) return;

        // Load saved state
        this.loadState();

        // Setup event listeners
        this.setupEventListeners();

        // Start auto-save
        this.startAutoSave();

        // Add UI indicators
        this.addSaveIndicator();
    }

    setupEventListeners() {
        // Track changes
        this.form.addEventListener('input', this.handleChange);
        this.form.addEventListener('change', this.handleChange);

        // Warn before leaving with unsaved changes
        window.addEventListener('beforeunload', this.handleBeforeUnload);

        // Save on visibility change (tab switch)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden && this.isDirty) {
                this.saveState();
            }
        });
    }

    handleChange(event) {
        this.isDirty = true;

        // Reset auto-save timer
        if (this.autoSaveTimer) {
            clearTimeout(this.autoSaveTimer);
        }

        this.autoSaveTimer = setTimeout(() => {
            this.saveState();
        }, this.autoSaveInterval);
    }

    handleBeforeUnload(event) {
        if (this.isDirty) {
            const message = '保存されていない変更があります。ページを離れますか？';
            event.preventDefault();
            event.returnValue = message;
            return message;
        }
    }

    getFormData() {
        const formData = new FormData(this.form);
        const data = {};

        // Handle all form inputs
        for (const [key, value] of formData.entries()) {
            if (data[key]) {
                // Handle multiple values (checkboxes)
                if (Array.isArray(data[key])) {
                    data[key].push(value);
                } else {
                    data[key] = [data[key], value];
                }
            } else {
                data[key] = value;
            }
        }

        // Handle unchecked checkboxes
        const checkboxes = this.form.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            if (!checkbox.checked && checkbox.name) {
                if (!data[checkbox.name]) {
                    data[checkbox.name] = [];
                }
            }
        });

        // Add metadata
        data._metadata = {
            savedAt: new Date().toISOString(),
            formVersion: '1.0',
            userAgent: navigator.userAgent
        };

        return data;
    }

    saveState() {
        try {
            const data = this.getFormData();

            // Save to localStorage
            localStorage.setItem(this.storageKey, JSON.stringify(data));

            // Save to sessionStorage as backup
            sessionStorage.setItem(this.storageKey + '_backup', JSON.stringify(data));

            this.isDirty = false;
            this.lastSaved = new Date();

            // Optional: Save to server
            if (this.options && this.options.serverSave) {
                this.saveToServer(data);
            }

        } catch (error) {
            console.error('Failed to save form state:', error);
        }
    }

    loadState() {
        try {
            const savedData = localStorage.getItem(this.storageKey) ||
                           sessionStorage.getItem(this.storageKey + '_backup');

            if (!savedData) return;

            const data = JSON.parse(savedData);

            // Check if saved data is recent (within 7 days)
            if (data._metadata && data._metadata.savedAt) {
                const savedDate = new Date(data._metadata.savedAt);
                const daysSince = (new Date() - savedDate) / (1000 * 60 * 60 * 24);

                if (daysSince > 7) {
                    if (confirm('保存されたデータは7日以上前のものです。読み込みますか？')) {
                        this.restoreFormData(data);
                    } else {
                        this.clearState();
                    }
                } else {
                    this.restoreFormData(data);
                }
            }

        } catch (error) {
            console.error('Failed to load form state:', error);
        }
    }

    restoreFormData(data) {
        Object.entries(data).forEach(([key, value]) => {
            if (key === '_metadata') return;

            const elements = this.form.elements[key];

            if (!elements) return;

            if (elements.length > 1) {
                // Radio buttons or multiple checkboxes
                Array.from(elements).forEach(element => {
                    if (element.type === 'checkbox') {
                        element.checked = Array.isArray(value) ?
                            value.includes(element.value) : value === element.value;
                    } else if (element.type === 'radio') {
                        element.checked = element.value === value;
                    }
                });
            } else {
                // Single element
                const element = elements;
                if (element.type === 'checkbox') {
                    element.checked = value === 'on' || value === true;
                } else if (element.type === 'file') {
                    // Cannot restore file inputs
                } else {
                    element.value = value;
                }
            }
        });

        // Trigger change events to update UI
        this.form.dispatchEvent(new Event('change', { bubbles: true }));
    }

    clearState() {
        localStorage.removeItem(this.storageKey);
        sessionStorage.removeItem(this.storageKey + '_backup');
        this.isDirty = false;
    }

    startAutoSave() {
        // Initial auto-save setup already handled in handleChange
        console.log('Auto-save enabled every', this.autoSaveInterval / 1000, 'seconds');
    }

    stopAutoSave() {
        if (this.autoSaveTimer) {
            clearTimeout(this.autoSaveTimer);
            this.autoSaveTimer = null;
        }
    }

    addSaveIndicator() {
        const indicator = document.createElement('div');
        indicator.id = 'save-indicator';
        indicator.className = 'save-indicator';

        // this.form.parentElement.insertBefore(indicator, this.form);
        // this.saveIndicator = indicator;
    }

    async saveToServer(data) {
        // Placeholder for server save functionality
        try {
            const response = await fetch('/api/save-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Server save failed');
            }

        } catch (error) {
            console.error('Server save error:', error);
            // Don't show error to user - localStorage save is sufficient
        }
    }

    destroy() {
        this.stopAutoSave();
        this.form.removeEventListener('input', this.handleChange);
        this.form.removeEventListener('change', this.handleChange);
        window.removeEventListener('beforeunload', this.handleBeforeUnload);

        if (this.saveIndicator) {
            this.saveIndicator.remove();
        }
    }
}

// Add styles for save indicator
const saveIndicatorStyles = `
.save-indicator {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    z-index: 1000;
    transition: all 0.3s ease;
}

.save-indicator.saving .save-icon::after {
    content: '⏳';
}

.save-indicator.saved .save-icon::after {
    content: '✓';
    color: #4caf50;
}

.save-indicator.unsaved .save-icon::after {
    content: '•';
    color: #ff9800;
}

.save-indicator.error .save-icon::after {
    content: '✗';
    color: #f44336;
}

.save-indicator.cleared .save-icon::after {
    content: '🗑';
}

.form-notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 24px;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    z-index: 1000;
    animation: slideUp 0.3s ease;
}

.form-notification.info {
    background-color: #2196f3;
}

.form-notification.success {
    background-color: #4caf50;
}

.form-notification.error {
    background-color: #f44336;
}

@keyframes slideUp {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = saveIndicatorStyles;
document.head.appendChild(styleSheet);

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.formStateManager = new FormStateManager('styleForm', {
        storageKey: 'styleFormState',
        autoSaveInterval: 5000,
        serverSave: false // Enable when server endpoint is ready
    });
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormStateManager;
}