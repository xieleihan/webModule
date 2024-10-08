import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    nav: {
      namespaced: true,
      // 状态
      state: {
        isOpen: true,
      },
      // 只读不写的值
      getters: {
      },
      // 行为
      mutations: {
        toggleIsOpen(state) {
          state.isOpen = !state.isOpen
        }
      },
      actions: {
      },
    },
    content: {
      namespaced: true,
      state: {
        id: '',
        ele: {}
      },
      mutations: {
        setContent(state, payload) {
          state.id = payload.id
          state.ele = payload.ele
        }
      }
    }
  }
})
