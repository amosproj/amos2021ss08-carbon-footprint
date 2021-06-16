/**
 * The top Level Public Component.
 * Login, Signup and possibly a landing Page is routed and handled here.
 */

import React from 'react';
import { Redirect, Route, Router, Switch, useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import Registration from 'components/login/Registration.js';
import LoginComponent from 'components/login/LoginComponent';
function PublicRoutes() {
    return (
        <Router history={useHistory()}>
            <Switch>
                <Route exact path={SLUGS.login} component={LoginComponent} />
                <Route path={SLUGS.signup} component={Registration} />
                <Route path={SLUGS.forgotPassword} render={() => <div>forgotPassword</div>} />
                <Route path={SLUGS.logout} component={LoginComponent} />
                <Redirect to={SLUGS.login} />
            </Switch>
        </Router>
    );
}

export default PublicRoutes;
