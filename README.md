# zijian — Personal Homepage

Static personal homepage (Work / Info / Things). Dark theme, particle background, CN/EN toggle.

## Run locally

```bash
# Static: any HTTP server, e.g.
npx serve .
# or
python3 -m http.server 8080
```

## Deploy

- **GitHub**: repo is [zijianxcode/personal-homepage](https://github.com/zijianxcode/personal-homepage). Push to `main` to update.
- **ai-builders.space**: Connect this GitHub repo in the ai-builders.space dashboard (e.g. “Import from GitHub” or “New Project → GitHub”).  
  - **Static**: set build output / root to repo root (serves `index.html` + `Assets/`).  
  - **Docker**: use the included `Dockerfile`; it runs `server.py` and serves the site on `PORT` (default 8000).

## Structure

- `index.html` — single-page app (tabs: Work, Info, Things)
- `Assets/css/style.css` — styles
- `Assets/js/script.js` — tabs, language toggle, particle background
- `server.py` — minimal HTTP server for container deployment
- `Dockerfile` — for platforms that build from Docker
