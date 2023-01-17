<template>
  <MainBanner />
  <v-container class="box-content-one">
    <div class="bco-text">
      <p>
        Fornecemos aos nossos clientes orientação estratégica que vai além da
        criação de um site otimizado e esteticamente cativante.
      </p>
      <p>
        Pegaremos sua visão inovadora e forneceremos estratégia de design,
        orientação criativa e expertise para criar uma experiência digital para
        vários dispositivos que atenda aos seus clientes e setor.
      </p>
    </div>
    <img
      :src="photoProfessional"
      alt="working professional"
      class="photoProfessional"
    />
  </v-container>
</template>

<script>
import { defineComponent } from "vue";

// Components
import MainBanner from "../components/MainBanner.vue";
export default defineComponent({
  name: "HomeView",

  components: { MainBanner },
  computed: {
    photoProfessional() {
      return require("@/assets/images/working_professional.jpg");
    },
  },
});
</script>

<style scoped>
.box-content-one {
  width: 70%;
  padding: 5% 0;
  display: flex;
  justify-content: center;
  gap: 52px;
  font-size: 18pt;
  align-items: center;
  height: 100vh;
}
.bco-text {
  width: 34%;
}
p {
  margin-bottom: 24px;
}
</style>
