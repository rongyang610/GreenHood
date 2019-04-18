
import { combineReducers } from 'redux';
import usersReducer from './auth/user_reducer';
import cryptosReducer from './cryptos/cryptos_reducer';
import watchlistReducer from './watchlist/watchlist_reducer';
import tradeHistoryReducer from './trade_histories/trade_histories_reducer';

const entitiesReducer = combineReducers ({
    users: usersReducer,
    cryptos: cryptosReducer,
    watchlist: watchlistReducer,
    tradeHist: tradeHistoryReducer
});

export default entitiesReducer;