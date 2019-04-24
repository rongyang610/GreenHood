import { RECEIVE_COIN_INFO } from '../../../../actions/crypto_actions';
import { merge } from 'lodash';

export default (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COIN_INFO:
            return merge({}, action.coinInfo.Data[0].CoinInfo);
        default:
            return state;
    }
};