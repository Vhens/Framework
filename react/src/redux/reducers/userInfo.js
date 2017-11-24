import * as userTypes from '../constants/userInfo';

export default function userInfo(state = {}, action) {
  switch (action.type) {
    case userTypes.UPDATE_USERINFO:
      return action.data;
    default:
      return state;
  }
}
