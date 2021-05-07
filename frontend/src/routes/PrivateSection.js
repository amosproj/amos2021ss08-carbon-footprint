import React, { useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Column, Row } from 'simple-flexbox';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import HeaderComponent from 'components/header/HeaderComponent';
import PrivateRoutes from './PrivateRoutes';

const useStyles = createUseStyles({
    container: {
        height: '100%',
        minHeight: 850
    },
    mainBlock: {
        marginLeft: 255,
        padding: 30,
        '@media (max-width: 1080px)': {
            marginLeft: 0
        }
    },
    contentBlock: {
        marginTop: 54
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

    const [selectedProducts, setSelectedProducts] = useState(null);

    return (
        <SidebarContext>
            <Row className={classes.container}>
                <SidebarComponent />
                <Column flexGrow={1} className={classes.mainBlock}>
                    <HeaderComponent />
                    <div className={classes.contentBlock}>
                        <PrivateRoutes />
                    </div>
                </Column>
            </Row>
        </SidebarContext>
    );
}

export default PrivateSection;
