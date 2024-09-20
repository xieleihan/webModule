import Vue from 'vue'
import App from './App.vue'
import router from './router'
import navs from './components/navCom.vue'

Vue.config.productionTip = false

Vue.component('nav-bar', navs)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
