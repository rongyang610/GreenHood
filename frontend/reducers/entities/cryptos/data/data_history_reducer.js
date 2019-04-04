import { RECEIVE_DATAS } from '../../../../actions/crypto_actions';
import { merge } from 'lodash';

export default (state=[], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_DATAS:
            return merge([], action.chart.Data);
        default:
            return state;
    }
};