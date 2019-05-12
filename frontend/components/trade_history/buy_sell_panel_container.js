import { connect } from 'react-redux';
import { getCoinPrice } from '../../actions/crypto_actions';
import { addTradeHistory } from '../../actions/trade_histories_actions';
import { updateUserInfo } from '../../actions/user_action';

const msp = ({entities, session}, ownProps) => {
  //cryptoData: entities.crypto.data returns array
  return {
      coinPrice: entities.cryptos.coinPrice,
      userId: entities.users[session.id].id,
      userBuyPower: entities.users[session.id].buy_power,
      id: ownProps.match.params.sym,
  };
};

const mdp = dispatch => {
  return{
    getCoinPrice: (sym) => dispatch(getCoinPrice(sym)),
    addTradeHist: (trade) => dispatch(addTradeHistory(trade)),
    updateUserInfo: (id, buyPower) => dispatch(updateUserInfo(id, buyPower))
  };
};

export default connect(msp, mdp)(BuySellPanel);