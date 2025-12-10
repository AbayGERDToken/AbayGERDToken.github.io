# Project Modernization Plan

## Overview
Modernize the Abay GERD Token website by standardizing on Bootstrap 5.3.3, consolidating all CSS into external files, removing inline styles, and ensuring consistency across all pages.

## Current Issues
- Mixed frameworks: Bulma, Tailwind CSS, and Bootstrap 5.3.0
- Inline styles scattered across 49+ locations in 10+ files
- Custom CSS in `<style>` tags instead of external files
- Inconsistent Bootstrap versions
- Some pages still use old frameworks

## Implementation Strategy

### 1. Create Centralized CSS File
- Create `css/main.css` for all custom styles
- Move all `<style>` tag content to this file
- Organize styles by component/section
- Use CSS custom properties for theming

### 2. Update Bootstrap to Latest Version
- Upgrade from Bootstrap 5.3.0 to Bootstrap 5.3.3 (latest stable)
- Update CDN links across all pages
- Ensure Bootstrap JS is also updated

### 3. Remove All Inline Styles
- Convert inline `style=""` attributes to Bootstrap utility classes where possible
- Move remaining styles to `css/main.css`
- Use Bootstrap's spacing, color, and utility classes

### 4. Remove Bulma and Tailwind Dependencies
- Remove all Bulma CSS links
- Remove Tailwind CSS script tags
- Remove Flowbite dependencies (if not needed)
- Replace with Bootstrap 5 equivalents

### 5. Standardize All Pages
- Ensure all pages use the same head structure
- Standardize navbar loading (all use navtest.html)
- Consistent footer across all pages
- Uniform spacing and typography

## Files to Update

### High Priority
1. `index.html` - Still has Bulma/Tailwind, needs Bootstrap 5.3.3
2. `claim_form.html` - Has inline styles and mixed frameworks
3. All pages with `<style>` tags - Move to css/main.css

### Medium Priority
4. Pages with inline `style=""` attributes
5. Update Bootstrap version on all pages
6. Remove Bulma/Tailwind from remaining pages

## CSS File Structure (css/main.css)

```css
/* Custom Properties */
:root {
  --gerd-primary: #198754;
  --gerd-success: #198754;
  /* ... */
}

/* Global Styles */
body { ... }
a code { ... }

/* Component Styles */
.navbar-container { ... }
.copy-icon { ... }
.blink { ... }

/* Utility Classes */
/* Custom utilities if needed */

/* Responsive */
@media (max-width: 768px) { ... }
```

## Steps

1. Create `css/` directory and `css/main.css`
2. Extract all custom styles from HTML files
3. Update Bootstrap to 5.3.3 on all pages
4. Remove Bulma and Tailwind from all pages
5. Replace inline styles with Bootstrap classes or move to CSS
6. Test all pages for consistency
7. Verify no inline styles remain

