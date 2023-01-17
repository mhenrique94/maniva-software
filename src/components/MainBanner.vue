<template>
  <div>
    <v-card class="banner">
      <img :src="bannerBg" alt="maniva banner" class="bannerBg" />
      <div class="bannerText">
        <h1>Contrate desenvolvedores de software</h1>
        <h2>As habilidades que você precisa para o crescimento que deseja</h2>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "MainBanner",
  computed: {
    bannerBg() {
      return require("@/assets/images/hero.jpg");
    },
    bannerLogo() {
      return require("@/assets/images/logo-no-brand-green.png");
    },
  },
};
</script>

<style scoped>
.banner {
  display: flex;
  width: 100%;
  height: auto;
  max-height: 50vh;
  object-fit: cover;
  object-position: center;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.bannerText {
  position: absolute;
  max-width: 660px;
}

.bannerBg {
  z-index: 0;
}

h1 {
  line-height: 52pt;
  background-color: white;
  padding: 16px;
  display: initial;
  z-index: 1;
}
h2 {
  background-color: #50934f;
  padding: 16px;
  color: white;
  z-index: 1;
}
</style>
