<template>
  <div>
    <v-app-bar color="transparent" dense class="overlay">
      <img
        class="navbar-logo"
        height="25"
        :src="require('@/assets/images/logo-no-brand-green.png')"
      />

      <v-toolbar-title>maniva software</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar-logo {
  margin-left: 32px;
}
.overlay {
  backdrop-filter: blur(4px);
}
</style>
