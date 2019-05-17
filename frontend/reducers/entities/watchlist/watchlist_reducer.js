import { combineReducers } from 'redux';
import watchlistItemsReducer from './watchlist_items_reducer';
import watchlistItemReducer from './watchlist_item_reducer';

const watchlistReducer = combineReducers ({
    watchlistItems: watchlistItemsReducer,
    watchlistItem: watchlistItemReducer
});

export default watchlistReducer;