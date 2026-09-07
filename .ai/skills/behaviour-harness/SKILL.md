---
name: behaviour-harness
description: Use when verifying cross-layer behavior, API contracts or important business invariants.
---

# Behaviour Harness

1. Write concrete acceptance criteria, including negative/permission/error cases. Map each to observed tests or scenarios.
2. Use this project's existing TypeScript/Node test harness for NestJS and Next.js, not a forced Python stack. Add focused contract/integration/e2e coverage according to impact; label mocked vs real infrastructure evidence.
3. Check that tests fail for the intended regression before the fix. Include data boundaries, idempotency and tenant isolation where applicable.
4. Mutation/property tests are useful for important invariants when tooling exists; never install them silently or demand every layer for a trivial change.
5. Seek independent review where available; otherwise label self-review and gaps. No named behaviour-judge agent or provider tool is required.
6. Run commands from project VERIFICATION.md/package scripts, not obsolete .claude asset paths. Report criteria covered/uncovered and blockers without automatic rollback.

`REFERENCE.md` and assets preserve upstream background only. They do not authorize hooks, installs, a forced stack, expensive checks or agent dispatch.
