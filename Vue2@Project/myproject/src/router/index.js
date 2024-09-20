import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/homeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/like',
    name: 'like',
    component: () => import('../views/likeView.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/searchView.vue')
  },
  {
    path: '/sms',
    name: 'notify',
    component: () => import('../views/notifyView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/userView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
