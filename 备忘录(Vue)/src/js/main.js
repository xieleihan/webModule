import Vue from "vue";
import App from "../App.vue";
import MyInput from "../components/input.vue"; // 直接引入组件
import numberView from "../components/numberView.vue"
import lists from "../components/lists.vue";

Vue.component('my-input', MyInput); // 全局注册组件
// Vue.component('number-view', numberView);

const app =  new Vue({
    render: h => h(App),
})

app.$mount("#app");