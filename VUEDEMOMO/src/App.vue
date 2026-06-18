<template>
<<<<<<< HEAD
  <div id="app">
    <BackgroundEffect />
    <router-view></router-view>
  </div>
</template>

<script>
import BackgroundEffect from "./components/BackgroundEffect.vue";

export default {
  name: "App",
  components: {
    BackgroundEffect
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #000;
  color: #fff;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background-color: #000;
}
</style>
=======
  <RouterView />
</template>
>>>>>>> 4727ca0781c0ffb493419247cf75246c87175601
