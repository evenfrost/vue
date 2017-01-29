import VueRouter from 'vue-router';

import Root from 'components/root';
import Test from 'components/test';
import User from 'components/user';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Root,
    }, {
      path: '/test',
      component: Test,
    }, {
      path: '/user/:id',
      component: User,
    },
  ],
});
