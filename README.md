
# company-icons

Public repo showing **how to build & publish private npm packages to GitHub Packages**.

**Packages**
- `@josephaw1022/company-icons-icons` – raw SVG strings
- `@josephaw1022/company-icons-web` – `<company-icon>` Web Component wrapper

---

## Publish (tags trigger Actions)

```bash
# publish icons
git tag icons-v0.1.0 && git push origin icons-v0.1.0

# publish web (after icons)
git tag icon-web-v0.1.0 && git push origin icon-web-v0.1.0
````

> Reusing the same version returns `409 Conflict` — bump version and tag again.

---

## Use in a Vite + Vue app (packages are **private**)

### 1) Auth to GitHub Packages

Create **.npmrc** in the app (or use a user-level one):

```ini
@josephaw1022:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
always-auth=true
```

Set `NPM_TOKEN` to a token with **read\:packages** (in CI use a secret).

### 2) Install one package

```bash
# Web Component (recommended to start)
npm i @josephaw1022/company-icons-web

# or raw SVG map
# npm i @josephaw1022/company-icons-icons
```

### 3A) Web Component in Vue

`src/main.ts`

```ts
import { createApp } from 'vue';
import App from './App.vue';
import '@josephaw1022/company-icons-web'; // registers <company-icon>
createApp(App).mount('#app');
```

`src/App.vue`

```vue
<template>
  <button>
    <company-icon name="check" size="20px" style="margin-right:6px" />
    Save
  </button>
</template>
```

### 3B) Raw SVG map in Vue (optional)

```vue
<script setup lang="ts">
import { icons } from '@josephaw1022/company-icons-icons';
</script>

<template>
  <span v-html="icons['alert']" style="color:tomato;"></span>
</template>
```