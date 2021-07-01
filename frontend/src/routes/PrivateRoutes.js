/**
 * The PrivedRoutes Component handels all possible routes.
 * Routing is used for linking the Sidebar-MenuItems to Components
 * on the right handside canvas.
 *
 * @author Martin Wagner, Irem Toroslu, Mani Anand
 */

import React, { useContext, Suspense, lazy } from 'react';
import { Router, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';
import DetailsComponent from 'components/details/DetailsComponent';
import { PrivateSectionContext } from 'hooks/PrivateSectionContext';
import GenerationInfo from 'components/productGrid/GenerationInfo';
import TransmissionInfo from 'components/productGrid/TransmissionInfo';
import IndustrialApplicationInfo from 'components/productGrid/IndustrialApplicationInfo';
import CategoryIndex from 'components/productGrid/CategoryIndex';
const ProductSolutionsServices = lazy(() =>
    import('./dynamicPaths/ProductSolutionsServicesComponent')
);
// importing required components
//const DashboardComponent = lazy(() => import('../components/dashboard'));
const mydashboardComponent = lazy(() => import('../components/mydashboard/MydashboardComponent'));

/**
 * Defining new Routes using private routes function
 * linking Components to the selected Menuitem in the "Sidebar component"
 */
function PrivateRoutes() {
    const [selectedProducts] = useContext(PrivateSectionContext);
    // const theme = useTheme();
    // const classes = useStyles({ theme });
    return (
        <Router history={useHistory()}>
            <Suspense fallback={<LoadingComponent loading />}>
                <Switch>
                    <Route exact path={SLUGS.dashboard} component={mydashboardComponent} />

                    <Route exact path={SLUGS.categories} component={CategoryIndex} />
                    <Route exact path={SLUGS.generation} component={GenerationInfo} />
                    <Route exact path={SLUGS.transmission} component={TransmissionInfo} />
                    <Route
                        exact
                        path={SLUGS.industrialApplications}
                        component={IndustrialApplicationInfo}
                    />

                    <Route
                        path={SLUGS.generation + '/:type'}
                        component={ProductSolutionsServices({ category: 'generation' })}
                    />
                    <Route
                        path={SLUGS.transmission + '/:type'}
                        component={ProductSolutionsServices({ category: 'transmission' })}
                    />
                    <Route
                        path={SLUGS.industrialApplications + '/:type'}
                        component={ProductSolutionsServices({ category: 'industrialApplications' })}
                    />

                    <Route
                        exact
                        path={SLUGS.details}
                        render={() => <DetailsComponent selectedProduct={selectedProducts[0]} />}
                    />

                    <Route
                        exact
                        path={SLUGS.settings}
                        render={() => (
                            <div className='TextContent'>
                                <span>settings</span>
                            </div>
                        )}
                    />

                    {/* <Route                                          
                        exact
                        path={SLUGS.logout}
                        Component = {LoginComponent}>                                         
                    </Route>   */}

                    <Redirect to={SLUGS.dashboard} />
                </Switch>
            </Suspense>
        </Router>
    );
}

export default PrivateRoutes;
