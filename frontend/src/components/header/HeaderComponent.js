import React, { useContext } from 'react';
import { string } from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';
import { SidebarContext } from 'hooks/useSidebar';
import SLUGS from 'resources/slugs';
import { PrivateSectionContext } from 'hooks/PrivateSectionContext';

/**
 * The Header Component is a shared component between all pages. It displays
 * the related header title of the selected section in the SidebarComponent changes.
 *
 * @returns the header title, subtitles related to the selected section in the SidebarComponent. It also displays the user name in the header bar as well.
 */
function HeaderComponent() {
    const { currentItem } = useContext(SidebarContext); // get the current Path selected in the Sidebar
    const [selectedProduct] = useContext(PrivateSectionContext);

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
            if (
                selectedProduct[0].productName === undefined ||
                selectedProduct[0].productName === ''
            ) {
                title = ' Please select a product';
            } else {
                title = 'Details ';
                subtitle = ' Selected product   ';
                subsubtitle = ' ' + selectedProduct[0].productName;
            }

            break;
        case currentItem === SLUGS.generation + SLUGS.products:
            title = 'Product Catagory';
            break;
        case currentItem === SLUGS.generation + SLUGS.solutions:
            title = 'Solutions';
            break;
        case currentItem === SLUGS.generation + SLUGS.services:
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

    return (
        <div className='HeaderContainer'>
            <Container fluid>
                <Row align='center' justify='between'>
                    <Col>
                        <div className='HeaderTitle'>
                            <span className=' w3-padding-16 w3-margin-left'>
                                {title}
                                <UseArrow />
                                {subtitle}
                                <UseArrow />
                                {subsubtitle}
                            </span>
                        </div>
                    </Col>
                    <Col>
                        <Row align='center' justify='end' style={{ marginRight: 20 }}>
                            <div className='HeaderIconSyle'>
                                <i className='fa fa-user-circle-o' color='white' />
                            </div>

                            <div className='HeaderUserName'> Stunning User</div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;
