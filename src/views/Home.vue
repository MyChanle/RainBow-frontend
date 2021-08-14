<template>
  <HomeHeader />

  <article-list />

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import ArticleList from "../components/ArticleList.vue"
import HomeHeader from '../components/HomeHeader.vue'
import Footer from "../components/BlogFooter.vue"

export default defineComponent({
  name: "Home",
  components: {
    HomeHeader,
    ArticleList,
    Footer
  }
})
</script>

<style>

</style>