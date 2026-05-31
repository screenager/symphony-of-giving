# Pre-prompt for AI coding assistants

This repository is a TanStack Start / Vite SPA that is served **statically**
from `dist-gh-pages/` at `http://localhost/symphony-of-giving/` (via the local
Apache in `~/Sites`). Source edits in `src/` are **not** visible until the
GH-Pages bundle is rebuilt.

## MANDATORY: rebuild after every change

After **every** code change requested in this chat — no matter how small —
run the GH-Pages build before reporting the task as done:

```bash
export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh" && nvm use 20 \
  && npm run build:gh-pages
```

Notes:
- The system default `node` is v10 and will fail. You **must** switch to
  Node 20 via `nvm use 20` in the same command chain.
- Do not use `bun` — it is not installed.
- The build script is defined in `package.json` as
  `vite build --config vite.gh-pages.config.ts` and writes to `dist-gh-pages/`.
- Only consider the task finished once the build succeeds (exit code 0) and
  the expected new chunks appear in the build output.

## When adding a new route

1. Create the route file under `src/routes/<name>.tsx`.
2. Manually register it in `src/routeTree.gen.ts` (import, `update({...})`
   call, `FileRoutesByFullPath`, `FileRoutesByTo`, `FileRoutesById`,
   `FileRouteTypes`, `RootRouteChildren`, the `declare module` block, and
   `rootRouteChildren`). The generator is not running automatically here.
3. Then rebuild as above.

## Hidden sections

### `OrkestEnDirigent` (src/routes/index.tsx)

Hidden on **31 mei 2026**. The section was a two-column card block (Orkest + Dirigent)
rendered between `<Programma />` and `<Artiesten />` in `HomePage`.

To revert:
1. In `src/routes/index.tsx`, change:
   ```tsx
   {false /* OrkestEnDirigent hidden … */ && <OrkestEnDirigent />}
   ```
   back to:
   ```tsx
   <OrkestEnDirigent />
   ```
2. Remove the "Dirigent" group (first) and "Orkest" group (last) from `ARTIST_GROUPS`
   in the same file if you no longer want them in the carousel.
3. Rebuild.

## Style conventions

- Reuse the existing dark-stage look: `bg-stage`, `text-primary-foreground`,
  `text-accent`, `font-display`, the `section-header` pattern, and the
  `[10px] tracking-[0.5em] uppercase` eyebrow.
- Keep header/footer markup consistent with [src/routes/index.tsx](src/routes/index.tsx).
