/**
 * The projectInterface is the interface between frontend and backend.
 *
 */

import logo_1 from 'assets/dummyImages/Image_1.PNG';
import logo_3 from 'assets/dummyImages/Logo2.png';
import { scenarioNames } from 'components/details/DetailsComponent';

/**
 * the variables for the baseline scenario
 */
var materialCompositionLabels;
var materialCompositionData;
let materialDataInPercent;
var assessmentValues;
let chartDataInPercent = [];

/**
 * the variables for the modified scenario
 */
var modifiedMaterialCompositionLabels;
var modifiedMaterialCompositionData;
let modifiedMaterialDataInPercent;
var modifiedAssessmentValues;
let modifiedChartDataInPercent = [];

/**
 * initializing the modified scenario with the baseline
 * inorder to display the same values for the modified scenario
 * when the user click on add scenario
 */
export function handleAddingSecondScenario() {
    modifiedMaterialCompositionLabels = materialCompositionLabels;
    modifiedMaterialCompositionData = materialCompositionData;
    modifiedMaterialDataInPercent = materialDataInPercent;
    modifiedAssessmentValues = assessmentValues;
    modifiedChartDataInPercent = chartDataInPercent;
}

export function handOverBackendData(data) {
    console.log('data');
    console.log(data);
}

/**
 * should get all the Products from the backend (soon) //TODO: declare and write.
 * @returns
 */
export function getProducts() {
    return [logo_3, logo_1, logo_3, logo_1, logo_3, logo_1];
}

/**
 * should get all the Models for one Product
 * @param projectID the id of the Project to get the models for
 * @returns
 */
export function getModels() {
    return [
        { ProjectID: '1', models: 'Transformer 3-phase#1' },
        { ProjectID: '2', models: 'Transformer 3-phase#2' },
        { ProjectID: '3', models: 'Transformer 3-phase#3' }
    ];
}

/**
 * Gets the filtered Material Composititon Data from API
 * inputs contribibuting less than 1% each, should have been filtered out processBackendData
 * Calculates the percentage values and returns them.
 * @param compositionData filtered data from backendconnnect
 */
export function setMaterialCompositionData(scenarioName, compositionData) {
    if (scenarioName === scenarioNames.baseline) {
        console.log('compositionData');
        materialDataInPercent = [];
        materialCompositionData = Array.from(compositionData);
        console.log(materialCompositionData);
        for (let i = 0; i < materialCompositionData.length; i++) {
            materialDataInPercent[i] = Number(materialCompositionData[i]);
        }
        console.log(materialDataInPercent);
    } else if (scenarioName === scenarioNames.modified) {
        console.log('compositionData');
        modifiedMaterialDataInPercent = [];
        modifiedMaterialCompositionData = Array.from(compositionData);
        console.log(modifiedMaterialCompositionData);
        for (let i = 0; i < modifiedMaterialCompositionData.length; i++) {
            modifiedMaterialDataInPercent[i] = Number(modifiedMaterialCompositionData[i]);
        }
        console.log(modifiedMaterialDataInPercent);
    }
}

/**
 * Getter method to recieve the filtered Material Composititon Data from API
 */
export function getMaterialCompositionData(scenarioName) {
    if (scenarioName === scenarioNames.baseline) {
        return materialDataInPercent;
    } else if (scenarioName === scenarioNames.modified) {
        return modifiedMaterialDataInPercent;
    }
}

/**
 * Gets the filtered Material Composititon Labels from API
 * Calculates the percentage values and returns them.
 * @param compositionData filtered data from backendconnnect
 */
export function setMaterialCompositionLabels(scenarioName, compositionLabels) {
    if (scenarioName === scenarioNames.baseline) {
        materialCompositionLabels = Array.from(compositionLabels);
        console.log(materialCompositionLabels);
    } else if (scenarioName === scenarioNames.modified) {
        modifiedMaterialCompositionLabels = Array.from(compositionLabels);
        console.log(modifiedMaterialCompositionLabels);
    }
}

/**
 * Getter method to recieve the filtered Material Composititon Labels from API
 */
export function getMaterialCompositionLabels(scenarioName) {
    if (scenarioName === scenarioNames.baseline) {
        return materialCompositionLabels;
    } else if (scenarioName === scenarioNames.modified) {
        return modifiedMaterialCompositionLabels;
    }
}

/**
 * Gets the Life Cycle Stages filtered from API
 * Impact Assessment is done for each of the life cycle stage
 * @param modelID id of the model, which we want to get the Data
 */
export function getLifeCycleStages(modelID) {
    return ['Materials', 'Manufacturing and Transport', 'Operation 30a (75% load)', 'End of Life'];
}

/**
 * Gets the Impact Assessment Data filtered from API
 * Impact Assessment is done for each of the life cycle stage
 * @param assessmentData recieved from Backendconnect
 */
export function setImpactAssessmentData(scenarioName, assessmentData) {
    if (scenarioName === scenarioNames.baseline) {
        assessmentValues = assessmentData;
    } else if (scenarioName === scenarioNames.modified) {
        modifiedAssessmentValues = assessmentData;
    }
}

/**
 * Getter method to recieve the filtered Impact Assessment Data from API
 */
export function getImpactAssessmentData(scenarioName) {
    if (scenarioName === scenarioNames.baseline) {
        return assessmentValues;
    } else if (scenarioName === scenarioNames.modified) {
        return modifiedAssessmentValues;
    }
}

/**
 * Gets the Impact Assessment Data filtered from API
 * Impact Assessment is done for each of the life cycle stage
 * Percentage is calulated
 * @param assessmentData recieved from Backendconnect
 */
export function setColumnChartData(scenarioName, assessmentDataInPercent) {
    if (scenarioName === scenarioNames.baseline) {
        chartDataInPercent = assessmentDataInPercent;
    } else if (scenarioName === scenarioNames.modified) {
        modifiedChartDataInPercent = assessmentDataInPercent;
    }
}
/**
 * Getter method to recieve the filtered Impact Assessment Data from API
 */
export function getColumnChartData(scenarioName) {
    if (scenarioName === scenarioNames.baseline) {
        console.log('varun   1 :  ' + chartDataInPercent);
        return chartDataInPercent;
    } else if (scenarioName === scenarioNames.modified) {
        console.log('varun   2 :  ' + modifiedChartDataInPercent);
        return modifiedChartDataInPercent;
    }
}
/**
 * * QUESTION: life cycle stages fixed?
 * @param modelID id of the model, for which we want to get the Data
 */
export function getImpactCategoriesTableHeaders(modelID) {
    return [
        { key: 'header-1', value: 'Impact Category' },
        { key: 'header-2', value: 'Unit' },
        { key: 'header-3', value: 'Total' },
        { key: 'header-4', value: 'Materials LPT' },
        { key: 'header-5', value: 'Manufacturing and Transport' },
        { key: 'header-6', value: 'Operations' },
        { key: 'header-7', value: 'End of Life' }
    ];
}
/**
 * Gets the Impact Categories Table Data filtered from API
 * Impact Assessment is done for each of the life cycle stage
 * @param assessmentData recieved from Backendconnect and filtered here
 */
export function getImpactCategoriesTableData(scenarioName) {
    if (scenarioName === scenarioNames.baseline) {
        return assessmentValues;
    } else if (scenarioName === scenarioNames.modified) {
        return modifiedAssessmentValues;
    }
}
