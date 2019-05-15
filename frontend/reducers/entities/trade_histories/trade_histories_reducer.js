import {RECEIVE_TRADE_HISTORIES} from '../../../actions/trade_histories_actions';
import { merge } from 'lodash';
import { LOGOUT_CURRENT_USER } from '../../../actions/session_actions';

const tradeHistoryReducer = (state=[], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRADE_HISTORIES:
      return Object.assign([], Object.values(action.trade));
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default tradeHistoryReducer;