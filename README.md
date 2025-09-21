# universal-icon-kit

Public repo showing how to **build & publish private npm packages to GitHub Packages**.

## Packages
- `@josephaw1022/company-icons-icons` — raw SVG strings
- `@josephaw1022/company-icons-web` — `<company-icon>` Web Component (Lit, TypeScript)

## Publishing
Publishing is triggered by pushing version **tags** (icons / icon-web).  
Use the **Taskfile** in the repo root to create the tags—run:

```bash
task --list-all
````

…and pick the tagging task you need. GitHub Actions will publish when the tag is pushed.

Workflows:

* `.github/workflows/publish-icons.yml`
* `.github/workflows/publish-icon-web.yml`

## Example apps

Both examples consume the **private** packages. They already include a project `.npmrc`; export your token and run.

* **Vue (Vite)** → `examples/vuejs-app`
* **React (Vite)** → `examples/reactjs-app`

> The run instructions in the **Vue** example README apply to the **React** example as well.
