import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../../actions/session_actions';
import { UPDATE_CURRENT_USER } from '../../../actions/user_action';
import { RECEIVE_USER } from '../../../actions/trade_histories_actions';
import { merge } from 'lodash';

export default (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:        
            return merge({}, { [action.currentUser.id]: action.currentUser });
        case UPDATE_CURRENT_USER:
            return merge({}, { [action.user.id]: action.user });
        case RECEIVE_USER:
            return merge({}, { [action.user.id]: action.user });
        case LOGOUT_CURRENT_USER:
            return {}; 
        default:
            return state;
    }
};