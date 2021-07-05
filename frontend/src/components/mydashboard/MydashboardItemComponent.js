import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import Collapsible from 'react-collapsible';
import SlideshowComponent from './SlideshowComponent';

const data = [];

for (let x = 1; x <= 24; x++) {
    data.push({ x: x, y: Math.floor(Math.random() * 100) });
}

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
                <Col xs={8} sm={8} md={8} lg={2} className='MyMiniCardsContainer'>
                    <Row className='dashboardTitle'>
                        {renderMiniCards('Air Quality Results', '80%')}
                    </Row>
                </Col>
                <Col xs={8} sm={2} md={2} lg={1.32} style={{ padding: 0 }} />
                <Col xs={8} sm={8} md={8} lg={2} className='MyMiniCardsContainer'>
                    <div className='dashboardTitle'>{renderMiniCards('Opened projects', '4')}</div>
                </Col>
                <Col xs={2} sm={2} md={2} lg={1.32} style={{ padding: 0 }} />

                <Col xs={8} sm={8} md={8} lg={2} className='MyMiniCardsContainer'>
                    <div className='dashboardTitle'>{renderMiniCards('Recently opened', '2')}</div>
                </Col>
                <Col xs={2} sm={2} md={2} lg={1.32} style={{ padding: 0 }} />
                <Col xs={8} sm={8} md={8} lg={2} className='MyMiniCardsContainer'>
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
                <Col xs={8} sm={8} md={8} lg={4} className='MyCardsContainer'>
                    <div className='dashboardTitle w3-padding-24'>
                        <i className='fa fa-bars' style={{ color: '#643082' }} aria-hidden='true' />
                        <b>My Recent Projects</b>
                    </div>
                    <div className='Collapsible dashboardCardSubTitle'>
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
                <Col xs={8} sm={8} md={8} lg={4} className='MyCardsContainer'>
                    <div className='dashboardTitle w3-padding-24'>
                        <i
                            className='fa fa-heart'
                            style={{ color: '#643082' }}
                            aria-hidden='true'
                        ></i>
                        <span>Favorites</span>
                    </div>
                    <Container fluid>
                        {renderCards('Fav Project 1', 'Transmission')}
                        {renderCards('Fav Project 2', 'Generation')}
                        {renderCards('Fav Project 3', 'Industrial App')}
                        {renderCards('Fav Project 1', 'Transmission')}
                        {renderCards('Fav Project 2', 'Generation')}
                        {renderCards('Fav Project 3', 'Industrial App')}
                    </Container>
                </Col>
                <Col xs={2} sm={2} md={2} lg={1} style={{ padding: 0, maxWidth: '1.5%' }} />
                <Col xs={8} sm={8} md={8} lg={3.5} className='MyCardsContainer'>
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

                    <div className='Collapsible dashboardCardSubTitle '>
                        <Collapsible trigger='Question 1: how many catagories do we have?'>
                            <div className='  w3-card'>
                                <p>Question1 answer</p>
                            </div>
                        </Collapsible>
                        <Collapsible trigger='Question 2: how to export results into pdf?'>
                            <div className=' w3-card'>
                                <p>Question 2 answer</p>
                            </div>
                        </Collapsible>
                        <Collapsible trigger='Question 3: where to find my fav projects ?'>
                            <div className=' w3-card'>
                                <p>Question 3 answer</p>
                            </div>
                        </Collapsible>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default MydashboardItemComponent;
