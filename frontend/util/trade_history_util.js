export const fetchTradeHistories = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/trade_histories`
  });
};

export const createTradeHistory = (trade) => {
  return $.ajax({
    method: 'post',
    url: `/api/users/${trade.user_id}/trade_histories/`,
    data: {trade}
  });
};