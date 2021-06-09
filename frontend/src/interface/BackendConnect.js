import axios from 'axios';

const headers = {
    Authorization: 'Bearer',
    'Access-Control-Allow-Origin': 'POST',
    'My-Custom-Header': 'foobar'
};

/**
 * Get request to det the details of all the projects from the API via backend.
 * @returns the list of all the projects.
 *
 */
export async function getSimaProProjects() {
    // GET request using axios with set headers
    const headers = {
        Authorization: 'Bearer',
        'Access-Control-Allow-Origin': 'GET',
        'My-Custom-Header': 'foobar'
    };
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
    const headers = {
        Authorization: 'Bearer',
        'Access-Control-Allow-Origin': 'POST',
        'My-Custom-Header': 'foobar'
    };
    let result = await axios.post(`https://localhost:44323/SimaPro/api/calculation/${projectId}`, {
        headers
    });
    // .then(function (data) {
    //     const items = data;
    //     calcId = items.data.Result.CalculationId;
    // });
    console.log('RESULT!!!!!!1');
    console.log(result);
    return result;
    //return await postCalculationResultRequest(calcId);
}

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
