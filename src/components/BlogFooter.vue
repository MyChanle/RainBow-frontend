<template>
  <div id="footer">
    <p>BestNico.com</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Footer"
})
</script>

<style>
#footer {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 50px;
    width: 100%;
    background: whitesmoke;
    text-align: center;
    font-weight: bold;
}
</style>