import React from 'react';
import PieChart from './PieChartComponent';
import ColumnChart from './ColumnChartComponent';
import Table from './TableComponent';
import { Col, Container, Row } from 'react-grid-system';
import theme from 'resources/theme';

/**
 * This component displays the difference/comparison between the dashboards of two different type of variables of the same model
 * will be compared when clicking on the "comparison" button.
 *
 * @returns the dasboard comparison
 * @author Parham Gandomkar, Irem Toroslu
 *
 *
 */

const CompareCanvas = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={5} style={{ marginRight: 150 }}>
                    <h3
                        style={{
                            fontSize: theme.typography.subtitle.fontSize,
                            fontWeight: theme.typography.subtitle.fontWeight,
                            lineHeight: theme.typography.subtitle.lineHeight,
                            letterSpacing: theme.typography.subtitle.letterSpacing,
                            marginLeft: 120
                        }}
                    >
                        {' '}
                        Material Composition{' '}
                    </h3>
                    <PieChart />
                </Col>
                <Col xs={5}>
                    <h3
                        style={{
                            fontSize: theme.typography.subtitle.fontSize,
                            fontWeight: theme.typography.subtitle.fontWeight,
                            lineHeight: theme.typography.subtitle.lineHeight,
                            letterSpacing: theme.typography.subtitle.letterSpacing,
                            marginLeft: 120
                        }}
                    >
                        {' '}
                        Material Composition{' '}
                    </h3>
                    <PieChart />
                </Col>
            </Row>
            <Row>
                <Col xs={5} style={{ marginRight: 150 }}>
                    <h3
                        style={{
                            fontSize: theme.typography.subtitle.fontSize,
                            fontWeight: theme.typography.subtitle.fontWeight,
                            lineHeight: theme.typography.subtitle.lineHeight,
                            letterSpacing: theme.typography.subtitle.letterSpacing,
                            marginLeft: 80
                        }}
                    >
                        {' '}
                        Results of the impact assessment{' '}
                    </h3>
                    <ColumnChart />
                </Col>
                <Col xs={5}>
                    <h3
                        style={{
                            fontSize: theme.typography.subtitle.fontSize,
                            fontWeight: theme.typography.subtitle.fontWeight,
                            lineHeight: theme.typography.subtitle.lineHeight,
                            letterSpacing: theme.typography.subtitle.letterSpacing,
                            marginLeft: 80
                        }}
                    >
                        {' '}
                        Results of the impact assessment{' '}
                    </h3>
                    <ColumnChart />
                </Col>
            </Row>

            <Row>
                <Col xs={10}>
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
            <Row className='w3-margin-top'>
                <Col xs={10}>
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
                    <div style={{ marginBottom: 30 }}>
                        <Table />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CompareCanvas;
