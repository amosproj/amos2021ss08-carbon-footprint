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
                        <Collapsible trigger='Project 1 '>
                            <div className='w3-card'>
                                <p>This is the collapsible content.</p>
                            </div>
                        </Collapsible>
                        <Collapsible trigger='Project 2 '>
                            <div className='w3-card'>
                                <p>This is the collapsible content.</p>
                            </div>
                        </Collapsible>
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
            <Row style={{ padding: 0, margin: 0 }} breakpoints={{ 1024: 'column' }}>
                <div className='ContactContainer'>
                    <footer className='w3-center w3-padding-16'>
                        <p>For latest Updates</p>
                        <form className='form-inline w3-padding-16'>
                            {'Subscribe: '}
                            <input
                                type='email'
                                className='form-control'
                                size={50}
                                placeholder='Email Address'
                            />
                            <button type='button' className='SignUp'>
                                Sign Up
                            </button>
                        </form>

                        <p>
                            Powered by{' '}
                            <a
                                href='https://www.siemens-energy.com/global/en/offerings.html'
                                rel='noreferrer'
                                title='W3.CSS'
                                target='_blank'
                                className='w3-hover-text-green'
                            >
                                Siemens Energy
                            </a>
                        </p>
                    </footer>
                </div>
            </Row>
        </Container>
    );
}

export default MydashboardItemComponent;
