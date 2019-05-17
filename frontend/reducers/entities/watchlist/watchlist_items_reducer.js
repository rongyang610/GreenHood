import { RECEIVE_WATCHLIST_ITEMS } from '../../../actions/watchlist_actions';
import { LOGOUT_CURRENT_USER } from '../../../actions/session_actions';
import { merge } from 'lodash';

const watchlistReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WATCHLIST_ITEMS:
            return merge({}, action.watchlistItems);
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default watchlistReducer;