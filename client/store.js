import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    multiplyByTen({ count }) {
      return count * 10;
    },
  },
  mutations: {
    increment(state, { amount }) {
      state.count += amount;
    },
  },
  actions: {
    increment({ commit }, { amount }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('increment', { amount });
          resolve();
        }, 1000);
      });
    },
  },
});
