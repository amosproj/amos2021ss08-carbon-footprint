import React, { Component } from 'react';
import PieChart from './PieChartComponent';
import ColumnChart from './ColumnChartComponent';
import Table from './TableComponent';
import { Container, Row, Col } from 'react-grid-system';

const CompareCanvas = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={5}>
                    <h3> Material Composition </h3>
                    <PieChart></PieChart>
                </Col>
                <Col xs={5}>
                    <h3> Material Composition </h3>
                    <PieChart></PieChart>
                </Col>
            </Row>
            <Row>
                <Col xs={5}>
                    <h3> Results of the impact assessment </h3>
                    <ColumnChart></ColumnChart>
                </Col>
                <Col xs={5}>
                    <h3> Results of the impact assessment </h3>
                    <ColumnChart></ColumnChart>
                </Col>
            </Row>

            <Row>
                <Col xs={10}>
                    <h3> Impact categories </h3>
                    <Table></Table>
                </Col>
            </Row>
            <Row>
                <Col xs={10}>
                    <h3> Impact categories </h3>
                    <Table></Table>
                </Col>
            </Row>
        </Container>
    );
};

export default CompareCanvas;
