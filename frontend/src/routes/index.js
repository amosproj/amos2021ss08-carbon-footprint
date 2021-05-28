import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from 'hooks/useWindowSize';
import PrivateSection from 'routes/PrivateSection';
import PublicRoutes from 'routes/PublicRoutes';
import { GlobalContext } from 'hooks/GlobalContext';

function Routes() {
    const { pathname } = useLocation();
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [state, setState] = useContext(GlobalContext);

    return state.userIsLoggedIn ? <PrivateSection /> : <PublicRoutes />;
}

export default Routes;
