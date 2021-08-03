import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sitelang: 'en',
    sitedir: 'ltr',
    entries: []
  },
  mutations: {
    changeSiteDir (state, dir) {
      state.sitedir = dir
    },
    changeSiteLang (state, lang) {
      state.sitelang = lang
    },
    addEntry (state, entryOptions) {
      state.entries.push(entryOptions)
    }
  },
  getters: {
    getSiteLang: (state) => {
      return state.sitelang
    },
    getEntries: (state) => {
      return state.entries
    }
  },
  actions: {
  },
  modules: {
  }
})
