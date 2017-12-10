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
const Input = () => import('@/components/input');
const Textarea = () => import('@/components/textarea');
const Card = () => import('@/components/card');
const List = () => import('@/components/list');
const Message = () => import('@/components/message');
const Badge = () => import('@/components/badge');
const Divider = () => import('@/components/divider');
const Notice = () => import('@/components/notice');


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
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    },
    {
      path: '/textarea',
      name: 'textarea',
      component: Textarea
    },
    {
      path: '/card',
      name: 'card',
      component: Card
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/badge',
      name: 'badge',
      component: Badge
    },
    {
      path: '/divider',
      name: 'divider',
      component: Divider
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice
    }
  ]
});
export default router;
