<template>
  <Header />
  
  <ArticleList />

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ArticleList from "../components/ArticleList.vue"
import Header from "../components/BlogHeader.vue"
import Footer from "../components/BlogFooter.vue"
export default defineComponent({
  name: "Home",
  components: {
    Header,
    ArticleList,
    Footer,
  }
})
</script>

<style>

</style>