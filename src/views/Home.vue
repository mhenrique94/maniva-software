<template>
  <div class="home-wrapper">
    <div class="hw-hero">
      <h1>Nós construímos o seu SOFTWARE.</h1>
      <div class="hero-technologies">
        <v-avatar
          color="green-lighten-2"
        >
          <v-icon icon="mdi-vuejs"></v-icon>
        </v-avatar>
        <v-avatar
          color="orange-darken-2"
        >
          <v-icon icon="mdi-language-html5"></v-icon>
        </v-avatar>
        <v-avatar
          color="yellow-lighten-2"
        >
          <v-icon icon="mdi-language-javascript"></v-icon>
        </v-avatar>
        <v-avatar
          color="blue-darken-2"
        >
          <v-icon icon="mdi-language-css3"></v-icon>
        </v-avatar>
        <v-avatar
          color="black"
        >
          <v-icon icon="mdi-language-python"></v-icon>
        </v-avatar>
      </div>
    </div>
    <div class="hw-why-section">
      <div class="ws-left-child">
        <h2 class="text-white">Por que <span class="text-green-lighten-2">maniva?</span></h2>
        <h3 class="text-white">Nós ajudamos nossos clientes a desbloquear valor .....</h3>
        <v-btn variant="flat" rounded="0" class="mt-2">Consulte-nos</v-btn>
      </div>
      <div class="ws-right-child"></div>
    </div>
  </div>
</template>
<style>
.hw-why-section {
  width: 100%;
}
.hw-hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: flex-start;
  padding: 10ch;
}

.hw-hero > h1 {
  font-weight: 900;
  font-size: 66pt;
}

.hw-hero > .hero-technologies {
  display: flex;
  gap: 24px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 5ch;
}

.hw-why-section {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;

}

.hw-why-section > .ws-left-child {
  width: 50%;
}

.hw-why-section > .ws-right-child {
  background-image: url('src/assets/images/maniva-frame.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 100%;
  width: 100%;
  max-width: 100px;
}
</style>