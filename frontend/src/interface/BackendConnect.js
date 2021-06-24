import axios from 'axios';
import {
    setMaterialCompositionLabels,
    setMaterialCompositionData,
    setImpactAssessmentData,
    setColumnChartData
} from 'interface/projectInterface';
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
    console.log('API call to get the list of Products');
    console.log(result);
    return result;
}

/**
 * Filters the materials data recieved from API.
 * Filter the materials with Unit Value "Kg" and Values > 0.
 * Maps the Material and its corresponding value.
 * @param data data recieved from PostCalculationRequest
 */
export async function materials(data) {
    const items = data;
    let materialData = items.data.Result.Results[0].Tables[0].Rows;
    let finalMaterials = [];
    let materialMap = new Map();
    for (let z = 0; z < materialData.length; z++) {
        if (materialData[z][5] === 'kg') {
            if (materialData[z][6] > 0) {
                finalMaterials.push(materialData[z]);
            }
        }
    }
    for (let i = 0; i < finalMaterials.length; i++) {
        materialMap.set(finalMaterials[i][0], finalMaterials[i][6]);
    }

    setMaterialCompositionLabels(materialMap.keys());
    setMaterialCompositionData(materialMap.values());
}
/**
 * Filters the carbon impact data recieved from API.
 * Filter the Carbon Values of GlobalWarming
 * Maps the Carbon Values and its corresponding life cycle stage.
 * @param data data recieved from PostCalculationRequest
 */
export async function carbonImpactData(data) {
    console.log('Inside carbon impact data');
    const items = data;
    let carbonData = items.data.Result.Results[0].Tables[1].Rows;
    let impactMap = new Map();
    for (let i = 0; i < carbonData.length; i++) {
        impactMap.set(carbonData[i][0], carbonData[i][2]);
    }
    console.log(impactMap);
    setImpactAssessmentData(impactMap.values());
    setColumnChartData();
}

/**
 *   Post request to initiate the calculation for a project based on the project id and preset values.
 *   This request is caught by the backend.
 *   Which then checks if the calculation is stored based on the calculationId generated.
 *   If the calculation is stored returns the results of calculation here.
 */
// export async function postCalculationRequest(projectId) {
//     // POST request using axios with set headers
//     const headers = {
//         Authorization: 'Bearer',
//         'Access-Control-Allow-Origin': 'POST',
//         'My-Custom-Header': 'foobar'
//     };
//     let result1;
//     await axios
//         .post(`https://localhost:44323/SimaPro/api/calculation/${projectId}`, {
//             headers
//         })
//         .then(function (data) {
//             const items = data;
//             result1 = items.data.Result;
//             materials(data);
//             carbonImpactData(data);
//         });
//     console.log('Result');
//     console.log(result1);
// }

/**
 *   Post request to initiate the calculation for a project based on the project id and custom values.
 *   This request is caught by the backend.
 *   Which then checks if the calculation is stored based on the calculationId generated.
 *   If the calculation is stored returns the results of calculation here.
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
    // .then(function (data) {
    //     const items = data;
    //     calcId = items.data.Result.CalculationId;
    // });
    console.log('RESULT!!!!!!2');
    console.log(result);
    return result;
}

/**
 *  Getrequest to get the processes for a model based on the project Id
 *
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
            console.log(resultProcess);
        });
    return resultProcess;
}
