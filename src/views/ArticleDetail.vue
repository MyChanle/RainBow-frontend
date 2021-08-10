<template>
  <Header />

  <div v-if="article !== null" class="grid-container">
    <div>
      <h1 id="title">{{ article.title }}</h1>
      <p id="subtitle">
        本文由 {{ article.author.username }} 发布于 {{ formatted_time(article.created) }}
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
import { defineComponent } from "vue";
import axios from "axios";
import Header from "../components/BlogHeader.vue"
import Footer from "../components/BlogFooter.vue"
export default defineComponent({
  name: "ArticleDetail",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      article: null
    }
  },
  mounted() {
    axios.get('/api/article/' + this.$route.params.id).then(
      response => {
        console.log(response);
        this.article = response.data
      }
    );
  },
  methods: {
    formatted_time: (iso_date_string: string): string => {
        const date = new Date(iso_date_string);
        return date.toLocaleDateString();
    }
  }
});
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