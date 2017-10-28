import http from './api/http';

const services = {
  http
};

const install = Vue => {
  Vue.prototype.Service = services;
  Vue.prototype.http = http;
};

export default Object.assign(services, { install });