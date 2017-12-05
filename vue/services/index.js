import http from './api/http';

import detail from './detail';
import nav from './nav';

const services = {
  http,
  detail,
  nav
};

const install = Vue => {
  Vue.prototype.Service = services;
  Vue.prototype.http = http;
};

export default Object.assign(services, { install });
