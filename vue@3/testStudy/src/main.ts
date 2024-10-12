import { createApp } from 'vue';
import App from './App.vue';
import './static/css/base.css'
import router from './router/index' 

const app = createApp(App);

app.use(router);
app.mount('#app');