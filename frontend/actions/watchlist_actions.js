import * as WatchAPIUtil from '../util/watchlist_api_util';

export const RECEIVE_WATCHLIST_ITEMS = 'RECEIVE_WATCHLIST_ITEMS';
export const RECEIVE_WATCHLIST_ITEM = 'RECEIVE_WATCHLIST_ITEM';
export const DELETE_WATCHLIST_ITEM = 'DELETE_WATCHLIST_ITEM';


const receiveWatchlistItems = (watchlistItems) => {
  return {
    type: RECEIVE_WATCHLIST_ITEMS,
    watchlistItems
  };
};

const receiveWatchlistItem = (watchlistItem) => {
  return {
    type: RECEIVE_WATCHLIST_ITEM,
    watchlistItem
  };
};

const deleteWatchlistItem = (watchlistItemId) => {
  return {
    type: DELETE_WATCHLIST_ITEM,
    watchlistItemId
  };
};

export const getWatchlistItems = (userId) => dispatch => {
  return (
    WatchAPIUtil.fetchWatchlistItems(userId)
    .then( (watchlistItems) => {
      return dispatch(receiveWatchlistItems(watchlistItems));
    })  
  );
};

export const addWatchlistItem = (userId, watchlistItem) => dispatch => {
  return (
    WatchAPIUtil.createWatchlistItem(userId, watchlistItem)
      .then(watchlistItem => dispatch(receiveWatchlistItem(watchlistItem)))
  );
};

export const removeWatchlistItem = (userId, watchlistItem) => dispatch => {
  retunr (
    WatchAPIUtil.deleteWatchlistItem(userId, watchlistItem)
      .then((response) => dispatch(deleteWatchlistItem(response)))
  );
};

// export const getWatchlistItem = (userId, watchlistItemId) => dispatch => {
//   return (
//     WatchAPIUtil.fetchWatchlistItem(userId, watchlistItemId)
//   )
// }
//going to just iterate through getwatchlistitems just so we don't have to do another ajax cal