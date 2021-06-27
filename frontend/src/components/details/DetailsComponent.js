import React, { Component } from 'react';
import ScenarioComponent from './ScenarioComponent';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios';
import { Col, Container, Row } from 'react-grid-system';
import './navbar.css';
import FirstPDFPage from 'assets/pdfImages/firstPage.jpg';
import SecondPDFPage from 'assets/pdfImages/secondPage.jpg';
import ThirdPDFPage from 'assets/pdfImages/thirdPage.jpg';
import FourthPDFPage from 'assets/pdfImages/fourthPage.jpg';
import FifthPDFPage1 from 'assets/pdfImages/fifthPage1.jpg';
import FifthPDFPage2 from 'assets/pdfImages/fifthPage2.jpg';
import SixthPDFPage from 'assets/pdfImages/sixthPage.jpg';

import { postCalculationRequest } from 'interface/BackendConnect';

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

                var pdf = new jsPDF('p', 'mm', 'a4');
                // getting width and height to set image to fit the page
                var pageWidth = pdf.internal.pageSize.getWidth();
                var pageHeight = pdf.internal.pageSize.getHeight();

                var imageWidth1 = canvas1.width;
                var imageHeight1 = canvas1.height;

                var ratio1 =
                    imageWidth1 / imageHeight1 >= pageWidth / pageHeight
                        ? pageWidth / imageWidth1
                        : pageHeight / imageHeight1;

                html2canvas(div2).then((canvas2) => {
                    var imgData2 = canvas2.toDataURL('image/jpeg', 1);

                    var imageWidth2 = canvas2.width;
                    var imageHeight2 = canvas2.height;

                    var ratio2 =
                        imageWidth2 / imageHeight2 >= pageWidth / pageHeight
                            ? pageWidth / imageWidth2
                            : pageHeight / imageHeight2;

                    html2canvas(div3).then((canvas3) => {
                        var imgData3 = canvas3.toDataURL('image/jpeg', 1);

                        submit(imgData1, imgData2, imgData3);
                        // pdf configuration

                        var imageWidth3 = canvas3.width;
                        var imageHeight3 = canvas3.height;

                        var ratio3 =
                            imageWidth3 / imageHeight3 >= pageWidth / pageHeight
                                ? pageWidth / imageWidth3
                                : pageHeight / imageHeight3;

                        pdf.addImage(FirstPDFPage, 'JPEG', 0, 0, pageWidth, pageHeight);
                        pdf.addPage();
                        pdf.addImage(SecondPDFPage, 'JPEG', 0, 0, pageWidth, pageHeight);
                        pdf.addPage();
                        pdf.addImage(
                            ThirdPDFPage,
                            'JPEG',
                            0,
                            0,
                            pageWidth - imageWidth3 * ratio3,
                            pageHeight - imageHeight3 * ratio3
                        );
                        pdf.addImage(
                            imgData1,
                            'JPEG',
                            pageWidth / 3,
                            pageHeight - imageHeight3 * ratio3,
                            pageWidth / 2,
                            pageHeight / 5
                        );
                        pdf.addPage();
                        pdf.addImage(
                            FourthPDFPage,
                            'JPEG',
                            0,
                            0,
                            pageWidth - imageWidth2 * ratio2,
                            pageHeight - imageHeight2 * ratio2
                        );
                        pdf.addImage(
                            imgData2,
                            'JPEG',
                            0,
                            pageHeight - imageHeight2 * ratio2,
                            imageWidth2 * ratio2,
                            imageHeight2 * ratio2
                        );
                        pdf.addPage();
                        pdf.addImage(FifthPDFPage1, 'JPEG', 0, 0, pageWidth, pageHeight / 5);

                        pdf.addImage(
                            imgData3,
                            'JPEG',
                            0,
                            pageHeight / 5,
                            imageWidth3 * ratio3,
                            imageHeight3 * ratio3
                        );
                        pdf.addImage(
                            FifthPDFPage2,
                            'JPEG',
                            0,
                            pageHeight / 5 + imageHeight3 * ratio3,
                            pageWidth,
                            pageHeight - (pageHeight / 5 + imageHeight3 * ratio3)
                        );
                        pdf.addPage();
                        pdf.addImage(SixthPDFPage, 'JPEG', 0, 0, pageWidth, pageHeight);
                        pdf.save('baselineScenario.pdf');
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
                    'Content-Type': 'multipart/form-data',
                    responseType: 'blob'
                }
            }).then((response) => {
                const filename = response.headers['content-disposition'].split('filename=')[1];
                console.log(response.headers);
                console.log(response.headers['content-disposition']);
                const url = window.URL.createObjectURL(
                    new Blob([response.data], { type: response.headers['blob'] })
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', filename); //or any other extension
                document.body.appendChild(link);
                link.click();

                // response.blob().then((blob) => {
                //     let url = window.URL.createObjectURL(blob);
                //     let a = document.createElement('a');
                //     a.href = url;
                //     a.download = filename;
                //     a.click();
                //});
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

        //postCalculationRequest(selectedProduct.productID);

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
