<template>
  <div id='app' class="rancher-layout">
    <Main msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Main from './page/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
.rancher-layout {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
