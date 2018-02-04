import React, { PureComponent } from 'react';
import { Grid, WhiteSpace } from 'antd-mobile';

import http from '../../../services/api/http';
import './nav.scss';

/*eslint-disable*/
export default class Nav extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      nav: []
    }
  }
  componentDidMount() {
    new Promise((resolve, reject) => {
      http.get('/api/nav/nav').then(res => {
        console.log('nav', res.data.content);
        this.setState({
          nav: res.data.content
        })
        resolve(res);
      })
      .catch(e => {
        reject(e)
        console.error(e);
      });
    });
  }
  render() {
    return (
      <div className="nav">
        <WhiteSpace />
        <Grid data={this.state.nav} columnNum={3} className="not-square-grid" square ={false}/>
      </div>
    );
  }
}
