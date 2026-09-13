<!-- https://vike.dev/Layout -->

<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: sans-serif;
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