<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "App"
})
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200;300;400;500;600;700;900&amp;display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&amp;display=swap");
#app {
    font-family: Georgia, Arial, sans-serif;
    margin-left: 40px;
    margin-right: 40px;
}
</style>
