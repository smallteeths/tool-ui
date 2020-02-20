<template>
  <div>
    <div class="rancher-header">
      RANCHER-UI-FACEMASK
    </div>
    <PlugInPage></PlugInPage>
  </div>
</template>

<script>
import PlugInPage from './PlugInPage.vue'

export default {
  props: {
    msg: String
  },
  components: {
    PlugInPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.rancher-header {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(248, 248, 248, 1);
  margin-bottom: 20px;
  font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
  font-weight: 700;
  font-style: normal;
  font-size: 15px;
  height: 100px;
}
</style>