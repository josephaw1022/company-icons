# Company Icons (local SVGs, Lit, private GH Packages)

Two packages:
- `@yourorg/icons`: raw SVGs + generated TypeScript map
- `@yourorg/icon-web`: Lit-based `<vt-icon>` that renders icons from `@yourorg/icons`

## Build
```bash
npm ci --workspaces
npm run build
