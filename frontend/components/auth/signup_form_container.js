import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { login, signup, clearErrors } from '../../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Sign Up',
    button: 'Sign Up',
    initialState: {fname: '', lname: '', email: '', username: '', password: ''}
  };
};

const mdp = (dispatch) => {
  return {
    action: (user) => dispatch(signup(user)),
    demo: (user) => dispatch(login(user)),
    clear: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(SignupForm);