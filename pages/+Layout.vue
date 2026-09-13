<!-- https://vike.dev/Layout -->

<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: var(--font-ui);
  color: var(--color-text-primary);
  background: var(--color-root-50);
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
</style>

<style scoped>
.layout {
  max-width: 1400px;
  margin: auto;
}
</style>