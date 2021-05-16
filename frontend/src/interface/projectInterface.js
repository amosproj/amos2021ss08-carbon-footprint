/**
 * The projectInterface is the interface between frontend and backend.
 * 
 * @author Martin Wagner, Julian Oelhaf
 */

import logo from 'assets/logo/LogoCarbonteam.png'
import logo_1 from 'assets/dummyImages/Image_1.PNG'
import logo_3 from 'assets/dummyImages/Logo2.png'

/**
 * should get all the Products from the backend (soon) //TODO: declare and write.
 * @returns 
 */
export function getProducts() {
    return ([logo_3,logo_1,logo_3,logo_1,logo_3,logo_1]);
}

/**
 * should get all the Models for one Product
 * @param projectID the id of the Project to get the models for
 * @returns 
 */
export function getModels() {
    return (  [
        { ProjectID: '1', models: 'Transformer 3-phase#1' },
        { ProjectID: '2', models: 'Transformer 3-phase#2' },
        { ProjectID: '3', models: 'Transformer 3-phase#3' }
 
    ]);
}

/**
 * should get the material compositon of a specific model
 * inputs contribibuting less than 1% each, should have been filtered out by Siemens Energy
 * @param modelID the id of the specific model, which we want to display data
 * data is for the pie chart
 */
export function getMaterialComposition(){
    return [17, 13, 3, 2, 1, 42, 21];
}

/**
 * @param modelID the id of the specific model, which we want to display data
 */
 export function getImpactCategories(){
    return null;
}

/**
 * @param modelID the id of the specific model, which we want to display data
 */
 export function getResultsImpactAssessment(){
    return [37, 3, 90, -50];
}
