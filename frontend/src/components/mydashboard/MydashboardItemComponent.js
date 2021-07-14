import React from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import Collapsible from 'react-collapsible';
import SlideshowComponent from './SlideshowComponent';

/**
 * This component creates the first page after logged in
 *
 * It involves the necessary information regarding the web site.
 *
 * @returns the required components for the mydashboard page.
 */
function MydashboardItemComponent() {
    function renderMiniCards(title, value) {
        return (
            <Col align='center' justify='between' className='statContainer'>
                <div className='dashboardTitle'>
                    <p> {title} </p>
                    <Row justify='center'>
                        <div className='dashboardMiniTitle'>
                            <i className='fa fa-line-chart' aria-hidden='true' />
                            {value}
                        </div>
                    </Row>
                </div>
            </Col>
        );
    }

    function renderCards(title, content) {
        return (
            <Row align='center' justify='start' className='statContainer'>
                <Col>
                    <div className='star'>
                        <i className='fa fa-star-o' aria-hidden='true' />
                    </div>
                </Col>
                <Col>
                    <div className='favouritesContent'>
                        <Container fluid>
                            <Row direction='row'>
                                <Col>{title}</Col>
                                <Col>{content}</Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
        );
    }

    return (
        <Container fluid={true} style={{ padding: 0 }}>
            <Row style={{ padding: 0, marginLeft: 0, marginRight: 0 }}>
                <Col className='MySlideshowContainer'>
                    <SlideshowComponent />
                </Col>
            </Row>
            <Row
                justify='between'
                style={{ padding: 0, marginLeft: 0, marginRight: 0 }}
                breakpoints={{ 1024: 'column' }}
            >
                <Col className='MyMiniCardsContainer'>
                    <Row className='dashboardTitle'>
                        {renderMiniCards('Air Quality Results', '80%')}
                    </Row>
                </Col>
                <Visible lg md xl xxl>
                    <Col style={{ padding: 0 }} />
                </Visible>
                <Col className='MyMiniCardsContainer'>
                    <div className='dashboardTitle'>{renderMiniCards('Opened projects', '4')}</div>
                </Col>
                <Visible lg md xl xxl>
                    <Col style={{ padding: 0 }} />
                </Visible>
                <Col className='MyMiniCardsContainer'>
                    <div className='dashboardTitle'>{renderMiniCards('Recently opened', '2')}</div>
                </Col>
                <Visible lg md xl xxl>
                    <Col style={{ padding: 0 }} />
                </Visible>
                <Col className='MyMiniCardsContainer'>
                    <div className='dashboardTitle'>{renderMiniCards('Closed projects', '1')}</div>
                </Col>
            </Row>

            <Row
                justify='between'
                style={{
                    padding: 0,
                    marginTop: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 20
                }}
                breakpoints={{ 1024: 'column' }}
            >
                <Col className='MyCardsContainer'>
                    <div className='dashboardTitle w3-padding-24'>
                        <i className='fa fa-bars' style={{ color: '#643082' }} aria-hidden='true' />
                        <b>My Recent Projects</b>
                    </div>
                    <div className='Collapsible dashboardCardSubTitle w3-padding-32'>
                        <Container fluid>
                            <Row>
                                <Collapsible trigger='Electric Motors'>
                                    <div className='w3-card'>
                                        <p>scenario 2</p>
                                    </div>
                                </Collapsible>
                            </Row>
                            <Row>
                                <Collapsible trigger='Super Solution'>
                                    <div className='w3-card'>
                                        <p>Baseline Scenario</p>
                                    </div>
                                </Collapsible>
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col xs={2} sm={2} md={2} lg={1} style={{ padding: 0, maxWidth: '1.5%' }} />
                <Col className='MyCardsContainer'>
                    <div className='dashboardTitle w3-padding-24'>
                        <i
                            className='fa fa-heart'
                            style={{ color: '#643082' }}
                            aria-hidden='true'
                        ></i>
                        <span>Favorites</span>
                    </div>
                    <div className='Container-fluid w3-padding-32'>
                        {renderCards('Generator 1824')}
                        {renderCards('Gas Turbine Type2')}
                        {renderCards('Trasmitter DIN42a')}
                        {renderCards('Gas Turbine Type3')}
                        {renderCards('Trasmitter DIN42b')}
                    </div>
                </Col>
                <Col xs={2} sm={2} md={2} lg={1} style={{ padding: 0, maxWidth: '1.5%' }} />
                <Col className='MyCardsContainer'>
                    <div className=' w3-padding-24'>
                        <div className='dashboardTitle'>
                            <i
                                className='fa fa-question-circle'
                                aria-hidden='true'
                                style={{ color: '#643082' }}
                            />
                            <b>FAQ</b>
                        </div>
                    </div>

                    <div className='Collapsible dashboardCardSubTitle w3-padding-32'>
                        <Collapsible trigger='Q1: How many catagories do we have?'>
                            <div className='  w3-card'>
                                <p>
                                    Answer: We Have three categories: Generation, Transmission and
                                    Industrial Applications
                                </p>
                            </div>
                        </Collapsible>
                        <Collapsible trigger='Q2: How to export results into pdf?'>
                            <div className=' w3-card'>
                                <p>
                                    Answer: You can go to Categories - Choose Products - Use Export
                                    button on the screen to download the pdf
                                </p>
                            </div>
                        </Collapsible>
                        <Collapsible trigger='Q3: Where to find my fav projects?'>
                            <div className=' w3-card'>
                                <p> Answer: You can find favorite projects in "My Dashboard"</p>
                            </div>
                        </Collapsible>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default MydashboardItemComponent;
