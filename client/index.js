import Vue from 'vue';
import VueRouter from 'vue-router';
import router from 'router';
import Root from 'components/root';
import Test from 'components/test';
import store from 'store';

Vue.use(VueRouter);

new Vue({
  el: 'main',
  store,
  router,
});
