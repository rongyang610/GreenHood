
import { combineReducers } from 'redux';
import usersReducer from './auth/user_reducer';
import cryptoReducer from './cryptos/cryptos_reducer';

const entitiesReducer = combineReducers ({
    users: usersReducer,
    crypto: cryptoReducer
});

export default entitiesReducer;