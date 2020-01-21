import Vue from 'vue'
import Vuex from 'vuex'

import home from './module/home'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },

  getters: {
    hotKeys (state) {
      return state.home.hotKeys
    }
  },

  mutations: {
  },

  actions: {
  },

  modules: {
    home
  }
})
