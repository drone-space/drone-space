# Drone Space Monorepo (Internal)

![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![pnpm](https://img.shields.io/badge/package_manager-pnpm-blue)
![Turborepo](https://img.shields.io/badge/monorepo-turborepo-orange)
![Next.js](https://img.shields.io/badge/framework-Next.js%2016-black)
![TypeScript](https://img.shields.io/badge/language-TypeScript-blue)
![PostgreSQL](https://img.shields.io/badge/database-PostgreSQL-336791)
![Prisma](https://img.shields.io/badge/orm-Prisma-2D3748)
![License](https://img.shields.io/badge/license-Private-red)

---

## Purpose

Single repository for all Drone Space platforms.

Goals:

- Eliminate duplication across services
- Enforce shared contracts (types, schema, validation)
- Enable atomic changes across frontend + backend
- Optimize build + dev performance via caching

---

## Architectural Rules (Non-Negotiable)

1. **No cross-app imports**
   Apps must never import from other apps — only from `/packages`.

2. **Database is centralized**
   All DB access goes through `packages/db`.

3. **Types are global**
   No redefining interfaces in apps.

4. **Side effects are isolated**
   External services (payments, email, etc.) live in `packages/services`.

5. **Apps are orchestration layers only**
   Business logic belongs in packages.

---

## Repository Structure

```
/apps
  /web        → marketing site
  /api        → backend (route handlers, services composition)
  /academy    → LMS
  /shop       → e-commerce

/packages
  /db         → Prisma schema + client
  /ui         → component system (Mantine)
  /services   → external integrations
  /handlers   → API abstractions (errors, responses)
  /hooks      → shared React hooks
  /libraries  → configured third-party utilities
  /types      → global TS contracts
  /constants  → enums + business rules
  /utilities  → helpers
```

---

## Dependency Flow

```
apps → packages → db
```

Strictly one-directional.

- Apps consume packages
- Packages may depend on other packages
- Only `db` talks to PostgreSQL

---

## Environment Management

Each app has its own `.env`.

Rules:

- No shared `.env` at root
- Validate env using Zod (in `packages/libraries`)
- Never access `process.env` directly in components — wrap via config layer

---

## Database Workflow

Location: `packages/db`

### Commands

```bash
npx prisma generate
npx prisma migrate dev
npx prisma studio
```

### Rules

- Schema changes must be backward compatible unless coordinated
- Never manually edit generated Prisma client
- Migrations are committed (no local-only state)

---

## Development

### Install

```bash
pnpm install
```

---

### Run All Apps

```bash
pnpm dev
```

- Parallel execution via Turborepo
- Cached builds where possible

---

### Run Single App

```bash
pnpm --filter web dev
pnpm --filter api dev
```

---

## Quality Gates

Enforced at CI + local:

- ESLint (strict)
- Prettier (formatting)
- TypeScript (no implicit any, strict mode)
- Build must pass across all affected packages

Failure in any package = pipeline failure.

---

## Build System (Turborepo)

### Key Behavior

- Task-level caching
- Dependency graph aware
- Incremental rebuilds

### Example

Change in:

```
packages/types
```

Triggers rebuild of:

```
→ api
→ web
→ academy
→ shop
```

---

## Common Pitfalls

- Duplicating types inside apps
- Calling Prisma outside `db` package
- Embedding business logic in UI components
- Direct third-party API calls in apps
- Breaking schema without migration strategy

---

## Secrets & Security

- `.env` files are ignored (never committed)
- Secrets must not appear in logs
- External services must handle:
  - retries
  - timeouts
  - error normalization

---

## Observability (Planned / Partial)

Not fully standardized yet.

Recommended direction:

- Centralized logging layer (package-level)
- Request tracing across API
- Structured logs (JSON)

---

## Scaling Strategy

Current architecture favors:

- speed of iteration
- strong consistency

If system complexity increases:

- Introduce background jobs (queue workers)
- Split heavy domains into isolated service modules (still inside monorepo)
- Add caching layer (Redis) at service boundary, not UI

---

## Git Workflow

- Branch from `main`
- PR required
- **Squash & merge only**

Commit expectations:

- atomic
- descriptive
- scoped

---

## License

Private repository.
Internal use only.
