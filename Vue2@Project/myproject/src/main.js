import Vue from 'vue'
import App from './App.vue'
import router from './router'
import navs from './components/navCom.vue'
import nearby from './components/nearbyCom.vue'
import listtable from './components/listTableCom.vue'
import notification from './components/notificationCom.vue'
import likeTable from './components/likeTableCom.vue'
import returnBtn from './components/returnBtnCom.vue'
import share from './components/shareCom.vue'
import reviews from './components/reviewsCom.vue'
import temporary from './components/temporaryStorageCom.vue'

import 'amfe-flexible'
import './assets/css/color.less'

import { Toast, Icon, Swipe, SwipeItem, Popup, Dialog, NoticeBar, SwipeCell, Button, Cell, CellGroup, NumberKeyboard, Field, DatetimePicker, PasswordInput } from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false

Vue.component('nav-bar', navs)
Vue.component('myNearby', nearby)
Vue.component('list-table', listtable)
Vue.component('my-notification', notification)
Vue.component('like-table', likeTable)
Vue.component('return-btn', returnBtn)
Vue.component('my-share', share)
Vue.component('my-reviews', reviews)
Vue.component('temporary-storage', temporary)

Vue.use(Toast)
Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Popup)
Vue.use(Dialog)
Vue.use(NoticeBar)
Vue.use(SwipeCell)
Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(NumberKeyboard)
Vue.use(Field)
Vue.use(DatetimePicker)
Vue.use(PasswordInput)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
