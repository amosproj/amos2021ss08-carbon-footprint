import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios';
import FirstPDFPage from 'assets/pdfImages/firstPage.jpg';
import SecondPDFPage from 'assets/pdfImages/secondPage.jpg';
import ThirdPDFPage from 'assets/pdfImages/thirdPage.jpg';
import FourthPDFPage from 'assets/pdfImages/fourthPage.jpg';
import FifthPDFPage1 from 'assets/pdfImages/fifthPage1.jpg';
import FifthPDFPage2 from 'assets/pdfImages/fifthPage2.jpg';
import SixthPDFPage from 'assets/pdfImages/sixthPage.jpg';

/**
 * generating pdf for the baseline scenario
 *
 * @author Parham Gandomkar
 *
 * @param div1 pie chart diagram
 * @param div2 column diagram
 * @param div3 table
 */
export function exportPdf(div1, div2, div3) {
    // converting html to an image and then exporting it by pdf
    html2canvas(div1).then((canvas1) => {
        var pdf = new jsPDF('p', 'mm', 'a4');
        // getting width and height to set image to fit the page
        var pageWidth = pdf.internal.pageSize.getWidth();
        var pageHeight = pdf.internal.pageSize.getHeight();

        html2canvas(div2).then((canvas2) => {
            // storing width and heigth of the column diagram

            html2canvas(div3).then((canvas3) => {
                // converting html2canvas object to image for sending it to server
                var imgData1 = canvas1.toDataURL('image/jpeg', 1);
                var imgData2 = canvas2.toDataURL('image/jpeg', 1);
                var imgData3 = canvas3.toDataURL('image/jpeg', 1);
                sendPdfGeneratorRequest(imgData1, imgData2, imgData3);

                // storing width and heigth of the table

                // adding images to pdf
                pdf.addImage(FirstPDFPage, 'JPEG', 0, 0, pageWidth, pageHeight);
                pdf.addPage();
                pdf.addImage(SecondPDFPage, 'JPEG', 0, 0, pageWidth, pageHeight);
                pdf.addPage();
                pdf.addImage(ThirdPDFPage, 'JPEG', 0, 0, pageWidth, (pageHeight * 3) / 4);
                pdf.text(20, (pageHeight * 3) / 4 + 5, 'Material Composition');
                pdf.addImage(
                    imgData1,
                    'JPEG',
                    pageWidth / 5,
                    (pageHeight * 3) / 4 + 5,
                    (pageWidth * 3) / 5,
                    pageHeight / 4 - 10
                );
                pdf.addPage();
                pdf.addImage(FourthPDFPage, 'JPEG', 0, 0, pageWidth, (pageHeight * 3) / 5);
                pdf.text(20, (pageHeight * 3) / 5 + 5, 'Results of impact assessment');
                pdf.addImage(
                    imgData2,
                    'JPEG',
                    10,
                    (pageHeight * 3) / 5 + 7,
                    pageWidth - 15,
                    (pageHeight * 2) / 5 - 12
                );
                pdf.addPage();
                pdf.addImage(FifthPDFPage1, 'JPEG', 0, 0, pageWidth, pageHeight / 6);

                pdf.addImage(imgData3, 'JPEG', 0, pageHeight / 6, pageWidth, (pageHeight * 3) / 6);
                pdf.addImage(
                    FifthPDFPage2,
                    'JPEG',
                    0,
                    (pageHeight * 4) / 6,
                    pageWidth,
                    (pageHeight * 2) / 6
                );
                pdf.addPage();
                pdf.addImage(SixthPDFPage, 'JPEG', 0, 0, pageWidth, pageHeight);
                pdf.save('baselineScenario.pdf');
            });
        });
    });
}

// sending a request to backend to generate the pdf or docx file
function sendPdfGeneratorRequest(imgData1, imgData2, imgData3) {
    let arrayOfYourFiles = [imgData1, imgData2, imgData3];
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
}
