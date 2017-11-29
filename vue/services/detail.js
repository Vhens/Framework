import http from './api/http';

const DETAIL = '/api/detail/detail/0';

const detail = function () {
  return new Promise((resolve, reject) => {
    http.get(DETAIL).then(res => {
      resolve(res);
    })
    .catch(e => {
      reject(e);
    });
  });
};

export default { detail };
