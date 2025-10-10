# Agent Instructions for Gabriela Barreto Website

## Build & Development Commands
- **Dev server**: `pnpm dev`
- **Build**: `pnpm build`
- **Preview**: `pnpm preview`
- **No test suite configured** - verify changes manually with dev/build

## Code Style & Conventions
- **Formatter**: Prettier (tabWidth: 2, printWidth: 80, double quotes, semi: true, trailingComma: "es5")
- **Linter**: ESLint with TypeScript + Astro plugins. **Rule: no-console is error** - never use console.log
- **TypeScript**: Strict mode enabled (astro/tsconfigs/strict). Use explicit types, no implicit any
- **Imports**: Use `@/*` path alias for src imports (e.g., `@/components/ui/badge.astro`)
- **Naming**: kebab-case for files/folders, PascalCase for types/interfaces, camelCase for variables/functions
- **Components**: Astro components (.astro) for UI, React (.tsx) only when interactivity needed
- **Styles**: TailwindCSS utility classes, use `cn()` from `@/lib/utils.ts` for conditional classes
- **Data**: All site content in `src/lib/constants/*` and `src/data/*` - never hardcode content

## Project Context
- **Stack**: Astro 5.5 + TypeScript + TailwindCSS 4.0 + React 19 + MDX
- **Purpose**: Professional portfolio site for Gabriela Barreto (Occupational Health & Safety professional)
- **Content**: Articles in `src/data/blog/`, Projects in `src/data/projects/`, constants in `src/lib/constants/`
- **Deployment**: Docker + Nginx (see docker-compose.yaml)
