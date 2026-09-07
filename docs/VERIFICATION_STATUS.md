# Проверки перед выпуском — 2026-09-07

Версия: **v0.3.0**. Ниже — локальные проверки перед публикацией; итог HTTPS/CI см. в релизном отчёте hub.

- `pnpm install --frozen-lockfile --ignore-scripts`, `pnpm verify`: PASS после security-обновлений.
- Production dependency audit: 0 advisories.
- Full dependency audit: 0 advisories.
- Manifest/portable adapters/common kit и release-preflight: PASS.
- Генерация из актуального локального Git snapshot: PASS; пустой HOME, каталог с пробелами, exact provenance, no origin, standalone AI-check. Новая публичная HTTPS release не проверена.
- Browser главного экрана: 1440/390 px, без runtime pageerror и overflow.

Ограничения: live API/БД, cross-model benchmark, новые remote CI/deploy и distribution rights не доказаны этими локальными проверками. Лицензии не менялись.  Общий релизный отчёт хранится в hub `docs/community-release.md`; прежние результаты не заменяют свежие проверки после следующей правки.
