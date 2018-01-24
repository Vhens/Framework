import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Button, message } from 'antd';
import  { IStore }  from '../../store';

@inject((store: IStore) => ({
  ...store.user
}))

@observer
export default class User extends React.Component<any, any> {
  render () {
    return(
      <div>
          user
      </div>
    )
  }
}
