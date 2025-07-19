# Refactored CSS Structure

This directory contains the refactored and modularized CSS files for the form project.

## File Structure

### Core Files
- **`main.css`** - Main entry point that imports all other CSS modules in the correct order
- **`base.css`** - Base styles, CSS variables, resets, and animations

### Component Files
- **`common.css`** - Reusable components (cards, buttons, inputs, grids, etc.)
- **`service-section.css`** - All service section related styles (sections 7-1 to 7-5)
- **`pattern-section.css`** - Pattern grid layouts and pattern item styles
- **`pattern-reasons.css`** - Pattern evaluation, reasons, and summaries
- **`form-specific.css`** - Specific form sections (gender switch, photo upload, etc.)
- **`evaluation.css`** - Item evaluation columns and related styles

## Migration Guide

### Old Files → New Structure
The following files have been consolidated:

**Service-related files** → `service-section.css`:
- `service-horizontal-layout.css`
- `service-clean-ui.css`
- `service-layout-fix.css`
- `service-unified-layout.css`
- `service-height-alignment.css`

**Pattern-related files** → `pattern-section.css` & `pattern-reasons.css`:
- `pattern-grid-3x5.css`
- `pattern-header-style.css`
- `attractive-styles-reasons.css`
- `style-pattern-reasons.css`
- `female-pattern-selections.css`

**Form-specific files** → `form-specific.css`:
- `form-modifications.css`
- `conditional-options-style.css`
- `wanted-items-layout.css`
- `avoid-other-style.css`

## Usage

Replace all CSS imports in your HTML with a single import:

```html
<!-- Old way (remove these) -->
<link rel="stylesheet" href="combined-styles.css">
<link rel="stylesheet" href="service-horizontal-layout.css">
<!-- ... other CSS files ... -->

<!-- New way (use this) -->
<link rel="stylesheet" href="css/main.css">
```

## Key Improvements

1. **Consolidated Variables**: All CSS variables are now in `base.css`
2. **Removed Duplicates**: Service section styles were heavily duplicated across 5 files
3. **Better Organization**: Related styles are grouped together
4. **Improved Specificity**: Reduced overly specific selectors where possible
5. **Consistent Naming**: Used consistent class naming patterns
6. **Reusable Components**: Common patterns extracted to `common.css`

## CSS Variable System

The refactored CSS uses a comprehensive variable system:

- **Colors**: Primary, secondary, accent, borders, backgrounds
- **Spacing**: xs, sm, md, lg, xl
- **Radius**: sm, md, lg, xl
- **Transitions**: fast, normal, slow
- **Shadows**: sm, md, lg, glow, primary

## Maintenance

When adding new styles:
1. Check if a similar component exists in `common.css`
2. Use existing CSS variables from `base.css`
3. Add section-specific styles to the appropriate file
4. Keep specificity low and use BEM-like naming when possible