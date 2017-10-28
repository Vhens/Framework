/**
 *  @description 生成最基本的检查对象
 *  @param {String} key：关键字
 *  @param {Bool|Undefined} required：必填
 *  @param {Function} type：基本对象构造函数，数据类型
 *  @return {Object} 返回检查的基本对象
 */
export const checkMap = (key, required = true, type = String) => {
  if (typeof required === 'function') {
    type = required;
    required = true;
  }
  return {
    key,
    required,
    type
  };
};

const hasValue = function (val) {
  return !(val === null || val === undefined);
};
/**
 *  @description 数据类型检查
 *  @param {object} input：被检查对象
 *  @param {object} mapData：检查规则
 *  @return 返回是否检查通过的布尔值
 */
export const checkData = (input, mapData) => {
  const keys = Object.keys(mapData);
  const flag = keys.every(key => {
    if (!Object.hasOwnProperty.call(input, key)) {
      return false;
    }
    const val = input[key];
    if (mapData[key].required && !hasValue(val)) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`${key} is required`);
        console.warn(input);
      }
      return false;
    } else if (!mapData[key].required && !val) {
      return true;
    }
    const type = mapData[key].type;
    if (type === Boolean) {
      return ['string', 'boolean'].includes(typeof val);
    } else if (type === String) {
      return (typeof val) === 'string' || (typeof val) === 'number';
    } else if (type === Number) {
      if ((typeof val) === 'string') {
        return !isNaN(val);
      }
      return (typeof val) === 'number' && !isNaN(val);
    } else if (type === Array) {
      return Array.isArray(val);
    } else if (type === Object) {
      return (typeof val === 'object' && val !== null);
    }
    if (process.env.NODE_ENV === 'development') {
      console.warn(key, 'map fail');
    }
    return false;
  });
  return flag;
};

/**
 * 转换map数据
 *  @description 数据格式转换，在格式检查通过后调用
 *  @param {Object} input：被转换对象
 *  @param {Object} mapData：转换规则
 *  @return 返回数据格式转换后的深拷贝对象
 */
export const reviseData = (input, mapData) => {
  const keys = Object.keys(mapData);
  const obj = {};

  keys.forEach(key => {
    if (Object.hasOwnProperty.call(input, key)) {
      const val = input[key];
      const type = mapData[key].type;
      obj[mapData[key].key] = val;
      if (type === Boolean && (typeof val) === 'string') {
        obj[mapData[key].key] = (val === 'T');
      } else if (type === Number && (typeof val) === 'string') {
        obj[mapData[key].key] = +val;
      } else if ([Object, Array].includes(type)) {
        obj[mapData[key].key] = JSON.parse(JSON.stringify(val));
      }
    }
  });
  return obj;
};

let host = 'http://peach.test.com/';

if (process.env.NODE_ENV === 'development') {
  host = 'http://peach.test.com/';
} else if (process.env.NODE_ENV === 'test') {
  host = 'http://peach.test.com/';
}

export const HOST = host;

const CACHE_ACCESS_TOKEN = 'CACHE_ACCESS_TOKEN';
let accessToken = null;

/**
 * 获取AccessToken
 */
export const getAccessToken = () => {
  if (accessToken !== null) {
    return accessToken;
  }
  try {
    const storage = window.sessionStorage;
    if (storage) {
      const tokenString = storage.getItem(CACHE_ACCESS_TOKEN);
      if (tokenString !== undefined) {
        accessToken = tokenString;
        return accessToken;
      }
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

/**
 * 设置accessToken
 * @param {*} token
 */
export const setAccessToken = token => {
  if (token === undefined || token === null) {
    return;
  }
  try {
    accessToken = token;
    const storage = window.sessionStorage;
    if (storage) {
      storage.setItem(CACHE_ACCESS_TOKEN, token);
    }
  } catch (e) {
    console.error(e);
  }
};


// site id

const CACHE_SITE_ID = 'CACHE_SITE_ID';
let siteId = null;

/**
 * 获取siteid
 */
export const getSiteId = () => {
  if (siteId !== null) {
    return siteId;
  }
  try {
    const storage = window.sessionStorage;
    if (storage) {
      const id = storage.getItem(CACHE_SITE_ID);
      if (id !== null) {
        siteId = id;
        return id;
      }
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

/**
 * 设置accessToken
 * @param {*} token
 */
export const setSiteId = id => {
  if (id === undefined || id === null) {
    return;
  }
  try {
    siteId = id;
    const storage = window.sessionStorage;
    if (storage) {
      storage.setItem(CACHE_SITE_ID, id);
    }
  } catch (e) {
    console.error(e);
  }
};

export default {
  HOST,
  checkMap,
  checkData,
  reviseData,
  getAccessToken,
  setAccessToken,
  getSiteId,
  setSiteId
};
