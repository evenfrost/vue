import Vue from 'vue';
import App from 'components/app';
import store from 'store';

new Vue({
  el: 'main',
  template: '<App />',
  store,
  components: {
    App,
  },
});
