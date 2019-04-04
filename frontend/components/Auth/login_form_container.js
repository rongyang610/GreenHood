import {connect} from 'react-redux';
import LoginForm from './login_form';
import { login, clearErrors } from '../../actions/session_actions';

const msp = (state) => {
    return {
      errors: state.errors.session,
      formType: 'Log In',
      button: 'Sign In',
      initialState: {email: '', username: '', password: ''}
    };
  };
  
  const mdp = (dispatch) => {
    return {
      action: (user) => dispatch(login(user)),
      clear: () => dispatch(clearErrors())
    };
  };
  
  export default connect(msp,mdp)(LoginForm);