import Vue from 'vue'
import Vuex from 'vuex'
import module from './modules/index'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    module
  }
})
