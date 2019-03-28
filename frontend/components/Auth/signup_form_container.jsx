import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, clearErrors } from '../../actions/session_actions';

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
    clear: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(SignupForm);