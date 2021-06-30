/**
 * The projectInterface is the interface between frontend and backend.
 *
 */

import logo_1 from 'assets/dummyImages/Image_1.PNG';
import logo_3 from 'assets/dummyImages/Logo2.png';

var materialCompositionLabels;
var materialCompositionData;
let materialDataInPercent;
var assessmentValues;
let chartDataInPercent = [];

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
export function setMaterialCompositionData(compositionData) {
    console.log('compositionData');
    materialDataInPercent = [];
    materialCompositionData = Array.from(compositionData);
    console.log(materialCompositionData);
    for (let i = 0; i < materialCompositionData.length; i++) {
        materialDataInPercent[i] = Number(materialCompositionData[i]);
    }
    console.log(materialDataInPercent);
}

/**
 * Getter method to recieve the filtered Material Composititon Data from API
 */
export function getMaterialCompositionData() {
    return materialDataInPercent;
}

/**
 * Gets the filtered Material Composititon Labels from API
 * Calculates the percentage values and returns them.
 * @param compositionData filtered data from backendconnnect
 */
export function setMaterialCompositionLabels(compositionLabels) {
    materialCompositionLabels = Array.from(compositionLabels);
    console.log(materialCompositionLabels);
}

/**
 * Getter method to recieve the filtered Material Composititon Labels from API
 */
export function getMaterialCompositionLabels() {
    return materialCompositionLabels;
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
export function setImpactAssessmentData(assessmentData) {
    assessmentValues = assessmentData;
}

/**
 * Getter method to recieve the filtered Impact Assessment Data from API
 */
export function getImpactAssessmentData() {
    return assessmentValues;
}

/**
 * Gets the Impact Assessment Data filtered from API
 * Impact Assessment is done for each of the life cycle stage
 * Percentage is calulated
 * @param assessmentData recieved from Backendconnect
 */
export function setColumnChartData(assessmentDataInPercent) {
    chartDataInPercent = assessmentDataInPercent;
}
/**
 * Getter method to recieve the filtered Impact Assessment Data from API
 */
export function getColumnChartData() {
    return chartDataInPercent;
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
export function getImpactCategoriesTableData() {
    return assessmentValues;
}
