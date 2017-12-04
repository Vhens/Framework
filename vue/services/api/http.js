import Url from 'url';
import Qs from 'qs';
import axios from 'axios';

import storage from './storage';

import { HOST } from './config';

/*eslint-disable */

function addzero(num) {
  return num < 10 ? `0${num}` : `${num}`;
}

storage.S.set('qq', 'ddddddd');
console.log(storage.S.get('qq'));
storage.L.set('ww', 'dd4545');
console.log(storage.L.get('ww'));
/**
 * 构建默认请求参数：siteid、token、sign;
 * 移除值为undefined的参数
 * @param {Object} query
 */
function parseQuery(query) {
  const keys = Object.keys(query);
  const params = query || {};
  keys.forEach(key => {
    if (query[key] === undefined) {
      delete params[key];
    }
  });
  const date = new Date();
  date.setHours(date.getUTCHours() + 8);
  params.timesamp = `${date.getFullYear()}-${addzero(date.getMonth() + 1)}-${addzero(date.getDate())} ${addzero(date.getHours())}:${addzero(date.getMinutes())}:${addzero(date.getSeconds())}`;
  return params;
}

/**
 * 响应状态码检查
 * @param {Response} response http response
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * 反序列化Response
 * @param {Response} response http response
 */
function parseJSON(response) {
  try {
    if (response.json) {
      return response.json();
    } else if (response.data) {
      return response.data;
    }
  } catch (e) {
    console.warn(e);
  }
  return response.data || response;
}

/**
 * 发出网络请求
 * @param {String} api
 * @param {Object} options
 */
const http = function(api, options) {
  const headers = {
    Accept: 'application/json',
    'Content-type': 'application/x-www-form-urlencoded'
  };
  const uri = Url.parse(Url.resolve(HOST, api), true, true);

  uri.query = Object.assign({}, uri.query, options.data);

  uri.query = parseQuery(uri.query);
  delete uri.search;
  const finalUrl = Url.resolve(HOST, api);
  const config = Object.assign({}, { headers }, options, { params: uri.query, data: Qs.stringify(uri.query) });
  if (options.method && options.method.toUpperCase() === 'POST') {
    delete config.params;
    delete config.query;
  }
  config.url = finalUrl;
  config.timeout = 5000;
  return new Promise((resolve, reject) => {
    axios(config)
      .then(checkStatus)
      .then(parseJSON)
      .then(data => {
        resolve(data);
      })
      .catch(e => {
        console.error(e);
        reject(e);
      });
  });
};

export default {
/**
   * http get Request
   * @param {String} url
   * @param {Object} params
   * @return Promise
   */
  get(url, params = {}) {
    const data = params;
    return http(url, Object.assign({}, { data, method: 'get' }));
  },
  /**
   * http post
   * @param {String} url
   * @param {Object} params
   * @return Promise
   */
  post(url, data = {}) {
    return http(url, Object.assign({}, { data, method: 'post' }));
  }
};
