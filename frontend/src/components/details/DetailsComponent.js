import React, { Component } from 'react';
import ScenarioComponent from './ScenarioComponent';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Col, Container, Row } from 'react-grid-system';
import './navbar.css';
// import { postCalculationRequest } from 'interface/BackendConnect';

/**
 * the main component for detail page which includes
 * canvas page and variable drop down list
 *
 * @param props the recently selected model of a product.
 */
class DetailsComponent extends Component {
    /* State consists of three variable one for each of the possible state
     * baselineScenario: only display the baseline scenario
     * modifiedScenario: only display the modified scenario
     * state at the beginng: only baseline scenario
     */
    state = {
        baselineScenario: true,
        modifiedScenario: false,
        loadComparePage: false
    };

    render() {
        /*
         * compare buttons exist only when a single scenario is displayed
         * clicking the button should switch state to the show compare page state
         */
        let handleCompareButton = () => {
            const baselineScenario = false;
            const modifiedScenario = false;
            const loadComparePage = true;
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

        let handleExportPdfButton = () => {
            // getting the element that should be exported
            var div = document.getElementById('capture');

            // converting html to an image and then exporting it by pdf
            html2canvas(div).then((canvas) => {
                var imgData = canvas.toDataURL('image/jpeg', 1);
                // pdf configuration
                var pdf = new jsPDF('p', 'mm', 'a4');
                var pageWidth = pdf.internal.pageSize.getWidth();
                var pageHeight = pdf.internal.pageSize.getHeight();
                var imageWidth = canvas.width;
                var imageHeight = canvas.height;

                var ratio =
                    imageWidth / imageHeight >= pageWidth / pageHeight
                        ? pageWidth / imageWidth
                        : pageHeight / imageHeight;
                pdf.addImage(imgData, 'JPEG', 0, 0, imageWidth * ratio, imageHeight * ratio);
                pdf.save('invoice.pdf');
            });
        };

        const scenarioNames = {
            baseline: 'Baseline Scenario',
            modified: 'Modified Scenario'
        };
        const { selectedProduct } = this.props;

        // The styling of the Container, Row and Col can not be moved to css, as the css has a lower priority than the react-grid-system default.
        const noPaddingStyle = {
            padding: 0,
            margin: 0
        };

        // postCalculationRequest(selectedProduct.productID);

        if (this.state.baselineScenario) {
            // if state equals baseline scenario only
            return (
                <Container id='capture' fluid style={noPaddingStyle}>
                    <Row style={noPaddingStyle}>
                        <Col style={noPaddingStyle}>
                            <ScenarioComponent
                                loadComparePage={this.state.loadComparePage}
                                onCompareClick={handleCompareButton}
                                onExportClicked={handleExportPdfButton}
                                scenarioName={scenarioNames.baseline}
                                selectedProduct={selectedProduct}
                            />
                        </Col>
                    </Row>
                </Container>
            );
        } else if (this.state.modifiedScenario) {
            // if state equals modified scenario only
            return (
                <Container id='capture' fluid style={noPaddingStyle}>
                    <Row style={noPaddingStyle}>
                        <Col style={noPaddingStyle}>
                            <ScenarioComponent
                                loadComparePage={this.state.loadComparePage}
                                onCompareClick={handleCompareButton}
                                onExportClicked={handleExportPdfButton}
                                scenarioName={scenarioNames.modified}
                                selectedProduct={selectedProduct}
                            />
                        </Col>
                    </Row>
                </Container>
            );
        } else if (this.state.loadComparePage) {
            // if state equals compare scenario
            return (
                <Container id='capture' fluid={true} style={noPaddingStyle}>
                    <Row gutterWidth={0} style={noPaddingStyle}>
                        <Col xs={6} sm={6} md={6} lg={6} style={{ paddingRight: 3 }}>
                            <ScenarioComponent
                                loadComparePage={this.state.loadComparePage}
                                onCompareClick={handleCompareButton}
                                onExportClick={handleExportPdfButton}
                                onCloseClick={handleCloseBaselineButton}
                                scenarioName={scenarioNames.baseline}
                                selectedProduct={selectedProduct}
                            />
                        </Col>

                        {/* Spacing between the two columns is specified by paddingLeft */}
                        <Col xs={6} sm={6} md={6} lg={6} style={{ paddingLeft: 3 }}>
                            <ScenarioComponent
                                loadComparePage={this.state.loadComparePage}
                                onCompareClick={handleCompareButton}
                                onExportClick={handleExportPdfButton}
                                onCloseClick={handleCloseModifiedButton}
                                scenarioName={scenarioNames.modified}
                                selectedProduct={selectedProduct}
                            />
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
}

export default DetailsComponent;
