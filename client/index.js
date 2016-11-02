import Vue from 'vue';

const app = new Vue({
  el: 'main',
  data: {
    message: 'Hello Vue!',
  },
});

window.app = app;
