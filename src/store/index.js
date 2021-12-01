import Vue from 'vue'
import Vuex from 'vuex'

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import * as modules from './modules';

console.log(modules)

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})

export default store;