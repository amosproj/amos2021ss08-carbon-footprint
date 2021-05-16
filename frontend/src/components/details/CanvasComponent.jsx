/** 
in this main component come all the canvas page components 
such as diagrams and tables 

@author parham, 08.05
*/

import React, { Component } from 'react';
import PieChart from './PieChartComponent';
import ColumnChart from './ColumnChartComponent';
import Table from './TableComponent'
import './canvas.css';
import {Container, Row, Col } from 'react-grid-system';
import theme from 'resources/theme';



class CanvasPage extends Component {
    render() {
        return (
            <Container  fluid={true}>
            <Row>
                <Col xs={5} style={{marginTop:30}}>
                    <h3  style={{fontSize:theme.typography.subtitle.fontSize,fontWeight:theme.typography.subtitle.fontWeight, lineHeight:theme.typography.subtitle.lineHeight,
                    letterSpacing:theme.typography.subtitle.letterSpacing,marginLeft:100}}> Material Composition </h3>
                    <PieChart></PieChart>
                </Col>
                <Col xs={5} style={{marginTop:30,marginLeft:20}}>
                    <h3 style={{fontSize:theme.typography.subtitle.fontSize,fontWeight:theme.typography.subtitle.fontWeight, lineHeight:theme.typography.subtitle.lineHeight,
                    letterSpacing:theme.typography.subtitle.letterSpacing,marginLeft:90}}> Results of the impact assessment </h3>
                    <ColumnChart></ColumnChart>
                </Col>
            </Row>
            <Row>
            <Col xs={10} style={{marginTop:30}}>
                <h3 style={{fontSize:theme.typography.subtitle.fontSize,fontWeight:theme.typography.subtitle.fontWeight, lineHeight:theme.typography.subtitle.lineHeight,
                letterSpacing:theme.typography.subtitle.letterSpacing}} > Impact categories </h3>
                <Table></Table>
            </Col>
            </Row>
            
        </Container>
            
        );
    }
}

export default CanvasPage;
