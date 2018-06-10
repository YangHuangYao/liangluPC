import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import loginRegister_store from './loginRegister';//引入help的store对象
import help_store from './help';//引入help的store对象
export default new vuex.Store({
  modules: {
    loginRegister: loginRegister_store,
    help: help_store
  }
})
