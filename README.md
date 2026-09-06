# Frontend Fullstack Template

Lean pnpm monorepo for a fullstack product without prebuilt business screens.

## Stack

- `apps/web`: Next.js App Router + React 19 + shadcn/ui
- `apps/api`: NestJS + TypeORM
- `packages/contracts`: shared serializable TypeScript contracts
- PostgreSQL 16 via Compose

## Requirements

Node.js 22, pnpm 11 through Corepack, and Docker for the local database.

## Start

```bash
cp .env.example .env
docker compose up -d postgres
pnpm install
pnpm dev
```

Web: `http://localhost:3000`. API health: `http://localhost:3001/api/health`.

## Verify

```bash
pnpm verify
```

Database schema synchronization is intentionally disabled. Add reviewed migrations for schema changes.

Add a web primitive from the workspace root with:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

## AI-assisted work

Start with `AGENTS.md`, then `docs/AI_SKILLS.md` and `docs/ARCHITECTURE.md`. Skills are included and loaded on demand, not installed as executable background agents. No framework migration or extra dependencies are required to use this starter.
