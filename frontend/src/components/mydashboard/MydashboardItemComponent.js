import React from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import LineChart from 'react-svg-line-chart';
import PieChartComponent from 'components/details/PieChartComponent';
import { Col, Container, Row } from 'react-grid-system';
import Collapsible from 'react-collapsible';

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
        padding: '24px 32px 24px 32px',
        height: 'calc(114px - 48px)',
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

    function renderLegend(color, title) {
        return (
            <Row vertical='center'>
                <div style={{ width: 16, border: '2px solid', borderColor: color }}></div>
                <span className={classes.legendTitle}>{title}</span>
            </Row>
        );
    }

    function renderStat(title, value) {
        return (
            <Column
                flexGrow={1}
                vertical='space-between'
                horizontal='space-between'
                className={classes.statContainer}
            >
                <div className='star'>
                    <i className="fa fa-star-o" aria-hidden="true"/>
                    <span className='dashboardSubTitle'>{title}</span>
                    <span className='dashboardText'>{value}</span>
                </div>
            </Column>
        );
    }

    return (
        <Container >
            <Row horizontal='center' breakpoints={{ 1024: 'column' }}>
                <Col xs={8} sm={8} md={8} lg={6} className='MydashboardContainer'>
                    <div className='dashboardTitle'>
                        <span>My chart</span>
                    </div>
                    <PieChartComponent />
                </Col>
                <Col xs={2} sm={2} md={2} lg={1} />

                <Col xs={8} sm={8} md={8} lg={4} className='FavCardsContainer'>
                    <div className='mydashboardNavbar'>
                        <div className='dashboardTitle'>
                            <i className='fa fa-heart' aria-hidden='true'></i>
                            <span>Favorites</span>
                        </div>
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
            </Row>
            <Row horizontal='center' breakpoints={{ 1024: 'column' }}>
                <Col xs={8} sm={8} md={8} lg={7}/>
                <Col xs={8} sm={8} md={8} lg={4} className='ProjectsCardsContainer'>

                    <div className='dashboardTitle'>
                        <i className="fa fa-bars" aria-hidden="true"/>
                        <b>My Recent Projects</b>
                    </div>
                    <div className='Collapsible'>
                        <div className={classes.statContainer}>
                            <Collapsible  trigger='Project 1 '>
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
                    </div>

                </Col>
            </Row>
            <Row horizontal='center' breakpoints={{ 1024: 'column' }}>
                <Col xs={8} sm={8} md={8} lg={7}/>
                <Col xs={8} sm={8} md={8} lg={4} className='ProjectsCardsContainer'>
                    <div className=' w3-padding-24'>
                        <div className='dashboardTitle'>
                            <i class="fa fa-question-circle" aria-hidden="true" style={{color: '#643082'}}/>
                            <b>FAQ</b>
                        </div>
                    </div>

                    <div className='Collapsible '>
                        <Collapsible  trigger='Question 1: how many catagories do we have?'>
                            <div className=' dashboardTitle w3-card'>
                                <p>Question1 answer</p>
                            </div>
                        </Collapsible>
                        <Collapsible trigger='Question 2: how many catagories do we have?'>
                            <div className='dashboardTitle w3-card'>
                                <p>Question 2 answer</p>
                            </div>
                        </Collapsible>
                        <Collapsible trigger='Question 3: how many catagories do we have?'>
                            <div className='dashboardTitle w3-card'>
                                <p>Question 3 answer</p>
                            </div>
                        </Collapsible>
                    </div>
                </Col>
            </Row>
        </Container>

        // <Row
        //     flexGrow={1}
        //     className='MydashboardContainer'
        //     style={{backgroundColor:'#ffffff'}}
        //     horizontal='center'
        //     breakpoints={{ 1024: 'column' }}
        // >
        //     <Column
        //         wrap
        //         flexGrow={7}
        //         flexBasis='735px'
        //         className='graphSection'
        //         breakpoints={{ 1024: { width: 'calc(100% - 48px)', flexBasis: 'auto' } }}
        //     >
        //         <Row wrap horizontal='space-between'>
        //             <Column>
        //                 <span className='TableTitle'>My Chart</span>
        //                 <span className='TableSubTitle'>Previos overview</span>
        //             </Column>
        //             {renderLegend(theme.color.lightBlue, 'Today')}
        //         </Row>
        //         <div className='graphContainer'>
        //             <PieChartComponent/>
        //         </div>
        //     </Column>

        //     <Column className={classes.separator} breakpoints={{ 1024: { display: 'none' } }}/>
        //     <Row>
        //         <div className='MydashboardNavbar' vertical='center' horizontal='space-between'>
        //             <div className='NavbarTitle'>
        //                 <b>Favorites</b>
        //             </div>
        //         </div>
        //     </Row>
        //     <Column flexGrow={3} flexBasis='342px' breakpoints={{ 1024: classes.stats }}>
        //         {renderStat('Resolved', '449')}
        //         {renderStat('Received', '426')}
        //         {renderStat('Average first response time', '33m')}
        //         {renderStat('Average response time', '3h 8m')}
        //         {renderStat('Resolution within SLA', '94%')}
        //     </Column>
        // </Row>
    );
}

export default MydashboardItemComponent;
