import { RECEIVE_MULT_COINS_PRICE } from '../../../../actions/crypto_actions';
import { merge } from 'lodash';

export default (state=[], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MULT_COINS_PRICE:
            return merge([], state, action.coinsPrice);
        default:
            return state;
    }
};