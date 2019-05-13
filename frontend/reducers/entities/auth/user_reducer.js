import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../../actions/session_actions';
import {UPDATE_CURRENT_USER} from '../../../actions/user_action';
import { merge } from 'lodash';

export default (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:        
            return merge({}, state, { [action.currentUser.id]: action.currentUser });
        case UPDATE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser });
        case LOGOUT_CURRENT_USER:
            return {}; 
        default:
            return state;
    }
};