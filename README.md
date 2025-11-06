# SourceRE API Documentation

A modern React-based documentation site for SourceRE API and ARELLO API, built with TypeScript, React Router, and best practices.

## Features

- ✅ **React Router** - Proper routing with browser history support
- ✅ **TypeScript** - Full type safety throughout the codebase
- ✅ **Standardized Content Management** - All content organized in structured TypeScript files
- ✅ **Improved Sidebar** - React-based navigation (no DOM manipulation)
- ✅ **Organized CSS** - Modular CSS files organized by component
- ✅ **Code Quality Tools** - ESLint and Prettier configured

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or the port Vite assigns).

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
sourcere-api-docs/
├── public/
│   └── logo.png          # Logo image
├── src/
│   ├── components/
│   │   ├── layout/       # Layout components (Header, Sidebar, DocumentationLayout)
│   │   └── ui/           # UI components (CodeBlock, Table, Section, ContentRenderer)
│   ├── content/
│   │   ├── sourcere/     # SourceRE documentation content
│   │   └── arello/        # ARELLO documentation content
│   ├── hooks/
│   │   └── useSidebar.ts # Custom hook for sidebar navigation
│   ├── pages/
│   │   ├── SourceREPage.tsx
│   │   └── ARELLOPage.tsx
│   ├── styles/
│   │   ├── global.css
│   │   └── components/   # Component-specific CSS
│   ├── types/
│   │   └── content.ts     # TypeScript type definitions
│   ├── App.tsx           # Main App component with routing
│   └── main.tsx          # React entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .eslintrc.json
└── .prettierrc
```

## Architecture Improvements

This version implements several improvements over the previous version:

1. **React Router** - Proper routing instead of manual URL manipulation
2. **TypeScript** - Full type safety
3. **Content Management** - All content in structured TypeScript files
4. **Sidebar Hook** - React patterns instead of DOM manipulation
5. **Modular CSS** - Organized by component instead of one large file
6. **Code Quality** - ESLint and Prettier configured

## Development Notes

- Uses Vite for fast development and building
- React 18 with functional components and hooks
- TypeScript for type safety
- React Router for navigation
- All content is type-safe and structured
