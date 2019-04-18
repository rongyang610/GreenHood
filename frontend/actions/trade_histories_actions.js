import * as TradeHistoryAPIUtil from '../util/trade_history_util';

export const RECEIVE_TRADE_HISTORIES = 'RECEIVE_TRADE_HISTORIES';
export const CREATE_TRADE_HISTORY = 'CREATE_TRADE_HISTORY';

const receiveTradeHistories = trade => {
  return {
    type: RECEIVE_TRADE_HISTORIES,
    trade
  };
};

export const getTradeHistories = userId => dispatch => {
  return(
    TradeHistoryAPIUtil.fetchTradeHistories(userId)
    .then( (trade) => dispatch(receiveTradeHistories(trade)))
  );
};

export const addTradeHistory = trade => dispatch => {
  return (
    TradeHistoryAPIUtil.createTradeHistory(trade)
  );
};