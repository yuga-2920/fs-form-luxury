// Form Progress Indicator and Navigation
class FormProgress {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.sections = [];
        this.currentSection = 0;
        this.completedFields = new Set();

        this.init();
    }

    init() {
        if (!this.form) return;

        // Find all form sections
        this.sections = Array.from(this.form.querySelectorAll('.form-section'));

        // Create section navigation
        this.createSectionNav();

        // Setup field tracking
        this.setupFieldTracking();

        // Add smooth scroll behavior
        this.setupSmoothScroll();

        // Initialize progress
        this.updateProgress();
    }

    createSectionNav() {
        const navContainer = document.createElement('nav');
        navContainer.className = 'section-navigation';

        const navList = document.createElement('ul');
        navList.className = 'section-nav-list';

        this.sections.forEach((section, index) => {
            const sectionTitle = section.querySelector('.section-title')?.textContent || `Section ${index + 1}`;
            const sectionNumber = section.querySelector('.section-number')?.textContent || (index + 1);

            const navItem = document.createElement('li');
            navItem.className = 'section-nav-item';
            navItem.innerHTML = `
                <button class="section-nav-button" data-section="${index}">
                    <span class="nav-number">${sectionNumber}</span>
                    <span class="nav-title">${sectionTitle}</span>
                    <span class="nav-status">
                        <span class="status-incomplete">○</span>
                        <span class="status-complete">●</span>
                    </span>
                </button>
            `;

            navList.appendChild(navItem);

            // Add click handler
            navItem.querySelector('.section-nav-button').addEventListener('click', (e) => {
                e.preventDefault();
                this.scrollToSection(index);
            });
        });

        navContainer.appendChild(navList);

        // Create sticky container
        const stickyNav = document.createElement('div');
        stickyNav.className = 'sticky-section-nav';
        stickyNav.appendChild(navContainer);

        // Insert after progress bar
        const progressContainer = document.querySelector('.progress-container');
        if (progressContainer && progressContainer.parentElement) {
            progressContainer.parentElement.insertBefore(stickyNav, progressContainer.nextSibling);
        } else {
            // Fallback: append to body if progress container not found
            document.body.appendChild(stickyNav);
        }

        this.sectionNav = navContainer;
    }

    setupFieldTracking() {
        // Track required fields
        const requiredInputs = this.form.querySelectorAll('[required], [data-validate*="required"]');
        const requiredGroups = this.form.querySelectorAll('.checkbox-group[data-required="true"], .radio-group[data-required="true"]');

        // Input tracking
        requiredInputs.forEach(input => {
            input.addEventListener('input', () => this.checkFieldCompletion(input));
            input.addEventListener('change', () => this.checkFieldCompletion(input));

            // Check initial state
            this.checkFieldCompletion(input);
        });

        // Group tracking
        requiredGroups.forEach(group => {
            group.addEventListener('change', () => this.checkGroupCompletion(group));

            // Check initial state
            this.checkGroupCompletion(group);
        });

        // Track section visibility
        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionIndex = this.sections.indexOf(entry.target);
                    if (sectionIndex !== -1) {
                        this.setActiveSection(sectionIndex);
                    }
                }
            });
        }, options);

        this.sections.forEach(section => observer.observe(section));
    }

    setActiveSection(index) {
        this.currentSection = index;

        // Update nav
        const navButtons = this.sectionNav.querySelectorAll('.section-nav-button');
        navButtons.forEach((button, i) => {
            button.classList.toggle('active', i === index);
        });
    }

    checkFieldCompletion(field) {
        const fieldId = field.id || field.name;
        const isComplete = this.isFieldComplete(field);

        if (isComplete) {
            this.completedFields.add(fieldId);
        } else {
            this.completedFields.delete(fieldId);
        }

        this.updateProgress();
    }

    checkGroupCompletion(group) {
        const groupId = group.id || group.dataset.groupName;
        const isComplete = this.isGroupComplete(group);

        if (isComplete) {
            this.completedFields.add(groupId);
        } else {
            this.completedFields.delete(groupId);
        }

        this.updateProgress();
    }

    isFieldComplete(field) {
        if (field.type === 'checkbox' || field.type === 'radio') {
            return field.checked;
        }
        // Check if value exists before calling trim
        return field.value && field.value.trim() !== '';
    }

    isGroupComplete(group) {
        if (group.classList.contains('checkbox-group')) {
            return group.querySelectorAll('input:checked').length > 0;
        }
        if (group.classList.contains('radio-group')) {
            return group.querySelector('input:checked') !== null;
        }
        return false;
    }

    countRequiredFields() {
        let count = 0;

        // Count individual required fields
        const requiredInputs = this.form.querySelectorAll('[required], [data-validate*="required"]');
        requiredInputs.forEach(input => {
            // Skip if part of a radio group (count group instead)
            if (input.type === 'radio') {
                const groupName = input.name;
                if (!this.countedRadioGroups?.has(groupName)) {
                    if (!this.countedRadioGroups) this.countedRadioGroups = new Set();
                    this.countedRadioGroups.add(groupName);
                    count++;
                }
            } else {
                count++;
            }
        });

        // Count required groups
        count += this.form.querySelectorAll('.checkbox-group[data-required="true"], .radio-group[data-required="true"]').length;

        return count;
    }

    updateProgress() {
        const completed = this.completedFields.size;
        const percentage = Math.round((completed / this.totalFields) * 100);

        // Update UI
        this.progressFill.style.width = `${percentage}%`;
        this.progressPercentage.textContent = `${percentage}%`;
        this.fieldsCompleted.textContent = completed;

        // Update section status
        this.updateSectionStatus();

        // Add completion effects
        if (percentage === 100) {
            this.progressFill.classList.add('complete');
            this.showCompletionMessage();
        } else {
            this.progressFill.classList.remove('complete');
        }
    }

    updateSectionStatus() {
        this.sections.forEach((section, index) => {
            const sectionFields = section.querySelectorAll('[required], [data-validate*="required"]');
            const sectionGroups = section.querySelectorAll('.checkbox-group[data-required="true"], .radio-group[data-required="true"]');

            let sectionComplete = true;

            // Check fields
            sectionFields.forEach(field => {
                if (!this.isFieldComplete(field)) {
                    sectionComplete = false;
                }
            });

            // Check groups
            sectionGroups.forEach(group => {
                if (!this.isGroupComplete(group)) {
                    sectionComplete = false;
                }
            });

            // Update nav status
            const navButton = this.sectionNav.querySelector(`[data-section="${index}"]`);
            if (navButton) {
                navButton.classList.toggle('section-complete', sectionComplete);
            }
        });
    }

    scrollToSection(index) {
        const section = this.sections[index];
        if (!section) return;

        const offset = 100; // Account for fixed elements
        const targetPosition = section.offsetTop - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Focus first input in section
        setTimeout(() => {
            const firstInput = section.querySelector('input, select, textarea');
            if (firstInput) {
                firstInput.focus();
            }
        }, 500);
    }

    setupSmoothScroll() {
        // Add smooth scroll to all section transitions
        document.querySelectorAll('a[href^="#section"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('href').substring(1);
                const section = document.getElementById(sectionId);
                const index = this.sections.indexOf(section);
                if (index !== -1) {
                    this.scrollToSection(index);
                }
            });
        });
    }

    showCompletionMessage() {
        if (this.completionShown) return;
        this.completionShown = true;

        const message = document.createElement('div');
        message.className = 'completion-message';
        message.innerHTML = `
            <div class="completion-content">
                <div class="completion-icon">🎉</div>
                <h3>フォームの入力が完了しました！</h3>
                <p>すべての必須項目に入力されています。内容を確認して送信してください。</p>
                <button class="completion-close">閉じる</button>
            </div>
        `;

        document.body.appendChild(message);

        setTimeout(() => {
            message.classList.add('show');
        }, 100);

        message.querySelector('.completion-close').addEventListener('click', () => {
            message.classList.remove('show');
            setTimeout(() => message.remove(), 300);
        });
    }
}

// Add progress styles
const progressStyles = `
.progress-container {
    background: var(--surface-elevated);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: 24px;
    margin-bottom: 32px;
}

.progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.progress-title {
    font-size: 18px;
    font-weight: 500;
    color: var(--text-primary);
}

.progress-percentage {
    font-size: 24px;
    font-weight: 600;
    color: var(--text-primary);
}

.progress-bar-wrapper {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    height: 20px;
    overflow: hidden;
    margin-bottom: 12px;
}

.progress-bar {
    height: 100%;
    position: relative;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4caf50, #66bb6a);
    border-radius: 10px;
    transition: width 0.5s ease;
    position: relative;
    overflow: hidden;
}

.progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
    );
    animation: shimmer 2s infinite;
}

.progress-fill.complete {
    background: linear-gradient(90deg, #ffd700, #ffed4e);
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.progress-stats {
    font-size: 14px;
    color: var(--text-secondary);
}

.sticky-section-nav {
    position: sticky;
    top: 20px;
    z-index: 100;
    margin-bottom: 32px;
}

.section-navigation {
    background: var(--surface-elevated);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: 16px;
}

.section-nav-list {
    list-style: none;
    display: flex;
    gap: 12px;
    overflow-x: auto;
    scrollbar-width: thin;
}

.section-nav-item {
    flex-shrink: 0;
}

.section-nav-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
}

.section-nav-button:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--primary-color);
    color: var(--text-primary);
    transform: translateY(-2px);
}

.section-nav-button.active {
    background: var(--primary-color);
    color: var(--background-color);
    border-color: var(--primary-color);
}

.section-nav-button.section-complete .status-incomplete {
    display: none;
}

.section-nav-button:not(.section-complete) .status-complete {
    display: none;
}

.nav-number {
    font-weight: 600;
    font-size: 16px;
}

.nav-title {
    font-weight: 400;
}

.nav-status {
    margin-left: auto;
}

.status-complete {
    color: #4caf50;
}

.completion-message {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.completion-message.show {
    opacity: 1;
}

.completion-content {
    background: var(--surface-elevated);
    border: 2px solid var(--accent-gold);
    border-radius: var(--radius-xl);
    padding: 48px;
    text-align: center;
    max-width: 500px;
    transform: scale(0.9);
    transition: transform 0.3s ease;
}

.completion-message.show .completion-content {
    transform: scale(1);
}

.completion-icon {
    font-size: 72px;
    margin-bottom: 24px;
}

.completion-content h3 {
    font-size: 24px;
    margin-bottom: 16px;
    color: var(--text-primary);
}

.completion-content p {
    font-size: 16px;
    color: var(--text-secondary);
    margin-bottom: 32px;
}

.completion-close {
    padding: 12px 32px;
    background: var(--accent-gold);
    color: var(--background-color);
    border: none;
    border-radius: var(--radius-md);
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.completion-close:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

@media (max-width: 768px) {
    .section-nav-list {
        flex-wrap: nowrap;
    }

    .section-nav-button {
        font-size: 12px;
        padding: 10px 16px;
    }

    .nav-title {
        display: none;
    }
}
`;

// Inject styles
const progressStyleSheet = document.createElement('style');
progressStyleSheet.textContent = progressStyles;
document.head.appendChild(progressStyleSheet);

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.formProgress = new FormProgress('styleForm');
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormProgress;
}