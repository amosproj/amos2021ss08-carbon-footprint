import React from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import PieChartComponent from 'components/details/PieChartComponent';
import { Col, Container, Row } from 'react-grid-system';
import Collapsible from 'react-collapsible';
import SlideshowComponent from './SlideshowComponent';
import ColumnChartComponent from 'components/details/ColumnChartComponent';

const data = [];

for (let x = 1; x <= 24; x++) {
    data.push({ x: x, y: Math.floor(Math.random() * 100) });
}

const useStyles = createUseStyles((theme) => ({
    container: {
        backgroundColor: '#FFFFFF',
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        borderRadius: 4,
        cursor: 'pointer'
    },
    graphContainer: {
        marginTop: 24,
        marginLeft: 0,
        marginRight: 0,
        width: '100%'
    },
    graphSection: {
        padding: 24
    },
    graphSubtitle: {
        ...theme.typography.smallSubtitle,
        color: theme.color.grayishBlue2,
        marginTop: 4,
        marginRight: 8
    },
    graphTitle: {
        ...theme.typography.cardTitle,
        color: theme.color.veryDarkGrayishBlue
    },
    legendTitle: {
        ...theme.typography.smallSubtitle,
        fontWeight: '600',
        color: theme.color.grayishBlue2,
        marginLeft: 8
    },
    separator: {
        backgroundColor: theme.color.lightGrayishBlue2,
        width: 1,
        minWidth: 1
    },
    statContainer: {
        borderBottom: `1px solid ${theme.color.lightGrayishBlue2}`,
        padding: '0px 32px 24px 32px',
        height: 'calc(130px - 50px)',
        '&:last-child': {
            border: 'none'
        }
    },
    stats: {
        borderTop: `1px solid ${theme.color.lightGrayishBlue2}`,
        width: '100%'
    },
    statTitle: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: '22px',
        letterSpacing: '0.3px',
        textAlign: 'center',
        color: theme.color.grayishBlue2,
        whiteSpace: 'nowrap',
        marginBottom: 6
    },
    statValue: {
        ...theme.typography.title,
        textAlign: 'center',
        color: theme.color.veryDarkGrayishBlue
    }
}));

function MydashboardItemComponent() {
    const theme = useTheme();
    const classes = useStyles({ theme });



    function renderMiniCards(title, value) {
        return (
            <Column
                flexGrow={1}
                vertical='space-between'
                horizontal='space-between'
                className={classes.statContainer}
            >
                <div className='dashboardTitle'>
                    <p> {title} </p>
                    <div className='dashboardMiniTitle'>
                        <p>
                            <i class="fa fa-line-chart" aria-hidden="true"/>
                            {value} 
                        </p>
                    </div>
                    
                </div>
            </Column>
        );
    }

    function renderCards(title, value) {
        return (
            <Column
                flexGrow={1}
                vertical='space-between'
                horizontal='space-between'
                className={classes.statContainer}
            >
                <div className='star'>
                    <i className='fa fa-star-o' aria-hidden='true' />
                    <p>
                        {title}
                        {value}
                    </p>
                </div>
            </Column>
        );
    }

    return (
        <Container fluid={true} style={{ padding: 'auto' }}>
            <Row style={{ padding: 0, margin: 0 }}>
                <Col xs={8} sm={8} md={8} lg={16} className='MydashboardContainer'>
                    <SlideshowComponent />
                </Col>
            </Row>                
            <Row/>
            <Row horizontal='space-between' style={{ padding: 0, marginLeft: 0,marginRight:0 }}  breakpoints={{ 1024: 'column' }}>
                <Col xs={8} sm={8} md={8} lg={2} className='MyMiniCardsContainer'>
                    <div className='dashboardTitle w3-padding-24 w3-margin-left'>
                        {renderMiniCards('Air Quality Results', '80%')}
                    </div>
                </Col>
                <Col xs={8} sm={2} md={2} lg={1.32} style={{padding:0}}  />
                <Col xs={8} sm={8} md={8} lg={2} className='MyMiniCardsContainer'>
                    <div className='dashboardTitle w3-padding-24 w3-margin-left'>
                    {renderMiniCards('Opened projects', '4')}
                    </div>
                </Col>
                <Col xs={2} sm={2} md={2} lg={1.32} style={{padding:0}}  />

                <Col xs={8} sm={8} md={8} lg={2} className='MyMiniCardsContainer'>
                    <div className='dashboardTitle w3-padding-24 w3-margin-left'>
                    {renderMiniCards('Recently opened', '2')}
                    </div>
                </Col>
                <Col xs={2} sm={2} md={2} lg={1.32} style={{padding:0}}  />
                <Col xs={8} sm={8} md={8} lg={2} className='MyMiniCardsContainer'>
                    <div className='dashboardTitle w3-padding-24 w3-margin-left'>
                        {renderMiniCards('Closed projects', '1')}
                    </div>
                </Col>
            </Row>

            <Row horizontal='space-between' style={{ padding: 0, margin: 0 }}  breakpoints={{ 1024: 'column' }}>
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
                <Col xs={2} sm={2} md={2} lg={1} style={{padding:0,maxWidth:'1.5%'}}  />
                <Col xs={8} sm={8} md={8} lg={4} className='MyCardsContainer'>
                    <div className='dashboardTitle w3-padding-24'>
                        <i
                            className='fa fa-heart'
                            style={{ color: '#643082' }}
                            aria-hidden='true'
                        ></i>
                        <span>Favorites</span>
                    </div>

                    {renderCards('Fav Project 1', 'Transmission')}
                    {renderCards('Fav Project 2', 'Generation')}
                    {renderCards('Fav Project 3', 'Industrial App')}
                    {renderCards('Fav Project 1', 'Transmission')}
                    {renderCards('Fav Project 2', 'Generation')}
                    {renderCards('Fav Project 3', 'Industrial App')}

                </Col>
                <Col xs={2} sm={2} md={2} lg={1} style={{padding:0,maxWidth:'1.5%'}}  />
                <Col xs={8} sm={8} md={8} lg={3.5} className='MyCardsContainer'>
                    <div className=' w3-padding-24'>
                        <div className='dashboardTitle'>
                            <i
                                class='fa fa-question-circle'
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
            <Row horizontal='space-between' style={{ padding: 0, margin: 0 }}  breakpoints={{ 1024: 'column' }}>

                <Col xs={8} sm={8} md={8} lg={4} className='MyChartCardsContainer'>
                    <div className='dashboardTitle'>
                        <span>My charts</span>
                    </div>
                    <PieChartComponent />
                </Col>
                <Col xs={2} sm={2} md={2} lg={1} style={{padding:0,maxWidth:'1.5%'}}/>
                <Col xs={8} sm={8} md={8} lg={4} className='MyChartCardsContainer'>
                    <div className='dashboardTitle'>
                        <span>My charts</span>
                    </div>
                    <ColumnChartComponent />
                </Col>
            </Row>
            <Row horizontal='space-between' style={{ padding: 0, margin: 0 }}  breakpoints={{ 1024: 'column' }}>
                <div className='ContactContainer'>
                    <footer className='w3-center w3-padding-16' >
                        <p>For latest Updates</p>
                        <form className='form-inline w3-padding-16'>
                            Subscribe :
                            <input
                                type='email'
                                className='form-control'
                                size={50}
                                placeholder='Email Address'
                            />
                            <button type='button' className='SignUp'>Sign Up</button>
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
