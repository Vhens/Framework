import * as userTypes from '../constants/userInfo';

export const update = data => {
  return {
    type: userTypes.UPDATE_USERINFO
  };
};
