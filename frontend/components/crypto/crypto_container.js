
import {connect} from 'react-redux';
import {getCoinsList, getChartData, getStats, getCoinPrice, getCoinInfo} from '../../actions/crypto_actions';
import { getWatchlistItems, addWatchlistItem, removeWatchlistItem } from '../../actions/watchlist_actions';
import Crypto from './crypto';
import { addTradeHistory } from '../../actions/trade_histories_actions';
import {getNews} from '../../actions/news_actions';

const msp = ({entities, session}, ownProps) => {
    //cryptoData: entities.crypto.data returns array
    return {
        coins: entities.cryptos.coins,
        coinInfo: entities.cryptos.coinInfo,
        stats: entities.cryptos.stats,
        dataHist: entities.cryptos.dataHistory,
        tradeHist: entities.tradeHist,
        watchlist: entities.watchlist,
        ownedCoins: entities.users[session.id].ownedCoins,
        id: ownProps.match.params.sym,
        news: entities.news
    };
};

const mdp = dispatch => {
    return {
        getChartData: (sym, dateType) => dispatch(getChartData(sym, dateType)),
        getCoinsList: () => dispatch(getCoinsList()),
        getCoinInfo: sym => dispatch(getCoinInfo(sym)),
        getNews: sym => dispatch(getNews(sym)),
        getStats: (syms) => dispatch(getStats(syms)),
        getWatchlistItems: (userId) => dispatch(getWatchlistItems(userId)),
        addWatchlistItem: (userId, watchlistItem) => dispatch(addWatchlistItem(userId, watchlistItem)),
        removeWatchlistItem: (userId, watchlistItem) => dispatch(removeWatchlistItem(userId, watchlistItem))
    };
};

export default connect(msp, mdp)(Crypto);