import Vue from 'vue';
import AppHeader from 'components/app-header/index.vue';

new Vue({
  el: 'main',
  data: {
    message: 'lorem',
  },
  components: {
    'app-header': AppHeader,
  },
});
