/**
 * The top Level Public Component.
 * Login, Signup and possibly a landing Page is routed and handled here.
 */

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
function PublicRoutes() {
    return (
        <Switch>
            {/* <img src={logo} style={{padding:20}} /> */}
            <Route path={SLUGS.login} render={() => <div>login</div>} />
            {/* <button onClick={activateLasers}>
            Activate Lasers
            </button> */}
            <Route path={SLUGS.signup} render={() => <div>signup</div>} />
            <Route path={SLUGS.forgotPassword} render={() => <div>forgotPassword</div>} />
            <Redirect to={SLUGS.login} />
        </Switch>
    );
}

export default PublicRoutes;
