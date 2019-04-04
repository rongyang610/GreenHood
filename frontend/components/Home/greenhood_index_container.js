import { connect } from 'react-redux';
import GreenhoodIndex from './greenhood_index';
import { logout } from '../../actions/session_actions';

console.log('hello');

const msp = ({entities, session }) => {
    return {
        currentUser: entities.users[session.id]
    };
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(msp, mdp)(GreenhoodIndex);