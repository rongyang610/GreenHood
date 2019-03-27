
import { combineReducers } from 'redux';
import usersReducer from './auth/user_reducer';

const entitiesReducer = combineReducers ({
    users: usersReducer
});

export default entitiesReducer;