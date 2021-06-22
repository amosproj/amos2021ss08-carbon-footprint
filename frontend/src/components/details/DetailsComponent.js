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
            var div1 = document.getElementById('capturePieChart');
            var div2 = document.getElementById('captureColumnDiagram');
            var div3 = document.getElementById('captureTable');

            // converting html to an image and then exporting it by pdf
            html2canvas(div1).then((canvas1) => {
                var imgData1 = canvas1.toDataURL('image/jpeg', 1);

                html2canvas(div2).then((canvas2) => {
                    var imgData2 = canvas2.toDataURL('image/jpeg', 1);

                    html2canvas(div3).then((canvas3) => {
                        var imgData3 = canvas3.toDataURL('image/jpeg', 1);

                        submit(imgData1, imgData2, imgData3);
                        // pdf configuration
                        var pdf = new jsPDF('p', 'mm', 'a4');
                        var pageWidth = pdf.internal.pageSize.getWidth();
                        var pageHeight = pdf.internal.pageSize.getHeight();
                        var imageWidth = canvas3.width;
                        var imageHeight = canvas3.height;

                        var ratio =
                            imageWidth / imageHeight >= pageWidth / pageHeight
                                ? pageWidth / imageWidth
                                : pageHeight / imageHeight;
                        pdf.addImage(
                            imgData3,
                            'JPEG',
                            0,
                            0,
                            imageWidth * ratio,
                            imageHeight * ratio
                        );
                        pdf.save('invoice.pdf');
                    });
                });
            });
        };

        let submit = (imgdata1, imgdata2, imgData3) => {
            let arrayOfYourFiles = [imgdata1, imgdata2, imgData3];
            // create formData object
            const formData = new FormData();
            arrayOfYourFiles.forEach((file) => {
                formData.append('arrayOfFilesName', file);
            });

            let url = 'https://localhost:44323/Document/CreateReport';

            axios({
                method: 'POST',
                url: url,
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                const filename = response.headers.get('Content-Disposition').split('filename=')[1];
                response.blob().then((blob) => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = filename;
                    a.click();
                });
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

        if (!this.state.loadComparePage) {
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
        } else {
            return (
                <Container id='capture' fluid={true} style={noPaddingStyle}>
                    <Row gutterWidth={0} style={noPaddingStyle}>
                        <Col xs={6} sm={6} md={6} lg={6} style={{ paddingRight: 3 }}>
                            <ScenarioComponent
                                loadComparePage={this.state.loadComparePage}
                                onCompareClick={handleCompareButton}
                                scenarioName={scenarioNames.baseline}
                                selectedProduct={selectedProduct}
                                onExportClicked={handleExportPdfButton}
                            />
                        </Col>

                        {/* Spacing between the two columns is specified by paddingLeft */}
                        <Col xs={6} sm={6} md={6} lg={6} style={{ paddingLeft: 3 }}>
                            <ScenarioComponent
                                loadComparePage={this.state.loadComparePage}
                                onCompareClick={handleCompareButton}
                                scenarioName={scenarioNames.modified}
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
