import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/homeView.vue'
import start from '../views/startView.vue'
// import type from 'postcss-pxtorem/lib/type'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/start',
    name: 'start',
    component: start,
    children: [
      {
        path: 'startPage',
        name: 'startPage',
        component: () => import('../views/secondaryView/startPages.vue')
      }
    ]
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
  },
  {
    path: '/lognin',
    name: 'lognin',
    component: () => import('../views/logninView.vue'),
    children: [
      {
        path: 'loginpage',
        name: 'login',
        component: () => import('../views/secondaryView/loginView.vue')
      },
      {
        path: 'signuppage',
        name: 'signup',
        component: () => import('../views/secondaryView/signupView.vue')
      },
      {
        path: 'forgot',
        name: 'forgot',
        component: () => import('../views/secondaryView/forgotPassword.vue')
      },
      {
        path: 'veCode',
        name: 'veCode',
        component: () => import('../views/secondaryView/getVeCodeView.vue')
      },
      {
        path: 'reset',
        name: 'reset',
        component: () => import('../views/secondaryView/resetPasswordView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
