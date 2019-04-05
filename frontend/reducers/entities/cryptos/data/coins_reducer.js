import { RECEIVE_COINS_LIST } from '../../../../actions/crypto_actions';
import { merge } from 'lodash';

export default (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COINS_LIST:
            return merge({}, state, action.coins.Data);
        default:
            return state;
    }
};