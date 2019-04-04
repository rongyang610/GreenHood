import { combineReducers } from 'redux';
import coinsReducer from './data/coins_reducer';
import statsReducer from './data/stats_reducer';
import dataHistoryReducer from './data/data_history_reducer';

const cryptosReducer = combineReducers ({
    coins: coinsReducer,
    stats: statsReducer,
    dataHistory: dataHistoryReducer
});

export default cryptosReducer;