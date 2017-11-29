// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import UI from '../packages/';
import store from '../store';
import Service from '../services';

Vue.config.productionTip = false;
Vue.use(UI);
Vue.use(Service);

Vue.Service = Service;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

document.addEventListener('touchstart', () => {});
