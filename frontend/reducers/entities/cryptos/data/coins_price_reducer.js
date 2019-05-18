import { RECEIVE_MULT_COINS_PRICE } from '../../../../actions/crypto_actions';
import { merge } from 'lodash';
import { LOGOUT_CURRENT_USER } from '../../../../actions/session_actions';


export default (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MULT_COINS_PRICE:
            return merge({}, state, action.coinsPrice);
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};