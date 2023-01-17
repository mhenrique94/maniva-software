<template>
  <MainBanner />
  <div>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ratione,
    quia illo perspiciatis exercitationem, iste, repudiandae facilis sit libero
    molestiae incidunt reprehenderit tempore quos! Qui asperiores porro dolorem
    enim magnam?
  </div>
</template>

<script>
import { defineComponent } from "vue";

// Components
import MainBanner from "../components/MainBanner.vue";
export default defineComponent({
  name: "HomeView",

  components: { MainBanner },
});
</script>
