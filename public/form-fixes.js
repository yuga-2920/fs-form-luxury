// Form Fixes - Additional JavaScript to fix form issues

document.addEventListener('DOMContentLoaded', function() {
    // Fix for brand selection getting deselected
    if (window.brandSelectionInitialized) return;
    window.brandSelectionInitialized = true;

    // Fix 1: Populate birthdate selects
    const yearSelect = document.getElementById('birthYear');
    if (yearSelect && yearSelect.options.length <= 1) {
        const currentYear = new Date().getFullYear();
        for (let year = currentYear; year >= 1940; year--) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year + '年';
            yearSelect.appendChild(option);
        }
    }

    const monthSelect = document.getElementById('birthMonth');
    if (monthSelect && monthSelect.options.length <= 1) {
        for (let month = 1; month <= 12; month++) {
            const option = document.createElement('option');
            option.value = month;
            option.textContent = month + '月';
            monthSelect.appendChild(option);
        }
    }

    const daySelect = document.getElementById('birthDay');
    if (daySelect && daySelect.options.length <= 1) {
        for (let day = 1; day <= 31; day++) {
            const option = document.createElement('option');
            option.value = day;
            option.textContent = day + '日';
            daySelect.appendChild(option);
        }
    }

    // Fix 2: Postal code auto-fill implementation using zipcloud API
    const postalCode1 = document.getElementById('postalCode1');
    const postalCode2 = document.getElementById('postalCode2');

    if (postalCode1 && postalCode2) {
        // Function to check and fetch address
        function checkAndFetchAddress() {
            const code1 = postalCode1.value;
            const code2 = postalCode2.value;

            if (code1.length === 3 && code2.length === 4) {
                const fullCode = code1 + code2;

                // Use zipcloud API (free postal code API)
                fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${fullCode}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 200 && data.results && data.results.length > 0) {
                            const result = data.results[0];

                            // Update prefecture
                            const prefectureSelect = document.getElementById('prefecture');
                            if (prefectureSelect && result.address1) {
                                // Find matching prefecture option
                                for (let option of prefectureSelect.options) {
                                    if (option.value === result.address1 || option.textContent === result.address1) {
                                        prefectureSelect.value = option.value;
                                        break;
                                    }
                                }
                            }

                            // Update city
                            const cityInput = document.getElementById('city');
                            if (cityInput && result.address2) {
                                cityInput.value = result.address2;
                            }

                            // Update address (street address)
                            const addressInput = document.getElementById('streetAddress');
                            if (addressInput && result.address3) {
                                addressInput.value = result.address3;
                            }
                        }
                    })
                    .catch(error => {
                    });
            }
        }

        // Add event listeners to both postal code fields
        postalCode1.addEventListener('input', function() {
            if (this.value.length === 3) {
                postalCode2.focus(); // Auto-focus next field
            }
            checkAndFetchAddress();
        });

        postalCode2.addEventListener('input', checkAndFetchAddress);

        // Also check on blur
        postalCode1.addEventListener('blur', checkAndFetchAddress);
        postalCode2.addEventListener('blur', checkAndFetchAddress);
    }

    // Fix 3: Weekly styling summary calculation with real-time updates
    function updateWeeklyRatios() {
        const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
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

        // Update the ratio-item elements
        const workRatioElement = document.getElementById('workRatio');
        const restRatioElement = document.getElementById('restRatio');
        const noBoundaryRatioElement = document.getElementById('noBoundaryRatio');

        if (workRatioElement) {
            workRatioElement.textContent = `${workCount}日`;
        }
        if (restRatioElement) {
            restRatioElement.textContent = `${restCount}日`;
        }
        if (noBoundaryRatioElement) {
            noBoundaryRatioElement.textContent = `${noBoundaryCount}日`;
        }
    }

    // Add event listeners for weekly schedule radios
    const weekScheduleInputs = document.querySelectorAll('input[type="radio"][name$="_schedule"]');
    weekScheduleInputs.forEach(input => {
        input.addEventListener('change', updateWeeklyRatios);
    });

    // Initial calculation
    updateWeeklyRatios();

    // Fix service section horizontal layout - wrap items 7-1 to 7-4
    const section7 = document.getElementById('section7');
    if (section7) {
        const formGroups = section7.querySelectorAll('.form-group');
        if (formGroups.length >= 5) {
            // Create wrapper for items 7-1 to 7-4 (indices 1-4)
            const wrapper = document.createElement('div');
            wrapper.className = 'service-horizontal-wrapper';

            // Insert wrapper after the title (first form-group)
            formGroups[0].parentNode.insertBefore(wrapper, formGroups[1]);

            // Move items 7-1 to 7-4 into wrapper
            for (let i = 1; i <= 4; i++) {
                if (formGroups[i]) {
                    wrapper.appendChild(formGroups[i]);
                }
            }
        }
    }

    // Fix brand selection getting deselected
    // Remove duplicate event listeners from brand buttons
    const brandButtons = document.querySelectorAll('.brand-select-btn');
    brandButtons.forEach(button => {
        // Clone node to remove all event listeners
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);

        // Add single event listener
        newButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const brand = this.dataset.brand;
            const preference = this.dataset.preference;
            const brandItem = this.closest('.brand-selection-item');

            if (!brandItem) return;

            const hiddenInput = brandItem.querySelector('input[type="hidden"]');
            const otherPreference = preference === 'like' ? 'dislike' : 'like';
            const otherButton = brandItem.querySelector(`.brand-select-btn.${otherPreference}`);

            // Toggle selection
            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
                if (hiddenInput) hiddenInput.value = '';
            } else {
                this.classList.add('selected');
                if (otherButton) otherButton.classList.remove('selected');
                if (hiddenInput) hiddenInput.value = preference;
            }
        });
    });

    // Fix 4: Show sub-options for weekly activities
    // Find all activity checkboxes
    const activityCheckboxes = document.querySelectorAll('.weekday-card input[type="checkbox"], .form-check input[type="checkbox"][name^="weekend_"]');
    activityCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Find the sub-options div within the same parent
            let subOptions = this.closest('.weekday-card, .form-check').querySelector('.sub-options');
            if (subOptions) {
                subOptions.style.display = this.checked ? 'block' : 'none';

                // Focus on text input if it's an "other" option
                if (this.checked && (this.value === 'other' || this.value === 'holiday-other' || this.value === 'weekday-other')) {
                    const textInput = subOptions.querySelector('input[type="text"]');
                    if (textInput) {
                        setTimeout(() => textInput.focus(), 100);
                    }
                }
            }
        });

        // Initialize visibility based on current state
        let subOptions = checkbox.closest('.weekday-card, .form-check').querySelector('.sub-options');
        if (subOptions) {
            subOptions.style.display = checkbox.checked ? 'block' : 'none';
        }
    });

    // Fix 5: Initialize attractive styles display
    function ensureAttractiveStylesDisplay() {
        // First ensure the grid is built
        const currentGender = document.querySelector('input[name="gender"]:checked');
        const genderValue = currentGender ? currentGender.value : 'male'; // Default to male if no gender selected

        if (typeof rebuildAttractiveStylesGrid === 'function') {
            rebuildAttractiveStylesGrid(genderValue);
        }

        // Wait for the grid to be built
        const checkInterval = setInterval(() => {
            const styleCheckboxes = document.querySelectorAll('input[name="attractiveStyle"]');
            if (styleCheckboxes.length > 0) {
                clearInterval(checkInterval);

                // Initialize pattern display if function exists
                if (typeof initializeGenderIntegratedStylePatterns === 'function') {
                    initializeGenderIntegratedStylePatterns();
                } else {
                    setTimeout(() => {
                        if (typeof initializeGenderIntegratedStylePatterns === 'function') {
                            initializeGenderIntegratedStylePatterns();
                        }
                    }, 2000);
                }
            }
        }, 500);
    }

    // Call immediately when DOM is ready
    ensureAttractiveStylesDisplay();

    // Also ensure it runs after a short delay for scripts to load
    setTimeout(ensureAttractiveStylesDisplay, 500);

    // Hide the separate pattern selection summary for attractive styles since reasons are inline
    function hidePatternSummaryForAttractiveStyles() {
        const summaryContainer = document.getElementById('patternSelectionSummary');
        const attractiveStylesSection = document.querySelector('.attractive-styles-section');

        if (summaryContainer && attractiveStylesSection) {
            // Check if we're in the attractive styles section
            if (summaryContainer.closest('.attractive-styles-section')) {
                summaryContainer.style.display = 'none';
            }
        }
    }

    // Call after styles are loaded
    setTimeout(hidePatternSummaryForAttractiveStyles, 1500);

    // Force initialize the attractive styles grid
    setTimeout(function() {
        const gender = document.querySelector('input[name="gender"]:checked')?.value || 'male';
        if (window.rebuildAttractiveStylesGrid) {
            window.rebuildAttractiveStylesGrid(gender);
        }
    }, 1000);

    // And ensure it runs after all scripts are loaded
    window.addEventListener('load', function() {
        ensureAttractiveStylesDisplay();
    });

    // Fix 6: Show options for service expectations
    const serviceCheckboxes = document.querySelectorAll('.service-expectations input[type="checkbox"]');
    serviceCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const optionsDiv = this.closest('.form-check').querySelector('.service-options');
            if (optionsDiv) {
                optionsDiv.style.display = this.checked ? 'block' : 'none';
            }
        });
    });

    // Fix 6a: Show conditional options for partner service
    const partnerServiceRadios = document.querySelectorAll('input[name="partnerService"]');
    const partnerFittingOptions = document.getElementById('partnerFittingOptions');

    partnerServiceRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (partnerFittingOptions) {
                partnerFittingOptions.style.display = this.value === 'yes' ? 'block' : 'none';
            }
        });
    });

    // Fix 6b: Show conditional options for time saving value
    const timeSavingRadios = document.querySelectorAll('input[name="timeSavingValue"]');
    const timeSavingOptions = document.getElementById('timeSavingOptions');

    timeSavingRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (timeSavingOptions) {
                timeSavingOptions.style.display = this.value === 'very-valuable' ? 'block' : 'none';
            }
        });
    });

    // Fix 7: Fashion literacy conditional display
    const literacyCheckboxes = document.querySelectorAll('input[name="fashionLiteracy"]');
    const conditionalLabels = document.querySelectorAll('.fashion-literacy-conditional');

    function updateFashionLiteracyConditional() {
        // Check if any of the trigger conditions are checked
        // Show for: 興味ない, なんとなく興味ある, 会話についていきたい, 個人的な好奇心, 最低限は知っておきたい
        const showConditions = ['not-interested', 'vaguely-interested', 'conversational', 'personal-curiosity', 'basic-knowledge'];
        const checkedValues = Array.from(literacyCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        const shouldShow = checkedValues.some(value => showConditions.includes(value));

        conditionalLabels.forEach(label => {
            if (shouldShow) {
                label.style.display = 'flex';
                label.style.opacity = '1';
                label.style.transform = 'translateY(0)';
            } else {
                label.style.display = 'none';
                label.style.opacity = '0';
                label.style.transform = 'translateY(-10px)';
            }
        });
    }

    literacyCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateFashionLiteracyConditional);
    });

    // Initialize on load
    updateFashionLiteracyConditional();

    // Fix 8: Show/hide "Other" text input for avoid items
    const avoidOtherCheckbox = document.getElementById('avoid-other');
    const avoidOtherText = document.getElementById('avoid-other-text');

    if (avoidOtherCheckbox && avoidOtherText) {
        avoidOtherCheckbox.addEventListener('change', function() {
            avoidOtherText.style.display = this.checked ? 'block' : 'none';
            if (!this.checked) {
                avoidOtherText.value = '';
            } else {
                // Focus on the text input when checkbox is checked
                setTimeout(() => avoidOtherText.focus(), 100);
            }
        });

        // Initialize visibility based on current state
        avoidOtherText.style.display = avoidOtherCheckbox.checked ? 'block' : 'none';
    }

    // Fix 9: Add images to coordination count options
    function addCoordinationImages() {
        const coord7 = document.querySelector('input[name="seasonCoordinationCount"][value="7"]');
        const coord14 = document.querySelector('input[name="seasonCoordinationCount"][value="14"]');

        if (coord7) {
            const card7 = coord7.closest('.coordination-card');
            const content7 = card7.querySelector('.coordination-content');
            if (content7 && !content7.querySelector('.coordination-image')) {
                const img = document.createElement('img');
                img.src = 'images/coordination-7.webp';
                img.className = 'coordination-image';
                img.alt = '7コーディネート';
                content7.appendChild(img);
            }
        }

        if (coord14) {
            const card14 = coord14.closest('.coordination-card');
            const content14 = card14.querySelector('.coordination-content');
            if (content14 && !content14.querySelector('.coordination-image')) {
                const img = document.createElement('img');
                img.src = 'images/coordination-14.webp';
                img.className = 'coordination-image';
                img.alt = '14コーディネート';
                content14.appendChild(img);
            }
        }
    }

    addCoordinationImages();

    // Fix 11: Show/hide "Other" text inputs for all sections
    function setupOtherInputs() {
        // Handle all checkboxes with value="other"
        const allOtherCheckboxes = document.querySelectorAll('input[type="checkbox"][value="other"]');
        allOtherCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                // Check if there's already an input field after this checkbox's label
                const parentLabel = this.closest('label');
                if (!parentLabel) {
                    return;
                }
                let otherInput = parentLabel.nextElementSibling;

                // If next sibling is not an input, create one
                if (!otherInput || otherInput.tagName !== 'INPUT' || otherInput.type !== 'text') {
                    if (this.checked) {
                        otherInput = document.createElement('input');
                        otherInput.type = 'text';
                        otherInput.className = 'form-input other-input';
                        otherInput.placeholder = 'その他（具体的に）';
                        otherInput.name = this.name + '_other';
                        otherInput.style.marginTop = '10px';
                        otherInput.style.display = 'block';
                        parentLabel.insertAdjacentElement('afterend', otherInput);
                    }
                } else {
                    // Toggle existing input
                    otherInput.style.display = this.checked ? 'block' : 'none';
                    if (!this.checked) {
                        otherInput.value = '';
                    }
                }
            });
        });
    }

    setupOtherInputs();

    // Fix 12: Hide non-ZARA/UNIQLO brands in affordable section
    function hideAffordableBrands() {
        // Find the affordable brands section
        const affordableSection = Array.from(document.querySelectorAll('.brand-category-header')).find(
            header => header.textContent.includes('アフォーダブルブランド')
        );

        if (affordableSection) {
            const brandGrid = affordableSection.nextElementSibling;
            if (brandGrid) {
                // Hide all brands except ZARA and UNIQLO
                const brandsToHide = ['HM', 'GU', 'GAP'];
                brandsToHide.forEach(brand => {
                    const brandItem = brandGrid.querySelector(`[data-brand="${brand}"]`);
                    if (brandItem) {
                        brandItem.style.display = 'none';
                    }
                });
            }
        }
    }

    hideAffordableBrands();

    // Fix 13: Add travel images to section header
    function addTravelImages() {
        const travelSection = document.getElementById('section9');
        if (!travelSection) return;

        const sectionHeader = travelSection.querySelector('.section-header');
        if (!sectionHeader) return;

        // Make section header a flex container
        sectionHeader.style.cssText = 'display: flex; justify-content: space-between; align-items: center;';

        // Create image container
        const imageContainer = document.createElement('div');
        imageContainer.className = 'travel-header-images';
        imageContainer.style.cssText = 'display: flex; gap: 15px; align-items: center;';

        // Add multiple travel images
        const travelImages = [
            { src: 'images/travel1.webp', alt: '' },
            { src: 'images/travel2.webp', alt: '' },
            { src: 'images/travel3.webp', alt: '' }
        ];

        travelImages.forEach(imgData => {
            const img = document.createElement('img');
            img.src = imgData.src;
            img.alt = imgData.alt;
            img.style.cssText = 'height: 150px; width: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); transition: transform 0.3s ease;';
            
            imageContainer.appendChild(img);
        });

        // Append to section header (will be on the right due to flex)
        sectionHeader.appendChild(imageContainer);
    }

    addTravelImages();

    // Fix 14: Reorganize service section layout
    function reorganizeServiceSection() {
        const section7 = document.getElementById('section7');
        if (!section7) return;

        // Get all form-groups in section 7
        const formGroups = section7.querySelectorAll('.form-group');

        // Check if we have at least 5 form groups
        if (formGroups.length >= 5) {
            // Create a wrapper div for items 1-4
            const serviceRow = document.createElement('div');
            serviceRow.className = 'service-items-row';

            // Move items 1-4 (index 0-3) into the wrapper
            for (let i = 0; i < 4; i++) {
                serviceRow.appendChild(formGroups[i].cloneNode(true));
            }

            // Insert the wrapper before the first form group
            section7.insertBefore(serviceRow, formGroups[0]);

            // Remove the original 4 items
            for (let i = 0; i < 4; i++) {
                formGroups[i].remove();
            }
        }
    }

    reorganizeServiceSection();

    // Fix 15: Show urgency date input when "immediate" is selected
    const urgencyRadios = document.querySelectorAll('input[name="urgency"]');
    const urgencyDateInput = document.getElementById('urgencyDateInput');

    urgencyRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (urgencyDateInput) {
                urgencyDateInput.style.display = this.value === 'immediate' ? 'block' : 'none';
                if (this.value !== 'immediate') {
                    const input = urgencyDateInput.querySelector('input');
                    if (input) input.value = '';
                }
            }
        });
    });

    // Fix 16: Show wanted items detail when "yes" is selected
    const hasWantedItemsRadios = document.querySelectorAll('input[name="hasWantedItems"]');
    const wantedItemsDetail = document.getElementById('wantedItemsDetail');

    hasWantedItemsRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (wantedItemsDetail) {
                wantedItemsDetail.style.display = this.value === 'yes' ? 'block' : 'none';
                if (this.value !== 'yes') {
                    // Clear selections
                    const checkboxes = wantedItemsDetail.querySelectorAll('input[type="checkbox"]');
                    checkboxes.forEach(cb => cb.checked = false);
                    const quantities = wantedItemsDetail.querySelectorAll('input[type="number"]');
                    quantities.forEach(q => q.value = '');
                    const textarea = wantedItemsDetail.querySelector('textarea');
                    if (textarea) textarea.value = '';
                }
            }
        });
    });

    // Fix 17: Pattern selection summary with reasons
    window.patternSelections = {
        good: {},
        bad: {}
    };

    // Good reasons
    const goodReasons = [
        'シルエットが好み',
        '色合いが好み',
        '着回しが効きそう',
        '体型に合いそう',
        'TPOに合っている',
        '上品な印象',
        '年齢に適している',
        'トレンド感がある'
    ];

    // Bad reasons
    const badReasons = [
        'シルエットが合わない',
        '色が好みではない',
        '着こなしが難しそう',
        '体型に合わない',
        'TPOに合わない',
        'カジュアルすぎる',
        'フォーマルすぎる',
        '年齢に合わない'
    ];

    // Update pattern selection summary
    window.updatePatternSelectionSummary = function() {
        const summaryContainer = document.getElementById('patternSelectionSummary');
        const goodSummary = document.getElementById('goodPatternSummary');
        const badSummary = document.getElementById('badPatternSummary');
        const goodList = document.getElementById('goodPatternsList');
        const badList = document.getElementById('badPatternsList');

        // Clear existing content
        goodList.innerHTML = '';
        badList.innerHTML = '';

        // Check if there are any selections
        const hasGoodSelections = Object.keys(patternSelections.good).length > 0;
        const hasBadSelections = Object.keys(patternSelections.bad).length > 0;

        if (hasGoodSelections || hasBadSelections) {
            summaryContainer.style.display = 'block';
        } else {
            summaryContainer.style.display = 'none';
            return;
        }

        // Show/hide sections
        goodSummary.style.display = hasGoodSelections ? 'block' : 'none';
        badSummary.style.display = hasBadSelections ? 'block' : 'none';

        // Populate good selections
        Object.entries(patternSelections.good).forEach(([patternId, pattern]) => {
            const item = createPatternReasonItem(patternId, pattern, 'good', goodReasons);
            goodList.appendChild(item);
        });

        // Populate bad selections
        Object.entries(patternSelections.bad).forEach(([patternId, pattern]) => {
            const item = createPatternReasonItem(patternId, pattern, 'bad', badReasons);
            badList.appendChild(item);
        });
    };

    function createPatternReasonItem(patternId, pattern, type, reasons) {
        const item = document.createElement('div');
        item.className = 'pattern-reason-item';
        item.innerHTML = `
            <img src="${pattern.image}" alt="${pattern.name}" class="pattern-reason-image">
            <div class="pattern-reason-content">
                <div class="pattern-reason-name">${pattern.styleName} - ${pattern.name}</div>
                <div class="pattern-reason-selection">
                    <div class="reason-checkbox-group">
                        ${reasons.map((reason, index) => `
                            <label class="reason-checkbox">
                                <input type="checkbox" name="${type}_reason_${patternId}_${index}" value="${reason}">
                                <span>${reason}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        return item;
    }

    // Override the handleEvaluation function to track selections
    const originalHandleEvaluation = window.handleEvaluation;
    window.handleEvaluation = function(uniqueId, evaluation, patternId) {
        // Call original function if it exists
        if (originalHandleEvaluation) {
            originalHandleEvaluation(uniqueId, evaluation, patternId);
        }

        // Get pattern data
        const patternElement = document.querySelector(`[data-pattern-id="${patternId}"]`);
        if (!patternElement) return;

        const patternImage = patternElement.querySelector('.pattern-full-image');
        const patternName = patternElement.querySelector('.pattern-item-name');
        const styleTitle = patternElement.closest('.toggle-pattern-section')?.querySelector('.pattern-section-title');

        if (evaluation === 'good') {
            patternSelections.good[uniqueId] = {
                id: patternId,
                name: patternName?.textContent || '',
                image: patternImage?.src || '',
                styleName: styleTitle?.textContent || ''
            };
            delete patternSelections.bad[uniqueId];
        } else if (evaluation === 'bad') {
            patternSelections.bad[uniqueId] = {
                id: patternId,
                name: patternName?.textContent || '',
                image: patternImage?.src || '',
                styleName: styleTitle?.textContent || ''
            };
            delete patternSelections.good[uniqueId];
        }

        updatePatternSelectionSummary();
    };

    // Fix 18: Update images based on gender selection
    function updateImagesForGender(gender) {

        // Update images with data-gender-image attribute
        const genderImages = document.querySelectorAll('[data-gender-image]');
        genderImages.forEach(img => {
            const imageKey = img.getAttribute('data-gender-image');
            const imagePath = getGenderImagePath(imageKey, gender);
            if (imagePath) {
                img.src = imagePath;
            }
        });

        // Update avoid items images if section exists
        if (window.imageMapping && window.imageMapping.avoidItems) {
            const avoidItemsData = window.imageMapping.avoidItems[gender] || window.imageMapping.avoidItems.male;
            Object.entries(avoidItemsData).forEach(([key, data]) => {
                const checkbox = document.querySelector(`input[name="avoidItems"][value="${key}"]`);
                if (checkbox) {
                    const label = checkbox.closest('label');
                    const img = label?.querySelector('img');
                    if (img && data.image) {
                        img.src = data.image;
                        img.alt = data.name;
                    }
                }
            });
        }

        // Update brand images if needed
        updateBrandImages(gender);

        // Update any other section-specific images
        updateSectionImages(gender);
    }

    // Helper function to get gender-specific image path
    function getGenderImagePath(imageKey, gender) {
        // Define gender-specific image mappings
        const genderImageMap = {
            // Clothing items
            'shirt': {
                male: 'images/shirt1.webp',
                female: 'images/shirt1.webp'
            },
            'jacket': {
                male: 'images/jacket1.webp',
                female: 'images/jacket-female.webp'
            },
            'pants': {
                male: 'images/pants.webp',
                female: 'images/pants-female.webp'
            },
            'shoes': {
                male: 'images/item-shoes1.webp',
                female: 'images/item-shoes1.webp'
            },
            'coat': {
                male: 'images/coat1.webp',
                female: 'images/coat-female.webp'
            },
            'knit': {
                male: 'images/item-knit.webp',
                female: 'images/item-knit.webp'
            },
            // Lifestyle images
            'lifestyle-work': {
                male: 'images/lifestyle-office-external.webp',
                female: 'images/lifestyle-office-external-female.webp'
            },
            'lifestyle-weekend': {
                male: 'images/lifestyle-solo.webp',
                female: 'images/lifestyle-solo.webp'
            },
            // Scene images
            'scene-business': {
                male: 'images/scene-internal-meeting.webp',
                female: 'images/scene-internal-meeting.webp'
            },
            'scene-casual': {
                male: 'images/scene-casual-male.webp',
                female: 'images/scene-casual-female.webp'
            },
            // Add more mappings as needed
        };

        return genderImageMap[imageKey]?.[gender] || genderImageMap[imageKey]?.['male'];
    }

    // Update brand images based on gender
    function updateBrandImages(gender) {
        // Example: Update luxury brand images
        const brandImages = {
            male: {
                'GUCCI': 'images/brand-gucci-male.webp',
                'LOUIS VUITTON': 'images/brand-lv-male.webp',
                // Add more brand mappings
            },
            female: {
                'GUCCI': 'images/brand-gucci-female.webp',
                'LOUIS VUITTON': 'images/brand-lv-female.webp',
                // Add more brand mappings
            }
        };

        // Update brand selection images if they exist
        const brandItems = document.querySelectorAll('.brand-selection-item');
        brandItems.forEach(item => {
            const brandName = item.getAttribute('data-brand');
            const img = item.querySelector('.brand-image');
            if (img && brandImages[gender]?.[brandName]) {
                img.src = brandImages[gender][brandName];
            }
        });
    }

    // Update section-specific images
    function updateSectionImages(gender) {
        // Update clothing item images in budget section
        const clothingImages = {
            male: {
                'shirt': 'images/shirt1.webp',
                'jacket': 'images/item-jacket2.webp',
                'pants': 'images/item-pants1.webp',
                'shoes': 'images/item-shoes1.webp',
                'coat': 'images/coat-male.webp',
                'knit': 'images/item-knit.webp',
                'tshirt': 'images/item-tshirt.webp',
                'setup': 'images/setup-male.webp'
            },
            female: {
                'shirt': 'images/shirt1.webp',
                'jacket': 'images/jacket-female.webp',
                'pants': 'images/pants-female.webp',
                'shoes': 'images/item-shoes1.webp',
                'coat': 'images/coat-female.webp',
                'knit': 'images/item-knit.webp',
                'onepiece': 'images/onepiece-female.webp',
                'skirt': 'images/skirt-female.webp'
            }
        };

        // Update clothing item images
        const clothingItems = document.querySelectorAll('.clothing-item-enhanced');
        clothingItems.forEach(item => {
            const checkbox = item.querySelector('input[name="clothingItems"]');
            if (checkbox) {
                const value = checkbox.value;
                const img = item.querySelector('.item-image');
                if (img && clothingImages[gender]?.[value]) {
                    img.src = clothingImages[gender][value];
                }
            }
        });
    }

    // Attach to gender radio change event
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                updateImagesForGender(this.value);
            }
        });
    });

    // Initial update based on current gender selection
    const currentGender = document.querySelector('input[name="gender"]:checked');
    if (currentGender) {
        updateImagesForGender(currentGender.value);
    }

});