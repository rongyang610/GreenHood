export const fetchWatchlistItems = (userId) => {
  return $.ajax ({
    url: `/api/users/${userId}/watchlist_items`
  });
};

export const fetchWatchlistItem = (userId, cryptoSym) => {
  return $.ajax ({
    url: `/api/users/${userId}/watchlist_items/${cryptoSym}`
  });
};

export const createWatchlistItem = (userId, watchlistItem) => {
  return $.ajax({
    method: 'post',
    url: `/api/users/${userId}/watchlist_items`,
    data: {watchlistItem}
  });
};
export const deleteWatchlistItem = (userId, cryptoSym) => {
  return $.ajax({
    method: 'delete',
    url: `/api/users/${userId}/watchlist_items/${cryptoSym}`,
  });
};