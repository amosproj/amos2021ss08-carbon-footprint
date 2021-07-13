import axios from 'axios';
import { processBackendData } from 'interface/processBackendData';
import { dummyProcessBackendData } from 'interface/processBackendData';
import { ErrorAlert } from 'assets/alert/alert';
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
 *   Post request to initiate the calculation for a project based on the project id and preset values.
 *   This request is caught by the backend.
 *   Which then checks if the calculation is stored based on the calculationId generated.
 *   If the calculation is stored returns the results of calculation here.
 * @param scenarioName: used to identifiy if the request is from Modified scenario/Baseline scenario
 */
export async function postCalculationRequest(projectId, scenarioName, callback) {
    // Bypass using the SimaPro Data
    const useDummyData = false;

    if (useDummyData) {
        return dummyPostCalculationRequest(projectId, scenarioName, callback);
    }

    // POST request using axios with set headers
    const headers = {
        Authorization: 'Bearer',
        'Access-Control-Allow-Origin': 'POST',
        'My-Custom-Header': 'foobar'
    };
    await axios
        .post(`https://localhost:44323/SimaPro/api/calculation/${projectId}`, {
            headers
        })

        .then(function (data) {
            processBackendData(data, scenarioName, callback);
        })

        // Read the errors from SimaPro and throw alerts.
        .catch((error) => {
            console.log(error);
            let errorMessage = JSON.stringify(error);
            if (errorMessage.split(/[ ,:,\\]/).includes('400')) {
                ErrorAlert(400);
            } else if (errorMessage.split(/[ ,:,\\]/).includes('502')) {
                ErrorAlert(502);
            } else if (errorMessage.split(/[ ,:,\\]/).includes('401')) {
                ErrorAlert(401);
            }
        });
}

function dummyPostCalculationRequest(projectId, scenarioName, callback) {
    dummyProcessBackendData(projectId, scenarioName, callback);
}

/**
 *   Post request to initiate the calculation for a project based on the project id and custom values.
 *   This request is caught by the backend.
 *   Which then checks if the calculation is stored based on the calculationId generated.
 *   If the calculation is stored returns the results of calculation here.
 *
 *   This function is not used at present. Can be used in future.
 */
export async function postCalculationRequestCustomSetup(projectId, processId, processName) {
    // POST request using axios with set headers
    const headers = {
        Authorization: 'Bearer',
        'Access-Control-Allow-Origin': 'POST',
        'My-Custom-Header': 'foobar'
    };
    const body = {
        Id: '00000000-0000-0000-0000-000000000000',
        MethodId: '210215cc-99e5-4621-a7e0-f5a09ab530fa',
        MethodName: 'ReCiPe 2016 Midpoint (H)',
        NormalisationSetId: '86b7bb89-8904-4faf-8e56-2d8bccf13b2b',
        NormalisationSetName: 'Default',
        WeightingSetId: 'c5399d7e-67e1-4c18-a0f2-a745f2fdde32',
        WeightingSetName: 'Default',
        calculateParameterSets: true,
        useAnalysisGroups: true,
        combineOverrideInstanceValues: true,
        CalculationItems: [
            {
                ProcessId: processId,
                ProcessName: processName,
                ProductId: projectId,
                Amount: 1.0,
                UnitId: 'aab0228e-f2c0-4954-88c8-c9805b594a37',
                UnitName: 'kg'
            }
        ]
    };
    let result = await axios.post(
        `https://localhost:44323/SimaPro/api/calculation/${projectId}`,
        {
            headers
        },
        { body }
    );
    return result;
}

/**
 *  Getrequest to get the processes for a model based on the project Id
 *  This function is not used at present. Can be used in future.
 */
export async function getProjectProcesses(projectId) {
    const headers = {
        Authorization: 'Bearer',
        'Access-Control-Allow-Origin': 'GET',
        'My-Custom-Header': 'foobar'
    };
    let resultProcess;
    await axios
        .get(`https://localhost:44323/SimaPro/api/processes/referencedata/${projectId}`, {
            headers
        })
        .then(function (data) {
            const items = data;
            resultProcess = items.data.Result.Data;
        });
    return resultProcess;
}
