import React, { Component } from 'react';
import SelectVariableComponent from './SelectVariableComponent';
import NavbarComponent from './NavbarComponent';
import PieChart from './PieChartComponent';
import ColumnChart from './ColumnChartComponent';
import Table from './TableComponent';
import { Col, Container, Row } from 'react-grid-system';
import './navbar.css';

/**
 * Displays one Scenario, containing a ColumnChart, a PieChart and a Table,
 * with information about the current Scenario
 */
class ScenarioComponent extends Component {
    render() {
        console.log(this.props);

        return (
            <Container fluid={true} style={{ backgroundColor: 'white', padding: 'auto' }}>
                <NavbarComponent
                    loadComparePage={this.props.compareCanvas}
                    onCompareClick={this.props.onCompareClick}
                    scenarioName={this.props.scenarioName.baseline}
                />

                <h2>The chosen Model is {this.props.selectedProduct.modelName}</h2>
                <SelectVariableComponent loadComparePage={this.props.loadComparePage} />
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <ColumnChart />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <PieChart />
                    </Col>
                </Row>
                <Row>
                    <Table />
                </Row>
            </Container>
        );
    }
}

export default ScenarioComponent;
