# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Japanese corporate website for 株式会社Awake (Awake Inc.), a static multi-page website built with vanilla HTML/CSS/JavaScript. The site offers business consulting services in web development, e-commerce, video production, and furniture design.

## Development Commands

```bash
# Start local development server (uses serve package)
npm start

# Build minified CSS (combines critical.css, services.css, and core.css)
npm run build

# Minify CSS files
npm run minify-css

# Minify JavaScript files
npm run minify-js
```

## Architecture

### CSS Structure
The project has a dual CSS architecture:
- `assets/css/` - Source CSS files organized by purpose
- `css/` - Compiled/processed CSS files

CSS is modularly organized:
- `base/` - Foundation styles (reset, variables, animations, utilities)
- `components/` - Reusable UI components (forms, service cards, etc.)
- `layout/` - Structural components (header, footer, sections)
- `pages/` - Page-specific styles
- `services/` - Service page-specific styles

### Page Structure
- Homepage: `index.html`
- Service pages: `/services/{web|ec|video|furniture}/index.html`
- Legal pages: `/legal/{terms|privacy-policy}/index.html`

Each service page has its own CSS and JavaScript files for specific functionality.

### Build Process
1. CSS files are concatenated and minified into `css/styles.min.css`
2. JavaScript is minified into `js/bundle.min.js`
3. The site is deployed to Netlify with security headers configured in `netlify.toml`

## Important Considerations

1. **Japanese Language**: All content is in Japanese. Maintain proper encoding and language attributes.

2. **Security Headers**: The site implements strict security headers via Netlify configuration, including CSP and X-Frame-Options.

3. **Performance**: The site prioritizes performance with minified assets and optimized images.

4. **No Framework**: This is vanilla HTML/CSS/JS - no React, Vue, or other frameworks. Keep solutions simple and framework-free.

5. **Service Pages**: Each service has its own directory with dedicated styles and scripts. Maintain this separation when adding features.