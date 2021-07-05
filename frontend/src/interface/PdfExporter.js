import html2canvas from 'html2canvas';
import axios from 'axios';

/**
 * generating pdf for the baseline scenario
 *
 * @author Parham Gandomkar
 *
 * @param div1 pie chart diagram
 * @param div2 column diagram
 * @param div3 table
 */
export function exportPdf(div1, div2, div3, pdfExportDoneCallback) {
    // converting html to an image and then exporting it by pdf
    html2canvas(div1).then((canvas1) => {
        html2canvas(div2).then((canvas2) => {
            // storing width and heigth of the column diagram

            html2canvas(div3).then((canvas3) => {
                // converting html2canvas object to image for sending it to server
                var imgData1 = canvas1.toDataURL('image/jpeg', 1);
                var imgData2 = canvas2.toDataURL('image/jpeg', 1);
                var imgData3 = canvas3.toDataURL('image/jpeg', 1);
                sendPdfGeneratorRequest(imgData1, imgData2, imgData3, pdfExportDoneCallback);
            });
        });
    });
}

// sending a request to backend to generate the pdf or docx file
function sendPdfGeneratorRequest(imgData1, imgData2, imgData3, pdfExportDoneCallback) {
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
            Authorization: 'Bearer',
            'Access-Control-Allow-Origin': 'POST'
        },
        responseType: 'arraybuffer'
    }).then((response) => {
        const filename = response.headers['content-disposition'].split('filename=')[1];
        const url = window.URL.createObjectURL(new File([response.data], filename));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename); //or any other extension
        document.body.appendChild(link);
        link.click();

        pdfExportDoneCallback();

        // response.blob().then((blob) => {
        //     let url = window.URL.createObjectURL(blob);
        //     let a = document.createElement('a');
        //     a.href = url;
        //     a.download = filename;
        //     a.click();
        //});
    });
}
