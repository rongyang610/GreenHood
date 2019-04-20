import * as CryptoAPIUtil from '../util/crypto_api_util';

export const RECEIVE_COINS_LIST = 'RECEIVE_COINS_LIST';
export const RECEIVE_STATS = 'RECEIVE_STATS';
export const RECEIVE_DATAS = 'RECEIVE_DATAS';
export const RECEIVE_COIN_PRICE = 'RECEIVE_COIN_PRICE';

const receiveCoinsList = (coins) => {
  return {
    type: RECEIVE_COINS_LIST,
    coins
  };
};

const receiveStats = (stats) => {
  return {
    type: RECEIVE_STATS,
    stats
  };
};

const receiveDatas = (chart) => {
  return {
    type: RECEIVE_DATAS,
    chart
  };
};

const receiveCoinPrice = (coinPrice) => {
  return {
    type: RECEIVE_COIN_PRICE,
    coinPrice
  };
};

export const getChartData = (sym, dateType) => dispatch => {
  return (
    CryptoAPIUtil.fetchHistoryDatas(sym, dateType)
    .then( (chart) => {
      return dispatch(receiveDatas(chart));
    })
  );
};

export const getCoinsList = () => dispatch => {
  return (
    CryptoAPIUtil.fetchCryptos()
    .then ( (coins) => dispatch(receiveCoinsList(coins)))
  );
};

export const getStats = (syms) => dispatch => {
  return(
    CryptoAPIUtil.fetchStats(syms)
    .then ((stats) => dispatch(receiveStats(stats)))
  );
};

export const getCoinPrice = (sym) => dispatch => {
  return(
    CryptoAPIUtil.fetchCoinPrice(sym)
    .then ((coinPrice) => dispatch(receiveCoinPrice(coinPrice)))
  );
};