import { RECEIVE_WATCHLIST_ITEM, DELETE_WATCHLIST_ITEM } from '../../../actions/watchlist_actions';
import { LOGOUT_CURRENT_USER } from '../../../actions/session_actions';
import { merge } from 'lodash';

const watchlistReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WATCHLIST_ITEM:
            return action.watchlistItem;
        case DELETE_WATCHLIST_ITEM:
            const newState = merge({}, state);
            delete newState[action.watchlistItemId];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default watchlistReducer;