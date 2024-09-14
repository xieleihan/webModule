import Vue from 'vue';
import app from '../app.vue';
import { render } from 'sass';

new Vue({
    render: h => h(app),
}).$mount('#app');