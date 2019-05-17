import { connect } from 'react-redux';
import {getWatchlistItem, addWatchlistItem, removeWatchlistItem} from '../../actions/watchlist_actions';
import Watchlist from './watchlist';

const msp = ({entities, session}, ownProps) => {
  return {
      userId: entities.users[session.id].id,
      watchlist: entities.watchlist.watchlistItem,
      id: ownProps.sym,
  };
};

const mdp = dispatch => {
  return{
    addWatchlistItem: (userId, watchlistItem) => dispatch(addWatchlistItem(userId, watchlistItem)),
    getWatchlistItem: (userId, cryptoSym) => dispatch(getWatchlistItem(userId, cryptoSym)),
    removeWatchlistItem: (userId, watchlistItem) => dispatch(removeWatchlistItem(userId, watchlistItem)),
    updateUserInfo: (id, buyPower) => dispatch(updateUserInfo(id, buyPower))
  };
};

export default connect(msp, mdp)(Watchlist);