import Vue from 'vue'
import App from './App.vue'
import router from './router'
import navs from './components/navCom.vue'
import nearby from './components/nearbyCom.vue'
import listtable from './components/listTableCom.vue'
import notification from './components/notificationCom.vue'
import likeTable from './components/likeTableCom.vue'
import 'amfe-flexible'
import './assets/css/color.less'

Vue.config.productionTip = false

Vue.component('nav-bar', navs)
Vue.component('myNearby', nearby)
Vue.component('list-table', listtable)
Vue.component('my-notification', notification)
Vue.component('like-table', likeTable)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
