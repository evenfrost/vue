import Vue from 'vue';

const app = new Vue({
  el: 'main',
  data: {
    message: 'lorem',
  },
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>',
});

window.app = app;
