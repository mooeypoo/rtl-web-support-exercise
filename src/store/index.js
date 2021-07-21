import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sitedir: 'ltr',
    entries: []
  },
  mutations: {
    changeSiteDir (state, dir) {
      state.sitedir = dir
    },
    changeLang (state, lang) {
      state.sitelang = lang
    },
    addEntry (state, entryOptions) {
      state.entries.push(entryOptions)
    }
  },
  actions: {
  },
  modules: {
  }
})
