
import { combineReducers } from 'redux';
import usersReducer from './auth/user_reducer';
import cryptos from './cryptos/cryptos_reducer';

const entitiesReducer = combineReducers ({
    users: usersReducer,
    cryptos
});

export default entitiesReducer;