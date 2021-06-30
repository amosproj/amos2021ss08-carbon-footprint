import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SelectVariableComponent from './SelectVariableComponent';
import NavbarComponent from './NavbarComponent';
import PieChartComponent from './PieChartComponent';
import ColumnChartComponent from './ColumnChartComponent';
import TableComponent from './TableComponent';
import { Col, Container, Row } from 'react-grid-system';
import { Hidden } from '@material-ui/core';
import MobileTableComponent from './MobileTableComponent';

/**
 * Displays one Scenario, containing a ColumnChart, a PieChart and a Table,
 * with information about the current Scenario
 */
class ScenarioComponent extends Component {
    render() {
        // The styling of the Container, Row and Col can not be moved to css, as the css has a lower priority than the react-grid-system default.
        return (
            <Container fluid={true} style={{ padding: 0, margin: 0, backgroundColor: 'white' }}>
                <Row style={{ padding: 0, margin: 0 }}>
                    <NavbarComponent
                        loadComparePage={this.props.loadComparePage}
                        onCompareClick={this.props.onCompareClick}
                        scenarioName={this.props.scenarioName}
                        onExportClick={this.props.onExportClick}
                        onCloseClick={this.props.onCloseClick}
                    />
                </Row>
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
                            <div id='captureColumnDiagram'>
                                <ColumnChartComponent />
                            </div>
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
                            <div id='capturePieChart'>
                                <PieChartComponent />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {/* dynamic display of product and model */}
                        <h5 className='TableTitle'>{this.props.selectedProduct.productName}</h5>
                        <h6 className='TableSubTitle'>
                            {this.props.selectedProduct.modelName ===
                                this.props.selectedProduct.productName ||
                            this.props.selectedProduct.modelName === undefined
                                ? ''
                                : this.props.selectedProduct.modelName}
                        </h6>
                        <div id='captureTable' className='TableContainer'>
                            {/* Swaps out the table with a mobile version for screens <= sm 
                            And when on the compare version already swap out for screens <= lg */}
                            <Hidden
                                smDown={this.props.loadComparePage ? false : true}
                                lgDown={this.props.loadComparePage ? true : false}
                            >
                                <TableComponent
                                    productName={this.props.selectedProduct.productName}
                                    modelID={this.props.selectedProduct.modelID}
                                    modelName={this.props.selectedProduct.modelName}
                                    tableKey={this.props.scenarioName}
                                />
                            </Hidden>
                            <Hidden
                                mdUp={this.props.loadComparePage ? false : true}
                                xlUp={this.props.loadComparePage ? true : false}
                            >
                                <MobileTableComponent
                                    productName={this.props.selectedProduct.productName}
                                    modelName={this.props.selectedProduct.modelName}
                                    modelID={this.props.selectedProduct.modelID}
                                    tableKey={this.props.scenarioName}
                                />
                            </Hidden>
                        </div>
                    </Row>
                </Container>
            </Container>
        );
    }
}

ScenarioComponent.propTypes = {
    loadComparePage: PropTypes.bool,
    onCloseClick: PropTypes.func,
    onCompareClick: PropTypes.func.isRequired,
    onExportClick: PropTypes.func.isRequired,
    scenarioName: PropTypes.string,
    selectedProduct: PropTypes.shape({
        modelID: PropTypes.string,
        modelName: PropTypes.string,
        productName: PropTypes.string
    })
};

export default ScenarioComponent;
