import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import {
    IconAgents,
    IconArticles,
    IconContacts,
    IconIdeas,
    IconLogout,
    IconOverview,
    IconSettings,
    IconSubscription,
    IconTickets,
    IconInbox,
    IconHome
} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';
import logo from './LogoCarbonteam.png'
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

    function mapperFunction(value, index) {
        return (
            <MenuItem
                key={'/Category'+index}
                id={'/Category'+index}
                title={value}
                level={2}
                icon={IconHome}
                onClick={() => onClick({category: '/Category'+index}) }
            />
        )
    }


    let state = {
        categories: ['Generation', 'Transmission', 'Industrial']
    }
    const menuItems = state.categories.map(mapperFunction);
    console.log(menuItems);

    return (
        <Menu isMobile={isMobile}>

            <div style={{ paddingTop: 20, paddingBottom: 20 }}>
            <img src={logo} />
            </div>
            <MenuItem
                id={SLUGS.categories}
                items={['/Category1', '/Category2', '/Category3']}
                title='Browse'
                icon={IconHome}
                onClick={() => onClick(SLUGS.categories)}
            >
                {
                    menuItems
                }
            </MenuItem>
            <MenuItem
                id={SLUGS.dashboard}
                title='My Dashboard'
                icon={IconHome}
                onClick={() => onClick(SLUGS.dashboard)}
            />
            {/* <MenuItem
                id={SLUGS.home}
                title='Home'
                icon={IconHome}
                onClick={() => onClick(SLUGS.home)}
            /> */}
            <MenuItem
                id={SLUGS.scenerios}
                items={[SLUGS.overview, SLUGS.comparison]}
                title='Scenerios'
                icon={IconArticles}
                onClick={() => onClick(SLUGS.scenerios)}
            >
                <MenuItem
                    id={SLUGS.overview}
                    title='Overview'
                    level={2}
                    icon={IconOverview}
                    onClick={() => onClick(SLUGS.overview)}
                />
                <MenuItem
                    id={SLUGS.comparison}
                    title='Comparison'       // display two senerios for diff scenerison
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.comparison)}
                />
                {/* <MenuItem
                    id={SLUGS.overviewThree}
                    title='Sub Item 3'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.overviewThree)}
                /> */}
            </MenuItem>
            <MenuItem
                id={SLUGS.tickets}
                title='Tickets'
                icon={IconTickets}
                onClick={() => onClick(SLUGS.tickets)}
            />
            <MenuItem
                id={SLUGS.ideas}
                items={[SLUGS.ideasTwo, SLUGS.ideasThree]}
                title='Ideas'
                icon={IconIdeas}
            >
                <MenuItem
                    id={SLUGS.ideas}
                    title='Sub Item 1'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.ideas)}
                />
                <MenuItem
                    id={SLUGS.ideasTwo}
                    title='Sub Item 2'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.ideasTwo)}
                />
                <MenuItem
                    id={SLUGS.ideasThree}
                    title='Sub Item 3'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.ideasThree)}
                />
            </MenuItem>
            <MenuItem
                id={SLUGS.contacts}
                title='Contacts'
                icon={IconContacts}
                onClick={() => onClick(SLUGS.contacts)}
            />
            <MenuItem
                id={SLUGS.agents}
                title='Agents'
                icon={IconAgents}
                onClick={() => onClick(SLUGS.agents)}
            />
            {/* <MenuItem
                id={SLUGS.articles}
                title='Articles'
                icon={IconArticles}
                onClick={() => onClick(SLUGS.articles)}
            />
            <MenuItem
                id={SLUGS.subscription}
                title='Subscription'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.subscription)}
            /> */}
            <div className={classes.separator}></div>
            <MenuItem
                id={SLUGS.settings}
                title='Settings'
                icon={IconSettings}
                onClick={() => onClick(SLUGS.settings)}
            />

            <MenuItem id='logout' title='Logout' icon={IconLogout} onClick={logout} />
        </Menu>
    );
}

export default SidebarComponent;