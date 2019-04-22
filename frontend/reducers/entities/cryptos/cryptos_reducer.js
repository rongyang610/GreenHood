import { combineReducers } from 'redux';
import coinsReducer from './data/coins_reducer';
import statsReducer from './data/stats_reducer';
import coinPriceReducer from './data/coin_price_reducer';
import coinsPriceReducer from './data/coins_price_reducer';
import dataHistoryReducer from './data/data_history_reducer';

const cryptosReducer = combineReducers ({
    coins: coinsReducer,
    stats: statsReducer,
    coinPrice: coinPriceReducer,
    coinsPrice: coinsPriceReducer,
    dataHistory: dataHistoryReducer
});

export default cryptosReducer;