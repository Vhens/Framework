import http from './api/http';

import detail from './detail';

const services = {
  http,
  detail
};

const install = Vue => {
  Vue.prototype.Service = services;
  Vue.prototype.http = http;
};

export default Object.assign(services, { install });
