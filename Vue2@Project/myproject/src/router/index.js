import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/homeView.vue'
import start from '../views/startView.vue'
// import type from 'postcss-pxtorem/lib/type'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/start'
  },
  {
    path: '/start',
    name: 'start',
    component: start
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      type: 'all'
    }
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
  },
  {
    path: '/gps',
    name: 'gps',
    component: () => import('../views/secondaryView/gpsView.vue')
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('../views/error404View.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
