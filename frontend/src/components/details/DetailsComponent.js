import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ScenarioComponent from './ScenarioComponent';
import { Col, Container, Row } from 'react-grid-system';
import './navbar.css';
import { postCalculationRequest } from 'interface/BackendConnect';
import LoadingComponent from 'components/loading';
import { exportPdf } from '../../interface/PdfExporter.js';

export const scenarioNames = {
    baseline: 'Baseline Scenario',
    modified: 'Modified Scenario'
};
/**
 * the main component for detail page which includes
 * canvas page and variable drop down list
 *
 * @param props the recently selected model of a product.
 */

class DetailsComponent extends Component {
    /*
     * selectedScenarioId: for storing the id of the selected scenario
     * to send the calculation request to server
     * slectedScenarioType: for sending it to SelectScenarioComponent
     * baselineScenario: only display the baseline scenario
     * modifiedScenario: only display the modified scenario
     * state at the beginng: only baseline scenario
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
    }

    render() {
        /*
         * compare buttons exist only when a single scenario is displayed
         * clicking the button should switch state to the show compare page state
         */
        let handleCompareButton = () => {
            const baselineScenario = false;
            const modifiedScenario = false;
            const loadComparePage = true;
            this.setState({ secondSelectedScenarioId: this.state.selectedScenarioId });
            this.setState({ secondSelectedScenarioType: this.state.selectedScenarioType });
            this.setState({ baselineScenario, modifiedScenario, loadComparePage });
        };
        /*
         * in the compare page each scenario has a close button
         * that button should close that scenario and only display the other one
         * so the close button of the modified scenario will hide the modified scenario and only display the baseline scenario
         */
        let handleCloseModifiedButton = () => {
            const baselineScenario = true;
            const modifiedScenario = false;
            const loadComparePage = false;
            this.setState({ baselineScenario, modifiedScenario, loadComparePage });
        };

        /*
         * in the compare page each scenario has a close button
         * that button should close that scenario and only display the other one
         * so the close button of the baselin scenario will hide the baselin scenario and only display the modified scenario
         */
        let handleCloseBaselineButton = () => {
            const baselineScenario = false;
            const modifiedScenario = true;
            const loadComparePage = false;
            this.setState({ baselineScenario, modifiedScenario, loadComparePage });
        };

        /**
         * this function will be envoced from SelectScenarioComponent,
         * once the user changes the scenario in drop down menue
         *
         * then selectedScenarioId and selectedScenarioType will be updated
         *
         * @param item: selected scenario
         */
        let handleNewScenarioSelection = (item, scenarioName) => {
            if (!this.state.loadComparePage) {
                console.log('No Compare' + scenarioName);
                this.setState({ selectedScenarioId: item.id }, () => {
                    this.setState({ stillLoading: true });
                    this.setState({ selectedScenarioType: item.name });
                });
            }
            // if the first scenario in drop down menue is changed
            else if (scenarioName === scenarioNames.baseline) {
                console.log('first scenario is changed: ' + scenarioName);
                this.setState({ selectedScenarioId: item.id }, () => {
                    this.setState({ loadingBaseline: true });
                    this.setState({ selectedScenarioType: item.name });
                });
                // if the second scenario in drop down menue is changed
            } else {
                console.log('second scenario is changed: ' + scenarioName);
                this.setState({ secondSelectedScenarioId: item.id }, () => {
                    this.setState({ loadingModified: true });
                    this.setState({ secondSelectedScenarioType: item.name });
                });
            }
        };

        let handleExportPdfButton = () => {
            this.setState({ onExportClicked: true });

            // geting the element that should be exported
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
            this.setState({ loadingBaseline: false });
            this.setState({ loadingModified: false });
        };

        const { selectedProduct } = this.props;

        if (this.state.stillLoading) {
            postCalculationRequest(this.state.selectedScenarioId, handleFinishedDataRequest);
            return <LoadingComponent loading />;
        } else if (this.state.loadingBaseline) {
            postCalculationRequest(this.state.selectedScenarioId, handleFinishedDataRequest);
            return <LoadingComponent loading />;
        } else if (this.state.loadingModified) {
            postCalculationRequest(this.state.secondSelectedScenarioId, handleFinishedDataRequest);
            return <LoadingComponent loading />;
        }

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
                                selectedScenarioType={this.state.secondSelectedScenarioType}
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
