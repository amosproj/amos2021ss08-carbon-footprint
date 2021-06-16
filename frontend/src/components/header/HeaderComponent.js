import React, { useContext } from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { SidebarContext } from 'hooks/useSidebar';
import SLUGS from 'resources/slugs';
import { PrivateSectionContext } from 'hooks/PrivateSectionContext';
import slugs from 'resources/slugs';
import { Link } from 'react-router-dom';
import { createUseStyles,  useTheme } from 'react-jss';

/**
 * The Header Component is a shared component between all pages. It displays
 * the related header title of the selected section in the SidebarComponent changes.
 *
 * @author Irem Toroslu
 * @returns the header title, subtitles related to the selected section in the SidebarComponent. It also displays the user name in the header bar as well.
 */

 const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `2px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 10,
        marginBottom: 10,
        opacity: 0.06
    }
});
function HeaderComponent() {
    const { currentItem } = useContext(SidebarContext); // get the current Path selected in the Sidebar
    const [selectedProducts] = useContext(PrivateSectionContext);
    const theme = useTheme();
    //eslint-disable-next-line 
    const classes = useStyles({ theme });

    let title;
    let subtitle;
    let subsubtitle;

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
            break;
        case currentItem === SLUGS.details:
            title = 'Details ';
            subtitle = ' Selected product   ';
            subsubtitle =
                selectedProducts[0].productName === undefined
                    ? ' Please select a model first'
                    : ' ' + selectedProducts[0].productName;
            break;
        case currentItem === SLUGS.generation + '/products':
            title = 'Product Catagory';
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

    function UseArrow(selected) {
        if (title === 'Details ' && !(selected === undefined)) {
            return <i className='fa fa-arrow-right' />;
        }
        return null;
    }

    function UseBack(selected) {
        if (title === 'Details ' && !(selected === undefined)) {
            // return <i class='fa fa-chevron-left ' />;
        }
        return null;
    }

    return (
        <div className='HeaderContainer'>
            <Row
                vertical='center'
                horizontal='space-between'

            >
                <div className='HeaderTitle' vertical='center' horizontal='space-between'>
                    <span className=' w3-padding-16 w3-margin-left'>
                        <Link to={{ pathname: slugs.categories }}>
                            <UseBack />
                        </Link>
                        {title}
                        <UseArrow />
                        {subtitle}
                        <UseArrow />
                        {subsubtitle}
                    </span>
                </div>

                <Row vertical='baseline' horizontal='flex-start' style={{ marginRight: 20 }}>
                    <div className='HeaderIconSyle'>
                        <i className='fa fa-user-circle-o' color='white' />
                    </div>

                    <div className='HeaderUserName'> user name</div>
                </Row>
            </Row>
        </div>
    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;
