import React from 'react';
import {connect} from 'react-redux';
import { getChartData } from '../../../actions/crypto_actions';
import CryptoChart from './crypto_chart';

const msp = (state, ownProps) => {
    return {
        dataHist: entities.cryptos.dataHistory,
        id: ownProps.match.params.sym,
    };
};

const mdp = dispatch => {
    return {
        getChartData: (sym, dateType) => dispatch(getChartData(sym, dateType)),
    };
};

export default connect(msp, mdp)(CryptoChart);