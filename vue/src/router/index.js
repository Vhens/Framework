import Vue from 'vue';
import Router from 'vue-router';

const Index = () => import('@/components/index');
const Switch = () => import('@/components/switch');
const Counter = () => import('@/components/counter');
const Button = () => import('@/components/button');
const Toast = () => import('@/components/toast');
const Actionsheet = () => import('@/components/actionsheet');
const Popup = () => import('@/components/popup');
const Row = () => import('@/components/row');
const Accordion = () => import('@/components/accordion');
const Slideout = () => import('@/components/slideout');
const Rater = () => import('@/components/rater');


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
    },
    {
      path: '/popup',
      name: 'popup',
      component: Popup
    },
    {
      path: '/row',
      name: 'row',
      component: Row
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: Accordion
    },
    {
      path: '/slideout',
      name: 'slideout',
      component: Slideout
    },
    {
      path: '/rater',
      name: 'rater',
      component: Rater
    }
  ]
});
export default router;
