<template>
  <div class="container" id="app_header">
    <div class="row justify-content-center">
      <div>
        <br>
        <br>
        <br>
        <img
          :src="image && image.url"
          alt=""
          class="headline-icon"
        >
      </div>
    </div>
    <div class="row">
      <h2 class="font-headline mt-2 col-12 text-h-center" v-bind:style="{ fontSize: headlineFontSize + 'px' }">Best
        Nico
        Blog</h2>
    </div>
    <div class="row">
      <h5 class="font-subheadline col-12 text-h-center" v-bind:style="{ fontSize: subheadlineFontSize + 'px' }">Learn
        advanced Python/AWS/TS
        topics</h5>
      <p class="font-subheadline col-12 text-h-center">🐞🔍🏃🏻‍♂️💦💨💨💨</p>
    </div>
    <br class="mt-4">
    <div class="d-flex justify-content-between">
      <ul class="nav">
          <li class="nav-item ">
              <a class="nav-link font-navitem" href="/">Home</a>
          </li>
          <li class="nav-item">
              <a class="nav-link font-navitem" href="/topic/">Topics</a>
          </li>
          <li class="nav-item">
              <a class="nav-link font-navitem" href="/projects/">Projects</a>
          </li>
          <li class="nav-item">
              <a class="nav-link font-navitem" href="/link/">Links</a>
          </li>

      </ul>
      <div
        class="row align-items-center d-none d-sm-block"
        style="line-height: 40px; padding-right: 20px;"
      >
        <ul class="nav">
          <li class="nav-item">
            <a href="https://github.com/stacklens" target="_blank">
              <i class="nav-icon">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: "HomeHeader",
  setup() {
    const image = {
      url: require('@/assets/pylogo.png')
    }
    const headlineFontSize = 30
    const subheadlineFontSize = 20
    return {
      image,
      headlineFontSize,
      subheadlineFontSize
    }
  }
})
</script>

<style>
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.justify-content-center {
  text-align: center;
}
</style>