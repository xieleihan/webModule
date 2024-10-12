import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    }
];

const router= createRouter({
    history: createWebHistory(), // 使用 HTML5 history 模式
    routes
});

export default router;
