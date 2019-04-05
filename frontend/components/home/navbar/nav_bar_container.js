import { connect } from 'react-redux';
import NavBar from './nav_bar';

const msp = ({entities, session }) => {
    return {
        currentUser: entities.users[session.id]
    };
};

export default connect(msp, null)(NavBar);