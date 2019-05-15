import { connect } from 'react-redux';
import { getCoinPrice } from '../../actions/crypto_actions';
import { addTradeHistory } from '../../actions/trade_histories_actions';
import { updateUserInfo } from '../../actions/user_action';
import BuySellPanel from './buy_sell_panel';

const msp = ({entities, session}, ownProps) => {
  return {
      coinPrice: entities.cryptos.coinPrice,
      userId: entities.users[session.id].id,
      userBuyPower: entities.users[session.id].buy_power,
      ownedCoins: entities.users[session.id].ownedCoins,
      id: ownProps.sym,
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