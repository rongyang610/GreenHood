import { connect } from 'react-redux';
import { getWatchlistItems } from '../../../actions/watchlist_actions';
import { getMultWatchlistCoinsPrice } from '../../../actions/crypto_actions';
import SideBar from './side_bar';

const msp = ({entities, session}, ownProps) => {
  return {
    coinsPrice: entities.cryptos.coinsPrice,
    watchlistCoinsPrice: entities.cryptos.watchlistCoinsPrice,
    watchlists: entities.watchlist.watchlistItems,
    ownedCoins: ownProps.ownedCoins,
    userId: entities.users[session.id].id,
  };
};

const mdp = dispatch => {
  return{
    getWatchlistItems: (userId) => dispatch(getWatchlistItems(userId)),
    getMultWatchlistCoinsPrice: (syms) => dispatch(getMultWatchlistCoinsPrice(syms)),
  };
};

export default connect(msp, mdp)(SideBar);