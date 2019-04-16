export const fetchWatchlistItems = (userId) => {
  return $.ajax ({
    url: `/api/users/${userId}/watchlist_items`
  });
};

export const createWatchlistItem = (userId, watchlistItem) => {
  return $.ajax({
    method: 'post',
    url: `/api/users/${userId}/watchlist_items`,
    data: {watchlistItem}
  });
};

// export const fetchWatchlistItem = (userId, watchlistItemId) => {
//   return $.ajax({
//     url: `/api/users/${userId}/watchlist_items/${watchlistItemId}`
//   });
// };

export const deleteWatchlistItem = (userId, watchlistItemId) => {
  return $.ajax({
    method: 'delete',
    url: `/api/users/${userId}/watchlist_items/${watchlistItemId}`,
  });
};