# Agent graph

## Project

- Template: Fullstack template
- Stack: pnpm workspace, Next.js, NestJS, TypeORM, PostgreSQL, shared TypeScript contracts, shadcn/ui
- Package manager: pnpm 11 via Corepack

## Source map

- `apps/web` UI/routes; `apps/api` transport/domain/persistence; `packages/contracts` serializable shared contracts; `compose.yaml` local PostgreSQL.
- `components.json`: shadcn registry and alias configuration.
- `.ai/skills`: canonical project-local agent skills.
- `docs/AI_SKILLS.md`: skill selection and overlap notes.
- `docs/DESIGN_SYSTEM.md`: UI ownership and token rules.

## Flow and boundaries

- Do not share ORM entities or secrets with the web app. Shared contracts are transport-only. Database changes require migrations; `synchronize` stays false.
- UI primitives -> reusable compositions -> feature/page composition.
- Environment values flow from ignored local `.env` files; only examples are committed.

## Commands

`pnpm dev`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`, `pnpm verify`.

## Impact hints

- Dependency/config change: install + lint/typecheck + build.
- UI primitive/theme change: check all consumers and run desktop/mobile browser smoke.
- Route/API/data change: verify direct route or contract plus build and focused tests.

## Codebase Memory MCP

- Project index: `Users-argenalimbaev-work-projects-ruflo-template-fullstack` (fast index refreshed 2026-08-24).
