import React, { Component } from 'react';
import CanvasComponent from './CanvasComponent';
import SelectVariableComponent from './SelectVariableComponent';
import NavbarComponent from './NavbarComponent';
import PieChart from './PieChartComponent';
import ColumnChart from './ColumnChartComponent';
import Table from './TableComponent';
import { Col, Container, Row } from 'react-grid-system';
import './navbar.css';

class ScenarioComponent extends Component {
    render() {
        console.log(this.props);

        return (
            <Container fluid={true} style={{ backgroundColor: '#ededed',paddingRight:0,paddingLeft:0}} >
                <NavbarComponent
                    loadComparePage={this.props.compareCanvas}
                    onCompareClick={this.props.onCompareClick}
                    scenarioName={this.props.scenarioName.baseline}
                />
                
                <h2 className='TextContent'>The chosen Model is {this.props.selectedProduct.modelName}</h2>
                <SelectVariableComponent loadComparePage={this.props.loadComparePage} />
                <Row   style={{marginLeft:10}}>
                    <Col xs={12} sm={12} md={12} lg={6}  className='CardsContainer'  >
                        <ColumnChart/>
                    </Col>
                    <Col lg={1}/>
                    <Col xs={12} sm={12} md={12} lg={4} className='PieChartCardsContainer'>
                        <PieChart/>
                    </Col>
                </Row>
                <Row style={{marginLeft:10,marginBottom:10,marginTop:35}}>
                    <Col xs={12} sm={12} md={12} lg={11} className='TableContainer' >
                        <Table></Table>
                    </Col>

                </Row>

            </Container>
        );
    }
}

export default ScenarioComponent;
