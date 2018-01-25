import * as React from 'react';
import { inject, observer } from 'mobx-react';
import  { user }  from '../../store/user';

interface IProps {
  user?: user
}
// import '../../themes/defaults/user.scss'
@inject('user')

@observer
export default class User extends React.Component<IProps, {}> {
  render () {
    const store = this.props.user
    return(
      <div onClick={ store.login }>
          user { store.username }
      </div>
    )
  }
}
