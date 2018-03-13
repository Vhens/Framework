//index.js
//获取应用实例
const app = getApp()
import utils from '../../utils/http.js';
Page({
  data: {
    imgUrls: [
      {
        id: 1,
        url: '',
        src: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      },
      {
        id: 2,
        url: '',
        src: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
      },
      {
        id: 3,
        url: '',
        src: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    utils.http('http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList').then(res => {
      console.log(res)
    })
  },
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
    this.banner = this.selectComponent("#banner");
  },
  showDialog() {
    this.dialog.showDialog();
  },
  imageLoad() {
    this.banner.imageLoad()
  },

  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  }
})
