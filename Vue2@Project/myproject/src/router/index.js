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
    children: [
      {
        path: 'homelist',
        name: 'homelist',
        component: () => import('../views/secondaryView/homeListView.vue'),
        children: [
          {
            path: 'infomore',
            name: 'infomore',
            component: () => import('../views/secondaryView/infoMoreView.vue')
          }
        ]
      }
    ],
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

// 由于vue-router最新版本3.5.x，引入了promise，push、replace方法会返回一个Promise。
// 当传递参数多次且重复，或是没有写成功或失败的回调。会抛出异常，因此出现上面现象
// 解决方案：重写$router的push和replace方法

// 重写push|replace方法
// 先把VueRouter的push和replace方法保存一份
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function (location, resolve, reject) {
  // 此函数上下文(this指向)为VueRouter的一个实例
  if (resolve && reject) {
    // 如果我们自己指定了成功/失败的回调，则自己传入
    originPush.call(this, location, resolve, reject)
    // 若此时直接使用originPush()，相当于调用了函数originPush()，则函数内的this指向window（内部代码将无法执行）。故应用call或apply方法修改this指向
  } else { // 如果我们没有指定成功/失败的回调，则自动帮我们生成，防止报错
    originPush.call(this, location, () => { }, () => { })
  }
}
// replace方法同理
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}

export default router
