import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ScenarioComponent from './ScenarioComponent';
import { Col, Container, Row } from 'react-grid-system'; //https://www.npmjs.com/package/react-grid-system
import './navbar.css';
import { postCalculationRequest } from 'interface/BackendConnect';
import LoadingComponent from 'components/loading';
import { exportPdf } from '../../interface/PdfExporter.js';

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
     * baselineScenario: only display the baseline scenario, default: true
     * modifiedScenario: only display the modified scenario, default: false
     * loadComparePage: display both the baseline and modified scenario, default: false
     * stillLoading: variable to check, if still waiting for response of the API call to backend/database, default: true
     * onExportClicked: ... , default: false
     */
    state = {
        selectedScenarioId: '',
        selectedScenarioType: '',
        baselineScenario: true,
        modifiedScenario: false,
        loadComparePage: false,
        stillLoading: true,
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
        let handleNewScenarioSelection = (item) => {
            this.setState({ selectedScenarioId: item.id }, () => {
                this.setState({ stillLoading: true });
                this.setState({ selectedScenarioType: item.name });
            });
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
        /*
         * Important function that is given as the callback parameter to the postCalculationRequest in order to be called
         * when the data processing is finished. Then the state stillLoading will be set to false.
         * This change of state trigger the DetailsComponent to rerender and now display the charts and tables
         * instead of the LoadingComponent.
         */
        let handleFinishedDataRequest = () => {
            this.setState({ stillLoading: false });
        };
        const scenarioNames = {
            baseline: 'Baseline Scenario',
            modified: 'Modified Scenario'
        };
        const { selectedProduct } = this.props;

        // Whil stillLoading display the LoadingComponent (turning circle)
        if (this.state.stillLoading) {
            postCalculationRequest(this.state.selectedScenarioId, handleFinishedDataRequest);
            return <LoadingComponent loading />;
        }

        /* Depending on the state, display the corresponding scenario(s)
         */
        if (this.state.baselineScenario) {
            // if state equals baseline scenario only
            console.log(selectedProduct);
            return (
                <Container className='ScenarioContainer' id='capture' fluid>
                    <Row>
                        <Col>
                            <ScenarioComponent
                                loadComparePage={this.state.loadComparePage}
                                onCompareClick={handleCompareButton}
                                exportHandler={handleExportPdfButton}
                                scenarioName={scenarioNames.baseline}
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
                    <Row>
                        <Col>
                            <ScenarioComponent
                                loadComparePage={this.state.loadComparePage}
                                onCompareClick={handleCompareButton}
                                exportHandler={handleExportPdfButton}
                                scenarioName={scenarioNames.modified}
                                selectedScenarioType={this.state.selectedScenarioType}
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
                    <Row gutterWidth={0}>
                        <Col className='CompareColLeft' xs={6} sm={6} md={6} lg={6}>
                            <ScenarioComponent
                                loadComparePage={this.state.loadComparePage}
                                onCompareClick={handleCompareButton}
                                onExportClick={handleExportPdfButton}
                                onCloseClick={handleCloseBaselineButton}
                                scenarioName={scenarioNames.baseline}
                                selectedScenarioType={this.state.selectedScenarioType}
                                selectedProduct={selectedProduct}
                                newScenarioHandler={handleNewScenarioSelection}
                            />
                        </Col>

                        {/* Spacing between the two columns is specified by paddingLeft */}
                        <Col className='CompareColRight' xs={6} sm={6} md={6} lg={6}>
                            <ScenarioComponent
                                loadComparePage={this.state.loadComparePage}
                                onCompareClick={handleCompareButton}
                                onExportClick={handleExportPdfButton}
                                onCloseClick={handleCloseModifiedButton}
                                scenarioName={scenarioNames.modified}
                                selectedScenarioType={this.state.selectedScenarioType}
                                selectedProduct={selectedProduct}
                                newScenarioHandler={handleNewScenarioSelection}
                            />
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
        scenarioType: PropTypes.string
    })
};

export default DetailsComponent;
