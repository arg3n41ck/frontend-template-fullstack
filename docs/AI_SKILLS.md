# AI skill routing and inventory

Canonical skills: `.ai/skills`; portable forwarding files: `.agents/skills`, `.claude/skills`, `.codex/skills`. No global install or named model. Read only relevant skills.

## Task routes

| Task | Mode | Skills |
|---|---|---|
| `question` | read |  |
| `docs` | change | `project-documentation-wiki` |
| `design` | read | `project-kickoff`, `brainstorming` |
| `feature` | change | `feature-architecture`, `change-impact`, `test-driven-development` |
| `bug` | change | `systematic-debugging`, `change-impact`, `test-driven-development` |
| `refactor` | change | `refactor-safely`, `change-impact` |
| `ui` | change | `frontend-agent`, `frontend-design`, `browser-qa`, `nextjs-app-router-practices` |
| `review` | read | `review-changes`, `verification-quality` |
| `dependency` | change | `change-impact`, `verification-quality`, `dependency-update-audit` |
| `release` | read | `release-readiness`, `verification-quality` |
| `resume` | read | `task-handoff` |
| `parallel` | read | `parallel-work`, `using-git-worktrees` |
| `backend` | change | `backend-engineering`, `backend-api-contracts`, `change-impact` |
| `api-contract-check` | read | `api-contract-check` |
| `form-checklist` | read | `form-checklist` |
| `frontend-a11y-check` | read | `frontend-a11y-check` |
| `dependency-update-audit` | read | `dependency-update-audit` |
| `async-state-safety` | read | `async-state-safety` |
| `security-review` | read | `security-review` |
| `i18n-audit` | read | `i18n-audit` |
| `performance-audit` | read | `performance-audit` |
| `test-strategy` | read | `test-strategy` |
| `visual-regression` | read | `visual-regression` |
| `seo-metadata` | read | `seo-metadata` |
| `file-upload-safety` | read | `file-upload-safety` |
| `permissions-matrix` | read | `permissions-matrix` |
| `database-migration-safety` | read | `database-migration-safety` |
| `integration-resilience` | read | `integration-resilience` |
| `observability-check` | read | `observability-check` |
| `url-state` | read | `url-state` |

## Risk routes

- `shared-ui`: `change-impact`, `design-system-steward`, `browser-qa`
- `routing`: `change-impact`, `browser-qa`
- `api`: `change-impact`, `frontend-error-ux`, `api-contract-check`
- `auth`: `change-impact`, `backend-security-auth`, `security-review`, `permissions-matrix`
- `database`: `change-impact`, `backend-data-persistence`, `database-migration-safety`
- `async`: `change-impact`, `async-state-safety`
- `i18n`: `change-impact`, `browser-qa`, `i18n-audit`
- `a11y`: `browser-qa`, `design-system-steward`, `frontend-a11y-check`
- `performance`: `change-impact`, `performance-audit`
- `supply-chain`: `change-impact`, `release-readiness`, `dependency-update-audit`
- `external`: `change-impact`, `release-readiness`
- `forms`: `form-checklist`
- `testing`: `test-strategy`
- `visual`: `visual-regression`
- `seo`: `seo-metadata`
- `uploads`: `file-upload-safety`
- `integration`: `integration-resilience`
- `observability`: `observability-check`
- `url-state`: `url-state`

## Installed skills

- `api-contract-check`
- `async-state-safety`
- `backend-api-contracts`
- `backend-code-review`
- `backend-data-persistence`
- `backend-engineering`
- `backend-framework-patterns`
- `backend-performance-scaling`
- `backend-reliability-observability`
- `backend-security-auth`
- `behaviour-harness`
- `brainstorming`
- `browser-qa`
- `change-impact`
- `database-migration-safety`
- `dependency-update-audit`
- `design-system-steward`
- `executing-plans`
- `feature-architecture`
- `file-upload-safety`
- `find-skills`
- `form-checklist`
- `frontend-a11y-check`
- `frontend-agent`
- `frontend-design`
- `frontend-error-ux`
- `graphify`
- `i18n-audit`
- `integration-resilience`
- `nextjs-app-router-practices`
- `observability-check`
- `parallel-work`
- `performance-audit`
- `permissions-matrix`
- `project-documentation-wiki`
- `project-kickoff`
- `react-19-patterns`
- `receiving-code-review`
- `refactor-safely`
- `release-readiness`
- `requesting-code-review`
- `review-changes`
- `security-review`
- `seo-metadata`
- `systematic-debugging`
- `task-handoff`
- `test-driven-development`
- `test-strategy`
- `ui-ux-pro-max`
- `url-state`
- `using-git-worktrees`
- `verification-before-completion`
- `verification-quality`
- `visual-regression`
- `writing-plans`

## Provenance and limits

The new focused risk skills are suite-owned instructions, not downloaded marketplace packages. Existing adapted third-party references retain their original provenance and require separate license review. Metadata/route checks prove discoverability, not model compliance. Runtime tools and paid services are not installed by bundling instructions.
