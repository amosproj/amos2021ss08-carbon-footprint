import axios from 'axios';

const headers = {
    Authorization: 'Bearer',
    'My-Custom-Header': 'foobar'
};

//function timeout(delay) {
//    return new Promise((res) => setTimeout(res, delay));
//}

/**
 * Get request to det the details of all the projects from the API via backend.
 * @returns the list of all the projects.
 *
 */
export async function getSimaProProjects() {
    // GET request using axios with set headers
    let result;
    await axios
        .get('https://localhost:44323/SimaPro/api/projects', { headers })
        .then(function (data) {
            const items = data;
            result = items.data.Result.Data;
        });
    return result;
}

/**
 *   Post request to initiate the calculation for a project based on the project id.
 *   This request returns the calculationId(calcd). which is then used to retrieve the impact
 *   results of a project.
 */
export async function postCalculationRequest(projectId) {
    // POST request using axios with set headers
    let result = await axios.post(`https://localhost:44323/SimaPro/api/calculation/${projectId}`, {
        headers
    });
    // .then(function (data) {
    //     const items = data;
    //     calcId = items.data.Result.CalculationId;
    // });
    console.log('RESULT!!!!!!1');
    console.log(result);
    //let storageData = false;
    //await timeout(500);
    //let itr = 1;
    //var delayInMilliseconds = 500;
    /* do {
        //setTimeout(function (calcId) {
        //  storageData = isCalculationStored(calcId);
        //}, delayInMilliseconds);
        //setTimeout(isCalculationStored(calcId), 500, calcId);
        console.log('inside do while');
        /*setTimeout(function () {
            alert('Loading');
        }, 500);
       
        if (isCalculationStored(calcId) !== true) {
            storageData = false;
        } else {
            storageData = true;
            console.log('True');
        }
        //function delay() {}
        console.log(storageData);
    } while (storageData === false);
    console.log(storageData);
    console.log('out of do while'); */

    // while (isCalculationStored(calcId) === false) {
    //     // await timeout(5000);
    //     console.log(isCalculationStored(calcId));
    // }
    //else {
    //  await timeout(5000);
    //console.log('5 Sec timer');
    //}

    // let rtr = await postCalculationResultRequest(calcId);
    // console.log(rtr);
    return true;
    //return await postCalculationResultRequest(calcId);
}

/**
 * Asks for the status of a scheduled calculation.
 *
 * @param {*} calculationId
 * @returns {String} "Calculating", "Storing", "Stored" (Done when "Stored")
 */
// async function getCalculationState(calculationId) {
//     let calculationState;
//     await axios
//         .get(`https://localhost:44323/SimaPro/api/calculation/state/${calculationId}`, {
//             headers
//         })
//         .then(function (data) {
//             const items = data;
//             calculationState = items.data.Result;
//         });
//     //console.log('calculationState');
//     //console.log(calculationState);
//     return calculationState;
// }

/**
 *
 * @param {*} calculationId
 * @returns true if the calculation is stored
 */
// async function isCalculationStored(calculationId) {
//     return getCalculationState(calculationId) === 'Stored' ? true : false;
// }

/**
 * Post request to retrieve the impact calculations for a project based on the calculationId
 * from the previous request.
 */
// async function postCalculationResultRequest(calculationId) {
//     // POST request using axios with set headers
//     console.log('post result retirve');
//     console.log(calculationId);
//     const headers = {
//         Authorization: 'Bearer',
//         MyCustomHeader: 'foobar',
//         AcceptEncoding: 'gzip, deflate, br',
//         Connection: 'keep-alive'
//     };
//     let result = axios.post(
//         `https://localhost:44323/SimaPro/api/calculation/result/${calculationId}`,
//         { headers }
//     );
//     console.log('RESULT!!!!!!2');
//     console.log(result);
//     //.then(response => this.setState({ articleId: response.data.id }));
//     return result;
// }

/**
 *  Getrequest to get the processes for a model based on the project Id
 *
 */
export async function getProjectProcesses(projectId) {
    //console.log("------");
    //console.log(productID);
    let resultProcess;
    await axios
        .get(`https://localhost:44323/SimaPro/api/processes/referencedata/${projectId}`, {
            headers
        })
        .then(function (data) {
            const items = data;
            resultProcess = items.data.Result.Data;
            console.log(resultProcess);
        });
    return resultProcess;
}

/**
 * Get request to get all the methods required for drop down.
 * @returns the list of methods
 */
export async function getMethods() {
    let methods;
    await axios
        .get('https://localhost:44323/SimaPro/api/methods', { headers })
        //Please verify this step
        .then(function (data) {
            const items = data;
            methods = items.data.Result.Data;
        });
    return methods;
}
