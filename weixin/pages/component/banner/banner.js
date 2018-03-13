// pages/component/banner/banner.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    indicatorDots: {
      type: Boolean,
      value: false
    },
    autoplay: {
      type: Boolean,
      value: false
    },
    interval: {
      type: Number,
      value: 3000
    },
    duration: {
      type: Number,
      value: 1000
    },
    data: {
      type: Array,
      value: []
    },
    imgheights: {
      type: Array,
      value: []
    },
    //图片宽度  
    imgwidth: {
      type: Number,
      value: 750
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    imageLoad(e) {
      //获取图片真实宽度  
      let imgwidth = e.detail.width,
        imgheight = e.detail.height,
      //宽高比  
      ratio = imgwidth / imgheight;
      //计算的高度值  
      let viewHeight = 750 / ratio;
      let imgh = viewHeight;
      let imghs = this.data.imgheights;
      imghs.push(imgh);
      this.setData({
        imgheights: imghs,
      })  
    }
  }
})
