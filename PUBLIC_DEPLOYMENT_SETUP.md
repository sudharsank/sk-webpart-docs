# Public GitHub.io Deployment Setup

This docs portal is intended to live in its own public repository: `sudharsank/sk-webpart-docs`.

## One-time setup

1. Create or confirm the public repository: `https://github.com/sudharsank/sk-webpart-docs.git`.
2. Push only the `webpart-docs-portal` project into that repository as its own git repository.
3. In the public repository settings, open `Pages`.
4. Set the source to `GitHub Actions`.

## Trigger publish

- Run the `Deploy Docs` workflow manually when the content is ready for public publication.

## Behavior

- The workflow builds MkDocs from the docs repository source.
- The workflow deploys the generated `site/` output to GitHub Pages in the same public repository.
- No parent private repository workflow or deploy token is required.
