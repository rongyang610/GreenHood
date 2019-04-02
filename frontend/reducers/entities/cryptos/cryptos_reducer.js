import { RECEIVE_COINS_LIST, RECEIVE_STATS, RECEIVE_DATAS} from '../../../actions/crypto_actions';
import { merge } from 'lodash';

export default (state=[], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COINS_LIST:
            return merge([], state, action.coins);
        case RECEIVE_STATS:        
            return merge([], state, action.stats);
        case RECEIVE_DATAS:
        debugger     
            return merge([], state, action.chart);
        default:
            return state;
    }
};