import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import globalVariable from './api/global_variable.js'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.GLOBAL = globalVariable

new Vue({
  render: h => h(App),
}).$mount('#app')
