/**
 * The projectInterface is the interface between frontend and backend.
 *
 * @author Martin Wagner, Julian Oelhaf
 */

import logo_1 from 'assets/dummyImages/Image_1.PNG';
import logo_3 from 'assets/dummyImages/Logo2.png';

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
 * should get the material compositon of a specific model
 * inputs contribibuting less than 1% each, should have been filtered out by Siemens Energy
 * @param modelId id of the model, which we want to get the Data
 */
export function getMaterialCompositionData(modelId) {
    return [17, 13, 3, 2, 1, 42, 21];
}
/**
 * @param modelId id of the model, which we want to get the Data
 */
export function getMaterialCompositionLabels(modelId) {
    return [
        'Transformer oil',
        'Steel',
        'Pressboard',
        'Stainless steel',
        'Aluminium',
        'Silicon steel',
        'Copper'
    ];
}

/**
 * QUESTON: Do these categories stay the same?
 * Impact Assessment is done for each of the life cycle stage
 * @param modelId id of the model, which we want to get the Data
 */
export function getLifeCycleStages(modelId) {
    return ['Materials', 'Manufacturing and Transport', 'Operation 30a (75% load)', 'End of Life'];
}

/**
 * Impact Assessment is done for each life cycle stage
 * QUESTION: amount of stages fixed?
 * @param modelId id of the model, which we want to get the Data
 */
export function getImpactAssessmentData(modelId) {
    return [37, 3, 90, -50];
}

/**
 * * QUESTION: life cycle stages fixed?
 * @param modelId id of the model, for which we want to get the Data
 */
export function getImpactCategoriesTableHeaders(modelId) {
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
 * @param modelId id of the model, for which we want to get the Data
 */
export function getImpactCategoriesTableData(modelId) {
    return [
        {
            key: 'row-1',
            impactCategory: 'Global Warming',
            unit: 'kg CO2 eq',
            total: '2,350,811',
            materialsLPT: '874,356',
            manufacturing: '71,532',
            operations: '2,114,344',
            endOfLife: '-790,420'
        },
        {
            key: 'row-2',
            impactCategory: 'Ozon layer depletion',
            unit: 'kg CFC-11 eq',
            total: '12',
            materialsLPT: '0',
            manufacturing: '0',
            operations: '12',
            endOfLife: '0'
        },
        {
            key: 'row-3',
            impactCategory: 'Photochemical oxidant formation (POCP)',
            unit: 'kg C2H4 eq',
            total: '2,350,811',
            materialsLPT: '874,356',
            manufacturing: '71,532',
            operations: '2,114,344',
            endOfLife: '-332'
        },
        {
            key: 'row-4',
            impactCategory: 'Acidification',
            unit: 'kg SO2 eq',
            total: '12',
            materialsLPT: '0',
            manufacturing: '0',
            operations: '12',
            endOfLife: '12,159'
        },
        {
            key: 'row-5',
            impactCategory: 'Eutrophication',
            unit: 'kg PO4 eq',
            total: '12',
            materialsLPT: '0',
            manufacturing: '0',
            operations: '12',
            endOfLife: '–5,016'
        },
        {
            key: 'row-6',
            impactCategory: 'Nonrenewable energy',
            unit: 'MJ eq',
            total: '2,781,500,619',
            materialsLPT: '14,672,424',
            manufacturing: '1,454,845',
            operations: '2,774,610,300',
            endOfLife: '–9,236,950'
        }
    ];
}
