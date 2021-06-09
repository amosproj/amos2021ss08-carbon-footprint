/**
 * Top level Private Component (after Login)
 * Here the look and feel for the whole webpage is defined.
 */

import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import HeaderComponent from 'components/header/HeaderComponent';
import PrivateRoutes from './PrivateRoutes';
import { PrivateStateProvider } from 'hooks/PrivateSectionContext';

const useStyles = createUseStyles({
    container: {
        marginLeft: 0,
        marginRight: 0,
        height: '100%'
    },
    mainBlock: {
        marginLeft: 200,
        // paddingLeft: 30,
        '@media (max-width: 1080px)': {
            marginLeft: 0
        }
    },
    contentBlock: {
        marginLeft: 0
    }
});

/**
 * The Top-Level Component of our application, once the User is logged in.
 *
 * @returns A Page that consists out of the Sidebar, a Header and the different Components specified in PrivateRoutes.js
 */

function PrivateSection() {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <PrivateStateProvider>
            <SidebarContext>
                <div id='outer-private-container'>
                    <SidebarComponent
                        pageWrapId={'page-wrap'}
                        outerContainerId={'outer-private-container'}
                    />
                    <div id='page-wrap' style={{ width: 'calc(100% - 200px)' }}>
                        <HeaderComponent />
                        <div className={classes.contentBlock}>
                            <PrivateRoutes />
                        </div>
                    </div>
                </div>
            </SidebarContext>
        </PrivateStateProvider>
    );
}

export default PrivateSection;
