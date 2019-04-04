
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import GreenhoodIndexContainer from './home/greenhood_index_container';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import CryptoContainer from './crypto/crypto_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={GreenhoodIndexContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/crypto/:sym" component={CryptoContainer} />
        </Switch>
    </div>
);

export default App;