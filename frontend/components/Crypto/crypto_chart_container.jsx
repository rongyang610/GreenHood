import { connect } from 'react-redux';
import { getChartData } from './crypto_chart';
import CryptoChart from './crypto_chart';

const msp = ({entities}) => {
    return {
        cryptoData: entities.crypto
    };
};

const mdp = dispatch => {
    return {
        getChartData: (sym, reqType, dateType) => dispatch(getChartData(sym, reqType, dateType))
    };
};

export default connect(msp, mdp)(CryptoChart);