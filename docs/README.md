# Portfolio3 (multiversal.space)

A full-stack portfolio application built to showcase projects, artifacts, and supporting documentation for my CS-499 ePortfolio. It includes a React client, an Express API, a MongoDB database, and an optional Cloudflare Tunnel for secure inbound access without exposing ports directly.

Live site: https://www.multiversal.space

---

## What this repo contains

This repository is both:
- A production-grade portfolio site (UI/UX focused, fast navigation, clear project presentation), and
- A capstone evidence bundle (code review, enhancement narratives, journals, proposal).

Supporting documents live in `docs/cornerStone/`.

---

## Tech stack

Target versions:
- Node: 24 (LTS)
- React: 19
- Express: 5
- MongoDB: 8.0
- Mongoose: 9
- Cloudflare (cloudflared): latest

Core architecture:
- `client/`: React (Vite) frontend
- `server/`: Express API (Mongo + Mongoose)
- `cloudflared/`: Cloudflare Tunnel config (optional)
- `compose.yaml` and `compose.dev.yaml`: Docker Compose for prod/dev

---

## Repo structure

```text
Portfolio3/
  client/
  server/
  cloudflared/
  docs/
    README.md
  compose.yaml
  compose.dev.yaml
  makefile
  .env
```

---

## Prerequisites

Install:
- Docker + Docker Compose
- Node (only required if you run client/server outside Docker)

Optional:
- GNU Make (if you use the provided `makefile`)

---

## Environment variables

Create a `.env` file in the repo root:

```env
# Cloudflare tunnel token (required only if using the tunnel service)
TUNNEL_TOKEN=...

# Mongo connection string (used by server)
# In Docker Compose networking, use the Mongo service name (example below).
MONGO_URI=mongodb://db:27017/*db name*

---

## Quick start (recommended: Docker Compose)

### Development

This typically runs:
- Client dev server (Vite) on port 5173
- API server on port 5000
- MongoDB container

Run:

```bash
docker compose -f compose.yaml -f compose.dev.yaml up --build
```

Then open:
- http://localhost:5173

### Production-style

Run:

```bash
docker compose -f compose.yaml up --build -d
```

---

## Cloudflare Tunnel (optional)

If you are using Cloudflare Tunnel, the goal is to avoid opening inbound firewall ports directly to the internet. Traffic enters via Cloudflare and is routed to your internal service.

Typical usage patterns:
- Enable the `cloudflared` service via Compose profile(s), or
- Run the tunnel container explicitly

Example (if your compose uses a `tunnel` profile):

```bash
docker compose --profile tunnel -f compose.yaml up -d
```

Ensure:
- `TUNNEL_TOKEN` is present in `.env`
- Your Cloudflare tunnel routes and DNS records point to the correct service

---

## Common tasks

List available Make targets:

```bash
make help
```

Common dev command (if present in your Makefile):

```bash
make dev-all
```

If the exact target names differ, update this section to match your Makefile.

---

## Security notes (high level)

This project was built with a "secure by default" mindset:
- Prefer allowlist validation for request parameters
- Keep database access behind the API (no raw query power on the client)
- Use environment variables for secrets (never commit tokens)
- Use Cloudflare Tunnel to reduce exposed surface area (optional)

---

## Supporting documents (CS-499)

The capstone evidence set is in:
- `docs/cornerStone/`

This includes:
- Code review document
- Enhancement narratives (1/2/3)
- Professional self-assessment
- Proposal and journals

---

## Contact

Site: https://www.multiversal.space
GitHub: https://github.com/m1dunfee

---

## License

All rights reserved unless otherwise stated.

(If you want an open-source license, add MIT/Apache-2.0 and a LICENSE file.)
