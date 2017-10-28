import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import state from './state';
import mutations from './mutations';

import user from './modules/user';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    user
  },
  strict: debug,
});

export default store;