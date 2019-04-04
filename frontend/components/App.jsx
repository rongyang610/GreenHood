import React from 'react';
import {Route, Switch} from 'react-router-dom';
import GreenhoodIndexContainer from './home/greenhood_index_container.js';
import LoginFormContainer from './auth/login_form_container.js';
import SignupFormContainer from './auth/signup_form_container.js';
import CryptoContainer from './crypto/crypto_container.js';
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