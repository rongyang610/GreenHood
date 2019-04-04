import { RECEIVE_STATS } from '../../../../actions/crypto_actions';
import { merge } from 'lodash';

export default (state=[], action) => {
    Object.freeze(state);
    switch (action.type) {   
        case RECEIVE_STATS: 
            return merge([], state, action.stats.RAW);
        default:
            return state;
    }
};