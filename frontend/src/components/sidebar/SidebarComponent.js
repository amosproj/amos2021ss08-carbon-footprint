import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import { convertSlugToUrl } from 'resources/utilities';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';
import logo from 'assets/logo/LogoCarbonteam.png';
import LoginComponent from 'components/login/LoginComponent';
import slugs from 'resources/slugs';

/**
 * The SidebarComponent consists out of the functionality and the Look and Feel of the Left-Side-Navigationbar
 *
 * @author Irem Toroslu, Martin Wagner
 */

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

    async function logout() {
        push(SLUGS.login);
    }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    /**
     * Calculates all possible urls by appending products solutions and services
     * @param {array} categories the url(s) which should be appended
     * @returns the array of possible urls
     */
    function allMenuItems(categories = []) {
        const a1 = categories.map((path) => path + SLUGS.products);
        const a2 = categories.map((path) => path + SLUGS.solutions);
        const a3 = categories.map((path) => path + SLUGS.services);
        return categories.concat(a1).concat(a2).concat(a3);
    }

    return (
        <Menu isMobile={isMobile}>
            <div
                style={{
                    width: 150,
                    marginLeft: 20,
                    paddingLeft: 15,
                    paddingRight: 20,
                    paddingTop: 15,
                    paddingBottom: 25
                }}
            >
                <img alt='' src={logo} style={{ marginTop: 20, marginBottom: 20 }} />
            </div>
            <MenuItem
                id={SLUGS.dashboard}
                title='My Dashboard'
                // where all the icons are defined in 'assets/icons' in svg format
                icon="fa fa-home"            


                onClick={() => onClick(SLUGS.dashboard)}
            />
            <MenuItem
                id={SLUGS.categories}
                items={allMenuItems([
                    SLUGS.generation,
                    SLUGS.transmission,
                    SLUGS.industrialApplications
                ])}
                title='Categories'
                icon="fa fa-list"
                onClick={() => onClick(SLUGS.categories)}
            >
                <MenuItem
                    id={SLUGS.generation}
                    title='Generation'
                    items={allMenuItems([SLUGS.generation])}
                    level={2}
                    icon="fa fa-power-off"
                    onClick={() => onClick(SLUGS.generation)}
                >
                    <MenuItem
                        id={SLUGS.generation + SLUGS.products}
                        title='Products'
                        level={3}
                        icon="fa fa-circle"
                        onClick={() => onClick(SLUGS.generation + SLUGS.products)}
                    />
                    <MenuItem
                        id={SLUGS.generation + SLUGS.solutions}
                        title='Solutions'
                        level={3}
                        icon="fa fa-circle"
                        onClick={() => onClick(SLUGS.generation + SLUGS.solutions)}
                    />
                    <MenuItem
                        id={SLUGS.generation + SLUGS.services}
                        title='Services'
                        level={3}
                        icon="fa fa-circle"
                        onClick={() => onClick(SLUGS.generation + SLUGS.services)}
                    />
                </MenuItem>
                <MenuItem
                    id={SLUGS.transmission}
                    title='Transmission'
                    items={allMenuItems([SLUGS.transmission])}
                    level={2}
                    icon="fa fa-plug"
                    onClick={() => onClick(SLUGS.transmission)}
                >
                    <MenuItem
                        id={SLUGS.transmission + SLUGS.products}
                        title='Products'
                        level={3}
                        icon="fa fa-circle"
                        onClick={() => onClick(SLUGS.transmission + SLUGS.products)}
                    />
                    <MenuItem
                        id={SLUGS.transmission + SLUGS.solutions}
                        title='Solutions'
                        level={3}
                        icon="fa fa-circle"
                        onClick={() => onClick(SLUGS.transmission + SLUGS.solutions)}
                    />
                    <MenuItem
                        id={SLUGS.transmission + SLUGS.services}
                        title='Services'
                        level={3}
                        icon="fa fa-circle"
                        onClick={() => onClick(SLUGS.transmission + SLUGS.services)}
                    />
                </MenuItem>
                <MenuItem
                    id={SLUGS.industrialApplications}
                    title='Industrial Applications'
                    items={allMenuItems([SLUGS.industrialApplications])}
                    level={2}
                    icon="fa fa-industry"
                    onClick={() => onClick(SLUGS.industrialApplications)}
                >
                    <MenuItem
                        id={SLUGS.industrialApplications + SLUGS.products}
                        title='Products'
                        level={3}
                        icon="fa fa-circle"
                        onClick={() => onClick(SLUGS.industrialApplications + SLUGS.products)}
                    />
                    <MenuItem
                        id={SLUGS.industrialApplications + SLUGS.solutions}
                        title='Solutions'
                        level={3}
                        icon="fa fa-circle"
                        onClick={() => onClick(SLUGS.industrialApplications + SLUGS.solutions)}
                    />
                    <MenuItem
                        id={SLUGS.industrialApplications + SLUGS.services}
                        title='Services'
                        level={3}
                        icon="fa fa-circle"
                        onClick={() => onClick(SLUGS.industrialApplications + SLUGS.services)}
                    />
                </MenuItem>
            </MenuItem>

            <MenuItem
                id={SLUGS.details}
                title='Details'
                icon="fa fa-pie-chart"
                onClick={() => onClick(SLUGS.details)}
            />

            <div className={classes.separator}></div>
            <MenuItem
                id={SLUGS.settings}
                title='Settings'
                icon="fa fa-cog"
                onClick={() => onClick(SLUGS.settings)}
            />

            <MenuItem id='logout' title='Logout' icon="fa fa-sign-out"  onClick={() => onClick(SLUGS.login)} />
        </Menu>
    );
}

export default SidebarComponent;
