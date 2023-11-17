<template>
  <v-container>
    <v-form @submit.prevent>
      <v-text-field
            v-model="userInput"
            label="Como posso te ajudar?"
            hide-details
            required
      ></v-text-field>
      <v-btn @click="prompt" block class="mt-2">Enviar</v-btn>
    </v-form>
  </v-container>

</template>
<script>
import { getCompletion } from '@/api/ai.js'

export default {
  data() {
    return {
      userInput: null,
      streamArray: []
    }
  },
  methods: {
    async prompt() {
      this.streamArray.push(this.userInput)
      const response = await getCompletion(this.userInput)
      debugger
      this.streamArray.push(response)
    }
  }
}
</script>