/*eslint-disable */
export const to = (url, $router) => {
  if (/^javas/.test(url) || !url) {
    return false;
  }
  const useRouter = typeof url === 'object' || ($router && typeof url === 'string' && !/http/.test(url));
  if (useRouter) {
    if (typeof url === 'object' && url.replace === true) {
      $router.replace(url);
    } else {
      url === 'back' ? $router.go(-1) : $router.push(url);
    }
  } else {
    window.location.href = url;
  }
};

export const getUrl = (url, $router) => {
  if ($router && !$router._history && typeof url === 'string' && !/http/.test(url)) {
    return `#!${url}`;
  }
  return url && typeof url !== 'object' ? url : 'javascript:void(0);';
}; 