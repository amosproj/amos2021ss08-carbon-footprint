import React, { Component } from 'react';
import SelectVariableComponent from './SelectVariableComponent';
import NavbarComponent from './NavbarComponent';
import PieChart from './PieChartComponent';
import ColumnChart from './ColumnChartComponent';
import Table from './TableComponent';
import { Col, Container, Row } from 'react-grid-system';

class ScenarioComponent extends Component {
    render() {
        console.log(this.props);

        return (
            <Container
                fluid={true}
                style={{ backgroundColor: '#ededed', paddingRight: 0, paddingLeft: 0 }}
            >
                <NavbarComponent
                    loadComparePage={this.props.loadComparePage}
                    onCompareClick={this.props.onCompareClick}
                    scenarioName={this.props.scenarioName.baseline}
                />

                <h2 className='TextContent'>
                    The chosen Model is <b>{this.props.selectedProduct.modelName}</b>
                </h2>
                <SelectVariableComponent loadComparePage={this.props.loadComparePage} />
                <Row style={{ marginLeft: 10 }}>
                    <Col xs={12} sm={12} md={12} lg={6} className='CardsContainer'>
                        <div className='CardTitle'>
                            <span>Results of the impact assessment</span>
                        </div>
                        <ColumnChart />
                    </Col>
                    <Col lg={1} />
                    <Col xs={12} sm={12} md={12} lg={4} className='PieChartCardsContainer'>
                        <div className='CardTitle'>
                            <span>Material Composition</span>
                        </div>
                        <PieChart />
                    </Col>
                </Row>
                <Row style={{ marginLeft: 10, marginBottom: 10, marginTop: 35 }}>
                    <Col xs={12} sm={12} md={12} lg={11} className='TableContainer'>
                        <Table></Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ScenarioComponent;
