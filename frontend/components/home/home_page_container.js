import { connect } from 'react-redux';
import UserHomePage from './home_page';
import { getTradeHistories } from '../../actions/trade_histories_actions';
import { getChartData, getMultCoinsPrice } from '../../actions/crypto_actions';
import { getAllNews } from '../../actions/news_actions';

const msp = ({entities, session }) => {
    return {
        currentUser: entities.users[session.id],
        trades: entities.tradeHist,
        histData: entities.cryptos.dataHistory,
        coinsPrice: entities.cryptos.coinsPrice,
        news: entities.news
    };
};

const mdp = dispatch => {
    return {
        getTradeHistories: (userId) => dispatch(getTradeHistories(userId)),
        getChartData: (sym, dateType) => dispatch(getChartData(sym, dateType)),
        getMultCoinsPrice: (syms) => dispatch(getMultCoinsPrice(syms)) ,
        getAllNews:(syms) => dispatch(getAllNews(syms))
    };
};

export default connect(msp, mdp)(UserHomePage);
