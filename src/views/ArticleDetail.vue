<template>
  <Header :user="currentUser"/>

  <div v-if="article" class="grid-container">
    <div>
      <h1 id="title">{{ article.title }}</h1>
      <p id="subtitle">
        本文由 {{ article.author && article.author.username }} 发布于
        {{ formattedTime(article.created) }}
      </p>
      <div v-html="article.body_html" class="article-body"></div>
    </div>
    <div>
      <h3>目录</h3>
      <div v-html="article.toc_html" class="toc"></div>
    </div>
  </div>

  <Footer />

</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue"
import { useStore } from 'vuex'
import { useRoute } from "vue-router"
import Header from "../components/BlogHeader.vue"
import Footer from "../components/BlogFooter.vue"
import { GlobalDataProps } from "@/store"

export default defineComponent({
  name: "ArticleDetail",
  components: {
    Header,
    Footer
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const route = useRoute()
    const currentId = route.params.id
    onMounted(() => {
      store.dispatch('fetchArticleDetail', currentId)
    })

    const article = computed(() => {
      return store.state.article
    })
    const currentUser = computed(() => {
      return store.state.user
    })

    const formattedTime = (dateString: string) => {
      const date = new Date(dateString)
      return date.toLocaleDateString()
    }

    return {
      article,
      currentUser,
      formattedTime
    }
  }
})
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 3fr 1fr;
}

#title {
  text-align: center;
  font-size: x-large;
}

#subtitle {
  text-align: center;
  color: gray;
  font-size: small;
}
</style>

<style>
.article-body p img {
  max-width: 100%;
  border-radius: 50px;
  box-shadow: gray 0 0 20px;
}

.toc ul {
  list-style-type: none;
}

.toc a {
  color: gray;
}
</style>