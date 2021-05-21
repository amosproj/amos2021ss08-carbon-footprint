/** 
in this main component come all the canvas page components 
such as diagrams and tables 

@author Parham Gandomkar, Irem Toroslu
*/

import React, { Component } from 'react';
import PieChart from './PieChartComponent';
import ColumnChart from './ColumnChartComponent';
import Table from './TableComponent';
import { Container, Row, Col } from 'react-grid-system';
import theme from 'resources/theme';
import CompareCanvas from './CompareCanvas';

class CanvasComponent extends Component {
    render() {
        /*
        if the loadComparePage state from its parrent (the detail Component) 
        is set to true, here the canvas page should be divided into two canvases
        */
        if (this.props.loadComparePage) {
            return <CompareCanvas />;
        } else {
            /*
        the normal scenario 
        a canvas page without any comparisons 
        */
            return (
                <Container fluid={true}>
                    <Row>
                        <Col xs={5} style={{ marginTop: 30 , marginRight: 120 }}>
                            <h3
                                style={{
                                    fontSize: theme.typography.subtitle.fontSize,
                                    fontWeight: theme.typography.subtitle.fontWeight,
                                    lineHeight: theme.typography.subtitle.lineHeight,
                                    letterSpacing: theme.typography.subtitle.letterSpacing,
                                    marginLeft: 100
                                }}
                            >
                                {' '}
                                Material Composition{' '}
                            </h3>
                            <PieChart />
                        </Col>
                        <Col xs={5} style={{ marginTop: 30 }}>
                            <h3
                                style={{
                                    fontSize: theme.typography.subtitle.fontSize,
                                    fontWeight: theme.typography.subtitle.fontWeight,
                                    lineHeight: theme.typography.subtitle.lineHeight,
                                    letterSpacing: theme.typography.subtitle.letterSpacing,
                                    marginLeft: 90
                                }}
                            >
                                {' '}
                                Results of the impact assessment{' '}
                            </h3>
                            <ColumnChart />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} style={{ marginTop: 30, marginBottom: 30 }}>
                            <h3
                                style={{
                                    fontSize: theme.typography.subtitle.fontSize,
                                    fontWeight: theme.typography.subtitle.fontWeight,
                                    lineHeight: theme.typography.subtitle.lineHeight,
                                    letterSpacing: theme.typography.subtitle.letterSpacing
                                }}
                            >
                                {' '}
                                Impact categories{' '}
                            </h3>
                            <Table />
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
}

export default CanvasComponent;
