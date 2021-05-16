/**
 * The CanvasComponent displays either the Detailed Information and graphs for one model
 * of a specific product or a comparison between two models if requested.
 *
 * @author parham, 08.05
 */

import React, { Component } from 'react';
import PieChart from './PieChartComponent';
import ColumnChart from './ColumnChartComponent';
import Table from './TableComponent';
import { Container, Row, Col } from 'react-grid-system';
import CompareCanvas from './CompareCanvas';

class CanvasComponent extends Component {
    render() {
        /*
        if the loadComparePage state from its parrent (the detail Component) 
        is set to true, here the canvas page should be divided into two canvases
        */
        if (this.props.loadComparePage) {
            return <CompareCanvas/>;
        } else {
            /*
        the normal scenario 
        a canvas page without any comparisons 
        */
            return (
                <Container fluid={true}>
                    <Row>
                        <Col xs={5}>
                            <h3> Material Composition </h3>
                            <PieChart/>
                        </Col>
                        <Col xs={5}>
                            <h3> Results of the impact assessment </h3>
                            <ColumnChart/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10}>
                            <h3> Impact categories </h3>
                            <Table/>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
}

export default CanvasComponent;
