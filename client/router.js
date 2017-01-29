import VueRouter from 'vue-router';

import Root from 'components/root';
import Foo from 'components/foo';
import Bar from 'components/foo/bar';
import User from 'components/user';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Root,
    }, {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: 'bar',
          component: Bar,
        },
      ],
    }, {
      path: '/user/:id',
      component: User,
    },
  ],
});
