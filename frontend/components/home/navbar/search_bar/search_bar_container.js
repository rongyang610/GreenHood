import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { getCoinsList } from '../../../../actions/crypto_actions';

const msp = ({entities}) => {
    return {
        coins: entities.cryptos.coins
    };
};

const mdp = dispatch => {
    return {
      getCoinsList: () => dispatch(getCoinsList())
    };
};

export default connect(msp, mdp)(SearchBar);