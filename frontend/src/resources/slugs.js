/**
 * slugs.js defines all known path extensions
 */

import { types } from './globalConstants/categories';

const slugs = {
    // private
    comparison: '/comparison',
    dashboard: '/dashboard',
    details: '/details',
    generation: '/generation',
    transmission: '/transmission',
    industrialApplications: '/industrialApplications',
    products: '/' + types.product,
    solutions: '/' + types.solution,
    services: '/' + types.service,
    overview: '/overview',
    quickguide: '/quickguide',
    overviewTwo: '/overview/two',
    overviewThree: '/overview/three',
    categories: '/categories',
    inbox: './inbox',
    settings: '/settings',
    logout: '/logout',
    // auth
    login: '/login',
    signup: '/signup',
    forgotPassword: '/forgot_password'
};

export default slugs;
