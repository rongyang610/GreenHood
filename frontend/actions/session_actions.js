import * as UserAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => {
  return{
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const login = user => dispatch => {
    return UserAPIUtil.login(user).then(user => {
      return dispatch(receiveCurrentUser(user));
    }).fail(error => dispatch(receiveErrors(error.responseJSON)));
  };

export const logout = () => dispatch => {
    return UserAPIUtil.logout().then( () => {
      return dispatch(logoutCurrentUser());
    });
  };

export const signup = user => dispatch => {
    return UserAPIUtil.signup(user).then(user => {
      return dispatch(receiveCurrentUser(user));
    }).fail(error => dispatch(receiveErrors(error.responseJSON)));
  };