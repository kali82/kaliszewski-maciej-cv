# Render deployment

This repository is configured for Render as a Static Site using `render.yaml`.

## Blueprint deploy

1. Push the repository to GitHub/GitLab.
2. In Render, create a new Blueprint from this repository.
3. Render will read `render.yaml` and create the static service.

## Manual Static Site settings

Use these settings if you create the service manually instead of using the
blueprint:

- Build command: `corepack enable pnpm && pnpm install --frozen-lockfile && pnpm run build:cv-site`
- Publish directory: `artifacts/cv-site/dist/public`
- Node version: `24.14.1`
- Environment variables:
  - `BASE_PATH=/`
  - `CI=true`
  - `SKIP_INSTALL_DEPS=true`

## Local verification

```sh
pnpm install
pnpm run build:cv-site
pnpm --filter @workspace/cv-site run serve
```

The production build is generated in `artifacts/cv-site/dist/public`.
