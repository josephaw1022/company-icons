<!-- src/App.vue -->
<script setup lang="ts">
const icons = ["check", "x", "alert"];
</script>

<template>
  <main class="container">
    <div class="app-badge" title="This is the Vue app">
      <img
        alt="Vue"
        class="app-badge__logo"
        src="https://vuejs.org/images/logo.png"
      />
      <span class="app-badge__text">Vue App</span>
    </div>

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
        (no token stored in files).
      </p>

      <pre class="code"><code># one-time scope mapping (writes no secrets)
export NODE_AUTH_TOKEN=$(gh auth token)   # or a PAT with read:packages

# install and import
npm i @josephaw1022/company-icons-web
# in main.ts
import '@josephaw1022/company-icons-web'
</code></pre>

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
  text-align: left;
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

.app-badge {
  position: relative;
  margin: 20px auto;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  border-radius: 999px;
  background: rgba(245, 245, 245, 0.95);
  border: 2px solid #e5e7eb;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-size: 1.3rem;
  font-weight: 700;
}

.app-badge__logo {
  height: 28px;
  width: 28px;
}

.app-badge__text {
  font-size: 1.3rem;
  font-weight: 700;
  color: #111827;
}
</style>
