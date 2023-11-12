<template>
  <div v-if="blockMap" class="blog-wrapper">
    <div v-if="pageToRender" class="bw-rendered-page">
      <NotionRenderer :blockMap="pageToRender.blockmap" fullPage />
    </div>
    <aside>
      <h4>Tabela de conteudo</h4>
      <!-- <NotionRenderer :blockMap="blockMap" fullPage /> -->
      <div v-for="(page, index) in posts" :key="index">
        <a @click="setRender(page)">{{ page.title }}</a>
      </div>
    </aside>
  </div>
</template>

<script>
import { NotionRenderer, getPageBlocks } from "vue-notion"
export default {
  components: { NotionRenderer },
  data: () => ({ blockMap: null, posts: [], pageToRender: null}),
  async created() {
    const pageId = "d47aa7000088417a8bb13d5c40d2f9d7"
    this.blockMap = await getPageBlocks(pageId)
    for (const [key, value] of Object.entries(this.blockMap)) {
      const childId = value.value.id.replaceAll("-", "")
      if (value.value.type == "page" && pageId != childId) {
        this.posts.push(
          {
            content: value.value.content,
            title: value.value.properties.title[0][0],
            blockmap: await getPageBlocks(value.value.id)
          }
        );
      }
      this.pageToRender = this.posts[0]
    }
  },
  methods: {
    setRender (page) {
      this.pageToRender = page
    }
  }
}
</script>
<style>
@import "vue-notion/src/styles.css";

.blog-wrapper {
  display: flex;
  gap: 24px;
}

.bw-rendered-page {
  padding: 24px;
}
</style>