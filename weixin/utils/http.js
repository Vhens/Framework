let app = getApp();

function http(url, config) {
  let {
    data = {},
    contentType = 'application/json',
    method = 'GET',
    ...other
  } = { ...config };
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: { ...data },
      method: method,
      header: {
        'content-type': contentType,
        'Cookie': app.globalData.cookie  // 全局变量中获取 cookie
      },
      success: (data) => resolve(data),
      fail: (err) => reject(err)
    });
  })
};

module.exports = {
  http: http
}