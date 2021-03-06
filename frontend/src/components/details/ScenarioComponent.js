import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SelectScenarioComponent from './SelectScenarioComponent';
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
            <Container
                id={this.props.scenarioName + ' ScenarioComponent'}
                fluid
                style={{ padding: 0, margin: 25, backgroundColor: 'white', borderRadius:'8px' }}
            >
                <Row style={{ padding: 0, margin: 0 }}>
                    <NavbarComponent
                        loadComparePage={this.props.loadComparePage}
                        onCompareClick={this.props.onCompareClick}
                        scenarioName={this.props.scenarioName}
                        scenarioDisplayName={this.props.selectedScenarioType}
                        onExportClicked={this.props.onExportClicked}
                        exportHandler={this.props.exportHandler}
                        onCloseClick={this.props.onCloseClick}
                    />
                </Row>
                <Container fluid style={{ padding: 'auto' }}>
                    <SelectScenarioComponent
                        selectedProduct={this.props.selectedProduct}
                        loadComparePage={this.props.loadComparePage}
                        scenarioName={this.props.scenarioName}
                        selectedScenarioType={this.props.selectedScenarioType}
                        newScenarioHandler={this.props.newScenarioHandler}
                    />
                    <Container fluid>
                        <Row justify='around' align='start'>
                            <Col>
                                <Row justify='center' align='center'>
                                    <Col className='BarChartContainer'>
                                        <Row justify='center' align='center'>
                                            <div className='CardTitle'>
                                                <span>Results of the impact assessment</span>
                                            </div>
                                        </Row>
                                        <Row
                                            justify='center'
                                            align='center'
                                            style={{ margin: 0, padding: 0, display: 'block' }}
                                        >
                                            <div id='captureColumnDiagram'>
                                                <ColumnChartComponent
                                                    scenarioName={this.props.scenarioName}
                                                />
                                            </div>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row justify='center' align='center'>
                                    <Col
                                        style={{ margin: 'auto' }}
                                        className='PieChartCardsContainer'
                                    >
                                        <Row justify='center' align='center'>
                                            <div className='CardTitle'>
                                                <span>Material Composition</span>
                                            </div>
                                        </Row>
                                        <Row justify='center' align='center'>
                                            <div id='capturePieChart'>
                                                <PieChartComponent
                                                    scenarioName={this.props.scenarioName}
                                                />
                                            </div>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <Row>
                        <Col>
                            {/* dynamic display of product and model */}
                            <Row justify='center' align='center'>
                                <h5 className='TableTitle'>
                                    {this.props.selectedProduct.productName}
                                </h5>
                            </Row>
                            <Row justify='center' align='center'>
                                {this.props.selectedProduct.modelName ===
                                    this.props.selectedProduct.productName ||
                                this.props.selectedProduct.modelName === undefined ? (
                                    <div />
                                ) : (
                                    <h6 className='TableTitle'>
                                        {this.props.selectedProduct.modelName}
                                    </h6>
                                )}
                            </Row>
                            <Row justify='center' align='center' style={{ margin: 0 }}>
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
                                            scenarioName={this.props.scenarioName}
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
                                            scenarioName={this.props.scenarioName}
                                            tableKey={this.props.scenarioName}
                                        />
                                    </Hidden>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

ScenarioComponent.propTypes = {
    loadComparePage: PropTypes.bool,
    onCloseClick: PropTypes.func,
    newScenarioHandler: PropTypes.func.isRequired,
    onCompareClick: PropTypes.func.isRequired,
    onExportClicked: PropTypes.bool,
    scenarioName: PropTypes.string, // Baseline or Modified (Where modified basically means second page)
    scenarioDisplayName: PropTypes.string.isRequired, //scenario_baseline; scenario_copper
    selectedProduct: PropTypes.shape({
        modelID: PropTypes.string,
        modelName: PropTypes.string,
        productName: PropTypes.string
    })
};

export default ScenarioComponent;
