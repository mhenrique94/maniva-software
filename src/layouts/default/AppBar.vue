<template>
  <v-app-bar flat color="#00af66" class="bar">

    <v-container class="bar-menu">
      <v-app-bar-title class="text-white">
        <v-btn variant="plain" :to="{name: 'Home'}" class="logotype">Maniva</v-btn>
      </v-app-bar-title>

      <div class="bm-buttons">

        <v-btn variant="plain" :to="{name: 'Home'}">
          <v-icon>mdi-home</v-icon>
          <span>Início</span>
        </v-btn>

        <v-btn variant="plain" :to="{name: 'Chat'}">
          <v-icon>mdi-forum-outline</v-icon>
          <span>Ai Chat</span>
        </v-btn>

        <v-btn variant="plain" :to="{name: 'Blog'}">
          <v-icon>mdi-post</v-icon>
          <span>Blog</span>
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
  //
</script>

<style scoped>
.logotype {
  font-size: xx-large;
}
.bar {
  background-color: #00af66;
}
.bar-menu {
  display: flex;
  align-items: center;
}

.bm-buttons {
  display: flex;
  gap: 8px;
  align-items: center;
  color: white;
}
</style>
