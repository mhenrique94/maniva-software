<template>
  <NotionRenderer :blockMap="blockMap" fullPage />
</template>

<script>
import { NotionRenderer, getPageBlocks } from "vue-notion"
export default {
  components: { NotionRenderer },
  data: () => ({ blockMap: null }),
  async created() {
    this.blockMap = await getPageBlocks("d47aa7000088417a8bb13d5c40d2f9d7")
  }
}
</script>
<style>
@import "vue-notion/src/styles.css";
</style>