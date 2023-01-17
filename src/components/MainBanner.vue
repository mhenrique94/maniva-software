<template>
  <div>
    <v-card class="banner">
      <img :src="bannerBg" alt="maniva banner" class="bannerBg" />
      <v-container class="bannerText">
        <h1>Contrate desenvolvedores de software</h1>
        <h2>As habilidades que você precisa para crescer como merece</h2>
        <v-card-text class="bannerInnerDisclaimer">
          Seu site é <span class="highlighted">a cara da sua empresa</span> e o
          primeiro <span class="highlighted">vislumbre</span> do que sua marca
          pode oferecer. Ao aproveitar o poder do design e desenvolvimento Web
          <span class="highlighted">modernos</span>, ele também pode ser sua
          plataforma de lançamento, impulsionando os usuários para
          <span class="highlighted">sua história</span> e diferenciação
          <span class="highlighted"> exclusiva</span>.
        </v-card-text>
      </v-container>
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
    bannerImg() {
      return require("@/assets/images/logo-no-brand-green.png");
    },
  },
};
</script>

<style scoped>
.banner {
  display: flex;
  width: 100%;
  max-height: 100vh;
  object-fit: cover;
  object-position: center;
  align-items: center;
}

.bannerText {
  position: absolute;
  margin: auto 10%;
  z-index: 1;
  padding: 32px;
  /* background-color: #50934f; */
  width: 860px;
}

.bannerBg {
  z-index: 0;
}

h1 {
  line-height: 52pt;
  background-color: white;
  padding: 16px;
  display: initial;
  font-weight: 700;
}
h2 {
  background-color: #50934f;
  padding: 16px;
  color: white;
  font-weight: 300;
}

.bannerInnerDisclaimer {
  font-size: 14pt;
  max-width: 700px;
  line-height: 1.8rem;
  backdrop-filter: blur(2px);
  mix-blend-mode: difference;
  background-color: whitesmoke;
  filter: opacity(0.9);
}

.highlighted {
  position: relative;
  font-weight: 700;
  background-color: none;
}
.highlighted:before {
  background-color: #a6c17b;
  content: "";
  position: absolute;
  width: calc(100% + 4px);
  height: 100%;
  left: -2px;
  bottom: 0;
  z-index: -1;
  transform: rotate(-2deg);
}
</style>
