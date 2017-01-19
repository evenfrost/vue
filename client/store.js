import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state, { amount }) {
      state.count += amount;
    },
  },
  actions: {
    increment({ commit }, { amount }) {
      commit('increment', { amount });
    },
  },
});
