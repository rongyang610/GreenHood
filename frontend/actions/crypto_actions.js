import * as CryptoAPIUtil from '../util/crypto_api_util';

export const RECEIVE_COINS_LIST = 'RECEIVE_COINS_LIST';
export const RECEIVE_STATS = 'RECEIVE_STATS';
export const RECEIVE_DATAS = 'RECEIVE_DATAS';

export const receiveCoinsList = (coins) => {
  return {
    type: RECEIVE_COINS_LIST,
    coins
  };
};

export const receiveStats = (stats) => {
  return {
    type: RECEIVE_STATS,
    stats
  };
};

export const receiveDatas = (chart) => {
  return {
    type: RECEIVE_DATAS,
    chart
  };
};

export const getChartData = (sym, reqType, dateType) => dispatch => {
  debugger
  return (
    CryptoAPIUtil.fetchHistoryDatas(sym, reqType, dateType)
    .then( (chart) => {
      debugger
      return dispatch(receiveDatas(chart));
    })
  );
};