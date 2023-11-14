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
import { NotionRenderer, getPageBlocks } from "vue-notion"
export default {
  name: "Blog",
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
            blockmap: await getPageBlocks(value.value.id),
            created_on: this.formattedDate(value.value.created_time)

          }
        );
      }
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
}

.bw-rendered-page {
  padding: 24px;
  max-width: 600px;;
}

.bwrp-details {
  font-size: small;
  color: grey;
}

.bw-menu {
  min-width: 260px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  height: 100%;
}

.bw-menu > a {
  cursor: pointer;
  padding: 2px 0px 0px 8px;
}

.bw-menu > a:hover {
  background-color: #00af66;
}
</style>