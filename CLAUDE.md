# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Japanese corporate website for 株式会社Awake (Awake Inc.), built with **Next.js 15**, **React 18**, **TypeScript**, and **Tailwind CSS**. The site offers business consulting services in web development, e-commerce, video production, and furniture design.

## Development Commands

```bash
# Start local development server with Turbopack
npm run dev

# Build production assets
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Type checking
npm run type-check
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.7+
- **Styling**: Tailwind CSS 3.4+ with custom design system
- **UI Components**: React 18 + Lucide React Icons
- **Animations**: Framer Motion
- **Fonts**: Noto Sans JP (Google Fonts)

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles + Tailwind
│   ├── services/          # Service pages
│   │   ├── web/
│   │   ├── ec/
│   │   ├── video/
│   │   └── furniture/
│   └── legal/            # Legal pages
│       ├── terms/
│       └── privacy-policy/
├── components/           # React components
│   ├── layout/          # Layout components
│   └── ui/              # UI components
└── lib/                 # Utilities and schemas
    └── schema.ts        # JSON-LD structured data
```

### Design System
- **Primary Colors**: 
  - Purple: `#6366f1` (primary-purple)
  - Purple Dark: `#4f46e5` (primary-purple-dark)
  - Pink: `#ec4899` (primary-pink)
- **Typography**: Noto Sans JP with responsive sizing
- **High Contrast**: 21:1 ratio for WCAG AAA compliance
- **Glass Morphism**: Backdrop blur effects for modern UI
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Important Considerations

### Component Development
1. **React Best Practices**: Use functional components with TypeScript, proper prop typing, and React hooks
2. **Component Structure**: Follow the established pattern in `src/components/`
3. **Styling**: Use Tailwind CSS classes with custom design tokens (primary-purple, etc.)
4. **Accessibility**: Maintain WCAG AAA standards with proper ARIA labels and semantic HTML

### Next.js Patterns
1. **App Router**: All pages use the new App Router pattern (`src/app/`)
2. **Metadata**: Each page exports proper `Metadata` for SEO optimization
3. **Server Components**: Default to Server Components, use `'use client'` only when needed
4. **Image Optimization**: Always use `next/image` for optimized loading

### TypeScript Guidelines
1. **Strict Mode**: Project uses strict TypeScript configuration
2. **Type Safety**: Properly type all props, state, and function parameters
3. **Imports**: Use absolute imports with `@/` alias for cleaner code

### Performance Optimization
1. **Code Splitting**: Leverage Next.js automatic code splitting
2. **Bundle Size**: Keep components small and focused
3. **SEO**: Each page includes proper metadata and structured data
4. **Fonts**: Use Next.js font optimization with `next/font/google`

### Content Management
1. **Japanese Content**: All content in Japanese, maintain `lang="ja"`
2. **Schema.org**: Include JSON-LD structured data for business information
3. **Consistency**: Follow established content patterns across service pages

### Development Workflow
1. **TypeScript**: Always run `npm run type-check` before commits
2. **Linting**: Use `npm run lint` to maintain code quality
3. **Testing**: Test builds with `npm run build` before deployment
4. **Hot Reload**: Use `npm run dev` with Turbopack for fast development