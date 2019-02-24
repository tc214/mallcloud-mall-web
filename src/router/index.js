import { Home, Error, About, UserCenter, MacPool } from '../views/';
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['../views/layout/index.vue'], resolve),
      redirect: {name: 'Index'},

      children: [{
        meta: {
          name: '首页',
          noRequiredAuth: true
        },
        path: 'index',
        name: 'Index',
        component: Home
      }, {
        meta: {
          name: '关于DevCloud',
          noRequiredAuth: true
        },
        path: 'about',
        name: 'about',
        component: About
      }, {
        meta: {
          name: '用户中心',
          noRequiredAuth: true
        },
        path: 'userCenter',
        name: 'UserCenter',
        component: UserCenter
      }, {
        meta: {
          name: '资源池',
          noRequiredAuth: true
        },
        path: 'macPool',
        name: 'MacPool',
        component: MacPool
      }]
    },
    {
      path: '*',
      component: Error.NotFoundPage
    }
  ]
});
