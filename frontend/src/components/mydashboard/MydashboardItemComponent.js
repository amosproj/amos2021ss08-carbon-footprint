import React from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import PieChartComponent from 'components/details/PieChartComponent';
import { Col, Container, Row } from 'react-grid-system';
import Collapsible from 'react-collapsible';
import Slideshow from './Slideshow';
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

    // function renderLegend(color, title) {
    //     return (
    //         <Row vertical='center'>
    //             <div style={{ width: 16, border: '2px solid', borderColor: color }}></div>
    //             <span className={classes.legendTitle}>{title}</span>
    //         </Row>
    //     );
    // }

    function renderStat(title, value) {
        return (
            <Column
                flexGrow={1}
                vertical='space-between'
                horizontal='space-between'
                className={classes.statContainer}
            >
                <div className='star'>
                    <i className='fa fa-star-o' aria-hidden='true' />
                    <p>{title}{value}</p>
                </div>

            </Column>
        );
    }

    return (
        <Container>
            <Row horizontal='center' breakpoints={{ 1024: 'column' }}>
            <Col xs={8} sm={8} md={8} lg={4} className='MydashboardContainer'>
                    <div className='dashboardTitle'>
                        <span>Catagories</span>
                    </div>
                    <Slideshow />
                </Col>
                <Col xs={2} sm={2} md={2} lg={1} />
                <Col xs={8} sm={8} md={8} lg={3} className='ChartsCardsContainer'>

                    <div className='dashboardTitle'>
                        <span>My charts</span>
                    </div>
                    <PieChartComponent />
                </Col>   
                <Col xs={2} sm={2} md={2} lg={1} />
                <Col xs={8} sm={8} md={8} lg={3} className='ChartsCardsContainer'>
                        <div className='dashboardTitle'>
                            <span>My charts</span>
                        </div>
                        <ColumnChartComponent />
                </Col>
                
            </Row>
            <Row horizontal='center' breakpoints={{ 1024: 'column' }}>
                <Col xs={8} sm={8} md={8} lg={4} className='ProjectsCardsContainer'>
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
                <Col xs={2} sm={2} md={2} lg={1} />
                <Col xs={8} sm={8} md={8} lg={3} className='FavCardsContainer'>
                    <div className='dashboardTitle w3-padding-24'>
                        <i className='fa fa-heart' style={{ color: '#643082' }} aria-hidden='true'></i>
                        <span>Favorites</span>
                    </div>

                    {renderStat('Fav Project 1', 'Transmission')}
                    {renderStat('Fav Project 2', 'Generation')}
                    {renderStat('Fav Project 3', 'Industrial App')}
                    {renderStat('Fav Project 1', 'Transmission')}
                    {renderStat('Fav Project 2', 'Generation')}
                    {renderStat('Fav Project 3', 'Industrial App')}
                    {renderStat('Fav Project 1', 'Transmission')}
                    {renderStat('Fav Project 2', 'Generation')}
                    {renderStat('Fav Project 3', 'Industrial App')}

                </Col>
                <Col xs={2} sm={2} md={2} lg={1} />

                <Col xs={8} sm={8} md={8} lg={3} className='ProjectsCardsContainer'>
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
                        <Collapsible trigger='Question 2: how many catagories do we have?'>
                            <div className=' w3-card'>
                                <p>Question 2 answer</p>
                            </div>
                        </Collapsible>
                        <Collapsible trigger='Question 3: how many catagories do we have?'>
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
