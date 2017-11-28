const CACHE_ACCESS_TOKEN = 'CACHE_ACCESS_TOKEN';
let accessToken = null;

/**
 * 设置accessToken
 * @param {*} token
 */
export const setAccessToken = function (token) {
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

/**
 * 获取AccessToken
 */
export const getAccessToken = function () {
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

export default {
  getAccessToken,
  setAccessToken
};
