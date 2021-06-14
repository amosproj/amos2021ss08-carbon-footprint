/**
 * Top level Private Component (after Login)
 * Here the look and feel for the whole webpage is defined.
 */

import React from 'react';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import HeaderComponent from 'components/header/HeaderComponent';
import PrivateRoutes from './PrivateRoutes';
import { PrivateStateProvider } from 'hooks/PrivateSectionContext';

/**
 * The Top-Level Component of our application, once the User is logged in.
 *
 * @returns A Page that consists out of the Sidebar, a Header and the different Components specified in PrivateRoutes.js
 */

function PrivateSection() {
    return (
        <PrivateStateProvider>
            <SidebarContext>
                <div id='outer-private-container'>
                    <SidebarComponent
                        pageWrapId={'page-wrap'}
                        outerContainerId={'outer-private-container'}
                    />
                    <div className='resizingContent' id='page-wrap'>
                        <HeaderComponent />
                        <div className='contentBlock'>
                            <PrivateRoutes />
                        </div>
                    </div>
                </div>
            </SidebarContext>
        </PrivateStateProvider>
    );
}

export default PrivateSection;
