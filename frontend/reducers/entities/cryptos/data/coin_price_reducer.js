import { RECEIVE_COIN_PRICE } from '../../../../actions/crypto_actions';
import { merge } from 'lodash';

export default (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COIN_PRICE:
            return merge({}, state, action.coinPrice);
        default:
            return state;
    }
};