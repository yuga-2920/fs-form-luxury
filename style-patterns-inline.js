// Inline Style Pattern Display - Shows patterns directly under each selected style
document.addEventListener('DOMContentLoaded', function() {
    initializeInlineStylePatterns();
});

// Track if already initialized to prevent duplicate event listeners
let inlineStylePatternsInitialized = false;

function initializeInlineStylePatterns() {
    // Use the existing pattern data
    const patternData = typeof integratedStylePatternData !== 'undefined' ? integratedStylePatternData : null;
    if (!patternData) {
        console.error('Pattern data not found - integratedStylePatternData is not defined');
        return;
    }
    
    // Validate pattern data structure
    if (!patternData.male || !patternData.female) {
        console.error('Pattern data is missing gender data');
        return;
    }

    // Get all style checkboxes
    const styleCheckboxes = document.querySelectorAll('input[name="attractiveStyle"]');
    
    styleCheckboxes.forEach(checkbox => {
        // Skip if checkbox doesn't have a valid value
        if (!checkbox.value || checkbox.value === 'undefined') {
            console.warn('Skipping checkbox with invalid value:', checkbox.value);
            return;
        }
        
        // Create pattern container for each style
        const styleCard = checkbox.closest('.style-preference-card');
        if (!styleCard) return;
        
        // Check if pattern container already exists
        let patternContainer = document.getElementById(`pattern-container-${checkbox.value}`);
        
        if (!patternContainer) {
            // Create pattern container that will be shown/hidden
            patternContainer = document.createElement('div');
            patternContainer.className = 'inline-pattern-container';
            patternContainer.id = `pattern-container-${checkbox.value}`;
            patternContainer.style.display = 'none';
            patternContainer.style.gridColumn = '1 / -1'; // Span full width
            patternContainer.style.order = '999'; // Put at end initially
            
            // Insert the pattern container into the grid
            const gridContainer = styleCard.parentElement;
            gridContainer.appendChild(patternContainer);
        }
        
        // Store reference to container on checkbox
        checkbox.patternContainer = patternContainer;
        
        // Only add event listener if not already initialized
        if (!inlineStylePatternsInitialized) {
            // Handle checkbox change
            checkbox.addEventListener('change', function() {
                const gender = getCurrentGender();
                const styleKey = this.value;
                
                // Validate styleKey before using it
                if (!styleKey || styleKey === 'undefined') {
                    console.error('Invalid style key:', styleKey);
                    return;
                }
                
                if (this.checked) {
                    // Show pattern for this style
                    displayPatternForStyle(patternContainer, styleKey, gender, patternData);
                    patternContainer.style.display = 'block';
                    
                    // Position the pattern container after this style card
                    const gridContainer = styleCard.parentElement;
                    const styleIndex = Array.from(gridContainer.children).indexOf(styleCard);
                    patternContainer.style.order = styleIndex + 1;
                } else {
                    // Hide pattern for this style
                    patternContainer.style.display = 'none';
                    patternContainer.innerHTML = '';
                }
            });
        } else {
            // If already initialized, just update the display if checked
            if (checkbox.checked) {
                const gender = getCurrentGender();
                displayPatternForStyle(patternContainer, checkbox.value, gender, patternData);
                patternContainer.style.display = 'block';
                
                // Position the pattern container after this style card
                const gridContainer = styleCard.parentElement;
                const styleIndex = Array.from(gridContainer.children).indexOf(styleCard);
                patternContainer.style.order = styleIndex + 1;
            }
        }
    });
    
    // Mark as initialized
    inlineStylePatternsInitialized = true;
}

function getCurrentGender() {
    const femaleRadio = document.getElementById('gender-female');
    return (femaleRadio && femaleRadio.checked) ? 'female' : 'male';
}

function displayPatternForStyle(container, styleKey, gender, patternData) {
    // Validate inputs
    if (!styleKey || styleKey === 'undefined' || !gender || !patternData) {
        console.error('Invalid parameters for displayPatternForStyle:', { styleKey, gender, hasPatternData: !!patternData });
        return;
    }
    
    // Check if we should use imageMapping directly
    let patterns = null;
    let styleName = '';
    
    if (typeof imageMapping !== 'undefined' && imageMapping.stylePatterns && imageMapping.stylePatterns[gender] && imageMapping.stylePatterns[gender][styleKey]) {
        // Use imageMapping data directly
        patterns = imageMapping.stylePatterns[gender][styleKey];
        if (imageMapping.attractiveStyles && imageMapping.attractiveStyles[gender] && imageMapping.attractiveStyles[gender][styleKey]) {
            styleName = imageMapping.attractiveStyles[gender][styleKey].name;
        }
    } else {
        // Fall back to patternData
        const genderData = patternData[gender];
        const styleData = genderData ? genderData[styleKey] : null;
        
        if (!styleData) {
            console.error('No style data found for:', styleKey, 'in gender:', gender);
            console.error('Available styles for', gender + ':', genderData ? Object.keys(genderData) : 'No gender data');
            return;
        }
        
        styleName = styleData.name;
        // Convert rows structure to flat array if needed
        if (styleData.rows) {
            patterns = [];
            styleData.rows.forEach(row => {
                patterns = patterns.concat(row.patterns);
            });
        } else if (styleData.patterns) {
            patterns = styleData.patterns;
        }
    }
    
    if (!patterns || patterns.length === 0) {
        console.error('No patterns found for style:', styleKey);
        return;
    }
    
    // Organize patterns into 5 rows of 3 patterns each
    const rows = [];
    for (let i = 0; i < 5; i++) {
        const rowPatterns = patterns.slice(i * 3, (i + 1) * 3);
        if (rowPatterns.length > 0) {
            rows.push({
                patterns: rowPatterns
            });
        }
    }
    
    container.innerHTML = `
        <div class="toggle-pattern-section">
            <div class="pattern-section-header">
                <h3 class="pattern-section-title">${styleName || styleKey} - パターン選択（${gender === 'female' ? '女性' : '男性'}向け）</h3>
                <p class="pattern-section-description">各パターンをクリックして評価してください（5行×3列）</p>
            </div>
            <div class="pattern-rows-container" data-style-key="${styleKey}">
                ${rows.map((row, rowIndex) => {
                    return `
                        <div class="pattern-row-section${rowIndex === 0 ? ' expanded' : ''}" data-row-index="${rowIndex}" data-style="${styleKey}">
                            <div class="row-header" onclick="togglePatternRowSection(this)">
                                <div class="row-preview">
                                    ${row.patterns.map(pattern => `
                                        <img src="images/${pattern.image}"
                                             alt="${pattern.name}"
                                             class="row-thumbnail"
                                             loading="lazy"
                                             onerror="this.src='images/placeholder-${gender}.jpg'">
                                    `).join('')}
                                </div>
                                <span class="row-label">Lv ${rowIndex + 1}</span>
                                <span class="toggle-icon">▼</span>
                            </div>
                            <div class="row-details">
                                <div class="pattern-grid-5">
                                    ${row.patterns.map((pattern, colIndex) => {
                                        const uniqueId = `${styleKey}_${pattern.id}_${rowIndex}_${colIndex}_${Date.now()}`;
                                        return `
                                            <div class="pattern-item" data-pattern-id="${pattern.id}">
                                                <div class="pattern-image-container">
                                                    <img src="images/${pattern.image}"
                                                         alt="${pattern.name}"
                                                         class="pattern-full-image"
                                                         loading="lazy"
                                                         onerror="this.src='images/placeholder-${gender}.jpg'">
                                                </div>
                                                <h5 class="pattern-item-name">${pattern.name}</h5>
                                                <div class="evaluation-section">
                                                    <div class="good-bad-selection">
                                                        <label class="eval-option good">
                                                            <input type="radio"
                                                                   name="eval_${uniqueId}"
                                                                   value="good"
                                                                   onchange="handleEvaluation('${uniqueId}', 'good', '${pattern.id}')">
                                                            <span>Good</span>
                                                        </label>
                                                        <label class="eval-option bad">
                                                            <input type="radio"
                                                                   name="eval_${uniqueId}"
                                                                   value="bad"
                                                                   onchange="handleEvaluation('${uniqueId}', 'bad', '${pattern.id}')">
                                                            <span>Bad</span>
                                                        </label>
                                                    </div>
                                                    <div class="reason-selection" id="reasons_${uniqueId}" style="display: none;">
                                                        <label class="reason-label">理由を選択:</label>
                                                        <div class="reason-options" id="reason_options_${uniqueId}">
                                                            <!-- Reasons will be populated dynamically -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

// Toggle function for pattern row sections
window.togglePatternRowSection = function(header) {
    const section = header.parentElement;
    section.classList.toggle('expanded');
};

// Handle evaluation function
window.handleEvaluation = function(uniqueId, value, patternId) {
    // This function can be extended to handle the evaluation logic
    console.log('Pattern evaluated:', patternId, value);
    
    // For now, just show/hide the reason selection based on the evaluation
    const reasonSection = document.getElementById(`reasons_${uniqueId}`);
    if (reasonSection) {
        if (value === 'bad') {
            reasonSection.style.display = 'block';
            // You can populate reasons here if needed
        } else {
            reasonSection.style.display = 'none';
        }
    }
};

// Re-initialize when gender changes
document.addEventListener('DOMContentLoaded', function() {
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                const newGender = this.value;
                // Update all checked styles with new gender patterns
                const checkedStyles = document.querySelectorAll('input[name="attractiveStyle"]:checked');
                checkedStyles.forEach(checkbox => {
                    // Validate checkbox value
                    if (!checkbox.value || checkbox.value === 'undefined') {
                        console.warn('Skipping checkbox with invalid value:', checkbox.value);
                        return;
                    }
                    
                    if (checkbox.patternContainer && checkbox.patternContainer.style.display !== 'none') {
                        // Use the same pattern data that was used during initialization
                        const patternData = typeof integratedStylePatternData !== 'undefined' ? integratedStylePatternData : null;
                        if (patternData) {
                            displayPatternForStyle(checkbox.patternContainer, checkbox.value, newGender, patternData);
                        }
                    }
                });
            }
        });
    });
});