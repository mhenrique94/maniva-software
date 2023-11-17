<template>
  <div v-if="blockMap" class="blog-wrapper">
    <div v-if="pageToRender" class="bw-rendered-page">
      <div class="bwrp-details">
        <p>Criado em {{ pageToRender.created_on }}</p>
        <p>Criado por Marcelo Silva</p>
      </div>
      <NotionRenderer :blockMap="pageToRender.blockmap" fullPage />
    </div>
    <aside class="bw-menu">
      <h4>Índice</h4>
      <a @click="setRender(page)" v-for="(page, index) in posts" :key="index">{{ page.title }}</a>
    </aside>
  </div>
</template>

<script>
import { NotionRenderer, getPageBlocks, getPageTable } from "vue-notion"
export default {
  name: "Blog",
  components: { NotionRenderer },
  data: () => ({ blockMap: null, posts: [], pageToRender: null}),
  async created() {
    this.blockMap = await getPageTable('0fd43881e1d5424b84f5562d4fac34d5?v=7316b3a22dc74e42839e6641c8997fd0')
    for (const entrada of this.blockMap) {
      const block = await getPageBlocks(entrada.id)
      this.posts.push(
        {
          tags: entrada.Tags,
          title: entrada.Nome,
          blockmap: block,
          created_on: this.formattedDate(Object.entries(block)[1][1].value.created_time)
        }
      );

      this.pageToRender = this.posts[0]
    }
  },
  methods: {
    setRender (page) {
      this.pageToRender = page
    },
    formattedDate(stringDate) {
      let objectDate = new Date(stringDate);
      let day = objectDate.getDate()
      let month = objectDate.getMonth()
      let year = objectDate.getFullYear()
      return `${day}/${month}/${year}`
    }
  }
}
</script>
<style>
@import "vue-notion/src/styles.css";

.blog-wrapper {
  display: flex;
  gap: 24px;
  max-width: 1200px;

}

.bw-rendered-page {
  padding: 24px;
  max-width: 900px;
}

.bwrp-details {
  font-size: small;
  color: grey;
}

.bw-menu {
  max-width: 300px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
}
