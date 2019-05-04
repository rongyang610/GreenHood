import { RECEIVE_MULT_DATAS } from '../../../../actions/crypto_actions';
import { LOGOUT_CURRENT_USER } from '../../../../actions/session_actions';

export default (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MULT_DATAS:
            return merge({}, state, action.chart.Data);
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};