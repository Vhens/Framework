import React from 'react';
import render from 'react-dom';

import PureRenderMixin from 'react-addons-pure-render-mixin';

class List extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        List
      </div>
    )
  }
}
export default List;