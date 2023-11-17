<template>
  <div class="gpt-wrapper">
    <chat-gpt />

  </div>
</template>

<script>
import chatGpt from '@/components/shared/chat.vue'
export default {
  components: {
    chatGpt
  }
}
</script>

<style>
.gpt-wrapper {
  width: 100%;
  max-width: 800px;
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 64px;
  align-items: center;
  justify-content: center;
  background-color: #e9fff6;
  border: 1px solid #dfdfdf;
  margin: 80px auto 16px auto;
  border-radius: 8px;
}
</style>