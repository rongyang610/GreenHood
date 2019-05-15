import * as TradeHistoryAPIUtil from '../util/trade_history_util';
import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_TRADE_HISTORIES = 'RECEIVE_TRADE_HISTORIES';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveTradeHistories = trade => {
  return {
    type: RECEIVE_TRADE_HISTORIES,
    trade
  };
};

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const getTradeHistories = userId => dispatch => {
  return(
    TradeHistoryAPIUtil.fetchTradeHistories(userId)
    .then( (trades) => dispatch(receiveTradeHistories(trades)))
  );
};

export const addTradeHistory = (trade) => dispatch => {
  return (
    TradeHistoryAPIUtil.createTradeHistory(trade)
    .then( trade => UserAPIUtil.getUser(Object.values(trade)[0].user_id))
    .then( user => dispatch(receiveUser(user)))
  );
};