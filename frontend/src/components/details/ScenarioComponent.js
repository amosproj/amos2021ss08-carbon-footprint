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
            <Container fluid={true} style={{ padding: 0, margin: 10, backgroundColor: 'white' }}>
                <NavbarComponent
                    loadComparePage={this.props.compareCanvas}
                    onCompareClick={this.props.onCompareClick}
                    scenarioName={this.props.scenarioName.baseline}
                    onExportClicked={this.props.onExportClicked}
                />
                <Container fluid={true} style={{ padding: 'auto' }}>
                    <h2 className='TextContent'>
                        The chosen Model is <b>{this.props.selectedProduct.modelName}</b>
                    </h2>
                    <SelectVariableComponent loadComparePage={this.props.loadComparePage} />
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6} className='CardsContainer'>
                            <div className='CardTitle'>
                                <span>Results of the impact assessment</span>
                            </div>
                            <ColumnChart />
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={12}
                            lg={4}
                            style={{ margin: 'auto' }}
                            className='PieChartCardsContainer'
                        >
                            <div className='CardTitle'>
                                <span>Material Composition</span>
                            </div>
                            <PieChart />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={11} className='TableContainer'>
                            <Table />
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default ScenarioComponent;
