/**
 * The projectInterface is the interface between frontend and backend.
 *
 * @author Martin Wagner, Julian Oelhaf
 */

import logo_1 from 'assets/dummyImages/Image_1.PNG';
import logo_3 from 'assets/dummyImages/Logo2.png';

var materialCompositionLabels;
var materialCompositionData;
let materialDataInPercent = [];
var assessmentValues;
var lifeCycleStages;

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
 * inputs contribibuting less than 1% each, should have been filtered out by Siemens Energy
 * Calculates the percentage values and returns them.
 * @param compositionData filtered data from backendconnnect
 */
export function setMaterialCompositionData(compositionData) {
    console.log('compositionData');
    materialCompositionData = Array.from(compositionData);
    console.log(materialCompositionData);
    let sum = 0;
    for (let i = 0; i < materialCompositionData.length; i++) {
        sum += Number(materialCompositionData[i]);
    }
    console.log(sum);
    for (let i = 0; i < materialCompositionData.length; i++) {
        materialDataInPercent[i] = (Number(materialCompositionData[i]) / sum) * 100;
    }
    console.log(materialDataInPercent);
}

/**
 * Getter method to recieve the filtered Material Composititon Data from API
 */
export async function getMaterialCompositionData() {
    return materialDataInPercent;
}

/**
 * Gets the filtered Material Composititon Labels from API
 * Calculates the percentage values and returns them.
 * @param compositionData filtered data from backendconnnect
 */
export function setMaterialCompositionLabels(compositionLabels) {
    console.log('compositionLabels');

    materialCompositionLabels = Array.from(compositionLabels);

    console.log(materialCompositionLabels);
}

/**
 * Getter method to recieve the filtered Material Composititon Labels from API
 */
export async function getMaterialCompositionLabels() {
    return materialCompositionLabels;

    // return [
    //     'Plywood',
    //     'TotalSteel',
    //     'GlueBeam',
    //     'GlassFiber',
    //     'Copper',
    //     'Paper',
    //     'Porcelain',
    //     'Electronics',
    //     'Aluminium'
    // ];
}

/**
 * Gets the Life Cycle Stages filtered from API
 * Impact Assessment is done for each of the life cycle stage
 * @param assessmentModels recieved from Backendconnect
 */
export function setLifeCycleStages(assessmentModels) {
    lifeCycleStages = Array.from(assessmentModels);
    console.log('Life Cycle Stages');
    console.log(lifeCycleStages);
}
/**
 * Getter method to recieve the filtered Life Cycle Stages from API
 */
export function getLifeCycleStages() {
    return lifeCycleStages;
}

/**
 * Gets the Impact Assessment Data filtered from API
 * Impact Assessment is done for each of the life cycle stage
 * @param assessmentData recieved from Backendconnect
 */
export function setImpactAssessmentData(assessmentData) {
    assessmentValues = Array.from(assessmentData);
    console.log('Impact Assessment Data');
    console.log(assessmentValues);
}

/**
 * Getter method to recieve the filtered Impact Assessment Data from API
 */
export function getImpactAssessmentData() {
    return assessmentValues;
}

/**
 * * QUESTION: life cycle stages fixed?
 * @param modelName name of the model, which we want to get the Data
 */
export function getImpactCategoriesTableHeaders(modelName) {
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
    console.log('Impact Categories Table Data');
    console.log(assessmentValues);
    return assessmentValues;
}
