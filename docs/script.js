// Global gender change handler
function handleGenderChange(radio) {
    const body = document.body;

    // Simple immediate switch
    if (radio.value === 'female') {
        body.classList.add('female-form');
        // Update content for female form
        updateFormContent('female');
    } else {
        body.classList.remove('female-form');
        // Update content for male form
        updateFormContent('male');
    }
}

// Function to update form content based on gender
function updateFormContent(gender) {
    if (gender === 'female' && typeof femaleFormData !== 'undefined') {
        // Update text content
        const mainTitle = document.querySelector('.main-title[data-gender-text="true"]');
        const mainSubtitle = document.querySelector('.main-subtitle[data-gender-text="true"]');

        if (mainTitle && femaleFormData.textUpdates) {
            mainTitle.textContent = femaleFormData.textUpdates.mainTitle || mainTitle.textContent;
        }
        if (mainSubtitle && femaleFormData.textUpdates) {
            mainSubtitle.textContent = femaleFormData.textUpdates.mainSubtitle || mainSubtitle.textContent;
        }

        // Update section titles if specified
        if (femaleFormData.textUpdates && femaleFormData.textUpdates.sectionTitles) {
            // Update all section titles
            Object.entries(femaleFormData.textUpdates.sectionTitles).forEach(([key, value]) => {
                const elements = document.querySelectorAll(`[data-section-key="${key}"]`);
                elements.forEach(el => {
                    el.textContent = value;
                });
            });

            // Update subsection titles
            document.querySelectorAll('.subsection-title').forEach(title => {
                const text = title.textContent;
                if (text.includes('魅力を感じるスタイル')) {
                    title.textContent = text.replace('魅力を感じるスタイル', femaleFormData.textUpdates.sectionTitles.attractiveStyle || '魅力を感じる女性のスタイル');
                } else if (text.includes('避けたいアイテム')) {
                    title.textContent = text.replace('避けたいアイテム', femaleFormData.textUpdates.sectionTitles.avoidItems || '苦手な（避けたい）アイテム・デザイン');
                }
            });
        }

        // Update labels and hints
        if (femaleFormData.textUpdates && femaleFormData.textUpdates.labels) {
            Object.entries(femaleFormData.textUpdates.labels).forEach(([key, value]) => {
                const elements = document.querySelectorAll(`[data-label-key="${key}"]`);
                elements.forEach(el => {
                    el.textContent = value;
                });
            });
        }

        // Update hint texts
        if (femaleFormData.textUpdates && femaleFormData.textUpdates.hints) {
            Object.entries(femaleFormData.textUpdates.hints).forEach(([key, value]) => {
                const elements = document.querySelectorAll(`[data-hint-key="${key}"]`);
                elements.forEach(el => {
                    el.textContent = value;
                });
            });
        }

        // Update attractive styles images and names
        updateStyleImages('female');

        // Update avoid items for female
        updateAvoidItems('female');

    } else if (gender === 'male') {
        // Reset to default male content
        const mainTitle = document.querySelector('.main-title[data-gender-text="true"]');
        const mainSubtitle = document.querySelector('.main-subtitle[data-gender-text="true"]');

        if (mainTitle) {
            mainTitle.textContent = 'Personal Style Configuration';
        }
        if (mainSubtitle) {
            mainSubtitle.textContent = 'お客様のライフスタイルに最適なスタイリングをご提供するため、詳細な情報をお聞かせください';
        }

        // Reset section titles
        document.querySelectorAll('.subsection-title').forEach(title => {
            const text = title.textContent;
            if (text.includes('女性のスタイル')) {
                title.textContent = text.replace('魅力を感じる女性のスタイル', '魅力を感じるスタイル');
            } else if (text.includes('アイテム・デザイン')) {
                title.textContent = text.replace('苦手な（避けたい）アイテム・デザイン', '避けたいアイテム');
            }
        });

        // Update style images back to male versions
        updateStyleImages('male');

        // Update avoid items for male
        updateAvoidItems('male');
    }
}

// Function to update style preference images based on gender
function updateStyleImages(gender) {
    if (gender === 'female' && typeof femaleFormData !== 'undefined' && femaleFormData.attractiveStyles) {
        // Map existing male styles to female styles
        const styleMapping = {
            'mode': 'feminine',
            'classic': 'elegant',
            'casual-chic': 'casual-chic',
            'street': 'modern',
            'conservative': 'classic',
            'minimal': 'natural',
            'relax': 'sophisticated',
            'american-casual': 'trendy',
            'elegant': 'artistic'
        };

        document.querySelectorAll('.style-preference-card').forEach(card => {
            const input = card.querySelector('input[type="checkbox"]');
            const img = card.querySelector('img');
            const label = card.querySelector('label');

            if (input && img) {
                const currentValue = input.value;
                const femaleStyle = styleMapping[currentValue];

                if (femaleStyle && femaleFormData.attractiveStyles[femaleStyle]) {
                    const femaleData = femaleFormData.attractiveStyles[femaleStyle];
                    // Update image if it exists
                    if (femaleData.image && checkImageExists(femaleData.image)) {
                        img.src = femaleData.image;
                        img.alt = femaleData.name;
                    }
                    // Update the text inside the label
                    const textNode = Array.from(label.childNodes).find(node => node.nodeType === 3);
                    if (textNode) {
                        textNode.textContent = femaleData.name;
                    }
                }
            }
        });
    } else {
        // Reset to male styles
        const maleStyles = {
            'mode': { name: 'モード', image: 'images/style-mode.jpg' },
            'classic': { name: 'クラシック', image: 'images/style-classic.jpg' },
            'casual-chic': { name: 'カジュアルシック', image: 'images/style-casual-chic.jpg' },
            'street': { name: 'ストリート', image: 'images/style-street.jpg' },
            'conservative': { name: 'コンサバティブ', image: 'images/style-conservative.jpg' },
            'minimal': { name: 'ミニマル', image: 'images/style-minimal.jpg' },
            'relax': { name: 'リラックス', image: 'images/style-relax.jpg' },
            'american-casual': { name: 'アメリカンカジュアル', image: 'images/style-american-casual.jpg' },
            'elegant': { name: 'エレガント', image: 'images/style-elegant.jpg' }
        };

        document.querySelectorAll('.style-preference-card').forEach(card => {
            const input = card.querySelector('input[type="checkbox"]');
            const img = card.querySelector('img');
            const label = card.querySelector('label');

            if (input && img && maleStyles[input.value]) {
                const maleData = maleStyles[input.value];
                img.src = maleData.image;
                img.alt = maleData.name;
                // Update the text inside the label
                const textNode = Array.from(label.childNodes).find(node => node.nodeType === 3);
                if (textNode) {
                    textNode.textContent = maleData.name;
                }
            }
        });
    }
}

// Function to update avoid items based on gender
function updateAvoidItems(gender) {
    // This would update the avoid items section with gender-specific items
    // For now, we'll keep the existing items but this can be expanded
}

// Helper function to check if image exists
function checkImageExists(imagePath) {
    // For now, assume all images exist
    // In production, you might want to actually check
    return true;
}

// Photo Upload Functionality
function initializePhotoUpload() {
    const photoInputs = document.querySelectorAll('.photo-input');

    photoInputs.forEach(input => {
        input.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                const photoBox = input.closest('.photo-upload-box');
                const preview = photoBox.querySelector('.photo-preview');
                const placeholder = photoBox.querySelector('.photo-placeholder');

                reader.onload = function(e) {
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                    photoBox.classList.add('has-image');

                    // Hide placeholder when image is shown
                    if (placeholder) {
                        placeholder.style.display = 'none';
                    }

                    // Add change button if it doesn't exist
                    let changeBtn = photoBox.querySelector('.change-photo-btn');
                    if (!changeBtn) {
                        changeBtn = document.createElement('button');
                        changeBtn.className = 'change-photo-btn';
                        changeBtn.textContent = '画像を変更';
                        changeBtn.type = 'button';
                        changeBtn.onclick = function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            input.click();
                        };
                        photoBox.appendChild(changeBtn);
                    }
                };

                reader.readAsDataURL(file);
            }
        });
    });

    // Drag and drop functionality
    const photoBoxes = document.querySelectorAll('.photo-upload-box');

    photoBoxes.forEach(box => {
        box.addEventListener('dragover', function(e) {
            e.preventDefault();
            e.stopPropagation();
            box.classList.add('drag-over');
        });

        box.addEventListener('dragleave', function(e) {
            e.preventDefault();
            e.stopPropagation();
            box.classList.remove('drag-over');
        });

        box.addEventListener('drop', function(e) {
            e.preventDefault();
            e.stopPropagation();
            box.classList.remove('drag-over');

            const files = e.dataTransfer.files;
            const input = box.querySelector('.photo-input');

            if (files.length > 0 && files[0].type.startsWith('image/')) {
                input.files = files;
                const event = new Event('change', { bubbles: true });
                input.dispatchEvent(event);
            }
        });
    });
}

// Birth Date Population and Age Display
function populateBirthDate() {
    const currentYear = new Date().getFullYear();
    const yearSelect = document.getElementById('birthYear');
    const monthSelect = document.getElementById('birthMonth');
    const daySelect = document.getElementById('birthDay');

    // Clear existing options first (except the placeholder)
    if (yearSelect) {
        // Keep only the first option (placeholder)
        while (yearSelect.options.length > 1) {
            yearSelect.remove(1);
        }
        // Populate years (1940-current year)
        for (let year = currentYear; year >= 1940; year--) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = `${year}年`;
            yearSelect.appendChild(option);
        }
    }

    // Clear and populate months
    if (monthSelect) {
        // Keep only the first option (placeholder)
        while (monthSelect.options.length > 1) {
            monthSelect.remove(1);
        }
        // Populate months
        for (let month = 1; month <= 12; month++) {
            const option = document.createElement('option');
            option.value = month;
            option.textContent = `${month}月`;
            monthSelect.appendChild(option);
        }
    }

    // Clear and populate days (initially 1-31)
    if (daySelect) {
        // Keep only the first option (placeholder)
        while (daySelect.options.length > 1) {
            daySelect.remove(1);
        }
        // Populate days
        for (let day = 1; day <= 31; day++) {
            const option = document.createElement('option');
            option.value = day;
            option.textContent = `${day}日`;
            daySelect.appendChild(option);
        }
    }

    // Update days when month/year changes
    function updateDays() {
        const year = parseInt(yearSelect.value);
        const month = parseInt(monthSelect.value);

        if (year && month) {
            const daysInMonth = new Date(year, month, 0).getDate();
            const currentDay = daySelect.value;

            // Clear existing options except first one
            daySelect.innerHTML = '<option value="">日</option>';

            for (let day = 1; day <= daysInMonth; day++) {
                const option = document.createElement('option');
                option.value = day;
                option.textContent = day;
                daySelect.appendChild(option);
            }

            // Restore selection if still valid
            if (currentDay && currentDay <= daysInMonth) {
                daySelect.value = currentDay;
            }
        }
    }

    // Calculate and display age
    function calculateAge() {
        const year = parseInt(yearSelect.value);
        const month = parseInt(monthSelect.value);
        const day = parseInt(daySelect.value);
        const ageDisplay = document.getElementById('ageDisplay');

        if (year && month && day && ageDisplay) {
            const birthDate = new Date(year, month - 1, day);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();

            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            ageDisplay.textContent = `（${age}歳）`;
            ageDisplay.style.color = '#ffffff';
            ageDisplay.style.fontWeight = '500';
        } else if (ageDisplay) {
            ageDisplay.textContent = '';
        }
    }

    // Add event listeners
    if (yearSelect && monthSelect && daySelect) {
        yearSelect.addEventListener('change', function() {
            updateDays();
            calculateAge();
        });

        monthSelect.addEventListener('change', function() {
            updateDays();
            calculateAge();
        });

        daySelect.addEventListener('change', calculateAge);
    }
}

// Ensure birth date is initialized when DOM is ready
window.addEventListener('load', function() {
    // Initialize birth date with a slight delay to ensure DOM is fully ready
    setTimeout(() => {
        initializeBirthDateSelector();
        setupConditionalSections();
    }, 100);
});

// Simple gender switching
document.addEventListener('DOMContentLoaded', function() {

    // Get gender radio buttons
    const genderRadios = document.querySelectorAll('input[name="formGender"]');

    // Simple gender switch function
    function switchGender(value) {
        const body = document.body;

        if (value === 'female') {
            body.classList.add('female-form');
        } else {
            body.classList.remove('female-form');
        }

        // Log current state
    }

    // Add event listeners to each radio button
    genderRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                switchGender(this.value);
            }
        });

        // Also add click listener for immediate response
        radio.addEventListener('click', function() {
            if (!this.checked) {
                this.checked = true;
                switchGender(this.value);
            }
        });
    });

    // Initialize with current selection
    const checkedRadio = document.querySelector('input[name="formGender"]:checked');
    if (checkedRadio) {
        switchGender(checkedRadio.value);
    }
});

// Gender-specific content mapping
const genderContent = {
    male: {
        attractiveStyles: ['mode', 'classic', 'minimal', 'elegant', 'casual-chic', 'relax', 'american-casual', 'street', 'conservative'],
        avoidItems: ['tight', 'oversized', 'logo', 'bright-color', 'synthetic', 'bold-print'],
        weekdayOptions: ['office-external', 'office-internal', 'office-desk', 'remote', 'hybrid', 'home', 'other'],
        holidayOptions: ['friends', 'family', 'date', 'solo', 'sports', 'drive', 'outdoor-activities', 'events', 'business-dining', 'executive-meeting', 'holiday-other']
    },
    female: {
        attractiveStyles: ['feminine', 'elegant', 'casual-chic', 'modern', 'classic', 'natural', 'sophisticated', 'trendy', 'artistic'],
        avoidItems: ['mini-length', 'excessive-exposure', 'frills-lace', 'high-heels', 'thin-material', 'ruffles'],
        weekdayOptions: ['office-external', 'office-internal', 'office-desk', 'remote', 'hybrid', 'home', 'other'],
        holidayOptions: ['friends', 'family', 'date', 'solo', 'shopping', 'beauty-salon', 'cultural-activities', 'events', 'lunch-meeting', 'parent-activities', 'holiday-other']
    }
};

// Female form data
const femaleFormData = {
    textUpdates: {
        mainTitle: 'Personal Style Configuration for Women',
        mainSubtitle: '女性のお客様のライフスタイルに最適なスタイリングをご提供するため、詳細な情報をお聞かせください'
    },
    attractiveStyles: {
        feminine: { name: 'フェミニン', image: 'images/style-feminine.jpg' },
        elegant: { name: 'エレガント', image: 'images/style-elegant.jpg' },
        'casual-chic': { name: 'カジュアルシック', image: 'images/style-casual-chic.jpg' },
        modern: { name: 'モダン', image: 'images/style-modern.jpg' },
        classic: { name: 'クラシック', image: 'images/style-classic.jpg' },
        natural: { name: 'ナチュラル', image: 'images/style-natural.jpg' },
        sophisticated: { name: 'ソフィスティケート', image: 'images/style-sophisticated.jpg' },
        trendy: { name: 'トレンディ', image: 'images/style-trendy.jpg' },
        artistic: { name: 'アーティスティック', image: 'images/style-artistic.jpg' }
    },
    avoidItems: {
        'mini-length': { name: 'ミニ丈', image: 'images/avoid-mini-length.jpg' },
        'excessive-exposure': { name: '過度な露出', image: 'images/avoid-excessive-exposure.jpg' },
        'frills-lace': { name: 'フリル・レース', image: 'images/avoid-frills-lace.jpg' },
        'high-heels': { name: 'ハイヒール', image: 'images/avoid-high-heels.jpg' },
        'thin-material': { name: '薄い素材', image: 'images/avoid-thin-material.jpg' },
        'ruffles': { name: 'ラッフル', image: 'images/avoid-ruffles.jpg' }
    }
};

// Function to switch form gender
function switchFormGender(gender) {
    const body = document.body;

    // Instant switch without animation
    if (gender === 'female') {
        body.classList.add('female-form');
        // Update form content for female
        updateFormContent('female');
    } else {
        body.classList.remove('female-form');
        // Update form content for male
        updateFormContent('male');
    }
}

// Function to update form content based on gender
function updateFormContent(gender) {
    // Update main title and subtitle
    const mainTitle = document.querySelector('.main-title[data-gender-text]');
    const mainSubtitle = document.querySelector('.main-subtitle[data-gender-text]');

        if (gender === 'female' && typeof femaleFormData !== 'undefined') {
            // Update text content from femaleFormData
            if (mainTitle && femaleFormData.textUpdates) {
                mainTitle.textContent = femaleFormData.textUpdates.mainTitle || 'Personal Style Configuration for Women';
            }
            if (mainSubtitle && femaleFormData.textUpdates) {
                mainSubtitle.textContent = femaleFormData.textUpdates.mainSubtitle || '女性のお客様のライフスタイルに最適なスタイリングをご提供するため、詳細な情報をお聞かせください';
            }

            // Update attractive styles section
            updateAttractiveStyles('female');

            // Update avoid items section
            updateAvoidItems('female');

            // Update weekend activities
            updateWeekendActivities('female');
        } else {
            if (mainTitle) mainTitle.textContent = 'Personal Style Configuration';
            if (mainSubtitle) mainSubtitle.textContent = 'お客様のライフスタイルに最適なスタイリングをご提供するため、詳細な情報をお聞かせください';

            // Update sections for male
            updateAttractiveStyles('male');
            updateAvoidItems('male');
            updateWeekendActivities('male');
        }

}

// Function to update attractive styles based on gender
function updateAttractiveStyles(gender) {
    const styleGrid = document.querySelector('.style-preference-grid');
    if (!styleGrid) return;

    // Clear existing styles
        styleGrid.innerHTML = '';

        if (gender === 'female' && femaleFormData && femaleFormData.attractiveStyles) {
            // Add female styles
            Object.entries(femaleFormData.attractiveStyles).forEach(([key, style]) => {
                const styleCard = document.createElement('div');
                styleCard.className = 'style-preference-card';
                styleCard.innerHTML = `
                    <input type="checkbox" name="attractiveStyle" value="${key}" id="attractive-${key}">
                    <label for="attractive-${key}">
                        <img src="${style.image}" alt="${style.name}">
                        <span>${style.name}</span>
                    </label>
                `;
                styleGrid.appendChild(styleCard);
            });
        } else {
            // Add male styles (restore original)
            const maleStyles = genderContent.male.attractiveStyles;
            maleStyles.forEach(style => {
                const styleCard = document.createElement('div');
                styleCard.className = 'style-preference-card';
                styleCard.innerHTML = `
                    <input type="checkbox" name="attractiveStyle" value="${style}" id="attractive-${style}">
                    <label for="attractive-${style}">
                        <img src="images/style-${style}.jpg" alt="${getStyleName(style)}">
                        <span>${getStyleName(style)}</span>
                    </label>
                `;
                styleGrid.appendChild(styleCard);
            });
        }

        // Re-initialize pattern selection after updating styles
        initializePatternSelection();
}

// Function to update avoid items based on gender
function updateAvoidItems(gender) {
        const avoidGrid = document.querySelector('.avoid-items-grid');
        if (!avoidGrid) return;

        // Clear existing items
        avoidGrid.innerHTML = '';

        if (gender === 'female' && femaleFormData && femaleFormData.avoidItems) {
            // Add female avoid items
            Object.entries(femaleFormData.avoidItems).forEach(([key, item]) => {
                const avoidCard = document.createElement('div');
                avoidCard.className = 'avoid-item-card';
                avoidCard.innerHTML = `
                    <input type="checkbox" name="avoidItems" value="${key}" id="avoid-${key}">
                    <label for="avoid-${key}">
                        <img src="${item.image}" alt="${item.name}">
                        <span>${item.name}</span>
                    </label>
                `;
                avoidGrid.appendChild(avoidCard);
            });
        } else {
            // Add male avoid items
            const maleAvoidItems = genderContent.male.avoidItems;
            maleAvoidItems.forEach(item => {
                const avoidCard = document.createElement('div');
                avoidCard.className = 'avoid-item-card';
                avoidCard.innerHTML = `
                    <input type="checkbox" name="avoidItems" value="${item}" id="avoid-${item}">
                    <label for="avoid-${item}">
                        <img src="images/avoid-${item}.jpg" alt="${getAvoidItemName(item)}">
                        <span>${getAvoidItemName(item)}</span>
                    </label>
                `;
                avoidGrid.appendChild(avoidCard);
            });
        }
}

// Function to update weekend activities based on gender
function updateWeekendActivities(gender) {
        const weekendGrid = document.querySelector('.weekend-grid');
        if (!weekendGrid) return;

        // Note: Weekend activities are in the lifestyle section
        // This would need to be implemented based on the specific structure
}

// Helper function to get style names
function getStyleName(style) {
        const styleNames = {
            'mode': 'モード',
            'classic': 'クラシック',
            'minimal': 'ミニマル',
            'elegant': 'エレガント',
            'casual-chic': 'カジュアルシック',
            'relax': 'リラックス',
            'american-casual': 'アメリカンカジュアル',
            'street': 'ストリート',
            'conservative': 'コンサバティブ'
        };
        return styleNames[style] || style;
}

// Helper function to get avoid item names
function getAvoidItemName(item) {
        const itemNames = {
            'tight': 'タイト過ぎる',
            'oversized': 'オーバーサイズ',
            'logo': 'ロゴ',
            'bright-color': '明るい色',
            'synthetic': '合成素材',
            'bold-print': '派手なプリント'
        };
        return itemNames[item] || item;
}

// Initialize gender switching on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // Get gender radio buttons
    const genderRadios = document.querySelectorAll('input[name="formGender"]');

    // Add event listeners to gender radios
    genderRadios.forEach(radio => {
        radio.addEventListener('change', function(e) {
            if (this.checked) {
                switchFormGender(this.value);
            }
        });
        // Also add click listener for better responsiveness
        radio.addEventListener('click', function(e) {
            // Force the change event if needed
            if (!this.checked) {
                this.checked = true;
                const event = new Event('change', { bubbles: true });
                this.dispatchEvent(event);
            }
        });
    });

    // Initialize with the default selected gender
    const checkedGender = document.querySelector('input[name="formGender"]:checked');
    if (checkedGender) {
        switchFormGender(checkedGender.value);
    }
});

// Pattern Selection Functionality
let patternSelectionInitialized = false;

function initializePatternSelection() {
    // Prevent duplicate initialization
    if (patternSelectionInitialized) {
        console.log('Pattern selection already initialized, skipping...');
        return;
    }

    const styleCheckboxes = document.querySelectorAll('input[name="attractiveStyle"]');
    const patternSection = document.getElementById('patternSelections');
    const patternContainer = document.getElementById('patternSelectionsContainer');

    console.log('Pattern Selection Debug:', {
        styleCheckboxes: styleCheckboxes.length,
        patternSection: !!patternSection,
        patternContainer: !!patternContainer
    });

    if (!patternSection || !patternContainer || styleCheckboxes.length === 0) {
        console.error('Pattern selection elements not found');
        return;
    }

    patternSelectionInitialized = true;
    console.log('Pattern selection initialized successfully');

    // Pattern variations for each style
    const stylePatterns = {
        mode: {
            name: 'モード',
            patterns: [
                { id: 'mode-level1', name: 'モード レベル1', image: 'images/style-mode-level1.jpg' },
                { id: 'mode-level2', name: 'モード レベル2', image: 'images/style-mode-level2.jpg' },
                { id: 'mode-level3', name: 'モード レベル3', image: 'images/style-mode-level3.jpg' },
                { id: 'mode-level4', name: 'モード レベル4', image: 'images/style-mode-level4.jpg' },
                { id: 'mode-level5', name: 'モード レベル5', image: 'images/style-mode-level5.jpg' }
            ]
        },
        classic: {
            name: 'クラシック',
            patterns: [
                { id: 'classic-british', name: 'ブリティッシュ', image: 'images/pattern-classic-british.jpg' },
                { id: 'classic-italian', name: 'イタリアン', image: 'images/pattern-classic-italian.jpg' },
                { id: 'classic-american', name: 'アメリカントラッド', image: 'images/pattern-classic-american.jpg' },
                { id: 'classic-french', name: 'フレンチ', image: 'images/pattern-classic-french.jpg' },
                { id: 'classic-preppy', name: 'プレッピー', image: 'images/pattern-classic-preppy.jpg' }
            ]
        },
        minimal: {
            name: 'ミニマル',
            patterns: [
                { id: 'minimal-nordic', name: 'ノルディック', image: 'images/pattern-minimal-nordic.jpg' },
                { id: 'minimal-zen', name: 'ゼン', image: 'images/pattern-minimal-zen.jpg' },
                { id: 'minimal-urban', name: 'アーバンミニマル', image: 'images/pattern-minimal-urban.jpg' },
                { id: 'minimal-tech', name: 'テックミニマル', image: 'images/pattern-minimal-tech.jpg' },
                { id: 'minimal-essential', name: 'エッセンシャル', image: 'images/pattern-minimal-essential.jpg' }
            ]
        },
        elegant: {
            name: 'エレガント',
            patterns: [
                { id: 'elegant-modern', name: 'モダンエレガント', image: 'images/pattern-elegant-modern.jpg' },
                { id: 'elegant-classic', name: 'クラシックエレガント', image: 'images/pattern-elegant-classic.jpg' },
                { id: 'elegant-feminine', name: 'フェミニンエレガント', image: 'images/pattern-elegant-feminine.jpg' },
                { id: 'elegant-minimal', name: 'ミニマルエレガント', image: 'images/pattern-elegant-minimal.jpg' },
                { id: 'elegant-luxe', name: 'ラグジュアリーエレガント', image: 'images/pattern-elegant-luxe.jpg' }
            ]
        },
        'casual-chic': {
            name: 'カジュアルシック',
            patterns: [
                { id: 'chic-french', name: 'フレンチシック', image: 'images/pattern-chic-french.jpg' },
                { id: 'chic-urban', name: 'アーバンシック', image: 'images/pattern-chic-urban.jpg' },
                { id: 'chic-minimal', name: 'ミニマルシック', image: 'images/pattern-chic-minimal.jpg' },
                { id: 'chic-modern', name: 'モダンシック', image: 'images/pattern-chic-modern.jpg' },
                { id: 'chic-relaxed', name: 'リラックスシック', image: 'images/pattern-chic-relaxed.jpg' }
            ]
        },
        relax: {
            name: 'リラックス',
            patterns: [
                { id: 'relax-natural', name: 'ナチュラルリラックス', image: 'images/pattern-relax-natural.jpg' },
                { id: 'relax-urban', name: 'アーバンリラックス', image: 'images/pattern-relax-urban.jpg' },
                { id: 'relax-comfort', name: 'コンフォートリラックス', image: 'images/pattern-relax-comfort.jpg' },
                { id: 'relax-minimal', name: 'ミニマルリラックス', image: 'images/pattern-relax-minimal.jpg' },
                { id: 'relax-sophisticated', name: 'ソフィスティケイテッドリラックス', image: 'images/pattern-relax-sophisticated.jpg' }
            ]
        },
        'american-casual': {
            name: 'アメリカンカジュアル',
            patterns: [
                { id: 'amecas-ivy', name: 'アイビー', image: 'images/pattern-amecas-ivy.jpg' },
                { id: 'amecas-west', name: 'ウエストコースト', image: 'images/pattern-amecas-west.jpg' },
                { id: 'amecas-preppy', name: 'プレッピー', image: 'images/pattern-amecas-preppy.jpg' },
                { id: 'amecas-heritage', name: 'ヘリテージ', image: 'images/pattern-amecas-heritage.jpg' },
                { id: 'amecas-sports', name: 'スポーツミックス', image: 'images/pattern-amecas-sports.jpg' }
            ]
        },
        conservative: {
            name: 'コンサバティブ',
            patterns: [
                { id: 'conservative-traditional', name: 'トラディショナル', image: 'images/pattern-conservative-traditional.jpg' },
                { id: 'conservative-modern', name: 'モダンコンサバ', image: 'images/pattern-conservative-modern.jpg' },
                { id: 'conservative-elegant', name: 'エレガントコンサバ', image: 'images/pattern-conservative-elegant.jpg' },
                { id: 'conservative-business', name: 'ビジネスコンサバ', image: 'images/pattern-conservative-business.jpg' },
                { id: 'conservative-refined', name: 'リファインドコンサバ', image: 'images/pattern-conservative-refined.jpg' }
            ]
        },
        street: {
            name: 'ストリート',
            patterns: [
                { id: 'street-urban', name: 'アーバンストリート', image: 'images/pattern-street-urban.jpg' },
                { id: 'street-skate', name: 'スケーター', image: 'images/pattern-street-skate.jpg' },
                { id: 'street-hiphop', name: 'ヒップホップ', image: 'images/pattern-street-hiphop.jpg' },
                { id: 'street-grunge', name: 'グランジ', image: 'images/pattern-street-grunge.jpg' },
                { id: 'street-tech', name: 'テックストリート', image: 'images/pattern-street-tech.jpg' }
            ]
        },
        feminine: {
            name: 'フェミニン',
            patterns: [
                { id: 'feminine-romantic', name: 'ロマンティック', image: 'images/pattern-feminine-romantic.jpg' },
                { id: 'feminine-graceful', name: 'グレースフル', image: 'images/pattern-feminine-graceful.jpg' },
                { id: 'feminine-soft', name: 'ソフトフェミニン', image: 'images/pattern-feminine-soft.jpg' },
                { id: 'feminine-elegant', name: 'エレガントフェミニン', image: 'images/pattern-feminine-elegant.jpg' },
                { id: 'feminine-modern', name: 'モダンフェミニン', image: 'images/pattern-feminine-modern.jpg' }
            ]
        }
    };

    // Sample items for each category
    const categoryItems = {
        tops: [
            { id: 'top1', name: 'シャツ1', image: 'images/item-shirt1.jpg' },
            { id: 'top2', name: 'シャツ2', image: 'images/item-shirt2.jpg' },
            { id: 'top3', name: 'ニット1', image: 'images/item-knit1.jpg' }
        ],
        bottoms: [
            { id: 'bottom1', name: 'パンツ1', image: 'images/item-pants1.jpg' },
            { id: 'bottom2', name: 'パンツ2', image: 'images/item-pants2.jpg' }
        ],
        outerwear: [
            { id: 'outer1', name: 'ジャケット1', image: 'images/item-jacket1.jpg' },
            { id: 'outer2', name: 'ジャケット2', image: 'images/item-jacket2.jpg' }
        ],
        shoes: [
            { id: 'shoes1', name: 'シューズ1', image: 'images/item-shoes1.jpg' },
            { id: 'shoes2', name: 'シューズ2', image: 'images/item-shoes2.jpg' }
        ],
        bags: [
            { id: 'bag1', name: 'バッグ1', image: 'images/item-bag1.jpg' },
            { id: 'bag2', name: 'バッグ2', image: 'images/item-bag2.jpg' }
        ]
    };

    // Handle style checkbox changes
    styleCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            console.log('Style checkbox changed:', this.value, this.checked);

            // Limit to 3 selections
            const checkedBoxes = Array.from(styleCheckboxes).filter(cb => cb.checked);
            if (checkedBoxes.length > 3) {
                this.checked = false;
                alert('最大3つまで選択できます。');
                return;
            }

            updatePatternSelections();
        });
    });

    function updatePatternSelections() {
        const selectedStyles = Array.from(styleCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        // Update pattern selections based on selected styles

        if (selectedStyles.length > 0) {
            // Show pattern section immediately
            patternSection.style.display = 'block';
            patternSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            renderPatternSelections(selectedStyles);
        } else {
            patternSection.style.display = 'none';
            patternContainer.innerHTML = '';
        }
    }

    function renderPatternSelections(selectedStyles) {
        patternContainer.innerHTML = '';
        // Clear and render new patterns

        selectedStyles.forEach(styleKey => {
            if (styleKey === 'other') return; // Skip 'other' option

            const styleData = stylePatterns[styleKey];
            // Process each selected style
            if (!styleData) return;

            const styleContainer = document.createElement('div');
            styleContainer.className = 'style-pattern-container';
            styleContainer.innerHTML = `
                <div class="style-pattern-header">
                    <img src="images/style-${styleKey}.jpg" alt="${styleData.name}" class="style-pattern-icon">
                    <h3 class="style-pattern-title">${styleData.name}のパターンバリエーション</h3>
                </div>
                <p class="form-hint" style="margin-bottom: 20px;">以下の5つのパターンから、お好みのものを1つ選択してください。</p>
                <div class="pattern-variations-grid">
                    ${styleData.patterns.map(pattern => `
                        <div class="pattern-variation-card">
                            <input type="radio" name="pattern_${styleKey}" value="${pattern.id}" id="${pattern.id}">
                            <label for="${pattern.id}">
                                <img src="${pattern.image}" alt="${pattern.name}" onerror="this.src='images/placeholder.jpg'">
                                <div class="pattern-variation-name">${pattern.name}</div>
                            </label>
                        </div>
                    `).join('')}
                </div>
                <div class="pattern-items-section" id="items_${styleKey}">
                    <h4 class="pattern-items-header">このスタイルのアイテムを評価してください</h4>
                    <div class="pattern-category">
                        <h5 class="pattern-category-title">トップス</h5>
                        <div class="pattern-items-grid pattern-good-bad-grid">
                            ${categoryItems.tops.map((item, index) => `
                                <div class="pattern-good-bad-item">
                                    <img src="${item.image}" alt="${item.name}" class="pattern-item-image">
                                    <div class="pattern-item-name">${item.name}</div>
                                    <div class="good-bad-selection">
                                        <label class="good-bad-option good-option">
                                            <input type="radio" name="${styleKey}_tops_${index}_eval" value="good" onchange="toggleReasonSection(this, '${styleKey}_tops_${index}')">
                                            <span>GOOD</span>
                                        </label>
                                        <label class="good-bad-option bad-option">
                                            <input type="radio" name="${styleKey}_tops_${index}_eval" value="bad" onchange="toggleReasonSection(this, '${styleKey}_tops_${index}')">
                                            <span>BAD</span>
                                        </label>
                                    </div>
                                    <div class="good-bad-reasons" id="reasons_${styleKey}_tops_${index}" style="display: none;">
                                        <p class="reason-label">理由（複数選択可）:</p>
                                        <div class="reason-options">
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_tops_${index}_reasons" value="design">
                                                <span>デザイン</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_tops_${index}_reasons" value="color">
                                                <span>色味</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_tops_${index}_reasons" value="silhouette">
                                                <span>シルエット</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_tops_${index}_reasons" value="material">
                                                <span>素材感</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_tops_${index}_reasons" value="price">
                                                <span>価格帯</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_tops_${index}_reasons" value="brand">
                                                <span>ブランドイメージ</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_tops_${index}_reasons" value="other">
                                                <span>その他</span>
                                            </label>
                                            <input type="text" name="${styleKey}_tops_${index}_reasons_other" class="reason-other-input" placeholder="具体的に：" style="display: none;">
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="pattern-category">
                        <h5 class="pattern-category-title">ボトムス</h5>
                        <div class="pattern-items-grid pattern-good-bad-grid">
                            ${categoryItems.bottoms.map((item, index) => `
                                <div class="pattern-good-bad-item">
                                    <img src="${item.image}" alt="${item.name}" class="pattern-item-image">
                                    <div class="pattern-item-name">${item.name}</div>
                                    <div class="good-bad-selection">
                                        <label class="good-bad-option good-option">
                                            <input type="radio" name="${styleKey}_bottoms_${index}_eval" value="good" onchange="toggleReasonSection(this, '${styleKey}_bottoms_${index}')">
                                            <span>GOOD</span>
                                        </label>
                                        <label class="good-bad-option bad-option">
                                            <input type="radio" name="${styleKey}_bottoms_${index}_eval" value="bad" onchange="toggleReasonSection(this, '${styleKey}_bottoms_${index}')">
                                            <span>BAD</span>
                                        </label>
                                    </div>
                                    <div class="good-bad-reasons" id="reasons_${styleKey}_bottoms_${index}" style="display: none;">
                                        <p class="reason-label">理由（複数選択可）:</p>
                                        <div class="reason-options">
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bottoms_${index}_reasons" value="design">
                                                <span>デザイン</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bottoms_${index}_reasons" value="color">
                                                <span>色味</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bottoms_${index}_reasons" value="silhouette">
                                                <span>シルエット</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bottoms_${index}_reasons" value="material">
                                                <span>素材感</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bottoms_${index}_reasons" value="price">
                                                <span>価格帯</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bottoms_${index}_reasons" value="brand">
                                                <span>ブランドイメージ</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bottoms_${index}_reasons" value="other">
                                                <span>その他</span>
                                            </label>
                                            <input type="text" name="${styleKey}_bottoms_${index}_reasons_other" class="reason-other-input" placeholder="具体的に：" style="display: none;">
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="pattern-category">
                        <h5 class="pattern-category-title">アウター</h5>
                        <div class="pattern-items-grid pattern-good-bad-grid">
                            ${categoryItems.outerwear.map((item, index) => `
                                <div class="pattern-good-bad-item">
                                    <img src="${item.image}" alt="${item.name}" class="pattern-item-image">
                                    <div class="pattern-item-name">${item.name}</div>
                                    <div class="good-bad-selection">
                                        <label class="good-bad-option good-option">
                                            <input type="radio" name="${styleKey}_outerwear_${index}_eval" value="good" onchange="toggleReasonSection(this, '${styleKey}_outerwear_${index}')">
                                            <span>GOOD</span>
                                        </label>
                                        <label class="good-bad-option bad-option">
                                            <input type="radio" name="${styleKey}_outerwear_${index}_eval" value="bad" onchange="toggleReasonSection(this, '${styleKey}_outerwear_${index}')">
                                            <span>BAD</span>
                                        </label>
                                    </div>
                                    <div class="good-bad-reasons" id="reasons_${styleKey}_outerwear_${index}" style="display: none;">
                                        <p class="reason-label">理由（複数選択可）:</p>
                                        <div class="reason-options">
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_outerwear_${index}_reasons" value="design">
                                                <span>デザイン</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_outerwear_${index}_reasons" value="color">
                                                <span>色味</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_outerwear_${index}_reasons" value="silhouette">
                                                <span>シルエット</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_outerwear_${index}_reasons" value="material">
                                                <span>素材感</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_outerwear_${index}_reasons" value="price">
                                                <span>価格帯</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_outerwear_${index}_reasons" value="brand">
                                                <span>ブランドイメージ</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_outerwear_${index}_reasons" value="other">
                                                <span>その他</span>
                                            </label>
                                            <input type="text" name="${styleKey}_outerwear_${index}_reasons_other" class="reason-other-input" placeholder="具体的に：" style="display: none;">
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="pattern-category">
                        <h5 class="pattern-category-title">シューズ</h5>
                        <div class="pattern-items-grid pattern-good-bad-grid">
                            ${categoryItems.shoes.map((item, index) => `
                                <div class="pattern-good-bad-item">
                                    <img src="${item.image}" alt="${item.name}" class="pattern-item-image">
                                    <div class="pattern-item-name">${item.name}</div>
                                    <div class="good-bad-selection">
                                        <label class="good-bad-option good-option">
                                            <input type="radio" name="${styleKey}_shoes_${index}_eval" value="good" onchange="toggleReasonSection(this, '${styleKey}_shoes_${index}')">
                                            <span>GOOD</span>
                                        </label>
                                        <label class="good-bad-option bad-option">
                                            <input type="radio" name="${styleKey}_shoes_${index}_eval" value="bad" onchange="toggleReasonSection(this, '${styleKey}_shoes_${index}')">
                                            <span>BAD</span>
                                        </label>
                                    </div>
                                    <div class="good-bad-reasons" id="reasons_${styleKey}_shoes_${index}" style="display: none;">
                                        <p class="reason-label">理由（複数選択可）:</p>
                                        <div class="reason-options">
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_shoes_${index}_reasons" value="design">
                                                <span>デザイン</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_shoes_${index}_reasons" value="color">
                                                <span>色味</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_shoes_${index}_reasons" value="silhouette">
                                                <span>シルエット</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_shoes_${index}_reasons" value="material">
                                                <span>素材感</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_shoes_${index}_reasons" value="price">
                                                <span>価格帯</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_shoes_${index}_reasons" value="brand">
                                                <span>ブランドイメージ</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_shoes_${index}_reasons" value="other">
                                                <span>その他</span>
                                            </label>
                                            <input type="text" name="${styleKey}_shoes_${index}_reasons_other" class="reason-other-input" placeholder="具体的に：" style="display: none;">
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="pattern-category">
                        <h5 class="pattern-category-title">バッグ</h5>
                        <div class="pattern-items-grid pattern-good-bad-grid">
                            ${categoryItems.bags.map((item, index) => `
                                <div class="pattern-good-bad-item">
                                    <img src="${item.image}" alt="${item.name}" class="pattern-item-image">
                                    <div class="pattern-item-name">${item.name}</div>
                                    <div class="good-bad-selection">
                                        <label class="good-bad-option good-option">
                                            <input type="radio" name="${styleKey}_bags_${index}_eval" value="good" onchange="toggleReasonSection(this, '${styleKey}_bags_${index}')">
                                            <span>GOOD</span>
                                        </label>
                                        <label class="good-bad-option bad-option">
                                            <input type="radio" name="${styleKey}_bags_${index}_eval" value="bad" onchange="toggleReasonSection(this, '${styleKey}_bags_${index}')">
                                            <span>BAD</span>
                                        </label>
                                    </div>
                                    <div class="good-bad-reasons" id="reasons_${styleKey}_bags_${index}" style="display: none;">
                                        <p class="reason-label">理由（複数選択可）:</p>
                                        <div class="reason-options">
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bags_${index}_reasons" value="design">
                                                <span>デザイン</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bags_${index}_reasons" value="color">
                                                <span>色味</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bags_${index}_reasons" value="silhouette">
                                                <span>シルエット</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bags_${index}_reasons" value="material">
                                                <span>素材感</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bags_${index}_reasons" value="price">
                                                <span>価格帯</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bags_${index}_reasons" value="brand">
                                                <span>ブランドイメージ</span>
                                            </label>
                                            <label class="reason-checkbox">
                                                <input type="checkbox" name="${styleKey}_bags_${index}_reasons" value="other">
                                                <span>その他</span>
                                            </label>
                                            <input type="text" name="${styleKey}_bags_${index}_reasons_other" class="reason-other-input" placeholder="具体的に：" style="display: none;">
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;

            patternContainer.appendChild(styleContainer);

            // Add event listener for pattern selection
            const patternRadios = styleContainer.querySelectorAll(`input[name="pattern_${styleKey}"]`);
            const itemsSection = styleContainer.querySelector(`#items_${styleKey}`);

            patternRadios.forEach(radio => {
                radio.addEventListener('change', function() {
                    if (this.checked) {
                        itemsSection.classList.add('active');
                    }
                });
            });

            // Add event listeners for "その他" checkboxes in reason sections
            const otherReasonCheckboxes = styleContainer.querySelectorAll('input[value="other"]');
            otherReasonCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const reasonSection = this.closest('.good-bad-reasons');
                    const otherInput = reasonSection.querySelector('.reason-other-input');
                    if (otherInput) {
                        otherInput.style.display = this.checked ? 'block' : 'none';
                        if (!this.checked) {
                            otherInput.value = '';
                        }
                    }
                });
            });
        });
    }
}

// Function to toggle reason section display when GOOD or BAD is selected
function toggleReasonSection(radioElement, itemId) {
    const reasonSection = document.getElementById(`reasons_${itemId}`);
    if (reasonSection) {
        // Show the reason section when either GOOD or BAD is selected
        reasonSection.style.display = 'block';
    }
}

// Weekly Date Display Function
function updateWeeklyDates() {
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Calculate Monday of the current week
    const monday = new Date(today);
    const daysToMonday = currentDay === 0 ? -6 : 1 - currentDay;
    monday.setDate(today.getDate() + daysToMonday);

    // Day names in order starting from Monday
    const dayElements = [
        'monday-date',
        'tuesday-date',
        'wednesday-date',
        'thursday-date',
        'friday-date',
        'saturday-date',
        'sunday-date'
    ];

    // Update each day's date
    dayElements.forEach((elementId, index) => {
        const date = new Date(monday);
        date.setDate(monday.getDate() + index);

        const dateElement = document.getElementById(elementId);
        if (dateElement) {
            const month = date.getMonth() + 1;
            const day = date.getDate();
            dateElement.textContent = `${month}/${day}`;
        }
    });
}

// Initialize weekday card sub-options functionality
function initializeWeekdayCardOptions() {
    // Handle weekday lifestyle checkboxes
    const weekdayCheckboxes = document.querySelectorAll('.weekday-card input[type="checkbox"]');

    weekdayCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const card = this.closest('.weekday-card');
            const subOptions = card.querySelector('.sub-options');

            if (subOptions) {
                if (this.checked) {
                    subOptions.style.display = 'block';
                } else {
                    subOptions.style.display = 'none';
                    // Clear sub-selections when unchecked
                    const subCheckboxes = subOptions.querySelectorAll('input[type="checkbox"]');
                    subCheckboxes.forEach(subCheck => {
                        subCheck.checked = false;
                    });
                    const textInputs = subOptions.querySelectorAll('input[type="text"]');
                    textInputs.forEach(input => {
                        input.value = '';
                        input.style.display = 'none';
                    });
                }
            }
        });
    });

    // Handle "その他" (Other) checkboxes for meeting people
    const otherCheckboxes = document.querySelectorAll('.chip-option input[value="other"]');

    otherCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const chipGroup = this.closest('.chip-group');
            const subOptions = this.closest('.sub-options');
            const textInput = subOptions?.querySelector('input[type="text"]');

            if (textInput) {
                if (this.checked) {
                    textInput.style.display = 'block';
                } else {
                    textInput.value = '';
                    textInput.style.display = 'none';
                }
            }
        });
    });
}

// Form initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize photo upload functionality
    initializePhotoUpload();

    // Initialize scene frequency functionality
    // initializeSceneFrequency(); // Removed - no longer using frequency buttons

    // Populate birth date dropdowns
    populateBirthDate();

    // Update weekly dates
    updateWeeklyDates();

    // Initialize pattern selection functionality
    initializePatternSelection();

    // Initialize weekday card sub-options
    initializeWeekdayCardOptions();

    // Form validation and interactivity
    const form = document.querySelector('form');
    const checkboxGroups = document.querySelectorAll('.checkbox-option input[type="checkbox"]');
    const radioGroups = document.querySelectorAll('.radio-option input[type="radio"]');

    // Enhanced checkbox interactions
    checkboxGroups.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const label = this.closest('.checkbox-option');
            if (this.checked) {
                label.classList.add('selected');
            } else {
                label.classList.remove('selected');
            }
        });
    });

    // Enhanced radio button interactions
    radioGroups.forEach(radio => {
        radio.addEventListener('change', function() {
            const name = this.name;
            // Remove selected class from all radios with same name
            document.querySelectorAll(`input[name="${name}"]`).forEach(r => {
                r.closest('.radio-option')?.classList.remove('selected');
            });
            // Add selected class to current radio
            this.closest('.radio-option')?.classList.add('selected');
        });
    });

    // Smooth scroll for form navigation
    function smoothScrollTo(element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // Form progress tracking
    function updateProgress() {
        const sections = document.querySelectorAll('.form-section');
        const totalSections = sections.length;
        let completedSections = 0;

        sections.forEach(section => {
            const requiredInputs = section.querySelectorAll('input[required], select[required], textarea[required]');
            let sectionComplete = true;

            requiredInputs.forEach(input => {
                if (input.type === 'checkbox' || input.type === 'radio') {
                    const name = input.name;
                    const checked = section.querySelector(`input[name="${name}"]:checked`);
                    if (!checked) sectionComplete = false;
                } else {
                    if (!input.value.trim()) sectionComplete = false;
                }
            });

            if (sectionComplete) completedSections++;
        });

        const progress = (completedSections / totalSections) * 100;
        const progressBar = document.querySelector('.progress-fill');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }

        const progressStep = document.querySelector('.progress-step');
        if (progressStep) {
            progressStep.textContent = `Step ${completedSections + 1} of ${totalSections}`;
        }
    }

    // Update progress on input changes
    document.addEventListener('input', updateProgress);
    document.addEventListener('change', updateProgress);

    // Initial progress update
    updateProgress();

    // Show/hide conditional options for partner service
    const partnerYes = document.querySelector('input[name="partnerService"][value="yes"]');
    const partnerNo = document.querySelector('input[name="partnerService"][value="no"]');
    const partnerOptions = document.getElementById('partnerFittingOptions');

    if (partnerYes && partnerNo && partnerOptions) {
        partnerYes.addEventListener('change', function() {
            if (this.checked) {
                partnerOptions.style.display = 'block';
            }
        });

        partnerNo.addEventListener('change', function() {
            if (this.checked) {
                partnerOptions.style.display = 'none';
            }
        });
    }

    // Show/hide conditional options for gift service
    const giftYes = document.querySelector('input[name="giftService"][value="yes"]');
    const giftNo = document.querySelector('input[name="giftService"][value="no"]');
    const giftOptions = document.getElementById('giftFrequencyOptions');

    if (giftYes && giftNo && giftOptions) {
        giftYes.addEventListener('change', function() {
            if (this.checked) {
                giftOptions.style.display = 'block';
            }
        });

        giftNo.addEventListener('change', function() {
            if (this.checked) {
                giftOptions.style.display = 'none';
            }
        });
    }

    // Show/hide other field for service expectations
    const otherCheckbox = document.querySelector('input[name="serviceExpectations"][value="other"]');
    const otherInput = document.querySelector('input[name="serviceExpectationsOther"]');

    if (otherCheckbox && otherInput) {
        otherCheckbox.addEventListener('change', function() {
            if (this.checked) {
                otherInput.style.display = 'block';
            } else {
                otherInput.style.display = 'none';
            }
        });
    }

    // Enhanced form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Show submission animation
            const submitBtn = form.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.innerHTML = '<span>送信中...</span>';
                submitBtn.disabled = true;
            }

            // Simulate form submission (replace with actual submission logic)
            setTimeout(() => {
                alert('フォームが送信されました！ありがとうございます。');
                if (submitBtn) {
                    submitBtn.innerHTML = 'フォームを送信';
                    submitBtn.disabled = false;
                }
            }, 2000);
        });
    }
});

// Utility functions for enhanced UX
function formatPhoneNumber(input) {
    let value = input.value.replace(/[^\d]/g, '');
    if (value.length > 0) {
        if (value.length <= 3) {
            value = value;
        } else if (value.length <= 7) {
            value = value.slice(0, 3) + '-' + value.slice(3);
        } else {
            value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
        }
    }
    input.value = value;
}

// Apply phone number formatting
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phoneNumber');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
    }

    // Style-based item evaluation functionality
    const attractiveStyleCheckboxes = document.querySelectorAll('input[name="attractiveStyle"]');
    const itemEvaluationContainer = document.getElementById('itemEvaluationContainer');
    const styleVariationsSection = document.getElementById('styleVariations');
    const variationGrid = document.getElementById('variationGrid');

    // Add event listeners to attractive style checkboxes
    attractiveStyleCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateItemEvaluation);
    });

    // Item sets for each style with categories
    const styleItems = {
        mode: {
            tops: [
                { id: 'mode-shirt', name: 'モード系シャツ', image: 'images/item-shirt1.jpg' },
                { id: 'mode-tshirt', name: 'オーバーサイズTシャツ', image: 'images/item-shirt2.jpg' },
                { id: 'mode-knit', name: 'アシンメトリーニット', image: 'images/item-shirt1.jpg' }
            ],
            bottoms: [
                { id: 'mode-pants', name: 'デザイナーズパンツ', image: 'images/item-pants1.jpg' },
                { id: 'mode-wide', name: 'ワイドパンツ', image: 'images/item-pants2.jpg' },
                { id: 'mode-skirt', name: 'プリーツスカート', image: 'images/item-pants1.jpg' }
            ],
            outerwear: [
                { id: 'mode-jacket', name: 'アシンメトリージャケット', image: 'images/item-jacket1.jpg' },
                { id: 'mode-coat', name: 'ロングコート', image: 'images/item-jacket2.jpg' }
            ],
            shoes: [
                { id: 'mode-boots', name: 'レザーブーツ', image: 'images/item-shoes1.jpg' },
                { id: 'mode-sneakers', name: 'ハイテクスニーカー', image: 'images/item-shoes2.jpg' }
            ],
            bags: [
                { id: 'mode-bag', name: 'ジオメトリックバッグ', image: 'images/item-bag1.jpg' },
                { id: 'mode-tote', name: 'レザートート', image: 'images/item-bag2.jpg' }
            ]
        },
        classic: {
            tops: [
                { id: 'classic-shirt', name: 'オックスフォードシャツ', image: 'images/item-shirt1.jpg' },
                { id: 'classic-polo', name: 'ポロシャツ', image: 'images/item-shirt2.jpg' },
                { id: 'classic-knit', name: 'ケーブルニット', image: 'images/item-shirt1.jpg' }
            ],
            bottoms: [
                { id: 'classic-pants', name: 'ウールトラウザーズ', image: 'images/item-pants1.jpg' },
                { id: 'classic-chino', name: 'チノパン', image: 'images/item-pants2.jpg' },
                { id: 'classic-slacks', name: 'スラックス', image: 'images/item-pants1.jpg' }
            ],
            outerwear: [
                { id: 'classic-jacket', name: 'テーラードジャケット', image: 'images/item-jacket1.jpg' },
                { id: 'classic-blazer', name: 'ネイビーブレザー', image: 'images/item-jacket2.jpg' }
            ],
            shoes: [
                { id: 'classic-shoes', name: 'レザーローファー', image: 'images/item-shoes1.jpg' },
                { id: 'classic-oxford', name: 'オックスフォードシューズ', image: 'images/item-shoes2.jpg' }
            ],
            bags: [
                { id: 'classic-bag', name: 'レザーブリーフケース', image: 'images/item-bag1.jpg' },
                { id: 'classic-tote', name: 'キャンバストート', image: 'images/item-bag2.jpg' }
            ]
        },
        minimal: {
            tops: [
                { id: 'minimal-tshirt', name: '無地Tシャツ', image: 'images/item-shirt1.jpg' },
                { id: 'minimal-shirt', name: 'シンプルシャツ', image: 'images/item-shirt2.jpg' },
                { id: 'minimal-knit', name: 'プレーンニット', image: 'images/item-shirt1.jpg' }
            ],
            bottoms: [
                { id: 'minimal-denim', name: 'ストレートデニム', image: 'images/item-pants1.jpg' },
                { id: 'minimal-pants', name: 'テーパードパンツ', image: 'images/item-pants2.jpg' },
                { id: 'minimal-wide', name: 'ワイドパンツ', image: 'images/item-pants1.jpg' }
            ],
            outerwear: [
                { id: 'minimal-jacket', name: 'ノーカラージャケット', image: 'images/item-jacket1.jpg' },
                { id: 'minimal-coat', name: 'シンプルコート', image: 'images/item-jacket2.jpg' }
            ],
            shoes: [
                { id: 'minimal-sneakers', name: 'ホワイトスニーカー', image: 'images/item-shoes1.jpg' },
                { id: 'minimal-loafers', name: 'レザーローファー', image: 'images/item-shoes2.jpg' }
            ],
            bags: [
                { id: 'minimal-bag', name: 'シンプルトートバッグ', image: 'images/item-bag1.jpg' },
                { id: 'minimal-backpack', name: 'ミニマルバックパック', image: 'images/item-bag2.jpg' }
            ]
        },
        elegant: {
            tops: [
                { id: 'elegant-blouse', name: 'シルクブラウス', image: 'images/item-shirt1.jpg' },
                { id: 'elegant-knit', name: 'カシミヤニット', image: 'images/item-shirt2.jpg' },
                { id: 'elegant-shirt', name: 'サテンシャツ', image: 'images/item-shirt1.jpg' }
            ],
            bottoms: [
                { id: 'elegant-pants', name: 'テーパードパンツ', image: 'images/item-pants1.jpg' },
                { id: 'elegant-skirt', name: 'フレアスカート', image: 'images/item-pants2.jpg' },
                { id: 'elegant-wide', name: 'ワイドパンツ', image: 'images/item-pants1.jpg' }
            ],
            outerwear: [
                { id: 'elegant-coat', name: 'カシミヤコート', image: 'images/item-jacket1.jpg' },
                { id: 'elegant-jacket', name: 'ツイードジャケット', image: 'images/item-jacket2.jpg' }
            ],
            shoes: [
                { id: 'elegant-pumps', name: 'パンプス', image: 'images/item-shoes1.jpg' },
                { id: 'elegant-flat', name: 'バレエシューズ', image: 'images/item-shoes2.jpg' }
            ],
            bags: [
                { id: 'elegant-bag', name: 'レザーハンドバッグ', image: 'images/item-bag1.jpg' },
                { id: 'elegant-clutch', name: 'クラッチバッグ', image: 'images/item-bag2.jpg' }
            ]
        },
        'casual-chic': {
            tops: [
                { id: 'chic-polo', name: 'ニットポロ', image: 'images/item-shirt1.jpg' },
                { id: 'chic-tshirt', name: 'プレミアムTシャツ', image: 'images/item-shirt2.jpg' },
                { id: 'chic-knit', name: 'ケーブルニット', image: 'images/item-shirt1.jpg' }
            ],
            bottoms: [
                { id: 'chic-chino', name: 'チノパン', image: 'images/item-pants1.jpg' },
                { id: 'chic-denim', name: 'スリムデニム', image: 'images/item-pants2.jpg' },
                { id: 'chic-shorts', name: 'ショートパンツ', image: 'images/item-pants1.jpg' }
            ],
            outerwear: [
                { id: 'chic-blazer', name: 'カジュアルブレザー', image: 'images/item-jacket1.jpg' },
                { id: 'chic-cardigan', name: 'カーディガン', image: 'images/item-jacket2.jpg' }
            ],
            shoes: [
                { id: 'chic-sneakers', name: 'レザースニーカー', image: 'images/item-shoes1.jpg' },
                { id: 'chic-loafers', name: 'ローファー', image: 'images/item-shoes2.jpg' }
            ],
            bags: [
                { id: 'chic-bag', name: 'キャンバスバッグ', image: 'images/item-bag1.jpg' },
                { id: 'chic-shoulder', name: 'ショルダーバッグ', image: 'images/item-bag2.jpg' }
            ]
        },
        relax: {
            tops: [
                { id: 'relax-shirt', name: 'リネンシャツ', image: 'images/item-shirt1.jpg' },
                { id: 'relax-tshirt', name: 'オーガニックTシャツ', image: 'images/item-shirt2.jpg' },
                { id: 'relax-sweat', name: 'スウェットシャツ', image: 'images/item-shirt1.jpg' }
            ],
            bottoms: [
                { id: 'relax-pants', name: 'イージーパンツ', image: 'images/item-pants1.jpg' },
                { id: 'relax-wide', name: 'ワイドパンツ', image: 'images/item-pants2.jpg' },
                { id: 'relax-shorts', name: 'ハーフパンツ', image: 'images/item-pants1.jpg' }
            ],
            outerwear: [
                { id: 'relax-cardigan', name: 'ニットカーディガン', image: 'images/item-jacket1.jpg' },
                { id: 'relax-hoodie', name: 'パーカー', image: 'images/item-jacket2.jpg' }
            ],
            shoes: [
                { id: 'relax-shoes', name: 'スリッポン', image: 'images/item-shoes1.jpg' },
                { id: 'relax-sandals', name: 'サンダル', image: 'images/item-shoes2.jpg' }
            ],
            bags: [
                { id: 'relax-tote', name: 'キャンバストート', image: 'images/item-bag1.jpg' },
                { id: 'relax-eco', name: 'エコバッグ', image: 'images/item-bag2.jpg' }
            ]
        },
        'american-casual': {
            tops: [
                { id: 'amecas-shirt', name: 'チェックシャツ', image: 'images/item-shirt1.jpg' },
                { id: 'amecas-tshirt', name: 'プリントTシャツ', image: 'images/item-shirt2.jpg' },
                { id: 'amecas-sweat', name: 'スウェットシャツ', image: 'images/item-shirt1.jpg' }
            ],
            bottoms: [
                { id: 'amecas-denim', name: 'セルビッチデニム', image: 'images/item-pants1.jpg' },
                { id: 'amecas-chino', name: 'ワークパンツ', image: 'images/item-pants2.jpg' },
                { id: 'amecas-cargo', name: 'カーゴパンツ', image: 'images/item-pants1.jpg' }
            ],
            outerwear: [
                { id: 'amecas-jacket', name: 'デニムジャケット', image: 'images/item-jacket1.jpg' },
                { id: 'amecas-blouson', name: 'スウィングトップ', image: 'images/item-jacket2.jpg' }
            ],
            shoes: [
                { id: 'amecas-boots', name: 'ワークブーツ', image: 'images/item-shoes1.jpg' },
                { id: 'amecas-sneakers', name: 'キャンバススニーカー', image: 'images/item-shoes2.jpg' }
            ],
            bags: [
                { id: 'amecas-backpack', name: 'レザーバックパック', image: 'images/item-bag1.jpg' },
                { id: 'amecas-tote', name: 'キャンバストート', image: 'images/item-bag2.jpg' }
            ]
        },
        street: {
            tops: [
                { id: 'street-tshirt', name: 'グラフィックTシャツ', image: 'images/item-shirt1.jpg' },
                { id: 'street-hoodie', name: 'プルオーバーパーカー', image: 'images/item-shirt2.jpg' },
                { id: 'street-long', name: 'ロングTシャツ', image: 'images/item-shirt1.jpg' }
            ],
            bottoms: [
                { id: 'street-cargo', name: 'カーゴパンツ', image: 'images/item-pants1.jpg' },
                { id: 'street-track', name: 'トラックパンツ', image: 'images/item-pants2.jpg' },
                { id: 'street-baggy', name: 'バギーパンツ', image: 'images/item-pants1.jpg' }
            ],
            outerwear: [
                { id: 'street-ma1', name: 'MA-1ジャケット', image: 'images/item-jacket1.jpg' },
                { id: 'street-coach', name: 'コーチジャケット', image: 'images/item-jacket2.jpg' }
            ],
            shoes: [
                { id: 'street-sneakers', name: 'ハイテクスニーカー', image: 'images/item-shoes1.jpg' },
                { id: 'street-basketball', name: 'バスケットシューズ', image: 'images/item-shoes2.jpg' }
            ],
            bags: [
                { id: 'street-messenger', name: 'メッセンジャーバッグ', image: 'images/item-bag1.jpg' },
                { id: 'street-body', name: 'ボディバッグ', image: 'images/item-bag2.jpg' }
            ]
        },
        conservative: {
            tops: [
                { id: 'conservative-shirt', name: 'ボタンダウンシャツ', image: 'images/item-shirt1.jpg' },
                { id: 'conservative-polo', name: 'ポロシャツ', image: 'images/item-shirt2.jpg' },
                { id: 'conservative-knit', name: 'Vネックニット', image: 'images/item-shirt1.jpg' }
            ],
            bottoms: [
                { id: 'conservative-pants', name: 'センタープレスパンツ', image: 'images/item-pants1.jpg' },
                { id: 'conservative-chino', name: 'チノパン', image: 'images/item-pants2.jpg' },
                { id: 'conservative-slacks', name: 'スラックス', image: 'images/item-pants1.jpg' }
            ],
            outerwear: [
                { id: 'conservative-jacket', name: 'ダブルジャケット', image: 'images/item-jacket1.jpg' },
                { id: 'conservative-coat', name: 'チェスターコート', image: 'images/item-jacket2.jpg' }
            ],
            shoes: [
                { id: 'conservative-shoes', name: 'ストレートチップ', image: 'images/item-shoes1.jpg' },
                { id: 'conservative-loafers', name: 'タッセルローファー', image: 'images/item-shoes2.jpg' }
            ],
            bags: [
                { id: 'conservative-case', name: 'アタッシュケース', image: 'images/item-bag1.jpg' },
                { id: 'conservative-brief', name: 'ブリーフケース', image: 'images/item-bag2.jpg' }
            ]
        }
    };

    // Style variations data
    const styleVariations = {
        mode: [
            { id: 'mode-level1', name: 'レベル1', image: 'images/style-mode-level1.jpg' },
            { id: 'mode-level2', name: 'レベル2', image: 'images/style-mode-level2.jpg' },
            { id: 'mode-level3', name: 'レベル3', image: 'images/style-mode-level3.jpg' },
            { id: 'mode-level4', name: 'レベル4', image: 'images/style-mode-level4.jpg' },
            { id: 'mode-level5', name: 'レベル5', image: 'images/style-mode-level5.jpg' }
        ],
        attractive-classic: [
            { id: 'classic-1', name: 'レベル1', image: 'images/style-classic-1.jpg' },
            { id: 'classic-2', name: 'レベル2', image: 'images/style-classic-2.jpg' },
            { id: 'classic-3', name: 'レベル3', image: 'images/style-classic-3.jpg' },
            { id: 'classic-4', name: 'レベル4', image: 'images/style-classic-4.jpg' },
            { id: 'classic-5', name: 'レベル5', image: 'images/style-classic-5.jpg' }
        ],
        minimal: [
            { id: 'minimal-1', name: 'レベル1', image: 'images/style-minimal-1.jpg' },
            { id: 'minimal-2', name: 'レベル2', image: 'images/style-minimal-2.jpg' },
            { id: 'minimal-3', name: 'レベル3', image: 'images/style-minimal-3.jpg' },
            { id: 'minimal-4', name: 'レベル4', image: 'images/style-minimal-4.jpg' },
            { id: 'minimal-5', name: 'レベル5', image: 'images/style-minimal-5.jpg' }
        ],
        street: [
            { id: 'elegant-1', name: 'レベル1', image: 'images/style-elegant-1.jpg' },
            { id: 'elegant-2', name: 'レベル2', image: 'images/style-elegant-2.jpg' },
            { id: 'elegant-3', name: 'レベル3', image: 'images/style-elegant-3.jpg' },
            { id: 'elegant-4', name: 'レベル4', image: 'images/style-elegant-4.jpg' },
            { id: 'elegant-5', name: 'レベル5', image: 'images/style-elegant-5.jpg' }
        ],
        searf: [
            { id: 'searf-1', name: 'レベル1', image: 'images/style-searf-1.jpg' },
            { id: 'searf-2', name: 'レベル2', image: 'images/style-searf-2.jpg' },
            { id: 'searf-3', name: 'レベル3', image: 'images/style-searf-3.jpg' },
            { id: 'searf-4', name: 'レベル4', image: 'images/style-searf-4.jpg' },
            { id: 'searf-5', name: 'レベル5', image: 'images/style-searf-5.jpg' }
        ],
        'american-casual': [
            { id: 'amecas-1', name: 'レベル1', image: 'images/style-amecas-1.jpg' },
            { id: 'amecas-2', name: 'レベル2', image: 'images/style-amecas-2.jpg' },
            { id: 'amecas-3', name: 'レベル3', image: 'images/style-amecas-3.jpg' },
            { id: 'amecas-4', name: 'レベル4', image: 'images/style-amecas-4.jpg' },
            { id: 'amecas-5', name: 'レベル5', image: 'images/style-amecas-5.jpg' }
        ]
    };

    // New function to show pattern selections for multiple styles
    function showPatternSelections(selectedStyles) {
        console.log('showPatternSelections called with:', selectedStyles);
        const patternSectionsContainer = document.getElementById('patternSelections');
        const patternSelectionsContainer = document.getElementById('patternSelectionsContainer');

        console.log('Pattern elements found:', {
            patternSectionsContainer: !!patternSectionsContainer,
            patternSelectionsContainer: !!patternSelectionsContainer
        });

        if (!selectedStyles || selectedStyles.length === 0) {
            patternSectionsContainer.style.display = 'none';
            return;
        }

        // Clear previous patterns
        patternSelectionsContainer.innerHTML = '';

        // Create pattern selection for each selected style
        selectedStyles.forEach((style, styleIndex) => {
            const variations = styleVariations[style] || [];
            if (variations.length === 0) return;

            const styleSection = document.createElement('div');
            styleSection.className = 'style-pattern-section';
            styleSection.innerHTML = `
                <h4 class="pattern-style-title">${getStyleDisplayName(style)} - パターン選択</h4>
                <div class="pattern-grid" id="pattern-grid-${style}">
                    ${variations.map((variation, index) => `
                        <div class="pattern-card-wrapper">
                            <div class="pattern-card">
                                <input type="radio" name="pattern-${style}" value="${variation.id}" id="${variation.id}" data-style="${style}" data-pattern-index="${index}">
                                <label for="${variation.id}" class="pattern-label">
                                    <img src="${variation.image}" alt="${variation.name}" class="pattern-image">
                                    <span class="pattern-number">${index + 1}</span>
                                    <span class="pattern-name">${variation.name}</span>
                                </label>
                            </div>
                            <div class="pattern-item-evaluation" id="items-${variation.id}" style="display: none;">
                                <div class="item-good-bad-section">
                                    <label class="good-bad-label">GOOD アイテム</label>
                                    <div class="good-items">
                                        <div class="item-selection-grid">
                                            ${generateItemOptions('good', variation.id, ['トップス1', 'トップス2', 'トップス3'])}
                                        </div>
                                    </div>
                                </div>
                                <div class="item-good-bad-section">
                                    <label class="good-bad-label">BAD アイテム</label>
                                    <div class="bad-items">
                                        <div class="item-selection-grid">
                                            ${generateItemOptions('bad', variation.id, ['ボトムス1', 'ボトムス2', 'ボトムス3'])}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            patternSelectionsContainer.appendChild(styleSection);

            // Add event listeners for pattern selection
            const patternRadios = styleSection.querySelectorAll(`input[name="pattern-${style}"]`);
            patternRadios.forEach(radio => {
                radio.addEventListener('change', function() {
                    // Hide all item evaluations for this style
                    styleSection.querySelectorAll('.pattern-item-evaluation').forEach(itemEval => {
                        itemEval.style.display = 'none';
                    });

                    // Show item evaluation for selected pattern
                    if (this.checked) {
                        const itemEval = document.getElementById(`items-${this.value}`);
                        if (itemEval) {
                            itemEval.style.display = 'block';
                        }
                    }
                });
            });
        });

        // Show the pattern sections
        patternSectionsContainer.style.display = 'block';
    }

    // Helper function to generate item options
    function generateItemOptions(type, patternId, items) {
        return items.map((item, index) => `
            <div class="item-option">
                <input type="checkbox" id="${patternId}-${type}-item-${index}" name="${patternId}-${type}-items" value="${item}">
                <label for="${patternId}-${type}-item-${index}">
                    <img src="images/item-placeholder.jpg" alt="${item}" width="50" height="50">
                    <span>${item}</span>
                </label>
            </div>
        `).join('');
    }

    function showStyleVariations(selectedStyle) {
        if (!selectedStyle || selectedStyle === 'other') {
            styleVariationsSection.style.display = 'none';
            return;
        }

        const variations = styleVariations[selectedStyle] || [];
        if (variations.length === 0) {
            styleVariationsSection.style.display = 'none';
            return;
        }

        // Clear previous variations
        variationGrid.innerHTML = '';

        // Create variation cards
        variations.forEach((variation, index) => {
            const variationCard = document.createElement('div');
            variationCard.className = 'variation-card';
            variationCard.innerHTML = `
                <input type="radio" name="styleVariation" value="${variation.id}" id="${variation.id}">
                <label for="${variation.id}" class="variation-label">
                    <img src="${variation.image}" alt="${variation.name}" class="variation-image">
                    <span class="variation-number">${index + 1}</span>
                    <span class="variation-name">${variation.name}</span>
                </label>
            `;
            variationGrid.appendChild(variationCard);
        });

        // Show the variations section with animation
        styleVariationsSection.style.display = 'block';

        // Update item evaluation based on variation selection
        const variationRadios = variationGrid.querySelectorAll('input[name="styleVariation"]');
        variationRadios.forEach(radio => {
            radio.addEventListener('change', updateItemEvaluation);
        });
    }

    function updateItemEvaluation() {
        const selectedStyles = document.querySelectorAll('input[name="attractiveStyle"]:checked');

        // Get the containers for each column
        const topsContainer = document.getElementById('topsEvaluationContainer');
        const bottomsContainer = document.getElementById('bottomsEvaluationContainer');
        const accessoriesContainer = document.getElementById('accessoriesEvaluationContainer');

        if (selectedStyles.length === 0) {
            // Show placeholder in all columns
            const placeholderHTML = `
                <div class="item-evaluation-placeholder">
                    <p style="text-align: center; color: #999; padding: 20px;">
                        3-1でスタイルを選択してください
                    </p>
                </div>
            `;
            topsContainer.innerHTML = placeholderHTML;
            bottomsContainer.innerHTML = placeholderHTML;
            accessoriesContainer.innerHTML = placeholderHTML;
            return;
        }

        // Clear containers
        topsContainer.innerHTML = '';
        bottomsContainer.innerHTML = '';
        accessoriesContainer.innerHTML = '';

        // Collect items from all selected styles
        let allTops = [];
        let allBottoms = [];
        let allAccessories = [];

        selectedStyles.forEach(styleCheckbox => {
            const style = styleCheckbox.value;
            const items = styleItems[style] || {};

            if (items.tops) allTops = allTops.concat(items.tops.map(item => ({...item, style})));
            if (items.bottoms) allBottoms = allBottoms.concat(items.bottoms.map(item => ({...item, style})));
            if (items.outerwear) allAccessories = allAccessories.concat(items.outerwear.map(item => ({...item, style})));
            if (items.shoes) allAccessories = allAccessories.concat(items.shoes.map(item => ({...item, style})));
            if (items.bags) allAccessories = allAccessories.concat(items.bags.map(item => ({...item, style})));
        });

        // Create GOOD & BAD sections for each column
        createGoodBadSection(topsContainer, allTops, 'tops');
        createGoodBadSection(bottomsContainer, allBottoms, 'bottoms');
        createGoodBadSection(accessoriesContainer, allAccessories, 'accessories');
    }

    function createGoodBadSection(container, items, category) {
        if (items.length === 0) {
            container.innerHTML = `
                <div class="item-evaluation-placeholder">
                    <p style="text-align: center; color: #999; padding: 20px;">
                        このカテゴリーのアイテムはありません
                    </p>
                </div>
            `;
            return;
        }

        // Create GOOD section
        const goodSection = document.createElement('div');
        goodSection.className = 'item-good-bad-section';
        goodSection.innerHTML = `
            <span class="good-bad-label">GOOD ✓</span>
            <div class="good-items">
                <div class="item-selection-grid" id="${category}-good-items"></div>
            </div>
        `;

        // Create BAD section
        const badSection = document.createElement('div');
        badSection.className = 'item-good-bad-section';
        badSection.innerHTML = `
            <span class="good-bad-label">BAD ✗</span>
            <div class="bad-items">
                <div class="item-selection-grid" id="${category}-bad-items"></div>
            </div>
        `;

        container.appendChild(goodSection);
        container.appendChild(badSection);

        // Populate items (limit to 3 per section for better layout)
        const goodGrid = document.getElementById(`${category}-good-items`);
        const badGrid = document.getElementById(`${category}-bad-items`);

        items.slice(0, 6).forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item-option';
            itemDiv.innerHTML = `
                <label>
                    <input type="checkbox" name="${category}-${index < 3 ? 'good' : 'bad'}-items" value="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <span>${item.name}</span>
                </label>
            `;

            if (index < 3) {
                goodGrid.appendChild(itemDiv);
            } else {
                badGrid.appendChild(itemDiv);
            }
        });
    }

    function getStyleDisplayName(style) {
        const displayNames = {
            mode: 'モード',
            classic: 'クラシック',
            minimal: 'ミニマル',
            elegant: 'エレガント',
            'casual-chic': 'カジュアルシック',
            relax: 'リラックス',
            'american-casual': 'アメリカンカジュアル',
            street: 'ストリート',
            conservative: 'コンサバティブ'
        };
        return displayNames[style] || style;
    }

    function updateSelectedItemsEvaluation() {
        const selectedItems = document.querySelectorAll('.item-checkbox:checked');
        const evaluationSection = document.getElementById('selectedItemsEvaluation');

        if (selectedItems.length === 0) {
            if (evaluationSection) {
                evaluationSection.remove();
            }
            return;
        }

        // Show evaluation section for selected items
        if (!evaluationSection) {
            const newSection = document.createElement('div');
            newSection.id = 'selectedItemsEvaluation';
            newSection.innerHTML = `
                <div class="selected-items-section">
                    <div class="section-header-items">
                        <h3 class="style-section-title">アイテムの評価</h3>
                        <p class="style-section-subtitle">各アイテムについてGOOD/BADを選択し、理由をお選びください</p>
                    </div>
                    <div class="selected-items-evaluation-grid" id="selectedItemsGrid"></div>
                </div>
            `;
            document.getElementById('itemEvaluationContainer').appendChild(newSection);
        }

        // Update evaluation grid
        const selectedItemsGrid = document.getElementById('selectedItemsGrid');
        selectedItemsGrid.innerHTML = '';

        selectedItems.forEach(checkbox => {
            const itemId = checkbox.value;
            const selectedStyle = document.querySelector('input[name="attractiveStyle"]:checked').value;
            const items = styleItems[selectedStyle] || [];
            const item = items.find(i => i.id === itemId);

            if (item) {
                const evaluationDiv = document.createElement('div');
                evaluationDiv.className = 'item-evaluation-card';
                evaluationDiv.innerHTML = `
                    <div class="item-eval-header">
                        <img src="${item.image}" alt="${item.name}" class="item-eval-image">
                        <h4 class="item-eval-name">${item.name}</h4>
                    </div>
                    <div class="item-eval-body">
                        <div class="good-bad-selection">
                            <label class="good-bad-option">
                                <input type="radio" name="${item.id}_evaluation" value="good">
                                <span class="good-label">GOOD</span>
                            </label>
                            <label class="good-bad-option">
                                <input type="radio" name="${item.id}_evaluation" value="bad">
                                <span class="bad-label">BAD</span>
                            </label>
                        </div>
                        <div class="reason-selection" id="${item.id}_reasons" style="display: none;">
                            <p class="reason-label">理由（複数選択可）:</p>
                            <div class="reason-checkboxes">
                                <label class="reason-checkbox">
                                    <input type="checkbox" name="${item.id}_reason" value="design">
                                    <span>デザイン</span>
                                </label>
                                <label class="reason-checkbox">
                                    <input type="checkbox" name="${item.id}_reason" value="color">
                                    <span>色味</span>
                                </label>
                                <label class="reason-checkbox">
                                    <input type="checkbox" name="${item.id}_reason" value="silhouette">
                                    <span>シルエット</span>
                                </label>
                                <label class="reason-checkbox">
                                    <input type="checkbox" name="${item.id}_reason" value="material">
                                    <span>素材感</span>
                                </label>
                                <label class="reason-checkbox">
                                    <input type="checkbox" name="${item.id}_reason" value="price">
                                    <span>価格帯</span>
                                </label>
                                <label class="reason-checkbox">
                                    <input type="checkbox" name="${item.id}_reason" value="brand">
                                    <span>ブランドイメージ</span>
                                </label>
                                <label class="reason-checkbox">
                                    <input type="checkbox" name="${item.id}_reason" value="other">
                                    <span>その他</span>
                                </label>
                            </div>
                            <input type="text" name="${item.id}_reason_other"
                                   placeholder="その他の理由（具体的に）"
                                   class="form-input reason-other-input" style="display: none;">
                        </div>
                    </div>
                `;

                selectedItemsGrid.appendChild(evaluationDiv);

                // Add event listeners
                const evalRadios = evaluationDiv.querySelectorAll('input[name="' + item.id + '_evaluation"]');
                const reasonSection = evaluationDiv.querySelector('#' + item.id + '_reasons');

                evalRadios.forEach(radio => {
                    radio.addEventListener('change', function() {
                        if (this.checked) {
                            reasonSection.style.display = 'block';
                        }
                    });
                });

                // Other reason checkbox
                const otherCheckbox = evaluationDiv.querySelector('input[value="other"]');
                const otherInput = evaluationDiv.querySelector('.reason-other-input');

                if (otherCheckbox && otherInput) {
                    otherCheckbox.addEventListener('change', function() {
                        otherInput.style.display = this.checked ? 'block' : 'none';
                        if (!this.checked) {
                            otherInput.value = '';
                        }
                    });
                }
            }
        });
    }

    // Listen for style selection changes
    attractiveStyleCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Check if maximum 3 styles are selected
            const checkedStyles = document.querySelectorAll('input[name="attractiveStyle"]:checked');
            if (checkedStyles.length > 3 && this.checked) {
                this.checked = false;
                alert('魅力を感じるスタイルは最大3つまで選択できます。');
                return;
            }

            // Get all selected styles
            const selectedStyles = Array.from(checkedStyles)
                .filter(cb => cb.value !== 'other')
                .map(cb => cb.value);

            // Show pattern selections for all selected styles
            showPatternSelections(selectedStyles);
            updateMultipleStyleEvaluations();

            // Handle "other" option
            const otherInput = document.querySelector('input[name="attractiveStyleOther"]');
            if (this.value === 'other') {
                otherInput.style.display = this.checked ? 'block' : 'none';
                if (!this.checked) otherInput.value = '';
            }
        });
    });

    // New function to handle multiple style selections
    function updateMultipleStyleEvaluations() {
        const selectedStyles = Array.from(attractiveStyleCheckboxes)
            .filter(cb => cb.checked && cb.value !== 'other')
            .map(cb => cb.value);

        if (selectedStyles.length === 0) {
            itemEvaluationContainer.innerHTML = `
                <div class="item-evaluation-placeholder">
                    <p style="text-align: center; color: #999; padding: 40px;">
                        魅力を感じるスタイルを選択すると、各スタイルごとにアイテム評価が表示されます。
                    </p>
                </div>
            `;
            return;
        }

        // Clear container and create evaluation sections for each selected style
        itemEvaluationContainer.innerHTML = '';

        selectedStyles.forEach((style, index) => {
            const styleSection = document.createElement('div');
            styleSection.className = 'style-evaluation-section';
            styleSection.id = `style-evaluation-${style}`;

            const sectionTitle = document.createElement('h3');
            sectionTitle.className = 'style-evaluation-title';
            sectionTitle.innerHTML = `${getStyleDisplayName(style)}スタイル - アイテム評価`;
            styleSection.appendChild(sectionTitle);

            const evaluationContent = document.createElement('div');
            evaluationContent.className = 'style-evaluation-content';
            evaluationContent.id = `evaluation-content-${style}`;
            styleSection.appendChild(evaluationContent);

            itemEvaluationContainer.appendChild(styleSection);

            // Create item evaluation for this style
            createStyleItemEvaluation(style, evaluationContent);
        });
    }

    // Create item evaluation for a specific style
    function createStyleItemEvaluation(style, container) {
        const styleCategories = styleItems[style] || {};

        container.innerHTML = '';

        // Create evaluation sections for each category
        const categories = [
            { key: 'tops', name: 'トップス' },
            { key: 'bottoms', name: 'ボトムス' },
            { key: 'outerwear', name: 'アウター' },
            { key: 'shoes', name: 'シューズ' },
            { key: 'bags', name: 'バッグ' }
        ];

        categories.forEach(category => {
            const categoryItems = styleCategories[category.key] || [];
            if (categoryItems.length === 0) return;

            const categorySection = document.createElement('div');
            categorySection.className = 'category-evaluation-section';
            categorySection.innerHTML = `
                <h4 class="category-title">${category.name}</h4>
                <div class="category-items-grid" id="${style}-${category.key}-grid"></div>
            `;
            container.appendChild(categorySection);

            const itemsGrid = categorySection.querySelector(`#${style}-${category.key}-grid`);

            // Show items for this category
            categoryItems.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item-evaluation-card-enhanced';
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="item-eval-image">
                <h4 class="item-eval-name">${item.name}</h4>
                <div class="good-bad-selection">
                    <label class="good-bad-option">
                        <input type="radio" name="${style}_${item.id}_evaluation" value="good">
                        <span class="good-label">GOOD</span>
                    </label>
                    <label class="good-bad-option">
                        <input type="radio" name="${style}_${item.id}_evaluation" value="bad">
                        <span class="bad-label">BAD</span>
                    </label>
                </div>
                <div class="reason-selection" id="${style}_${item.id}_reasons" style="display: none;">
                    <p class="reason-label">理由（複数選択可）:</p>
                    <div class="reason-checkboxes">
                        <label class="reason-checkbox">
                            <input type="checkbox" name="${style}_${item.id}_reason" value="design">
                            <span>デザイン</span>
                        </label>
                        <label class="reason-checkbox">
                            <input type="checkbox" name="${style}_${item.id}_reason" value="color">
                            <span>色味</span>
                        </label>
                        <label class="reason-checkbox">
                            <input type="checkbox" name="${style}_${item.id}_reason" value="silhouette">
                            <span>シルエット</span>
                        </label>
                        <label class="reason-checkbox">
                            <input type="checkbox" name="${style}_${item.id}_reason" value="material">
                            <span>素材感</span>
                        </label>
                        <label class="reason-checkbox">
                            <input type="checkbox" name="${style}_${item.id}_reason" value="price">
                            <span>価格帯</span>
                        </label>
                        <label class="reason-checkbox">
                            <input type="checkbox" name="${style}_${item.id}_reason" value="brand">
                            <span>ブランドイメージ</span>
                        </label>
                        <label class="reason-checkbox">
                            <input type="checkbox" name="${style}_${item.id}_reason" value="other">
                            <span>その他</span>
                        </label>
                    </div>
                    <input type="text" name="${style}_${item.id}_reason_other"
                           placeholder="その他の理由（具体的に）"
                           class="form-input reason-other-input" style="display: none;">
                </div>
            `;

            itemsGrid.appendChild(itemDiv);

            // Add event listeners
            const evalRadios = itemDiv.querySelectorAll(`input[name="${style}_${item.id}_evaluation"]`);
            const reasonSection = itemDiv.querySelector(`#${style}_${item.id}_reasons`);

            evalRadios.forEach(radio => {
                radio.addEventListener('change', function() {
                    if (this.checked) {
                        reasonSection.style.display = 'block';
                    }
                });
            });

            // Other reason checkbox
            const otherCheckbox = itemDiv.querySelector(`input[name="${style}_${item.id}_reason"][value="other"]`);
            const otherInput = itemDiv.querySelector(`input[name="${style}_${item.id}_reason_other"]`);

            if (otherCheckbox && otherInput) {
                otherCheckbox.addEventListener('change', function() {
                    otherInput.style.display = this.checked ? 'block' : 'none';
                    if (!this.checked) {
                        otherInput.value = '';
                    }
                });
            }
            });
        });
    }

    // Add toggle functionality for style variations
    const variationToggle = document.getElementById('variationToggle');
    const variationContent = document.getElementById('variationContent');

    if (variationToggle && variationContent) {
        variationToggle.addEventListener('click', function() {
            this.classList.toggle('collapsed');
            variationContent.classList.toggle('collapsed');
        });
    }

    // Handle 'other' style option
    const otherStyleCheckbox = document.querySelector('input[name="attractiveStyle"][value="other"]');
    const otherStyleInput = document.querySelector('input[name="attractiveStyleOther"]');

    if (otherStyleCheckbox && otherStyleInput) {
        otherStyleCheckbox.addEventListener('change', function() {
            if (this.checked) {
                otherStyleInput.style.display = 'block';
            } else {
                otherStyleInput.style.display = 'none';
                otherStyleInput.value = '';
            }
        });
    }
});

// Weekly Overview Table Functionality
function initializeWeeklyOverview() {
    const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    function updateWeeklyRatios() {
        let workCount = 0;
        let restCount = 0;
        let noBoundaryCount = 0;
        let totalSelected = 0;

        weekDays.forEach(day => {
            const selectedOption = document.querySelector(`input[name="${day}_schedule"]:checked`);
            if (selectedOption) {
                totalSelected++;
                switch(selectedOption.value) {
                    case 'work':
                        workCount++;
                        break;
                    case 'rest':
                        restCount++;
                        break;
                    case 'no-boundary':
                        noBoundaryCount++;
                        break;
                }
            }
        });


        // Calculate days
        const workDays = workCount;
        const restDays = restCount;
        const noBoundaryDays = noBoundaryCount;

        // Update display
        const workRatioElement = document.getElementById('workRatio');
        const restRatioElement = document.getElementById('restRatio');
        const noBoundaryRatioElement = document.getElementById('noBoundaryRatio');


        if (workRatioElement) {
            workRatioElement.textContent = `${workDays}日`;
            // Add animation class for female form
            if (document.body.classList.contains('female-form')) {
                workRatioElement.classList.add('updated');
                setTimeout(() => workRatioElement.classList.remove('updated'), 300);
            }
        }
        if (restRatioElement) {
            restRatioElement.textContent = `${restDays}日`;
            // Add animation class for female form
            if (document.body.classList.contains('female-form')) {
                restRatioElement.classList.add('updated');
                setTimeout(() => restRatioElement.classList.remove('updated'), 300);
            }
        }
        if (noBoundaryRatioElement) {
            noBoundaryRatioElement.textContent = `${noBoundaryDays}日`;
            // Add animation class for female form
            if (document.body.classList.contains('female-form')) {
                noBoundaryRatioElement.classList.add('updated');
                setTimeout(() => noBoundaryRatioElement.classList.remove('updated'), 300);
            }
        }

        // Add visual bar representation
        const workRatio = totalSelected > 0 ? Math.round((workCount / 7) * 100) : 0;
        const restRatio = totalSelected > 0 ? Math.round((restCount / 7) * 100) : 0;
        const noBoundaryRatio = totalSelected > 0 ? Math.round((noBoundaryCount / 7) * 100) : 0;
        updateRatioBars(workRatio, restRatio, noBoundaryRatio);
    }

    function updateRatioBars(work, rest, noBoundary) {
        const ratioSummary = document.getElementById('weeklyRatioSummary');
        if (!ratioSummary) return;

        // Add progress bars if they don't exist
        const workItem = ratioSummary.querySelector('.work-ratio');
        const restItem = ratioSummary.querySelector('.rest-ratio');
        const noBoundaryItem = ratioSummary.querySelector('.no-boundary-ratio');

        [workItem, restItem, noBoundaryItem].forEach((item, index) => {
            if (item && !item.querySelector('.ratio-bar')) {
                const bar = document.createElement('div');
                bar.className = 'ratio-bar';
                bar.innerHTML = '<div class="ratio-bar-fill"></div>';
                item.appendChild(bar);
            }
        });

        // Update bar widths with animation
        if (workItem) {
            const fill = workItem.querySelector('.ratio-bar-fill');
            if (fill) {
                fill.style.width = `${work}%`;
                fill.style.transition = 'width 0.3s ease';
            }
        }
        if (restItem) {
            const fill = restItem.querySelector('.ratio-bar-fill');
            if (fill) {
                fill.style.width = `${rest}%`;
                fill.style.transition = 'width 0.3s ease';
            }
        }
        if (noBoundaryItem) {
            const fill = noBoundaryItem.querySelector('.ratio-bar-fill');
            if (fill) {
                fill.style.width = `${noBoundary}%`;
                fill.style.transition = 'width 0.3s ease';
            }
        }
    }

    // Add event listeners to all day schedule radios with proper event delegation
    weekDays.forEach(day => {
        const radios = document.querySelectorAll(`input[name="${day}_schedule"]`);

        radios.forEach(radio => {
            radio.addEventListener('change', function() {
                updateWeeklyRatios();
            });
            // Also trigger on click for better responsiveness
            radio.addEventListener('click', function() {
                if (this.checked) {
                    updateWeeklyRatios();
                }
            });
        });
    });

    // Initialize ratios
    updateWeeklyRatios();

    // Make updateWeeklyRatios globally accessible
    window.updateWeeklyRatios = updateWeeklyRatios;

    // Re-initialize when switching between male/female forms
    document.addEventListener('change', function(e) {
        if (e.target.name === 'formGender') {
            setTimeout(() => {
                updateWeeklyRatios();
            }, 100);
        }
    });

    // Add debugging for female form
    if (window.location.href.includes('debug=true')) {
        console.log('Weekly ratio elements:', {
            work: document.getElementById('workRatio'),
            rest: document.getElementById('restRatio'),
            noBoundary: document.getElementById('noBoundaryRatio')
        });
    }

    // Make updateWeeklyRatios available globally for debugging
    window.updateWeeklyRatios = updateWeeklyRatios;
}

// Budget Selection Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Item Budget Range Selection
    const budgetRangeSelectors = document.querySelectorAll('.budget-range-selector');

    budgetRangeSelectors.forEach(selector => {
        const options = selector.querySelectorAll('.budget-range-option');
        const hiddenInput = selector.querySelector('input[type="hidden"]');

        options.forEach(option => {
            option.addEventListener('click', function() {
                // Remove selected class from siblings
                options.forEach(opt => opt.classList.remove('selected'));
                // Add selected class to clicked option
                this.classList.add('selected');
                // Update hidden input value
                if (hiddenInput) {
                    hiddenInput.value = this.dataset.value;
                }
            });
        });
    });

    // Season Budget Card Selection
    const budgetSelector = document.querySelector('.season-budget-selector');
    const budgetCards = budgetSelector ? budgetSelector.querySelectorAll('.budget-card') : [];
    const seasonBudgetInput = document.getElementById('seasonBudget');
    const customBudgetSection = document.querySelector('.custom-budget-input');
    const customBudgetInput = document.getElementById('customBudgetInput');
    const customBudgetMonthly = document.getElementById('customBudgetMonthly');

    budgetCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            budgetCards.forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            this.classList.add('active');

            const amount = this.dataset.amount;

            if (amount === 'custom') {
                // Show custom input section
                customBudgetSection.style.display = 'block';
                customBudgetInput.focus();
            } else {
                // Hide custom input section
                customBudgetSection.style.display = 'none';
                // Update hidden input value
                seasonBudgetInput.value = amount;
            }
        });
    });

    // Custom budget input handling
    if (customBudgetInput) {
        customBudgetInput.addEventListener('input', function() {
            const value = parseInt(this.value) || 0;
            if (value >= 100000) {
                seasonBudgetInput.value = value;
                const monthly = Math.round(value / 3);
                customBudgetMonthly.textContent = '月額: ' + monthly.toLocaleString() + '円';
            } else {
                customBudgetMonthly.textContent = '';
            }
        });
    }

    // Weekly Schedule Enhanced Functionality
    initializeWeeklySchedule();

    // Brand Selection Functionality
    initializeBrandSelection();

    // Weekly Overview Table Functionality
    initializeWeeklyOverview();

    // Force update weekly ratios after initialization
    setTimeout(() => {
        if (window.updateWeeklyRatios) {
            window.updateWeeklyRatios();
        }
    }, 100);

    // Initialize Budget Selection
    initializeBudgetSelection();

    // Initialize Corporate Information Toggle
    initializeCorporateToggle();

    // Initialize Wanted Items Functionality
    initializeWantedItems();

    // Initialize Travel Destinations Functionality
    initializeTravelDestinations();
});

// Brand Selection Functionality
function initializeBrandSelection() {
    const brandSearchInput = document.getElementById('brandSearchInput');
    const addBrandBtn = document.getElementById('addBrandBtn');
    const selectedBrandsList = document.getElementById('selectedBrandsList');
    const preferredBrandsInput = document.getElementById('preferredBrands');
    const brandTags = document.querySelectorAll('.brand-tag');

    let selectedBrands = [];

    // Brand suggestions for search
    const brandSuggestions = [
        'UNIQLO', 'ZARA', 'H&M', 'NIKE', 'ADIDAS', 'MUJI', 'GU', 'FOREVER21',
        'HERMES', 'LOUIS VUITTON', 'CHANEL', 'GUCCI', 'PRADA', 'CELINE', 'SAINT LAURENT', 'BALENCIAGA',
        'ISSEY MIYAKE', 'COMME des GARCONS', 'YOHJI YAMAMOTO', 'JIL SANDER', 'MAISON MARGIELA',
        'COS', 'ACNE STUDIOS', 'GANNI', 'THEORY', 'HUGO BOSS',
        'BEAMS', 'UNITED ARROWS', 'SHIPS', 'TOMORROWLAND', 'JOURNAL STANDARD',
        'PATAGONIA', 'THE NORTH FACE', 'COLUMBIA', 'ARC\'TERYX', 'STONE ISLAND'
    ];

    // Add brand from search input
    function addBrand(brandName) {
        if (!brandName || brandName.trim() === '') return;

        const cleanBrandName = brandName.trim().toUpperCase();
        if (selectedBrands.includes(cleanBrandName)) return;

        selectedBrands.push(cleanBrandName);
        updateSelectedBrandsDisplay();
        updateHiddenInput();

        // Update visual state of brand tags
        brandTags.forEach(tag => {
            if (tag.dataset.brand === cleanBrandName) {
                tag.classList.add('selected');
            }
        });

        // Clear search input
        if (brandSearchInput) {
            brandSearchInput.value = '';
        }
    }

    // Remove brand
    function removeBrand(brandName) {
        const index = selectedBrands.indexOf(brandName);
        if (index > -1) {
            selectedBrands.splice(index, 1);
            updateSelectedBrandsDisplay();
            updateHiddenInput();

            // Update visual state of brand tags
            brandTags.forEach(tag => {
                if (tag.dataset.brand === brandName) {
                    tag.classList.remove('selected');
                }
            });
        }
    }

    // Update selected brands display
    function updateSelectedBrandsDisplay() {
        if (!selectedBrandsList) return;

        if (selectedBrands.length === 0) {
            selectedBrandsList.innerHTML = '<span class="no-brands-message">まだブランドが選択されていません</span>';
        } else {
            selectedBrandsList.innerHTML = selectedBrands.map(brand => {
                // エスケープして安全にHTMLに埋め込む
                const escapedBrand = brand.replace(/'/g, '\\\'').replace(/"/g, '&quot;');
                return `
                    <div class="selected-brand-chip">
                        <span>${brand}</span>
                        <span class="remove-btn" data-brand="${escapedBrand}" aria-label="削除">×</span>
                    </div>
                `;
            }).join('');

            // イベントリスナーを追加
            selectedBrandsList.querySelectorAll('.remove-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    removeBrand(this.dataset.brand);
                });
            });
        }
    }

    // Update hidden input for form submission
    function updateHiddenInput() {
        if (preferredBrandsInput) {
            preferredBrandsInput.value = selectedBrands.join(',');
        }
    }

    // Add brand button click handler
    if (addBrandBtn) {
        addBrandBtn.addEventListener('click', function() {
            const brandName = brandSearchInput?.value;
            if (brandName) {
                addBrand(brandName);
            }
        });
    }

    // Search input enter key handler
    if (brandSearchInput) {
        brandSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                addBrand(this.value);
            }
        });

        // Search suggestions (simple implementation)
        brandSearchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const suggestions = brandSuggestions.filter(brand =>
                brand.toLowerCase().includes(query) && query.length > 1
            );

            const suggestionsContainer = document.getElementById('brandSearchResults');
            if (suggestionsContainer) {
                if (suggestions.length > 0 && query.length > 1) {
                    suggestionsContainer.innerHTML = suggestions.slice(0, 8).map(brand => {
                        const escapedBrand = brand.replace(/'/g, '\\\'').replace(/"/g, '&quot;');
                        return `<div class="brand-search-result-item" data-brand="${escapedBrand}">${brand}</div>`;
                    }).join('');

                    // サジェスションにイベントリスナーを追加
                    suggestionsContainer.querySelectorAll('.brand-search-result-item').forEach(sugg => {
                        sugg.addEventListener('click', function() {
                            addBrand(this.dataset.brand);
                            suggestionsContainer.style.display = 'none';
                        });
                    });
                    suggestionsContainer.style.display = 'block';
                } else {
                    suggestionsContainer.style.display = 'none';
                }
            }
        });

        // Hide search results when clicking outside
        document.addEventListener('click', function(e) {
            const brandSearchResults = document.getElementById('brandSearchResults');
            if (brandSearchInput && brandSearchResults &&
                !brandSearchInput.contains(e.target) &&
                !brandSearchResults.contains(e.target)) {
                brandSearchResults.style.display = 'none';
            }
        });
    }

    // Brand tag click handlers
    brandTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const brandName = this.dataset.brand;
            if (this.classList.contains('selected')) {
                removeBrand(brandName);
            } else {
                addBrand(brandName);
            }
        });
    });

    // Initialize display
    updateSelectedBrandsDisplay();

    // Handle urgency date input display
    const urgencyRadios = document.querySelectorAll('input[name="urgency"]');
    const urgencyDateInput = document.getElementById('urgencyDateInput');

    urgencyRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'immediate') {
                urgencyDateInput.style.display = 'block';
            } else {
                urgencyDateInput.style.display = 'none';
            }
        });
    });

    // Handle wanted items detail display
    const hasWantedItemsRadios = document.querySelectorAll('input[name="hasWantedItems"]');
    const wantedItemsDetail = document.getElementById('wantedItemsDetail');

    hasWantedItemsRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'yes') {
                wantedItemsDetail.style.display = 'block';
            } else {
                wantedItemsDetail.style.display = 'none';
            }
        });
    });

    // Enable/disable quantity inputs based on checkbox selection
    const wantedItemCheckboxes = document.querySelectorAll('input[name="wantedItemType"]');

    wantedItemCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const quantityInput = this.closest('.item-request').querySelector('.quantity-input');
            if (this.checked) {
                quantityInput.disabled = false;
                quantityInput.required = true;
                if (!quantityInput.value) {
                    quantityInput.value = '1';
                }
            } else {
                quantityInput.disabled = true;
                quantityInput.required = false;
                quantityInput.value = '';
            }
        });
    });

    // Handle investment preference "other" checkboxes
    const worthOtherCheckbox = document.querySelector('input[name="worthInvestmentItems"][value="other-worth"]');
    const worthOtherInput = document.querySelector('input[name="worthInvestmentOther"]');

    if (worthOtherCheckbox && worthOtherInput) {
        worthOtherCheckbox.addEventListener('change', function() {
            if (this.checked) {
                worthOtherInput.style.display = 'block';
                worthOtherInput.required = true;
            } else {
                worthOtherInput.style.display = 'none';
                worthOtherInput.required = false;
                worthOtherInput.value = '';
            }
        });
    }

    const notWorthOtherCheckbox = document.querySelector('input[name="notWorthInvestmentItems"][value="other-not-worth"]');
    const notWorthOtherInput = document.querySelector('input[name="notWorthInvestmentOther"]');

    if (notWorthOtherCheckbox && notWorthOtherInput) {
        notWorthOtherCheckbox.addEventListener('change', function() {
            if (this.checked) {
                notWorthOtherInput.style.display = 'block';
                notWorthOtherInput.required = true;
            } else {
                notWorthOtherInput.style.display = 'none';
                notWorthOtherInput.required = false;
                notWorthOtherInput.value = '';
            }
        });
    }
}

// Weekly Schedule Functionality
function initializeWeeklySchedule() {
    const dailyCards = document.querySelectorAll('.daily-card');
    const dailyDetailsSection = document.getElementById('dailyDetailsSection');
    const dailyDetailsGrid = document.getElementById('dailyDetailsGrid');
    const weeklySummary = document.getElementById('weeklySummary');

    let weeklyData = {};

    // Day names mapping
    const dayNames = {
        'monday': '月曜日',
        'tuesday': '火曜日',
        'wednesday': '水曜日',
        'thursday': '木曜日',
        'friday': '金曜日',
        'saturday': '土曜日',
        'sunday': '日曜日'
    };

    // Scene options for different types
    const sceneOptions = {
        work: {
            title: 'ビジネスシーン',
            options: [
                { id: 'internal-meeting', name: '社内会議', image: 'images/scene-internal-meeting.jpg' },
                { id: 'external-meeting', name: '外部商談', image: 'images/scene-external-meeting.jpg' },
                { id: 'business-dining', name: '接待・会食', image: 'images/scene-business-dining.jpg' },
                { id: 'presentation', name: 'プレゼンテーション', image: 'images/scene-presentation.jpg' }
            ]
        },
        rest: {
            title: 'プライベートシーン',
            options: [
                { id: 'family-time', name: '家族と過ごす', image: 'images/lifestyle-family.jpg' },
                { id: 'dating', name: 'デート', image: 'images/lifestyle-date.jpg' },
                { id: 'friends', name: '友人と会う', image: 'images/lifestyle-friends.jpg' },
                { id: 'solo-time', name: '一人の時間', image: 'images/lifestyle-solo.jpg' }
            ]
        },
        'no-boundary': {
            title: 'カジュアルビジネスシーン',
            options: [
                { id: 'casual-meeting', name: 'カジュアル会議', image: 'images/scene-casual-meeting.jpg' },
                { id: 'coworking', name: 'コワーキング', image: 'images/scene-coworking.jpg' },
                { id: 'networking', name: 'ネットワーキング', image: 'images/scene-networking.jpg' },
                { id: 'creative-work', name: 'クリエイティブワーク', image: 'images/scene-creative.jpg' }
            ]
        }
    };

    // Add event listeners to all day option cards
    dailyCards.forEach(card => {
        const dayOptions = card.querySelectorAll('.day-option-card input[type="radio"]');
        const dayName = dayOptions[0]?.name; // Get day name from radio name

        dayOptions.forEach(option => {
            option.addEventListener('change', function() {
                if (this.checked) {
                    weeklyData[dayName] = {
                        type: this.value,
                        day: dayNames[dayName]
                    };
                    updateDayPreview(dayName, this.value);
                    updateWeeklySummary();
                    showDailyDetailsIfNeeded();
                }
            });
        });
    });

    function updateDayPreview(dayName, type) {
        const preview = document.getElementById(dayName + 'Preview');
        if (preview) {
            const typeLabels = {
                work: 'ビジネススタイル予定',
                rest: 'リラックススタイル予定',
                'no-boundary': 'カジュアルビジネス予定'
            };
            preview.textContent = typeLabels[type] || '';
        }
    }

    function updateWeeklySummary() {
        const selectedDays = Object.keys(weeklyData);
        if (selectedDays.length === 0) {
            weeklySummary.querySelector('.summary-text').textContent =
                '各曜日を選択すると、週間コーディネートのバランスが表示されます';
            return;
        }

        const workDays = selectedDays.filter(day => weeklyData[day].type === 'work').length;
        const restDays = selectedDays.filter(day => weeklyData[day].type === 'rest').length;
        const noBoundaryDays = selectedDays.filter(day => weeklyData[day].type === 'no-boundary').length;

        let summaryText = `選択済み: ${selectedDays.length}/7日 | `;
        if (workDays > 0) summaryText += `ビジネス: ${workDays}日 `;
        if (restDays > 0) summaryText += `プライベート: ${restDays}日 `;
        if (noBoundaryDays > 0) summaryText += `カジュアルビジネス: ${noBoundaryDays}日`;

        weeklySummary.querySelector('.summary-text').textContent = summaryText;
    }

    function showDailyDetailsIfNeeded() {
        const selectedDays = Object.keys(weeklyData);
        if (selectedDays.length > 0) {
            dailyDetailsSection.style.display = 'block';
            updateDailyDetailsGrid();
        }
    }

    function updateDailyDetailsGrid() {
        dailyDetailsGrid.innerHTML = '';

        Object.entries(weeklyData).forEach(([dayName, data]) => {
            const dayCard = document.createElement('div');
            dayCard.className = 'daily-detail-card';

            const scenes = sceneOptions[data.type];

            dayCard.innerHTML = `
                <div class="daily-detail-header">
                    <h4 class="daily-detail-day">${data.day}</h4>
                    <p class="daily-detail-type">${scenes.title}</p>
                </div>
                <div class="daily-detail-content">
                    <div class="detail-section">
                        <h5 class="detail-section-title">主なシーン</h5>
                        <div class="detail-options-grid">
                            ${scenes.options.map(option => `
                                <div class="detail-option-card">
                                    <input type="checkbox" name="${dayName}Scenes" value="${option.id}" id="${dayName}-${option.id}">
                                    <label for="${dayName}-${option.id}">
                                        <img src="${option.image}" alt="${option.name}">
                                        <span>${option.name}</span>
                                    </label>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;

            dailyDetailsGrid.appendChild(dayCard);
        });
    }
}

// Style Preference Evaluation - Enhanced UI
function initializeStyleEvaluationUI() {
        // Handle scale selection and gradient bar updates
        const scaleOptions = document.querySelectorAll('.scale-option input[type="radio"]');
        scaleOptions.forEach(radio => {
            radio.addEventListener('change', function() {
                const evaluation = this.closest('.style-evaluation-item');
                const gradientFill = evaluation.querySelector('.gradient-fill');
                const styleName = this.name.replace('Scale', '');

                if (gradientFill) {
                    const value = parseInt(this.value);
                    const percentage = ((value - 1) / 4) * 100; // Convert 1-5 scale to 0-100%
                    gradientFill.style.width = `${percentage}%`;
                }

                // Show item selection if score is 4 or 5 (liked styles)
                const value = parseInt(this.value);
                if (value >= 4) {
                    showStyleItemSelection(styleName, value);
                } else {
                    hideStyleItemSelection(styleName);
                }
            });
        });

        // Initialize any pre-selected values
        scaleOptions.forEach(radio => {
            if (radio.checked) {
                radio.dispatchEvent(new Event('change'));
            }
        });
}

// Show item selection for liked styles
function showStyleItemSelection(styleName, preferenceLevel) {
    const evaluationItem = document.querySelector(`input[name="${styleName}Scale"]:checked`).closest('.style-evaluation-item');
    let itemSelectionDiv = evaluationItem.querySelector('.style-item-selection');

        if (!itemSelectionDiv) {
            itemSelectionDiv = document.createElement('div');
            itemSelectionDiv.className = 'style-item-selection';
            evaluationItem.querySelector('.evaluation-content').appendChild(itemSelectionDiv);
        }

        // Create item selection based on style
        const items = getStyleItems(styleName);
        itemSelectionDiv.innerHTML = `
            <div class="item-selection-header">
                <h5>このスタイルで気になるアイテムを選択してください（複数選択可）</h5>
                <p class="item-selection-hint">好みの度合い: ${preferenceLevel === 5 ? 'とても好み' : 'やや好み'}</p>
            </div>
            <div class="style-items-selection-grid">
                ${items.map(item => `
                    <label class="style-item-option">
                        <input type="checkbox" name="${styleName}Items" value="${item.id}">
                        <div class="item-option-content">
                            <img src="${item.image}" alt="${item.name}">
                            <span>${item.name}</span>
                        </div>
                    </label>
                `).join('')}
            </div>
        `;

        itemSelectionDiv.style.display = 'block';
        itemSelectionDiv.classList.add('fade-in');
}

// Hide item selection
function hideStyleItemSelection(styleName) {
        const evaluationItem = document.querySelector(`input[name="${styleName}Scale"]`).closest('.style-evaluation-item');
        const itemSelectionDiv = evaluationItem.querySelector('.style-item-selection');
        if (itemSelectionDiv) {
            itemSelectionDiv.style.display = 'none';
        }
}

// Get style-specific items
function getStyleItems(styleName) {
        const styleItemsMap = {
            mode: [
                { id: 'mode-jacket', name: 'モードジャケット', image: 'images/item-jacket1.jpg' },
                { id: 'mode-pants', name: 'デザイナーズパンツ', image: 'images/item-pants1.jpg' },
                { id: 'mode-shoes', name: 'レザーブーツ', image: 'images/item-shoes1.jpg' },
                { id: 'mode-bag', name: 'ジオメトリックバッグ', image: 'images/item-bag1.jpg' }
            ],
            classic: [
                { id: 'classic-jacket', name: 'テーラードジャケット', image: 'images/item-jacket2.jpg' },
                { id: 'classic-pants', name: 'ウールトラウザーズ', image: 'images/item-pants2.jpg' },
                { id: 'classic-shoes', name: 'レザーシューズ', image: 'images/item-shoes2.jpg' },
                { id: 'classic-bag', name: 'ブリーフケース', image: 'images/item-bag2.jpg' }
            ],
            natural: [
                { id: 'natural-shirt', name: 'リネンシャツ', image: 'images/item-shirt1.jpg' },
                { id: 'natural-pants', name: 'コットンパンツ', image: 'images/item-pants1.jpg' },
                { id: 'natural-shoes', name: 'スリッポン', image: 'images/item-shoes1.jpg' },
                { id: 'natural-bag', name: 'キャンバストート', image: 'images/item-bag1.jpg' }
            ]
        };

        return styleItemsMap[styleName] || [];
}

// Initialize employee toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Employee toggle functionality
    const employeeToggleBtns = document.querySelectorAll('.employee-toggle-btn');
    const detailOptions = document.querySelectorAll('.detail-options');
    const selectedEmployeeSizeInput = document.getElementById('selectedEmployeeSize');

    employeeToggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            employeeToggleBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Hide all detail options
            detailOptions.forEach(opt => opt.classList.remove('active'));

            // Show corresponding detail options
            const size = this.getAttribute('data-size');
            const targetOptions = document.querySelector(`.${size}-options`);
            if (targetOptions) {
                targetOptions.classList.add('active');
                // Select first option in the group
                const firstRadio = targetOptions.querySelector('input[type="radio"]');
                if (firstRadio) {
                    firstRadio.checked = true;
                    selectedEmployeeSizeInput.value = firstRadio.value;
                }
            }
        });
    });

    // Update hidden input when radio selection changes
    document.querySelectorAll('input[name="employees"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                selectedEmployeeSizeInput.value = this.value;
            }
        });
    });
});

// Setup conditional sections
function setupConditionalSections() {
    // Partner service conditional
    const partnerServiceRadios = document.querySelectorAll('input[name="partnerService"]');
    const partnerFittingTime = document.getElementById('partnerFittingTime');

    partnerServiceRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'yes') {
                partnerFittingTime.style.display = 'block';
            } else {
                partnerFittingTime.style.display = 'none';
            }
        });
    });

    // Present service conditional
    const presentServiceRadios = document.querySelectorAll('input[name="presentService"]');
    const presentFrequency = document.getElementById('presentFrequency');

    presentServiceRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'yes') {
                presentFrequency.style.display = 'block';
            } else {
                presentFrequency.style.display = 'none';
            }
        });
    });

    // Travel destination conditional details
    const destinationHeaders = document.querySelectorAll('.destination-header input[type="checkbox"]');

    destinationHeaders.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const details = this.closest('.destination-item').querySelector('.destination-details');
            if (this.checked) {
                details.style.display = 'block';
            } else {
                details.style.display = 'none';
            }
        });
    });
}
// Removed initializeSceneFrequency function - no longer using frequency buttons

// Initialize weekday lifestyle sub-options functionality
function initializeWeekdayLifestyleOptions() {
    // Handle weekday lifestyle checkboxes
    const weekdayCheckboxes = document.querySelectorAll('input[name="weekdayLifestyle"]');

    weekdayCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Find the parent card
            const parentCard = this.closest('.weekday-lifestyle-card');
            if (!parentCard) return;

            // Find sub-options within the same card
            const subOptions = parentCard.querySelector('.sub-options');
            if (subOptions) {
                subOptions.style.display = this.checked ? 'block' : 'none';

                // If unchecking, clear the text input
                if (!this.checked) {
                    const textInput = subOptions.querySelector('input[type="text"]');
                    if (textInput) textInput.value = '';

                    // Uncheck all sub-checkboxes
                    const subCheckboxes = subOptions.querySelectorAll('input[type="checkbox"]');
                    subCheckboxes.forEach(cb => cb.checked = false);
                }
            }
        });
    });

    // Handle "その他" (Other) checkboxes for meeting people
    const meetingPeopleGroups = [
        { checkboxName: 'externalMeetingPeople', inputName: 'externalMeetingOther' },
        { checkboxName: 'internalMeetingPeople', inputName: 'internalMeetingOther' },
        { checkboxName: 'deskMeetingPeople', inputName: 'deskMeetingOther' },
        { checkboxName: 'hybridMeetingPeople', inputName: 'hybridMeetingOther' },
        { checkboxName: 'homeMeetingPeople', inputName: 'homeMeetingOther' },
        { checkboxName: 'otherMeetingPeople', inputName: 'otherMeetingOtherDetail' }
    ];

    meetingPeopleGroups.forEach(group => {
        const otherCheckbox = document.querySelector(`input[name="${group.checkboxName}"][value="other"]`);
        const otherInput = document.querySelector(`input[name="${group.inputName}"]`);

        if (otherCheckbox && otherInput) {
            otherCheckbox.addEventListener('change', function() {
                otherInput.style.display = this.checked ? 'block' : 'none';
                if (!this.checked) {
                    otherInput.value = ''; // Clear the input when unchecked
                }
            });
        }
    });
}

// Budget Selection Functionality
function initializeBudgetSelection() {
    // Handle item checkbox selection
    const itemCheckboxes = document.querySelectorAll('.item-checkbox-main');

    itemCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const itemType = this.value;
            const budgetSelector = this.closest('.clothing-item-enhanced').querySelector('.item-budget-selector');

            if (this.checked) {
                budgetSelector.style.display = 'block';
                // Animate in
                setTimeout(() => {
                    budgetSelector.classList.add('show');
                }, 10);
            } else {
                budgetSelector.classList.remove('show');
                setTimeout(() => {
                    budgetSelector.style.display = 'none';
                }, 300);
                // Clear selections
                const budgetCheckboxes = budgetSelector.querySelectorAll('input[type="checkbox"]');
                budgetCheckboxes.forEach(cb => cb.checked = false);
                updateBudgetCount(budgetSelector);
            }
        });
    });

    // Handle budget checkbox selection
    const budgetCheckboxes = document.querySelectorAll('.budget-option-card input[type="checkbox"]');

    budgetCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const budgetSelector = this.closest('.item-budget-selector');
            updateBudgetCount(budgetSelector);
        });
    });

    // Update budget count display
    function updateBudgetCount(budgetSelector) {
        const checkedBoxes = budgetSelector.querySelectorAll('input[type="checkbox"]:checked');
        const countDisplay = budgetSelector.querySelector('.selected-budgets-count');
        if (countDisplay) {
            countDisplay.textContent = checkedBoxes.length;
            countDisplay.style.display = checkedBoxes.length > 0 ? 'inline-block' : 'none';
        }
    }
}

// Travel Destinations Functionality
function initializeTravelDestinations() {
    const travelCards = document.querySelectorAll('.travel-destination-card');

    travelCards.forEach(card => {
        const checkbox = card.querySelector('input[type="checkbox"]');
        const specifications = card.querySelector('.clothing-specifications');

        if (checkbox && specifications) {
            checkbox.addEventListener('change', function() {
                specifications.style.display = this.checked ? 'block' : 'none';
            });
        }
    });
}

// Face Photo Upload Functionality
function initializeFacePhotoUpload() {
    const fileInput = document.getElementById('facePhotoInput');
    const photoImg = document.getElementById('facePhotoImg');
    const placeholder = document.getElementById('facePhotoPlaceholder');
    const removeBtn = document.getElementById('facePhotoRemove');

    if (!fileInput || !photoImg || !placeholder || !removeBtn) return;

    // Handle file selection
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function(e) {
                photoImg.src = e.target.result;
                photoImg.style.display = 'block';
                placeholder.style.display = 'none';
                removeBtn.style.display = 'inline-block';
            };

            reader.readAsDataURL(file);
        }
    });

    // Handle photo removal
    removeBtn.addEventListener('click', function() {
        photoImg.src = '';
        photoImg.style.display = 'none';
        placeholder.style.display = 'flex';
        removeBtn.style.display = 'none';
        fileInput.value = '';
    });
}

// Add initialization to DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWeekdayLifestyleOptions();
    initializePostalCode();
    initializeTravelDestinations();
    initializeFacePhotoUpload();
    // initializePatternSelection(); // Commented out - using existing implementation
});

// Corporate Information Toggle
function initializeCorporateToggle() {
    const corporateCheckbox = document.getElementById('isCorporate');
    const corporateContent = document.getElementById('corporateInfoContent');

    if (corporateCheckbox && corporateContent) {
        corporateCheckbox.addEventListener('change', function() {
            if (this.checked) {
                corporateContent.style.display = 'block';
                // Make corporate fields required
                corporateContent.querySelectorAll('input[required], select[required]').forEach(field => {
                    field.setAttribute('data-required', 'true');
                });
            } else {
                corporateContent.style.display = 'none';
                // Remove required from corporate fields
                corporateContent.querySelectorAll('[data-required="true"]').forEach(field => {
                    field.removeAttribute('required');
                });
            }
        });
    }
}

// Birth Date Selector Toggle Implementation
function initializeBirthDateSelector() {
    const birthdateToggle = document.getElementById("birthdateToggle");
    const birthdateDisplay = document.getElementById("birthdateDisplay");
    const birthdateDropdown = document.getElementById("birthdateDropdown");
    const yearScroll = document.getElementById("yearScroll");
    const monthGrid = document.getElementById("monthGrid");
    const dayGrid = document.getElementById("dayGrid");
    const birthYearInput = document.getElementById("birthYear");
    const birthMonthInput = document.getElementById("birthMonth");
    const birthDayInput = document.getElementById("birthDay");
    const ageDisplayInline = document.getElementById("ageDisplayInline");
    const toggleIcon = document.querySelector(".toggle-icon");

    if (!birthdateToggle || !birthdateDropdown) {
        return;
    }

    let selectedYear = null;
    let selectedMonth = null;
    let selectedDay = null;

    // Initialize years
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1940; year--) {
        const yearItem = document.createElement("div");
        yearItem.className = "year-item";
        yearItem.textContent = `${year}年`;
        yearItem.dataset.year = year;
        yearScroll.appendChild(yearItem);
    }

    // Initialize months
    const monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    monthNames.forEach((month, index) => {
        const monthItem = document.createElement("div");
        monthItem.className = "month-item";
        monthItem.textContent = month;
        monthItem.dataset.month = index + 1;
        monthGrid.appendChild(monthItem);
    });

    // Update days based on selected year and month
    function updateDays() {
        dayGrid.innerHTML = "";
        if (!selectedYear || !selectedMonth) return;

        const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            const dayItem = document.createElement("div");
            dayItem.className = "day-item";
            dayItem.textContent = day;
            dayItem.dataset.day = day;
            if (selectedDay === day) {
                dayItem.classList.add("selected");
            }
            dayGrid.appendChild(dayItem);
        }
    }

    // Calculate age
    function calculateAge() {
        if (selectedYear && selectedMonth && selectedDay) {
            const birthDate = new Date(selectedYear, selectedMonth - 1, selectedDay);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();

            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            return age;
        }
        return null;
    }

    // Toggle dropdown
    birthdateToggle.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = birthdateDropdown.style.display === "block";
        birthdateDropdown.style.display = isOpen ? "none" : "block";
        if (toggleIcon) {
            toggleIcon.textContent = isOpen ? "▼" : "▲";
            toggleIcon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
        }
        birthdateToggle.classList.toggle("active", !isOpen);
        if (!isOpen) {
            updateDays();
        }
    });

    // Year selection
    yearScroll.addEventListener("click", function(e) {
        if (e.target.classList.contains("year-item")) {
            document.querySelectorAll(".year-item").forEach(item => item.classList.remove("selected"));
            e.target.classList.add("selected");
            selectedYear = parseInt(e.target.dataset.year);
            updateDays();
            checkAndUpdateDate();
        }
    });

    // Month selection
    monthGrid.addEventListener("click", function(e) {
        if (e.target.classList.contains("month-item")) {
            document.querySelectorAll(".month-item").forEach(item => item.classList.remove("selected"));
            e.target.classList.add("selected");
            selectedMonth = parseInt(e.target.dataset.month);
            updateDays();
            checkAndUpdateDate();
        }
    });

    // Day selection
    dayGrid.addEventListener("click", function(e) {
        if (e.target.classList.contains("day-item") && !e.target.classList.contains("disabled")) {
            document.querySelectorAll(".day-item").forEach(item => item.classList.remove("selected"));
            e.target.classList.add("selected");
            selectedDay = parseInt(e.target.dataset.day);
            checkAndUpdateDate();
        }
    });

    // Auto-update when all values are selected
    function checkAndUpdateDate() {
        if (selectedYear && selectedMonth && selectedDay) {
            // Update hidden inputs
            birthYearInput.value = selectedYear;
            birthMonthInput.value = selectedMonth;
            birthDayInput.value = selectedDay;

            // Update display
            const dateStr = `${selectedYear}年${selectedMonth}月${selectedDay}日`;
            birthdateDisplay.querySelector(".birthdate-placeholder").textContent = dateStr;
            birthdateDisplay.classList.add("has-value");

            // Update age display
            const age = calculateAge();
            if (age !== null) {
                ageDisplayInline.textContent = `(${age}歳)`;
                ageDisplayInline.style.display = "inline";
            }
        }
    }

    // Close dropdown when clicking outside
    document.addEventListener("click", function(e) {
        if (!birthdateToggle.contains(e.target) && !birthdateDropdown.contains(e.target) && birthdateDropdown.style.display === "block") {
            birthdateDropdown.style.display = "none";
            toggleIcon.textContent = "▼";
            toggleIcon.style.transform = "rotate(0deg)";
            birthdateToggle.classList.remove("active");
        }
    });
}


// Wanted Items Functionality
function initializeWantedItems() {
    const wantedItemCards = document.querySelectorAll(".wanted-item-card");

    wantedItemCards.forEach(card => {
        const checkbox = card.querySelector("input[type=\"checkbox\"]");
        const quantityInput = card.querySelector(".quantity-input");
        const minusBtn = card.querySelector(".qty-minus");
        const plusBtn = card.querySelector(".qty-plus");

        // Handle checkbox change
        checkbox.addEventListener("change", function() {
            if (this.checked && quantityInput.value == 0) {
                quantityInput.value = 1;
            } else if (!this.checked) {
                quantityInput.value = 0;
            }
        });

        // Handle quantity buttons
        minusBtn.addEventListener("click", function() {
            let value = parseInt(quantityInput.value) || 0;
            if (value > 0) {
                quantityInput.value = value - 1;
                if (quantityInput.value == 0) {
                    checkbox.checked = false;
                }
            }
        });

        plusBtn.addEventListener("click", function() {
            let value = parseInt(quantityInput.value) || 0;
            if (value < 10) {
                quantityInput.value = value + 1;
                checkbox.checked = true;
            }
        });

        // Handle direct input
        quantityInput.addEventListener("change", function() {
            let value = parseInt(this.value) || 0;
            if (value < 0) value = 0;
            if (value > 10) value = 10;
            this.value = value;
            checkbox.checked = value > 0;
        });
    });
}

// Initialize travel destinations sub-options
function initializeTravelDestinations() {
    // Get all travel checkboxes
    const travelCheckboxes = document.querySelectorAll('.travel-option-group input[type="checkbox"]');

    travelCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const optionGroup = this.closest('.travel-option-group');
            const subOptions = optionGroup.querySelector('.sub-options');

            if (subOptions) {
                if (this.checked) {
                    subOptions.style.display = 'block';
                    // Animate the appearance
                    subOptions.style.opacity = '0';
                    setTimeout(() => {
                        subOptions.style.transition = 'opacity 0.3s ease';
                        subOptions.style.opacity = '1';
                    }, 10);
                } else {
                    subOptions.style.transition = 'opacity 0.3s ease';
                    subOptions.style.opacity = '0';
                    setTimeout(() => {
                        subOptions.style.display = 'none';
                        // Uncheck all sub-options when parent is unchecked
                        const subCheckboxes = subOptions.querySelectorAll('input[type="checkbox"]');
                        subCheckboxes.forEach(subCheckbox => {
                            subCheckbox.checked = false;
                        });
                    }, 300);
                }
            }
        });
    });
}

// Initialize postal code functionality
function initializePostalCode() {
    const postalCode1 = document.getElementById('postalCode1');
    const postalCode2 = document.getElementById('postalCode2');

    if (postalCode1 && postalCode2) {
        // Auto-focus next field when first field is complete
        postalCode1.addEventListener('input', function(e) {
            if (this.value.length === 3) {
                postalCode2.focus();
            }
        });

        // Allow only numbers
        [postalCode1, postalCode2].forEach(input => {
            input.addEventListener('input', function(e) {
                this.value = this.value.replace(/[^0-9]/g, '');
            });
        });

        // Handle paste event for full postal code
        postalCode1.addEventListener('paste', function(e) {
            e.preventDefault();
            const pastedText = (e.clipboardData || window.clipboardData).getData('text');
            const cleanedText = pastedText.replace(/[^0-9]/g, '');

            if (cleanedText.length >= 7) {
                postalCode1.value = cleanedText.substr(0, 3);
                postalCode2.value = cleanedText.substr(3, 4);
            } else if (cleanedText.length >= 3) {
                postalCode1.value = cleanedText.substr(0, 3);
                postalCode2.value = cleanedText.substr(3);
            } else {
                postalCode1.value = cleanedText;
            }
        });
    }
}
