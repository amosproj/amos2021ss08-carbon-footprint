import React, { useContext } from 'react';
import { string } from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarContext } from 'hooks/useSidebar';
import SLUGS from 'resources/slugs';
import { IconBell, IconBrowse, IconLogin, IconSearch } from 'assets/icons';
import DropdownComponent from 'components/dropdown';
import {PrivateSectionContext} from 'resources/PrivateSectionContext';

const useStyles = createUseStyles((theme) => ({
    avatar: {
        height: 35,
        width: 35,
        minWidth: 35,
        borderRadius: 50,
        marginLeft: 14,
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        '@media (max-width: 768px)': {
            marginLeft: 14
        }
    },
    container: {
        height: 40
    },
    name: {
        ...theme.typography.itemTitle,
        textAlign: 'right',
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    separator: {
        borderLeft: `1px solid ${theme.color.lightGrayishBlue2}`,
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2,
        '@media (max-width: 768px)': {
            marginLeft: 14,
            marginRight: 0
        }
    },
    title: {
        ...theme.typography.title,
        '@media (max-width: 1080px)': {
            marginLeft: 50
        },
        '@media (max-width: 468px)': {
            fontSize: 20
        }
    },
    iconStyles: {
        cursor: 'pointer',
        marginLeft: 25,
        '@media (max-width: 768px)': {
            marginLeft: 12
        }
    }
}));

/**
 * The Header Component is a shared component between all pages. It is capable to display 
 * a title that changes when the selection in the SidebarComponent changes. 
 * 
 * @returns The visualization of exactly that.
 */
function HeaderComponent() {
    const { push } = useHistory();
    const { currentItem } = useContext(SidebarContext); // get the current Path selected in the Sidebar
    const [ selectedProducts, setSelectedProducts ] = useContext(PrivateSectionContext);
    const theme = useTheme();
    const classes = useStyles({ theme });

    let title;
    let subtitle;
    switch (true) {
        case currentItem === SLUGS.dashboard:
            title = 'My Dashboard';
            break;
        case currentItem === SLUGS.categories:
            title = 'Categories';
            break;
        case currentItem === SLUGS.generation:
            title = 'Generation';
            break;
        case currentItem === SLUGS.transmission:
            title = 'Transmission';
            break;
        case currentItem === SLUGS.industrialApplications:
            title = 'Industrial Applications';
        case currentItem === SLUGS.details:
            title = 'Details: ' + (selectedProducts[0].productName === undefined ? 'Please select a model first' : selectedProducts[0].productName);
            break;
        case currentItem === SLUGS.generation + '/products':
            title = 'Products';
            break;
        case currentItem === SLUGS.generation + '/solutions':
            title = 'Solutions';
            break;
        case currentItem === SLUGS.generation + '/services':
            title = 'Services';
            break;
        case currentItem === SLUGS.settings:
            title = 'Settings';
            break;
        default:
            title = '';
    }

    function onSettingsClick() {
        push(SLUGS.settings);
    }

    return (
        <Row className={classes.container} vertical='center' horizontal='space-between'>
            <span className={classes.title}>{title}</span>
            <Row vertical='center'>
                <div className={classes.iconStyles}>
                    <IconSearch />
                </div>
                <div className={classes.iconStyles}>
                    <DropdownComponent
                        label={<IconBell />}
                        options={[
                            {
                                label: 'Notification #1',
                                onClick: () => console.log('Notification #1')
                            },
                            {
                                label: 'Notification #2',
                                onClick: () => console.log('Notification #2')
                            },
                            {
                                label: 'Notification #3',
                                onClick: () => console.log('Notification #3')
                            },
                            {
                                label: 'Notification #4',
                                onClick: () => console.log('Notification #4')
                            }
                        ]}
                        position={{
                            top: 42,
                            right: -14
                        }}
                    />
                </div>
                <div className={classes.separator}></div>
                <DropdownComponent
                    label={
                    <span className={classes.name} >User Name
                        <IconLogin>  
                        
  
                            {/* <img
                                src='https://avatars3.githubusercontent.com/u/21162888?s=460&v=4'
                                alt='avatar'
                                className={classes.avatar}
                            /> */}
      
                    </IconLogin>
                    </span>  
                       
                    }
                    options={[
                        {
                            label: 'Settings',
                            onClick: onSettingsClick
                        },
                        {
                            label: 'Logout',
                            onClick: () => console.log('logout')
                        }
                    ]}
                    position={{
                        top: 52,
                        right: -6
                    }}
                />
            </Row>
        </Row>
    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;
