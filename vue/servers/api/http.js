
import Url from 'url';
import Qs from 'qs';
import md5 from 'js-md5';
import axios from 'axios';
import authorize from './authorize';
import { HOST, setAccessToken, getAccessToken, getSiteId, setSiteId } from './base';

export const KEYS = {
  '-1': { code: 'FAIL', info: '失败' },
  0: { code: 'SUCCESS', info: '成功' },
  1: { code: 'TIMEOUT', info: '超时' },
  9999: { code: 'UNKNOWN', info: '系统异常' },
  90000: { code: 'PARAM_NULL', info: '参数为空' },
  90001: { code: 'PARAM_INVALID', info: '不合法的参数' },
  90002: { code: 'OBJECT_NO_EXISTS', info: '不存在的对象' },
  90003: { code: 'DATE_EXPIRE', info: '无效的时间参数' },
  90004: { code: 'DATE_FORMAT_INVALID', info: '不合法的时间格式' },
  90005: { code: 'ACCESS_TOKEN_NULL', info: '未指定AccessToken' },
  90006: { code: 'ACCESS_TOKEN_NO_EXISTS', info: 'AccessToken不存在' },
  90007: { code: 'ACCESS_TOKEN_INVALID', info: '无效的 AccessToken' },
  90008: { code: 'SIGN_NULL', info: '请求没有签名' },
  90009: { code: 'SIGN_VERIFY_FAIL', info: '签名校验失败' },
  90010: { code: 'REQUEST_PARAM_INVALID', info: '请求方法的应用级输入参数错误' },
  90011: { code: 'TOKEN_SECRET_NULL', info: 'token密匙为空' },
  90012: { code: 'TOKEN_SECRET_INVALID', info: 'token密匙不合法' },
  90013: { code: 'ACCESS_TOKEN_EXPIRE', info: '过期的 AccessToken' },
  90014: { code: 'JSON_ANALYZE_ERROR', info: 'JSON解析异常' },
  90015: { code: 'NO_RETURN_RESILT', info: '查询无返回结果' },
  90016: { code: 'IS_NUMBER_ERROR', info: '请输入正确金额' }
};

export const UNAUTHORIZE_KEYS = [90005, 90006, 90007, 90012, 90013]; // 未授权状态值
export const SUCCESS_KEYS = [0];
export const MAINTAIN_KEYS = [30000]; // 系统维护中
export const FREEZE_KEYS = [60030]; // 账户冻结

export const UNNECESSARY_ACCESS_TOKEN = ['/v/index/getSiteInfo', '/v/user/userLogin', 'v/index/getSiteInfo', 'v/user/userLogin'];

const apiSecret = 'N34-M88-!dC4~Y/np1#aKs>0aQ@10!a8';

function autoZero(num) {
  return num < 10 ? `0${num}` : `${num}`;
}

/**
 * 签名
 * 参数拼接后md5
 * a=b&c=d => abcdapiscret
 * @param {*} params
 */
function signQuery(params) {
  const query = params;
  let arr = Object.keys(query);
  arr.push('apiSecret');
  arr = arr.sort();
  let str = '';

  /* eslint-disable no-restricted-syntax */
  /* eslint-disable operator-assignment */
  for (const it of arr) {
    str = str + (it === 'apiSecret' ? `${it}${apiSecret}` : `${it}${query[it]}`);
  }
  // 后端匹配移除了
  // str = str.replace(/\+/g, ' ');
  query.sign = md5(str).toUpperCase();
  return query;
}

/**
 * 构建默认请求参数：siteid、token、sign;移除值为undefined的参数
 * @param {Object} query
 */
function parseQuery(query) {
  const keys = Object.keys(query);
  const params = query || {};
  keys.forEach((key) => {
    if (query[key] === undefined) {
      delete params[key];
    }
  });
  const siteId = getSiteId();
  if (siteId) {
    params.siteId = siteId;
  }

  const date = new Date();
  date.setHours(date.getUTCHours() + 8);
  params.timesamp = `${date.getFullYear()}-${autoZero(date.getMonth() + 1)}-${autoZero(date.getDate())} ${autoZero(date.getHours())}:${autoZero(date.getMinutes())}:${autoZero(date.getSeconds())}`;
  params.platformType = 2;
  return signQuery(params);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

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

const appendAccessToken = (api, uri) => {
  const accessToken = getAccessToken();

  const necessary = (UNNECESSARY_ACCESS_TOKEN.indexOf(api) === -1);

  if (necessary) {
    if (accessToken) {
      uri.query.token = accessToken;
    } else {
      console.warn(`${api} need accesstoken`);
    }
  }
  return uri;
};

/**
 * 发出网络请求
 * @param {String} api
 * @param {Object} options
 */
const http = function (api, options) {
  const headers = {
    Accept: 'application/json',
    'Content-type': 'application/x-www-form-urlencoded'
  };
  const uri = Url.parse(Url.resolve(HOST, api), true, true);

  uri.query = Object.assign({}, uri.query, options.data);

  appendAccessToken(api, uri);

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
    axios(config).then(checkStatus)
      .then(parseJSON)
      .then(data => {
        if (SUCCESS_KEYS.indexOf(data.key) !== -1) {
          resolve(data.response);
        } else if (MAINTAIN_KEYS.indexOf(data.key) !== -1) {
          reject(data);
          window.location.href = data.response;
        } else if (UNAUTHORIZE_KEYS.indexOf(data.key) !== -1) {
          reject(Object.assign({}, data, { status: 401, text: '授权失效' }));
          authorize.fireUnauthorized();
        } else if (FREEZE_KEYS.indexOf(data.key) !== -1) {
          authorize.unauthorize();
          reject(data);
        } else {
          reject(data);
        }
      })
      .catch(e => {
        console.error(e);
        reject(e);
      });
  });
};

export default {
  setAccessToken(token) {
    setAccessToken(token);
  },
  /**
   * 获取token
   */
  getAccessToken() {
    return getAccessToken();
  },
  setSiteId(id) {
    return setSiteId(id);
  },
  /**
   * 获取站点Id
   */
  getSiteId() {
    return getSiteId();
  },
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
  },

};
