# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Japanese corporate website for 株式会社Awake (Awake Inc.), a static multi-page website built with vanilla HTML/CSS/JavaScript. The site offers business consulting services in web development, e-commerce, video production, and furniture design.

## Development Commands

```bash
# Start local development server (uses serve package)
npm start

# Build production assets (minifies CSS)
npm run build

# Minify CSS files individually
npm run minify-css

# Minify JavaScript files
npm run minify-js
```

## Architecture

### CSS Architecture (Unified System)
The project uses a unified CSS system centered around `css/awake-unified.css`:
- **Unified CSS**: `css/awake-unified.css` - Primary stylesheet with 21:1 contrast ratio, WCAG AAA compliance
- **Elite Design**: `css/2025-corporate-elite.css` - Premium design system with glass morphism, 3D effects
- **Legacy Structure**: `assets/css/` - Original source files (being phased out)

Key CSS features:
- High contrast design (21:1 ratio) for optimal visibility
- Japanese font optimization with Noto Sans JP
- Glass morphism and premium visual effects
- Dark mode support with system preference detection

### JavaScript Architecture
- **2025 Features**: `js/2025-features.js` - Modern web features (dark mode, personalization, micro-interactions)
- **Corporate Enhanced**: `js/2025-corporate-enhanced.js` - Enterprise-grade interactions and animations
- **Bundle**: `js/bundle.min.js` - Minified production JavaScript
- **Duplicate Prevention**: All JS files include initialization flags to prevent multiple executions

### Page Structure
- Homepage: `index.html`
- Service pages: `/services/{web|ec|video|furniture}/index.html`
- Legal pages: `/legal/{terms|privacy-policy}/index.html`

Each service page follows a consistent structure with:
- Progressive Web App metadata
- Schema.org JSON-LD structured data
- Resource hints for performance
- Unified CSS references

### Build Process
1. CSS: `critical.css` + `services.css` + `core.css` → `styles.min.css` (via clean-css)
2. JavaScript: `bundle.js` → `bundle.min.js` (via uglify-js)
3. Deployment: Static files served via Netlify with strict security headers

### Deployment Configuration
Netlify configuration (`netlify.toml`) includes:
- Strict security headers (CSP, X-Frame-Options, HSTS)
- Content Security Policy allowing specific domains (Google Fonts, Unsplash, etc.)
- SPA-style redirects for service and legal pages

## Important Considerations

1. **Japanese Language**: All content is in Japanese. Maintain proper encoding (`UTF-8`) and `lang="ja"` attributes.

2. **Unified CSS System**: Use `awake-unified.css` as the primary stylesheet. It consolidates 22+ CSS files into a clean, maintainable structure.

3. **High Contrast Design**: The design prioritizes accessibility with 21:1 contrast ratios. Maintain this standard when adding new styles.

4. **JavaScript Duplicate Prevention**: All JS files use initialization flags. Follow this pattern when adding new scripts:
   ```javascript
   let myFeatureInitialized = false;
   if (myFeatureInitialized) return;
   myFeatureInitialized = true;
   ```

5. **No Framework**: This is vanilla HTML/CSS/JS. Avoid introducing frameworks that would change the fundamental architecture.

6. **Service Page Consistency**: Each service page should include:
   - PWA metadata and theme colors
   - Resource hints for performance
   - Schema.org structured data
   - Consistent CSS and JS references

7. **Security**: The site implements strict CSP. When adding external resources, ensure they're whitelisted in `netlify.toml`.

8. **Performance**: Images use Unsplash CDN with optimization parameters (`auto=format&fit=crop&w=800&q=80`). Maintain this pattern for new images.