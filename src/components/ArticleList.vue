<template>
  <div v-for="article in articles" :key="article.url" id="articles">
    <div>
      <span v-for="tag in article.tags" :key="tag" class="tag">
        {{ tag }}
      </span>
    </div>
    <router-link :to="{ name: 'ArticleDetail', params: { id: article.id }}" class="article-title">
      {{ article.title }}
    </router-link>
    <div>{{ formattedTime(article.created) }}</div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from "vue"
export default defineComponent({
  name: "ArticleList",
  data() {
    return {
      articles: ""
    }
  },
  methods: {
    formattedTime: (dateString: string): string => {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    },
  },
  mounted() {
    axios.get('/api/article').then(
      response => {
        console.log(response.data);
        this.articles = response.data;
      }
    )
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