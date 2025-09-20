<!-- src/App.vue -->
<script setup lang="ts">
const icons = ["check", "x", "alert"];
</script>

<template>
  <main class="container">
    <h1>Company Icons Demo</h1>

    <section class="blurb">
      <p>
        This app uses the web component <code>&lt;company-icon&gt;</code> from
        the private GitHub Packages package
        <code>@josephaw1022/company-icons-web</code>.
      </p>

      <p>
        Because it’s private, authenticate with an
        <strong>environment variable</strong>
        (no token stored in files). Map the scope to GitHub Packages, then set
        <code>NODE_AUTH_TOKEN</code> when installing:
      </p>

      <pre class="code"><code># one-time scope mapping (writes no secrets)
npm config set @josephaw1022:registry https://npm.pkg.github.com
npm config set always-auth true

# per shell (or CI): provide the token via env var
export NODE_AUTH_TOKEN=$(gh auth token)   # or a PAT with read:packages

# install and import
npm i @josephaw1022/company-icons-web
# in main.ts
import '@josephaw1022/company-icons-web'</code></pre>

      <p>
        The icon component is a TypeScript library built with
        <strong>Lit</strong>. It’s framework-agnostic, so
        <code>&lt;company-icon&gt;</code> works in React, Vue, Angular, Svelte,
        Blazor, or plain HTML.
      </p>
    </section>

    <section class="row">
      <company-icon name="check" size="20px" style="margin-right: 8px" />
      <span>Save successful</span>
    </section>

    <section class="row">
      <company-icon
        name="alert"
        size="20px"
        color="tomato"
        label="Warning"
        style="margin-right: 8px"
      />
      <span>Something needs your attention</span>
    </section>

    <h2>Available icons</h2>
    <section class="grid">
      <div v-for="name in icons" :key="name" class="cell">
        <company-icon :name="name" size="24px" />
        <div class="name">{{ name }}</div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  max-width: 760px;
  margin: 60px auto;
  padding: 0 20px;
}
h1 {
  font-size: 2rem;
  margin-bottom: 12px;
}
h2 {
  font-size: 1.1rem;
  margin: 18px 0 8px;
  color: #444;
}
.blurb p {
  margin: 10px 0;
  color: #333;
}
.code {
  background: #0f172a;
  color: #e2e8f0;
  padding: 10px 12px;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 0.9rem;
}
.row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 12px 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 12px;
  margin-top: 8px;
}
.cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #666;
}
.name {
  margin-top: 6px;
}
</style>
