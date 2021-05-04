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
    IconPower,
    IconHome,
    IconArrow,
    IconTransmission,
    IconBrowse,
    IconBuilding
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

            <div style={{width: 160, paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 20 }}>
            <img src={logo}/>
            </div>
            {console.log(allMenuItems())}
            <MenuItem
                id={SLUGS.dashboard}
                title='My Dashboard'
                icon={IconHome}
                onClick={() => onClick(SLUGS.dashboard)}
            />
            <MenuItem
                id={SLUGS.categories}
                items={allMenuItems([SLUGS.generation, SLUGS.transmission, SLUGS.industrialApplications])}
                title='Browse'
                icon={IconBrowse}
                onClick={() => onClick(SLUGS.categories)}
            >
                <MenuItem
                    id={SLUGS.generation}
                    title='Generation'
                    items={allMenuItems([SLUGS.generation])}
                    level={2}
                    icon={IconPower}
                    onClick={() => onClick(SLUGS.generation)}
                >
                    <MenuItem
                        id={SLUGS.generation + SLUGS.products}
                        title='Products'
                        level={3}
                        icon={IconArrow}
                        onClick={() => onClick(SLUGS.generation + SLUGS.products)}
                    />
                    <MenuItem
                        id={SLUGS.generation + SLUGS.solutions}
                        title='Solutions'
                        level={3}
                        icon={IconArrow}
                        onClick={() => onClick(SLUGS.generation + SLUGS.solutions)}
                    />
                    <MenuItem
                        id={SLUGS.generation + SLUGS.services}
                        title='Services'
                        level={3}
                        icon={IconArrow}
                        onClick={() => onClick(SLUGS.generation + SLUGS.services)}
                    />
                </MenuItem>
                <MenuItem
                    id={SLUGS.transmission}
                    title='Transmission'
                    items={allMenuItems([SLUGS.transmission])}
                    level={2}
                    icon={IconTransmission}
                    onClick={() => onClick(SLUGS.transmission)}
                >
                    <MenuItem
                        id={SLUGS.transmission + SLUGS.products}
                        title='Products'
                        level={3}
                        icon={IconArrow}
                        onClick={() => onClick(SLUGS.transmission + SLUGS.products)}
                    />
                    <MenuItem
                        id={SLUGS.transmission + SLUGS.solutions}
                        title='Solutions'
                        level={3}
                        icon={IconArrow}
                        onClick={() => onClick(SLUGS.transmission + SLUGS.solutions)}
                    />
                    <MenuItem
                        id={SLUGS.transmission + SLUGS.services}
                        title='Services'
                        level={3}
                        icon={IconArrow}
                        onClick={() => onClick(SLUGS.transmission + SLUGS.services)}
                    />
                </MenuItem>
                <MenuItem
                    id={SLUGS.industrialApplications}
                    title='Industrial Applications'
                    items={allMenuItems([SLUGS.industrialApplications])}
                    level={2}
                    icon={IconBuilding}
                    onClick={() => onClick(SLUGS.industrialApplications)}
                >
                    <MenuItem
                        id={SLUGS.industrialApplications + SLUGS.products}
                        title='Products'
                        level={3}
                        icon={IconArrow}
                        onClick={() => onClick(SLUGS.industrialApplications + SLUGS.products)}
                    />
                    <MenuItem
                        id={SLUGS.industrialApplications + SLUGS.solutions}
                        title='Solutions'
                        level={3}
                        icon={IconArrow}
                        onClick={() => onClick(SLUGS.industrialApplications + SLUGS.solutions)}
                    />
                    <MenuItem
                        id={SLUGS.industrialApplications + SLUGS.services}
                        title='Services'
                        level={3}
                        icon={IconArrow}
                        onClick={() => onClick(SLUGS.industrialApplications + SLUGS.services)}
                    />
                </MenuItem>
            </MenuItem>
            <MenuItem
                id={SLUGS.details}
                items={[SLUGS.overview, SLUGS.comparison]}
                title='Details'
                icon={IconOverview}
                onClick={() => onClick(SLUGS.details)}
            >
                <MenuItem
                    id={SLUGS.overview}
                    title='Overview'
                    level={2}
                    icon={IconOverview}
                    onClick={() => onClick(SLUGS.overview)}
                />
                {/* <MenuItem // Not required for this sprint
                    id={SLUGS.comparison}
                    title='Comparison'       // display two senerios for diff scenerison
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.comparison)}
                /> */}
            </MenuItem>
           {/*  <MenuItem
                id={SLUGS.tickets}
                title='Quick Guide'
                icon={IconTickets}
                onClick={() => onClick(SLUGS.tickets)}
            /> */}
            {/* <MenuItem
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
            </MenuItem> */}
            {/* <MenuItem
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
            /> */}
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