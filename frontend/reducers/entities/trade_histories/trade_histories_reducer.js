import {RECEIVE_TRADE_HISTORIES} from '../../../actions/trade_histories_actions';
import { merge } from 'lodash';

const tradeHistoryReducer = (state=[], action) => {
  Object.freeze(state);
  debugger
  switch (action.key) {
    case RECEIVE_TRADE_HISTORIES:
      return merge([], state, Object.values(action.trade));
    default:
      return state;
  }
};

export default tradeHistoryReducer;