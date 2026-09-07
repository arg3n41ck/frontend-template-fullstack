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

- Resolve this checkout with list_projects using its actual repository root; index if missing/stale. Do not reuse a maintainer-specific project ID.

## Agent distribution

- `docs/ARCHITECTURE.md`: modular boundaries and rule precedence.
- `docs/AI_SKILLS.md`: installed skill profile.
- `.agents/skills`, `.claude/skills`, `.codex/skills`: portable forwarding files to `.ai/skills`.

Codebase Memory MCP was refreshed during kit verification. Graph availability remains optional for community users; validate source freshness before later discovery.

## Required knowledge skills

- `.ai/skills/graphify`: focused relationship analysis; generated output in ignored `graphify-out/`.
- `.ai/skills/project-documentation-wiki`: business knowledge in `.wiki/`; read its index before substantive tasks.
- Canonical skills have portable forwarders for supported agent clients.

Installed workflow inventory and task triggers are listed in `docs/AI_SKILLS.md` and `.ai/workflows.json`. No application architecture or runtime dependency changed.

## Context routing

`.ai/workflows.json` (task/risk data) -> `.ai/context.mjs` (read-only route/contract validation) -> focused canonical skills. `.ai/WORKFLOW.md` owns the workflow/risk matrix; docs/AI_SKILLS.md is the inventory. Hub kit is the maintainer source for common files; copied projects run independently. No application imports the AI helper.

`.ai/skills/graphify/scripts/build_graph.py` is a pinned-version, scoped local AST adapter; `docs/GRAPHIFY.md` documents isolated installation. It writes only ignored graph/cache outputs and never invokes a semantic model API.

## URL-state extension

`docs/URL_STATE.md` owns state/filter policy. `docs/AI_SKILLS.md` and `.ai/workflows.json` index focused skills; hub kit is the shared authoring source, project copies stay standalone. `apps/web/` contains web paths: `src/lib/search-params.ts` defines URL parsers/loader/serializer; `src/hooks/use-list-search.ts` uses nuqs; main/root layout supplies adapter; `scripts/query-state.test.mjs` tests normalization and serialization.
