<template>
  <div id="wrapper">
    <div>
      <div class="container">
        <div
          v-for="article in articles"
          :key="article.url"
          id="articles"
          class="row"
          >
          <router-link
            :to="{ name: 'ArticleDetail', params: { id: article.id } }"
            class="article-title font-title padding-lr-20"
            style="font-size: 18px"
          >
            {{ article.title }}
          </router-link>
          <div class="row">
            <p class="font-size-xs, padding-lr-20">
              {{ formattedTime(article.created) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue"
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'

export default defineComponent({
  name: "ArticleList",
  setup() {
    const store = useStore<GlobalDataProps>()
    onMounted(() => {
      store.dispatch('fetchArticleList')
    })
    const articles = computed(() => {
      return store.state.articleList
    })

    const formattedTime = (dateString: string) => {
      const date = new Date(dateString)
      return date.toLocaleDateString()
    }

    return {
      articles,
      formattedTime
    }
  }
})
</script>

<style>
#article {
  padding: 10px;
}

.article-title {
  font-size: large;
  font-weight: bolder;
  color: black;
  text-decoration: none;
  padding: 5px 0 5px 0;
}

.tag {
  padding: 2px 5px 2px 5px;
  margin: 5px 5px 5px 0;
  font-family: Georgia, Arial, sans-serif;
  font-size: small;
  background-color: #4e4e4e;
  color: whitesmoke;
  border-radius: 5px;
}
</style>