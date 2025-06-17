# UI Consistency Analysis for FS-Form

## Analysis Date: 2025-06-16

### 1. Checkbox Elements (checkbox-option class)

#### Current Implementation:
- **Base Style**: 
  - Background: `var(--surface-elevated)`
  - Border: `2px solid var(--border-light)`
  - Border-radius: `16px`
  - Transition: `all 0.15s ease`
  - Padding: `0` (image variants) or `18px 24px` (text-only)

- **Hover State**:
  - Border-color: `var(--border-color)`
  - Transform: `translateY(-4px)`
  - Box-shadow: `var(--shadow-md)`

- **Checked State**:
  - Border-color: `var(--primary-color)`
  - Background: `rgba(255, 255, 255, 0.02)`

#### Variants:
1. **Image checkbox-option**: Contains image (160px height) + text span
2. **Text-only checkbox-option**: No image, just text with padding
3. **Chip-option**: Smaller variant with reduced padding (16px 24px)

### 2. Scene Cards (scene-card class)

#### Current Implementation:
- **Structure**: Wrapper div with hidden input + styled label
- **Base Style**:
  - Background: `var(--surface-elevated)`
  - Border: `2px solid var(--border-light)`
  - Border-radius: `16px`
  - Similar hover effects as checkbox-option

- **Hover State**:
  - Border-color: `var(--border-color)`
  - Transform: `translateY(-4px)`
  - Box-shadow: `var(--shadow-md)`

- **Checked State**:
  - Border-color: `var(--primary-color)`
  - Background: `rgba(255, 255, 255, 0.02)`

### 3. Radio Buttons (radio-option class)

#### Current Implementation:
- **Base Style**:
  - Background: `rgba(255, 255, 255, 0.02)` (different from checkbox/scene-card)
  - Border: `2px solid var(--border-light)`
  - Border-radius: `12px` (less rounded than checkbox/scene-card)
  - Padding: `18px 24px`
  - Different hover animation (translateX instead of translateY)

- **Hover State**:
  - Border-color: `var(--border-color)`
  - Transform: `translateX(4px)` (horizontal instead of vertical)
  - Background: `rgba(255, 255, 255, 0.04)`

### 4. Form Sections (form-section class)

#### Current Implementation:
- Consistent structure with:
  - Background: `var(--surface-color)`
  - Padding: `var(--spacing-xl)`
  - Border-radius: `var(--radius-lg)`
  - Box-shadow: `var(--shadow-md)`
  - Border: `1px solid var(--border-light)`

## Inconsistencies Found:

### 1. **Movement Direction Inconsistency**
- **checkbox-option**: Moves up on hover (`translateY(-4px)`)
- **scene-card**: Moves up on hover (`translateY(-4px)`)
- **radio-option**: Moves right on hover (`translateX(4px)`)
- **Recommendation**: Standardize to vertical movement for all interactive elements

### 2. **Border Radius Inconsistency**
- **checkbox-option & scene-card**: `16px` border-radius
- **radio-option**: `12px` border-radius
- **Recommendation**: Use consistent border-radius (16px) for all option elements

### 3. **Background Color Inconsistency**
- **checkbox-option & scene-card**: `var(--surface-elevated)`
- **radio-option**: `rgba(255, 255, 255, 0.02)` (more transparent)
- **Recommendation**: Use same background color for consistency

### 4. **Female Form Overrides**
- Female form has additional overrides that change:
  - Background colors to `var(--surface-elevated)` with `!important`
  - Border colors to `var(--border-soft)` with `!important`
  - Hover states to use gold accent colors
- This creates intentional differentiation but uses many `!important` flags

## Recommendations:

### 1. **Standardize Interactive Elements**
Create a base class for all interactive options:
```css
.interactive-option {
    background: var(--surface-elevated);
    border: 2px solid var(--border-light);
    border-radius: 16px;
    transition: all 0.15s ease;
    cursor: pointer;
}

.interactive-option:hover {
    border-color: var(--border-color);
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
}
```

### 2. **Reduce !important Usage**
Instead of using `!important` for female form overrides, use more specific selectors or CSS custom properties that can be changed at the root level.

### 3. **Consistent Spacing**
Ensure all form sections and groups use the same spacing variables from the design system.

### 4. **Animation Consistency**
All hover animations should use the same easing and duration for a cohesive feel.

## Summary:
The form has good overall consistency with a clear design system using CSS variables. The main inconsistencies are in the radio-option styling (different movement direction, border-radius, and background) compared to checkbox-option and scene-card elements. The female form variations are intentionally different but could be implemented more cleanly without excessive `!important` usage.