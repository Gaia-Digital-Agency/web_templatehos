# Template HOS Project

A headless CMS + Next.js project built with [Payload CMS](https://payloadcms.com) and PostgreSQL.

This is a hosted variant of the base template project, deployed at a separate path with its own database.

## Current Role

- Server path: `/var/www/templatehos`
- Git remote: `git@github.com:Gaia-Digital-Agency/web_templatehos.git`
- Forked from: `web_template`

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **CMS**: Payload CMS 3.80
- **Database**: PostgreSQL 18
- **Styling**: TailwindCSS 4 + shadcn/ui
- **Package Manager**: pnpm

## Environment Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `PAYLOAD_SECRET` | Payload secret |
| `NEXT_PUBLIC_SERVER_URL` | Public base URL |
| `CRON_SECRET` | Cron auth secret |
| `PREVIEW_SECRET` | Preview auth secret |

## Project Structure

Top-level folders of note:

- `src` - application source
- `public` - public assets
- `scripts` - maintenance and utility scripts
- `tests` - test configuration and test files
- `docs` - project documentation and prompts
- `config/tooling` - moved tooling config files
- `database_backup` - compressed database backups created on the server

## Web-Manager API

This project includes a reusable web-manager management layer under `/api/web-manager/*`.

Current V1 endpoints:

- `GET /api/web-manager/auth/verify`
- `GET /api/web-manager/status`
- `POST /api/web-manager/pages/upsert`
- `POST /api/web-manager/posts/upsert`
- `POST /api/web-manager/globals/update`
- `POST /api/web-manager/media/upload`
- `POST /api/web-manager/approval/request`
- `POST /api/web-manager/publish`
- `GET /api/web-manager/content/search`
- `POST /api/web-manager/revalidate`
- `GET /api/web-manager/operations/health`
- `POST /api/web-manager/operations/cache`
- `POST /api/web-manager/workflows/publish-bundle`

See `docs/web-manager-api.md` for the contract and expected environment variables.

## Deployment

Running on GCP VM (`gda-s01`):

- **PM2 process**: `templatehos`
- **Nginx**: `/templatehos` location block in `sites-enabled/gda-s01`
- **URL**: `http://34.124.244.233/templatehos`
- **Admin**: `http://34.124.244.233/templatehos/admin`
- **Database**: `templatehos_db` owned by `template_user`

## Development

```bash
pnpm install    # Install dependencies
pnpm dev        # Development server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Lint
```
