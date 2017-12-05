import http from './api/http';

const NAV_LIST = '/api/nav/navlist';

const nav = () => {
  return new Promise((resolve, reject) => {
    http.get(NAV_LIST).then(res => {
      resolve(res);
    })
    .catch(e => {
      reject(e);
    });
  });
};

export default { nav };
