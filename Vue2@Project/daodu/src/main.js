import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import mynav from './components/navCom.vue'

import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant'

Vue.component('my-nav', mynav)

Vue.use(Vant);
Vue.use(Lazyload, {
  lazyComponent: true,
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
