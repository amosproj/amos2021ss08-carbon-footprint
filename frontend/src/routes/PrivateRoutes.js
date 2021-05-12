/**
 * The PrivedRoutes Component handels all possible routes. 
 * Routing is used for linking the Sidebar-MenuItems to Components 
 * on the right handside canvas.
 * 
 * @author Martin Wagner
 * @author Irem
 */

import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';
import DetailsComponent from 'components/details/DetailsComponent';
const ProductSolutionsServices = lazy(() =>
    import('./dynamicPaths/ProductSolutionsServicesComponent')
);
// importing required components
const DashboardComponent = lazy(() => import('../components/dashboard'));

/**
 * Defining new Routes using private routes function
 * linking Components to the selected Menuitem in the "Sidebar component"
  */
function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                
                <Route exact path={SLUGS.categories} render={() => <div>categories</div>} />

                <Route exact path={SLUGS.generation}
                    render={() => <div>Short info about Generation category</div>}
                />
                <Route exact path={SLUGS.transmission}
                    render={() => <div>Short info about Transmission category</div>}
                />
                <Route exact path={SLUGS.industrialApplications}
                    render={() => <div>Short info about Industrial Applications</div>}
                />
                
                <Route path={SLUGS.generation + '/:type'}
                    component={ProductSolutionsServices}
                />
                <Route path={SLUGS.transmission + '/:type'}
                    component={ProductSolutionsServices}
                />
                <Route path={SLUGS.industrialApplications + '/:type'}
                    component={ProductSolutionsServices}
                />
                
                <Route exact path={SLUGS.details}
                    // hardcoded selected model (Transformer 3-phase#1), TODO: it should be passed by its parent state
                    render={() => <DetailsComponent selectedModel='Transformer 3-phase#1' />}
                />

                <Route exact path={SLUGS.settings}      render={() => <div>settings</div>} />

                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
