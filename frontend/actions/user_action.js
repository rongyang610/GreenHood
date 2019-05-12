import * as UserAPIUtil from '../util/user_api_util';

export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';

export const updateCurrentUser = (user) => {
  return {
    type: UPDATE_CURRENT_USER,
    user
  };
};

export const updateUserInfo = (id, buyPower) => dispatch => {
  return UserAPIUtil.patchUser(id, buyPower).then( (user) => {
    dispatch(updateCurrentUser(user));
  });
};