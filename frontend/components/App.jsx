
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import GreenhoodIndexContainer from './Home/greenhood_index_container';
import LoginFormContainer from './Auth/login_form_container';
import SignupFormContainer from './Auth/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={GreenhoodIndexContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;