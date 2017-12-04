import Vue from 'vue';
import Router from 'vue-router';

const Index = () => import('@/components/index');
const Switch = () => import('@/components/switch');
const Counter = () => import('@/components/counter');
const Button = () => import('@/components/button');
const Toast = () => import('@/components/toast');
const Actionsheet = () => import('@/components/actionsheet');


Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/switch',
      name: 'switch',
      component: Switch
    },
    {
      path: '/counter',
      name: 'counter',
      component: Counter
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/toast',
      name: 'toast',
      component: Toast
    },
    {
      path: '/actionsheet',
      name: 'actionsheet',
      component: Actionsheet
    }
  ]
});
export default router;
