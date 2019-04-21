import { connect } from 'react-redux';
import GreenhoodIndex from './greenhood_index';
import { logout } from '../../actions/session_actions';
import { getTradeHistories } from '../../actions/trade_histories_actions';
import { getChartData } from '../../actions/crypto_actions';

const msp = ({entities, session }) => {
    return {
        currentUser: entities.users[session.id],
        trades: entities.tradeHist,
        histData: entities.cryptos.dataHistory
    };
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        getTradeHistories: (userId) => dispatch(getTradeHistories(userId)),
        getChartData: (sym, dateType) => dispatch(getChartData(sym, dateType))
    };
};

export default connect(msp, mdp)(GreenhoodIndex);