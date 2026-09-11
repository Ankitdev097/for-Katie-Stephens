# Project Rules & Guidelines

## Deployment & Dependency Management
- Before pushing any changes to GitHub, always ensure `package.json` and `package-lock.json` are fully synchronized.
- Always verify that `npm ci` succeeds.
- If dependencies change, automatically regenerate and commit the updated `package-lock.json`.
- Do not output code that would fail Cloudflare deployment (e.g. do not use `bun.lock` or `bun.lockb` as it causes build errors; stick to `npm`).
