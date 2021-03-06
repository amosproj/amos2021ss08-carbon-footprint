import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ScenarioComponent from './ScenarioComponent';
import { Col, Container, Row } from 'react-grid-system'; //https://www.npmjs.com/package/react-grid-system
import './navbar.css';
import { postCalculationRequest } from 'interface/BackendConnect';
import LoadingComponent from 'components/loading';
import { exportPdf } from '../../interface/PdfExporter.js';
import { handleAddingSecondScenario } from 'interface/projectInterface';

export const scenarioNames = {
    baseline: 'Baseline Scenario',
    modified: 'Modified Scenario'
};
/**
 * The DetailsComponent is the page, which is the top component for the Details Page.
 * Depending on the state it contains a single or two scenriaos (for comparison).
 * The component also contains the variable selector, which is used to switch between scenarios.
 *
 * @param props the recently selected model of a product.
 */

class DetailsComponent extends Component {
    /*
     * selectedScenarioId: for storing the id of the selected scenario to send the calculation request to server
     * selectedScenarioType: for sending it to SelectScenarioComponent
     * secondSelectedScenarioId: for storing the id of the selected modified scenario to send the calculation request to server
     * secondSelectedScenarioType: for sending it(modified) to SelectScenarioComponent
     * state at the beginng: only show baseline scenario
     * baselineScenario: only display the baseline scenario, default: true
     * modifiedScenario: only display the modified scenario, default: false
     * loadComparePage: display both the baseline and modified scenario, default: false
     * stillLoading: variable to check, if still waiting for response of the API call to backend/database, default: true
     * onExportClicked: state required to handle the loading time during document generation, default: false
     * loadingBaseline: reload the data for baseline scenario and send out a post calculation request if required
     * loadingModified: reload the data for modified scenario and send out a post calculation request if required
     */
    state = {
        selectedScenarioId: '',
        selectedScenarioType: '',
        secondSelectedScenarioId: '',
        secondSelectedScenarioType: '',
        baselineScenario: true,
        modifiedScenario: false,
        loadComparePage: false,
        stillLoading: true,
        loadingBaseline: false,
        loadingModified: false,
        onExportClicked: false
    };

    /**
     * initializing selectedScenarioType and selectedScenarioId
     * to request the baseline scenario for the first calculation request
     */
    constructor(props) {
        super(props);
        this.state.selectedScenarioType = props.selectedProduct.scenarioType;
        this.state.selectedScenarioId = props.selectedProduct.productID;
        this.state.secondSelectedScenarioType = props.selectedProduct.scenarioType;
        this.state.secondSelectedScenarioId = props.selectedProduct.productID;
    }

    render() {
        /*
         * When only a single scenario is displayed, there exists a "Compare" button, to display two scenarios and compare them.
         * The compare button, displays the second scenario next to the existing scenario.
         * In order to do that, we simply need to modify and update the state.
         */
        let handleCompareButton = () => {
            const baselineScenario = false;
            const modifiedScenario = false;
            const loadComparePage = true;
            handleAddingSecondScenario();
            this.setState({ baselineScenario, modifiedScenario, loadComparePage });
        };

        /*
         * Both scenarios have a close button. If a button is pressed, close the scenario and only display the other one.
         * The close basline button, closes the baseline scenario and will only display the modified scenario.
         * In order to do that, we simply need to modify and update the state.
         */
        let handleCloseBaselineButton = () => {
            const baselineScenario = false;
            const modifiedScenario = true;
            const loadComparePage = false;
            this.setState({ baselineScenario, modifiedScenario, loadComparePage });
        };

        /*
         * Both scenarios have a close button. If a button is pressed, close the scenario and only display the other one.
         * The close modified button, closes the modified scenario and will only display the baseline scenario.
         * In order to do that, we simply need to modify and update the state.
         */
        let handleCloseModifiedButton = () => {
            const baselineScenario = true;
            const modifiedScenario = false;
            const loadComparePage = false;
            this.setState({ baselineScenario, modifiedScenario, loadComparePage });
        };

        /**
         * The drop down menu in SelectScenarioComponent, will call this function with a new selectedScenario (Id).
         * To display the new scenario the state must be updated, by modifying the variables selectedScenarioId and selectedScenarioType in the state.
         *
         * @param item: selected scenario
         */
        let handleNewScenarioSelection = (item, scenarioName) => {
            if (!this.state.loadComparePage) {
                this.setState({ selectedScenarioId: item.id }, () => {
                    this.setState({ stillLoading: true });
                    this.setState({ selectedScenarioType: item.name });
                });
            }
            // if the first scenario in drop down menue is changed
            else if (scenarioName === scenarioNames.baseline) {
                this.setState({ selectedScenarioId: item.id }, () => {
                    this.setState({ loadingBaseline: true });
                    this.setState({ selectedScenarioType: item.name });
                });
                // if the second scenario in drop down menue is changed
            } else {
                this.setState({ secondSelectedScenarioId: item.id }, () => {
                    this.setState({ loadingModified: true });
                    this.setState({ secondSelectedScenarioType: item.name });
                });
            }
        };

        /*
         * The PDF button will call this funtion, in order to trigger the pdf generation.
         */
        let handleExportPdfButton = () => {
            this.setState({ onExportClicked: true });

            // getting the element that should be exported
            var div1 = document.getElementById('capturePieChart');
            var div2 = document.getElementById('captureColumnDiagram');
            var div3 = document.getElementById('captureTable');

            exportPdf(div1, div2, div3, pdfExportDoneCallback);
        };

        let pdfExportDoneCallback = () => {
            this.setState({ onExportClicked: false });
        };

        if (
            this.props.selectedProduct.productID === undefined ||
            this.props.selectedProduct.productID === ''
        ) {
            return (
                <Container className='ScenarioContainer' id='capture' fluid>
                    <LoadingComponent
                        loading
                        text={'Please go to Categories and select something :)'}
                    />
                    ;
                </Container>
            );
        }
        /*
         * Important function that is given as the callback parameter to the postCalculationRequest in order to be called
         * when the data processing is finished. Then the state stillLoading will be set to false.
         * This change of state trigger the DetailsComponent to rerender and now display the charts and tables
         * instead of the LoadingComponent.
         */
        let handleFinishedDataRequest = () => {
            this.setState({ stillLoading: false });
            this.setState({ loadingBaseline: false });
            this.setState({ loadingModified: false });
        };

        const { selectedProduct } = this.props;
        /**
         * Reloading the webage based on which scenario is selected/modified.
         * While stillLoading display the LoadingComponent (turning circle)
         */
        if (this.state.stillLoading) {
            postCalculationRequest(
                this.state.selectedScenarioId,
                scenarioNames.baseline,
                handleFinishedDataRequest
            );
            return <LoadingComponent loading />;
        } else if (this.state.loadingBaseline) {
            postCalculationRequest(
                this.state.selectedScenarioId,
                scenarioNames.baseline,
                handleFinishedDataRequest
            );
        } else if (this.state.loadingModified) {
            postCalculationRequest(
                this.state.secondSelectedScenarioId,
                scenarioNames.modified,
                handleFinishedDataRequest
            );
        }

        /* Depending on the state, display the corresponding scenario(s)
         */

        if (this.state.baselineScenario) {
            // if state equals baseline scenario only
            return (
                <Container className='ScenarioContainer' id='capture' fluid>
                    <Row style={{ padding: 0, margin: 0 }}>
                        <Col>
                            <ScenarioComponent
                                loadComparePage={this.state.loadComparePage}
                                onCompareClick={handleCompareButton}
                                exportHandler={handleExportPdfButton}
                                scenarioName={scenarioNames.baseline}
                                scenarioDisplayName={this.props.scenarioType}
                                selectedScenarioType={this.state.selectedScenarioType}
                                selectedProduct={selectedProduct}
                                onExportClicked={this.state.onExportClicked}
                                newScenarioHandler={handleNewScenarioSelection}
                            />
                        </Col>
                    </Row>
                </Container>
            );
        } else if (this.state.modifiedScenario) {
            // if state equals modified scenario only
            return (
                <Container className='ScenarioContainer' id='capture' fluid>
                    <Row style={{ padding: 0, margin: 0 }}>
                        <Col>
                            <ScenarioComponent
                                loadComparePage={this.state.loadComparePage}
                                onCompareClick={handleCompareButton}
                                exportHandler={handleExportPdfButton}
                                scenarioName={scenarioNames.modified}
                                scenarioDisplayName={this.props.scenarioType}
                                selectedScenarioType={this.state.secondSelectedScenarioType}
                                selectedProduct={selectedProduct}
                                onExportClicked={this.state.onExportClicked}
                                newScenarioHandler={handleNewScenarioSelection}
                            />
                        </Col>
                    </Row>
                </Container>
            );
        } else if (this.state.loadComparePage) {
            // if state equals compare scenario
            return (
                <Container className='ScenarioContainer' id='capture' fluid>
                    <Row justify='around' gutterWidth={0}>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                            {this.state.loadingBaseline && <LoadingComponent loading />}
                            {!this.state.loadingBaseline && (
                                <ScenarioComponent
                                    loadComparePage={this.state.loadComparePage}
                                    onCompareClick={handleCompareButton}
                                    onExportClick={handleExportPdfButton}
                                    onCloseClick={handleCloseBaselineButton}
                                    scenarioName={scenarioNames.baseline}
                                    scenarioDisplayName={this.props.scenarioType}
                                    selectedScenarioType={this.state.selectedScenarioType}
                                    selectedProduct={selectedProduct}
                                    newScenarioHandler={handleNewScenarioSelection}
                                />
                            )}
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                            {this.state.loadingModified && <LoadingComponent loading />}
                            {!this.state.loadingModified && (
                                <ScenarioComponent
                                    loadComparePage={this.state.loadComparePage}
                                    onCompareClick={handleCompareButton}
                                    onExportClick={handleExportPdfButton}
                                    onCloseClick={handleCloseModifiedButton}
                                    scenarioName={scenarioNames.modified}
                                    scenarioDisplayName={this.props.scenarioType}
                                    selectedScenarioType={this.state.secondSelectedScenarioType}
                                    selectedProduct={selectedProduct}
                                    newScenarioHandler={handleNewScenarioSelection}
                                />
                            )}
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
}

DetailsComponent.propTypes = {
    selectedProduct: PropTypes.shape({
        categories: PropTypes.array, // [(categories.generation, categories.transmission)],
        modelID: PropTypes.string, // 'none',
        modelName: PropTypes.string, // 'please select a Product',
        productID: PropTypes.string.isRequired, // 'dummydum-13b0-4e09-9fb4-50398483ecfd'
        productImage: PropTypes.string, //ImagePath?
        productName: PropTypes.string, //'please select a Product'
        scenarioType: PropTypes.string //'Scenario_baseline; Scenario_scenario2'
    })
};

export default DetailsComponent;
