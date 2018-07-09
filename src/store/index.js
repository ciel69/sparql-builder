import Vue from 'vue'
import Vuex from 'vuex'

import listRow from './modules/listRow'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    listRow
  },
  strict: debug
})
