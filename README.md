# Web Part Docs Portal

MkDocs source for GitHub.io documentation.

Public publish target: `https://github.com/sudharsank/sk-webpart-docs.git`

This project is intended to run as its own standalone repository.

The publish workflow is manual-only and deploys to GitHub Pages from this repository.

## Local run

```bash
cd webpart-docs-portal
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements-docs.txt
mkdocs serve
```

## Build

```bash
mkdocs build
```

Built output is generated in `webpart-docs-portal/site`.
