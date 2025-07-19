#!/bin/bash

# Consolidate CSS Files Script
# This script combines all CSS files into a single consolidated-styles.css file

OUTPUT_FILE="consolidated-styles.css"
TEMP_FILE="temp-consolidated.css"

# Create header
cat > "$TEMP_FILE" << 'EOF'
/* 
 * Consolidated Styles - All CSS files merged
 * Generated on: $(date)
 * 
 * Order:
 * 1. Base styles and CSS variables
 * 2. Common reusable components  
 * 3. Service section specific styles
 * 4. Pattern section styles
 * 5. Pattern evaluation and reasons
 * 6. Form specific sections
 * 7. Item evaluation sections
 * 8. Additional specific styles from root folder
 * 9. Utility classes
 */

EOF

echo "Starting CSS consolidation..."

# Function to append file with section comment
append_css() {
    local file="$1"
    local section="$2"
    
    if [ -f "$file" ]; then
        echo "" >> "$TEMP_FILE"
        echo "/* ========== $section ========== */" >> "$TEMP_FILE"
        echo "/* Source: $file */" >> "$TEMP_FILE"
        echo "" >> "$TEMP_FILE"
        
        # Remove @import statements and append content
        grep -v "^@import" "$file" >> "$TEMP_FILE"
        
        echo "Added: $file"
    else
        echo "Warning: $file not found"
    fi
}

# 1. Base styles (includes fonts import)
append_css "css/base.css" "Base Styles and CSS Variables"

# 2. Common components
append_css "css/common.css" "Common Reusable Components"

# 3. Service section
append_css "css/service-section.css" "Service Section Styles"

# 4. Pattern section
append_css "css/pattern-section.css" "Pattern Section Styles"

# 5. Pattern reasons
append_css "css/pattern-reasons.css" "Pattern Evaluation and Reasons"

# 6. Form specific
append_css "css/form-specific.css" "Form Specific Sections"

# 7. Evaluation
append_css "css/evaluation.css" "Item Evaluation Sections"

# 8. Additional styles from root folder
append_css "service-layout-fix.css" "Service Layout Fixes"
append_css "service-clean-ui.css" "Service Clean UI"
append_css "service-horizontal-layout.css" "Service Horizontal Layout"
append_css "service-unified-layout.css" "Service Unified Layout"
append_css "service-height-alignment.css" "Service Height Alignment"
append_css "pattern-grid-3x5.css" "Pattern Grid 3x5"
append_css "pattern-header-style.css" "Pattern Header Styles"
append_css "attractive-styles-reasons.css" "Attractive Styles Reasons"
append_css "style-pattern-reasons.css" "Style Pattern Reasons"
append_css "female-pattern-selections.css" "Female Pattern Selections"
append_css "wanted-items-layout.css" "Wanted Items Layout"
append_css "conditional-options-style.css" "Conditional Options Styles"
append_css "avoid-other-style.css" "Avoid Other Styles"
append_css "background-switcher.css" "Background Switcher"
append_css "form-modifications.css" "Form Modifications"

# 9. Add utility classes from main.css
echo "" >> "$TEMP_FILE"
echo "/* ========== Utility Classes ========== */" >> "$TEMP_FILE"
echo "" >> "$TEMP_FILE"
cat >> "$TEMP_FILE" << 'EOF'
/* Margin utilities */
.mt-0 { margin-top: 0 !important; }
.mt-1 { margin-top: var(--spacing-xs) !important; }
.mt-2 { margin-top: var(--spacing-sm) !important; }
.mt-3 { margin-top: var(--spacing-md) !important; }
.mt-4 { margin-top: var(--spacing-lg) !important; }
.mt-5 { margin-top: var(--spacing-xl) !important; }

.mb-0 { margin-bottom: 0 !important; }
.mb-1 { margin-bottom: var(--spacing-xs) !important; }
.mb-2 { margin-bottom: var(--spacing-sm) !important; }
.mb-3 { margin-bottom: var(--spacing-md) !important; }
.mb-4 { margin-bottom: var(--spacing-lg) !important; }
.mb-5 { margin-bottom: var(--spacing-xl) !important; }

/* Text alignment */
.text-center { text-align: center !important; }
.text-left { text-align: left !important; }
.text-right { text-align: right !important; }

/* Display utilities */
.d-none { display: none !important; }
.d-block { display: block !important; }
.d-flex { display: flex !important; }
.d-grid { display: grid !important; }

/* Width/Height utilities */
.w-100 { width: 100% !important; }
.h-100 { height: 100% !important; }

/* Clearfix */
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}
EOF

# Move temp file to final output
mv "$TEMP_FILE" "$OUTPUT_FILE"

echo ""
echo "CSS consolidation complete!"
echo "Output file: $OUTPUT_FILE"
echo ""
echo "File size comparison:"
ls -lh "$OUTPUT_FILE"

# Count total lines
TOTAL_LINES=$(wc -l < "$OUTPUT_FILE")
echo "Total lines: $TOTAL_LINES"

echo ""
echo "Next steps:"
echo "1. Review $OUTPUT_FILE for any issues"
echo "2. Update index.html to use only $OUTPUT_FILE"
echo "3. Test the application"
echo "4. Archive individual CSS files"