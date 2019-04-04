
import {connect} from 'react-redux';
import {getCoinsList, getStats, getChartData, receiveStats} from '../../actions/crypto_actions';
import Crypto from './crypto';

const msp = ({entities}, ownProps) => {
    //cryptoData: entities.crypto.data returns array
    return {
        coins: entities.cryptos.coins,
        stats: entities.cryptos.stats,
        dataHist: entities.cryptos.dataHistory,
        id: ownProps.match.params.sym,
    };
};

const mdp = dispatch => {
    return {
        getChartData: (sym, dateType) => dispatch(getChartData(sym, dateType)),
        getCoinsList: () => dispatch(getCoinsList()),
        getStats: (syms) => dispatch(receiveStats(syms))
    };
};

export default connect(msp, mdp)(Crypto);