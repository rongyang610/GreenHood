import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'; 
import { getChartData, getCoinsList, getStats } from './actions/crypto_actions';
import { getWatchlistItems, addWatchlistItem } from './actions/watchlist_actions';


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
        entities: {
            users: { [window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //testing
    window.getState = store.getState();
    window.store = store;
    window.getChart = getChartData;
    window.getCoins = getCoinsList;
    window.getStats = getStats;
    window.getWatchlistItems = getWatchlistItems;
    window.addWatchlistItem = addWatchlistItem;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});