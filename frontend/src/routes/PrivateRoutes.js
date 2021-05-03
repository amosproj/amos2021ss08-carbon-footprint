import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';
const ScenariosDashboardComponent = lazy(() => import('./scenarios/scenariosdashboard'));
const ProductSolutionsServices = lazy(() => import('./dynamicPaths/ProductSolutionsServicesComponent'));
const DashboardComponent = lazy(() => import('./dashboard'));
const ScenariosComponent = lazy(() => import('./scenarios'));
function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                <Route exact path={SLUGS.details} render={() => <div>The view where the user can select variables and see the graphs will be implemented here.</div>} />
                <Route exact path={SLUGS.overview} component={ScenariosDashboardComponent} />
                <Route exact path={SLUGS.generation} render={() => <div>Short info about Generation category</div>}/>
                <Route exact path={SLUGS.transmission} render={() => <div>Short info about Transmission category</div>}/>
                <Route exact path={SLUGS.industrialApplications} render={() => <div>Short info about Industrial Applications</div>} />
                <Route path={SLUGS.generation+'/:type'} component={ProductSolutionsServices} />
                <Route path={SLUGS.transmission+'/:type'} component={ProductSolutionsServices} />
                <Route path={SLUGS.industrialApplications+'/:type'} component={ProductSolutionsServices} />
                <Route exact path={SLUGS.overview} component={ScenariosDashboardComponent} />
                <Route exact path={SLUGS.comparison} render={() => <div>comparison</div>} />   
                <Route exact path={SLUGS.inbox} render={() => <div>inbox</div>} />
                {/* <Route exact path={SLUGS.overviewTwo} component={DropdownComponent}/> */}

                <Route exact path={SLUGS.categories} render={() => <div>categories</div>} />
                <Route exact path={SLUGS.ideasTwo} render={() => <div>ideasTwo</div>} />
                <Route exact path={SLUGS.ideasThree} render={() => <div>ideasThree</div>} />

                <Route exact path={SLUGS.contacts} render={() => <div>contacts</div>} />
                {/* <Route exact path={SLUGS.agents} render={() => <div>agents</div>} />
                <Route exact path={SLUGS.articles} render={() => <div>articles</div>} /> */}
                <Route exact path={SLUGS.settings} render={() => <div>settings</div>} />
                <Route exact path={SLUGS.subscription} render={() => <div>subscription</div>} />
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
