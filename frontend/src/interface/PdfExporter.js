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

export function exportPdf(div1, div2, div3) {
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
}

// sending a request to backend to generate the pdf or docx file
function sendPdfGeneratorRequest(imgdata1, imgdata2, imgData3) {
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
}
