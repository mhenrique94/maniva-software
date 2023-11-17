<template>
  <v-main class="page-wrapper">
    <router-view />
  </v-main>
</template>
<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 !important;
}
</style>
