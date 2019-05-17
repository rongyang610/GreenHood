
import {connect} from 'react-redux';
import {getCoinsList, getChartData, getStats, getCoinInfo} from '../../actions/crypto_actions';
import { getWatchlistItems } from '../../actions/watchlist_actions';
import Crypto from './crypto';
import {getNews} from '../../actions/news_actions';

const msp = ({entities, session}, ownProps) => {
    //cryptoData: entities.crypto.data returns array
    return {
        coins: entities.cryptos.coins,
        coinInfo: entities.cryptos.coinInfo,
        stats: entities.cryptos.stats,
        dataHist: entities.cryptos.dataHistory,
        tradeHist: entities.tradeHist,
        watchlists: entities.watchlist.watchlistItems,
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
    };
};

export default connect(msp, mdp)(Crypto);