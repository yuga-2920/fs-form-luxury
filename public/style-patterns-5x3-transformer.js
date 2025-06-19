// Transform style pattern data from 3 rows x 5 columns to 5 rows x 3 columns
function transformStylePatternData(originalData) {
    const transformedData = {};
    
    // Process each gender
    Object.keys(originalData).forEach(gender => {
        transformedData[gender] = {};
        
        // Process each style
        Object.keys(originalData[gender]).forEach(styleKey => {
            const style = originalData[gender][styleKey];
            const allPatterns = [];
            
            // Collect all patterns from all rows
            style.rows.forEach(row => {
                allPatterns.push(...row.patterns);
            });
            
            // Ensure we have exactly 15 patterns
            if (allPatterns.length !== 15) {
                console.warn(`Style ${styleKey} for ${gender} has ${allPatterns.length} patterns instead of 15`);
            }
            
            // Reorganize into 5 rows of 3 patterns each
            const newRows = [];
            for (let i = 0; i < 5; i++) {
                const rowPatterns = [];
                for (let j = 0; j < 3; j++) {
                    const patternIndex = i * 3 + j;
                    if (patternIndex < allPatterns.length) {
                        rowPatterns.push(allPatterns[patternIndex]);
                    }
                }
                newRows.push({
                    name: '',
                    patterns: rowPatterns
                });
            }
            
            transformedData[gender][styleKey] = {
                name: style.name,
                rows: newRows
            };
        });
    });
    
    return transformedData;
}

// Override the original data structure
if (typeof integratedStylePatternData !== 'undefined') {
    console.log('Transforming style pattern data to 5x3 layout...');
    const transformed = transformStylePatternData(integratedStylePatternData);
    
    // Replace the original data
    Object.keys(transformed).forEach(gender => {
        integratedStylePatternData[gender] = transformed[gender];
    });
    
    console.log('Style pattern data transformed to 5x3 layout');
}

// Update pattern section description
document.addEventListener('DOMContentLoaded', function() {
    const descriptions = document.querySelectorAll('.pattern-section-description');
    descriptions.forEach(desc => {
        desc.textContent = desc.textContent.replace('3行×5列', '5行×3列');
    });
});