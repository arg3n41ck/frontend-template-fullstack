# Шаблон Frontend Fullstack

Лёгкий pnpm monorepo для fullstack-продукта без готовых бизнес-экранов.

## Стек

- `apps/web`: Next.js App Router + React 19 + shadcn/ui
- `apps/api`: NestJS + TypeORM
- `packages/contracts`: общие сериализуемые TypeScript-контракты
- PostgreSQL 16 через Compose

## Требования

Node.js 22.18+, pnpm 11 через Corepack и Docker для локальной базы.

## Запуск

```bash
cp .env.example .env
docker compose up -d postgres
pnpm install
pnpm dev
```

Web: `http://localhost:3000`. API health: `http://localhost:3001/api/health`.

## Проверка

```bash
pnpm verify
```

Синхронизация схемы базы намеренно выключена. Для изменений схемы добавляйте проверенные миграции.

Добавление web-примитива из корня workspace:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

## Работа с ИИ

Начните с `AGENTS.md`, затем изучите `docs/AI_SKILLS.md` и `docs/ARCHITECTURE.md`. Skills уже находятся в репозитории и загружаются по задаче — это не фоновые агенты и не требуют миграции стека или дополнительных зависимостей.

## Сначала ИИ, но проект понятен человеку

Любой coding agent начинает с [AGENTS.md](AGENTS.md); plugin конкретного провайдера не нужен. [Workflow](.ai/WORKFLOW.md) выбирает задачу, учитывает побочные эффекты, проверяет результат и хранит только нужный контекст. Человек использует обычную архитектуру и package-команды: AI runtime для запуска приложения не требуется.

```bash
node .ai/context.mjs --list
node .ai/context.mjs --task ui --risk shared-ui
node .ai/context.mjs --check
```

Это read-only помощники контекста и целостности: они не вызывают модель и не устанавливают пакеты. Skills загружаются по необходимости; wiki и Graphify отвечают за разные виды знаний. Недоступный browser/graph runtime обозначается как непроверенный, а не как успешная проверка.

Текущая локальная проверка и ограничения релиза: [отчёт](docs/VERIFICATION_STATUS.md). Опциональная настройка локального графа: [Graphify](docs/GRAPHIFY.md).

## Фильтры и новые AI-проверки

Всего **55 skills**, загружаются по задаче, не все сразу. Полный состав — [AI_SKILLS](docs/AI_SKILLS.md). Правила search params, истории, пагинации, запросов и приватности — [URL_STATE](docs/URL_STATE.md). Установлен nuqs 2.10.1, подключён адаптер; добавлены типизированные парсеры и `useListSearch`.

## Подготовка к выпуску

Актуальные проверки и ограничения — [VERIFICATION_STATUS](docs/VERIFICATION_STATUS.md). Локальные env/runtime/test-артефакты исключены из Git; `.env.example` разрешён. Версия шаблона: **v0.3.0**.
