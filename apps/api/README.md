# API workspace

NestJS transport and persistence boundary for the Frontend fullstack template.

- Global prefix: `/api`
- Health route: `GET /api/health`
- Environment: read from the workspace root `.env` or local `.env`
- Database: PostgreSQL through TypeORM; schema synchronization stays disabled

Run from the workspace root with `pnpm dev:api`.
