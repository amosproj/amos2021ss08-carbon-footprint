import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';

/**
 * creates cards for selection of the products in the Product Grid
 *
 * @param {*} props: The classname and the path that should be used.
 * @returns
 */
function MiniCardComponent({ path }) {
    return (
        <Container fluid className='MiniCardImageContainer'>
            <Col justify='center'>
                {/*  Resize the image on the cards (product images)            */}
                <Row align='center' justify='center'>
                    {/* define the image path */}
                    <Container fluid>
                        <img src={path} alt='' />
                    </Container>
                </Row>
            </Col>
        </Container>
    );
}

MiniCardComponent.propTypes = {
    path: PropTypes.string
};

export default MiniCardComponent;
