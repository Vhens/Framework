const CACHE_S = 'CACHE_S';
const CACHE_L = 'CACHE_L';
/**
 * sessionStorage存储空间
 */
const S = {
  get (key) {
    let value = sessionStorage.getItem(`${CACHE_S}_${key}`);
    if (/^\{.*\}$/.test(value)) {
      value = JSON.parse(value);
    }
    return value;
  },
  set (key, value) {
    if (typeof value === typeof {}) {
      value = JSON.stringify(value);
    }
    return sessionStorage.setItem(`${CACHE_S}_${key}`, value);
  },
  remove (key) {
    return sessionStorage.removeItem(`${CACHE_S}_${key}`);
  }
};
/**
 * localStorage存储空间
 */
const L = {
  get (key) {
    let value = localStorage.getItem(`${CACHE_L}_${key}`);
    if (/^\{.*\}$/.test(value)) {
      value = JSON.parse(value);
    }
    return value;
  },
  set (key, value) {
    if (typeof value === typeof {}) {
      value = JSON.stringify(value);
    }
    return localStorage.setItem(`${CACHE_L}_${key}`, value);
  },
  remove (key) {
    return localStorage.removeItem(`${CACHE_L}_${key}`);
  }
};
export default {
  S,
  L
};

