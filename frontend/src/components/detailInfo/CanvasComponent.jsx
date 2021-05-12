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


class CanvasPage extends Component {
    render() {
        return (
            <Container fluid={true}>
            <Row>
                <Col debug xs={5}>
                    <h3> Material Composition </h3>
                    <PieChart></PieChart>
                </Col>
                <Col debug xs={5}>
                    <h3> Results of the impact assessment </h3>
                    <ColumnChart></ColumnChart>
                </Col>
            </Row>
            <Row>
            <Col debug xs={10}>
                <h3> Impact categories </h3>
                <Table></Table>
            </Col>
            </Row>
            
        </Container>
            
        );
    }
}

export default CanvasPage;
