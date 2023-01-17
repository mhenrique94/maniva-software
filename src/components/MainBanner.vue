<template>
  <div>
    <img :src="bannerBg" alt="maniva banner" class="banner" />
  </div>
</template>
<script>
export default {
  name: "MainBanner",
  computed: {
    bannerBg() {
      return require("@/assets/images/hero.jpg");
    },
  },
};
</script>

<style scoped>
.banner {
  width: 100%;
  height: auto;
  max-height: 50vh;
  object-fit: cover;
}
</style>
