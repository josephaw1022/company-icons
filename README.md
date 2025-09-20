# Company Icons (local SVGs, Lit, private GH Packages)

Two packages:
- `@josephaw1022/company-icons-icons`: raw SVGs + generated TypeScript map
- `@josephaw1022/company-icons-web`: Lit-based `<vt-icon>` that renders icons from `@josephaw1022/company-icons-icons`

## Build
```bash
npm ci --workspaces
npm run build
