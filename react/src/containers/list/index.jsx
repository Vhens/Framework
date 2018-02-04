import React, { PureComponent, PropTypes } from 'react';
import './list.scss';
export default class List extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="list">
        { this.props.data.map(item => 
          <div className="item" key={item.id} >
            <a href="###">
              <img src={item.src} alt="暂无图片"/>
              <div className="content">
                <div className="sub-item">{item.name}</div>
                <div className="sub-item">
                  <span className="price">{item.price}</span>元
                </div>
              </div>
            </a>
          </div>)}
      </div>
    );
  }
}
