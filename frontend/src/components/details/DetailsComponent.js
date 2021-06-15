import React, { Component } from 'react';
import ScenarioComponent from './ScenarioComponent';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios';
import { Col, Container, Row } from 'react-grid-system';
import './navbar.css';
// import { postCalculationRequest } from 'interface/BackendConnect';

/**
 * the main component for detail page which includes
 * canvas page and variable drop down list
 *
 * @param props the recently selected model of a product.
 * @author Parham Gandomkar, Martin Wagner, Irem Toroslu, Julian Oelhaf
 */
class DetailsComponent extends Component {
    state = {
        loadComparePage: false
    };

    render() {
        /*
         the default canvas has to be divided into two canvases
         an extra drop down button for second variable should be rendered
         the compare button should be disabled 
         */
        let handleCompareButton = () => {
            const loadComparePage = true;
            /*
            now all components such as 
            canvas component should be notified 
            by setting the compareCanvas state to true
            */
            this.setState({ loadComparePage });
        };

        let handleExportPdfButton = () => {
            // geting the element that should be exported
            var div = document.getElementById('capture');

            // converting html to an image and then exporting it by pdf
            html2canvas(div).then((canvas) => {
                var imgData = canvas.toDataURL('image/jpeg', 1);
                submit(imgData);
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

        let submit = (imgdata) => {
            const data = new FormData();
            data.append('file', imgdata);
            console.warn(imgdata);
            let url = 'https://localhost:44323/Document/test';

            axios
                .post(url, data, {
                    // receive two parameter endpoint url ,form data
                })
                .then((res) => {
                    // then print response status
                    console.warn(res);
                });
        };

        const scenarioNames = {
            baseline: 'Baseline Scenario',
            modified: 'modified Scenario'
        };
        const { selectedProduct } = this.props;

        // postCalculationRequest(selectedProduct.productID);

        if (!this.state.loadComparePage) {
            return (
                <Container id='capture' fluid={true} style={{ padding: 'auto' }}>
                    <Row style={{ padding: 0 }}>
                        <Col>
                            <ScenarioComponent
                                loadComparePage={this.state.loadComparePage}
                                onCompareClick={handleCompareButton}
                                onExportClicked={handleExportPdfButton}
                                scenarioName={scenarioNames}
                                selectedProduct={selectedProduct}
                            />
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            return (
                <Container id='capture' fluid={true} style={{ padding: 0, margin: 0 }}>
                    <Row gutterWidth={0}>
                        <Col xs={6} sm={6} md={6} lg={6} style={{ padding: 0 }}>
                            <ScenarioComponent
                                loadComparePage={this.state.loadComparePage}
                                onCompareClick={handleCompareButton}
                                scenarioName={scenarioNames}
                                selectedProduct={selectedProduct}
                                onExportClicked={handleExportPdfButton}
                            />
                        </Col>

                        <Col xs={6} sm={6} md={6} lg={6} style={{ padding: 0 }}>
                            <ScenarioComponent
                                loadComparePage={this.state.loadComparePage}
                                onCompareClick={handleCompareButton}
                                scenarioName={scenarioNames}
                                selectedProduct={selectedProduct}
                                onExportClicked={handleExportPdfButton}
                            />
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
}

export default DetailsComponent;
