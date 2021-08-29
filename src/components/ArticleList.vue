<template>
  <div id="wrapper">
    <div>
      <div class="container">
        <div
          v-for="article in articles.results"
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
      <div id="paginator">
        <span v-if="isPageExists('previous')">
          <router-link :to="{ name: 'Home', query: { page: getPageNumber('previous') } }">
            Prev
          </router-link>
        </span>
        <span class="current-page">
          {{ getPageNumber('current') }}
        </span>
        <span v-if="isPageExists('next')">
          <router-link :to="{ name: 'Home', query: { page: getPageNumber('next') } }">
            Next
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watch } from "vue"
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { GlobalDataProps } from '../store'

type PageKey = 'current' | 'previous' | 'next'

export default defineComponent({
  name: "ArticleList",
  setup() {
    const store = useStore<GlobalDataProps>()
    const route = useRoute()
    onMounted(() => {
      route.query.page ? store.dispatch('fetchArticleList', route.query.page)
        : store.dispatch('fetchArticleList')
    })
    const articles = computed(() => {
      return store.state.articleList
    })

    const isPageExists = (key: PageKey) => {
      console.log("articles", articles.value)
      if (key === 'next' && articles.value.next !== null) {
        return true
      } else if (key === 'previous' && articles.value.previous !== null) {
        return true
      }
      return false
    }

    const getPageNumber = (key: PageKey) => {
      console.log("currentpage", route.query.page)
      try {
        let urlString: string
        switch (key) {
          case 'next':
            urlString = articles.value.next || ''
            break
          case 'previous':
            urlString = articles.value.previous || ''
            break
          default:
            return route.query.page || 1
        }

        const url = new URL(urlString)
        return url.searchParams.get('page')
      } catch (err) {
        return 1
      }
    }

    const formattedTime = (dateString: string) => {
      const date = new Date(dateString)
      return date.toLocaleDateString()
    }

    console.log("route path: ", route.fullPath)
    watch(() => route.fullPath, (n, o) => {
      console.log(`new: ${n}, old: ${o}`)
      store.dispatch('fetchArticleList', route.query.page)
    })

    return {
      articles,
      formattedTime,
      isPageExists,
      getPageNumber
    }
  }
})
</script>

<style>
#container {
  position: relative;
}

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

#paginator {
  text-align: center;
  padding-top: 500px;
}

a {
  color: black;
}

.current-page {
  font-size: x-large;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;
}
</style>