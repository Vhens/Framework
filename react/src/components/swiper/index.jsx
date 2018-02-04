import React, { PureComponent } from 'react';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
/*eslint-disable*/
export default class Swiper extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      img:[
        {
          src: require('../../../static/image/slider-1.jpg')
        },
        {
          src: require('../../../static/image/slider-2.jpg')
        },
        {
          src: require('../../../static/image/slider-3.jpg')
        },
        {
          src: require('../../../static/image/slider-4.jpg')
        },
      ] ,
      imgHeight: 176,
      slideIndex: 0,
    };
  }
  render() {
    return (
      <div className="swiper">
        <Carousel
          autoplay
          infinite
          dotActiveStyle = {{ backgroundColor: '#108ee9' }}
        >
          {this.state.img.map(item => (
            <a
              key={item}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={ item.src }
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}
