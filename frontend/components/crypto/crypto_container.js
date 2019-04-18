
import {connect} from 'react-redux';
import {getCoinsList, getChartData, getStats} from '../../actions/crypto_actions';
import { getWatchlistItems, addWatchlistItem, removeWatchlistItem } from '../../actions/watchlist_actions';
import Crypto from './crypto';
import { addTradeHistory } from '../../actions/trade_histories_actions';

const msp = ({entities, session}, ownProps) => {
    //cryptoData: entities.crypto.data returns array
    return {
        coins: entities.cryptos.coins,
        stats: entities.cryptos.stats,
        dataHist: entities.cryptos.dataHistory,
        tradeHist: entities.tradeHist,
        watchlist: entities.watchlist,
        userId: entities.users[session.id].id,
        user: entities.users,
        id: ownProps.match.params.sym,
    };
};

const mdp = dispatch => {
    return {
        getChartData: (sym, dateType) => dispatch(getChartData(sym, dateType)),
        getCoinsList: () => dispatch(getCoinsList()),
        getStats: (syms) => dispatch(getStats(syms)),
        addTradeHist: (trade) => dispatch(addTradeHistory(trade)),
        getWatchlistItems: (userId) => dispatch(getWatchlistItems(userId)),
        addWatchlistItem: (userId, watchlistItem) => dispatch(addWatchlistItem(userId, watchlistItem)),
        removeWatchlistItem: (userId, watchlistItem) => dispatch(removeWatchlistItem(userId, watchlistItem))
    };
};

export default connect(msp, mdp)(Crypto);