/**
 * The projectInterface is the interface between frontend and backend.
 *
 * @author Martin Wagner, Julian Oelhaf
 */

import logo_1 from 'assets/dummyImages/Image_1.PNG';
import logo_3 from 'assets/dummyImages/Logo2.png';

let materialMap = new Map();

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
 * @param materials the materials recieved from the backend
 */
export function setMaterial(materials) {
    console.log('setMaterial');
    console.log(materials);
    materialMap.clear();
    for (let i = 0; i < materials.length; i++) {
        materialMap.set(materials[i][0], materials[i][6]);
    }
}

/**
 * should get the material compositon of a specific model
 * inputs contribibuting less than 1% each, should have been filtered out by Siemens Energy
 * @param modelName name of the model, which we want to get the Data
 */
export function getMaterialCompositionData() {
    return materialMap.values();
    //return [17, 13, 3, 2, 1, 42, 21];
}

/**
 * @param modelName name of the model, which we want to get the Data
 */
export function getMaterialCompositionLabels() {
    return materialMap.keys();
    /*
    return [
        'Plywood',
        'TotalSteel',
        'GlueBeam',
        'GlassFiber',
        'Copper',
        'Paper',
        'Porcelain',
        'Electronics',
        'Aluminium'
    ];
    */
}

/**
 * QUESTON: Do these categories stay the same?
 * Impact Assessment is done for each of the life cycle stage
 * @param modelName name of the model, which we want to get the Data
 */
export function getLifeCycleStages(modelName) {
    return ['Materials', 'Manufacturing and Transport', 'Operation 30a (75% load)', 'End of Life'];
}

/**
 * Impact Assessment is done for each life cycle stage
 * QUESTION: amount of stages fixed?
 * @param modelName name of the model, which we want to get the Data
 */
export function getImpactAssessmentData(modelName) {
    return [37, 3, 90, -50];
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
 * QUESTION: how is the data structured?
 * Do we need to extract the data from a data structure?
 * @param modelName name of the model, which we want to get the Data
 */
export function getImpactCategoriesTableData(modelName) {
    //TODO:
    return null;
}
