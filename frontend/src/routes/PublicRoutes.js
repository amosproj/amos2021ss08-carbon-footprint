/**
 * The top Level Public Component.
 * Login, Signup and possibly a landing Page is routed and handled here.
 */

import React from 'react';
import {Redirect, Route, Router, Switch, useHistory} from 'react-router-dom';
import SLUGS from 'resources/slugs';
import Registration from 'components/login/Registration.js';
function PublicRoutes() {
    return (
        <Router history={useHistory()}>
            <Switch>
                {/* <img src={logo} style={{padding:20}} /> */}
                <Route path={SLUGS.login} render={() => <div>login</div>} />
                {/* <button onClick={activateLasers}>
            Activate Lasers
            </button> */}
                <Route path={SLUGS.signup} component={Registration} />
                <Route path={SLUGS.forgotPassword} render={() => <div>forgotPassword</div>} />
                <Redirect to={SLUGS.login} />
            </Switch>
        </Router>
    );
}

export default PublicRoutes;
