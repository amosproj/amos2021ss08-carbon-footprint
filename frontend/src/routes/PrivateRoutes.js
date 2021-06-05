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
import { useTheme, createUseStyles } from 'react-jss';
import GenerationInfo from 'components/productGrid/GenerationInfo';
import TransmissionInfo from 'components/productGrid/TransmissionInfo';
import IndustrialApplicationInfo from 'components/productGrid/IndustrialApplicationInfo';
const ProductSolutionsServices = lazy(() =>
    import('./dynamicPaths/ProductSolutionsServicesComponent')
);
// importing required components
const DashboardComponent = lazy(() => import('../components/dashboard'));

// const useStyles = createUseStyles((theme) => ({
//     container: {
//         display: 'flex'
//     },
//     textcontent: {
//         ...theme.typography.textcontent,
//         textAlign: 'left',
//         '@media (max-width: 768px)': {
//             display: 'none'
//         }
//     },
//     subtitle: {
//         ...theme.typography.title,
//         marginLeft: 15,
//         '@media (max-width: 1080px)': {
//             marginLeft: -50
//         },
//         '@media (max-width: 468px)': {
//             fontSize: 15
//         }
//     },
//     title: {
//         ...theme.typography.title,
//         marginLeft: 15,
//         '@media (max-width: 1080px)': {
//             marginLeft: 80
//         },
//         '@media (max-width: 468px)': {
//             fontSize: 15
//         }
//     }
// }));

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
                    <Route exact path={SLUGS.dashboard} component={DashboardComponent} />

                    <Route
                        exact
                        path={SLUGS.categories}
                        render={() => (
                            <div className='TextContent'>
                                categories
                            </div>
                        )}
                    />

                    <Route
                        exact
                        path={SLUGS.generation}
                        component={GenerationInfo}
                        // render={() => (
                        //     <div className='TextContent'>
                        //         Short info about Generation category                               

                        //     </div>
                        // )}
                    />
                    <Route
                        exact
                        path={SLUGS.transmission}
                        component={TransmissionInfo}
                        // render={() => (
                        //     <div className='TextContent'>
                        //         Short info about Transmission category
                        //     </div>
                        // )}
                    />
                    <Route
                        exact
                        path={SLUGS.industrialApplications}
                        component={IndustrialApplicationInfo}
                        // render={() => (
                        //     <div className='TextContent'>
                        //         Short info about Industrial Applications
                        //     </div>
                        // )}
                    />

                    <Route
                        path={SLUGS.generation + '/:type'}
                        component={ProductSolutionsServices}
                    />
                    <Route
                        path={SLUGS.transmission + '/:type'}
                        component={ProductSolutionsServices}
                    />
                    <Route
                        path={SLUGS.industrialApplications + '/:type'}
                        component={ProductSolutionsServices}
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
                                settings
                            </div>
                        )}
                    />

                    <Redirect to={SLUGS.dashboard} />
                </Switch>
            </Suspense>
        </Router>
    );
}

export default PrivateRoutes;
