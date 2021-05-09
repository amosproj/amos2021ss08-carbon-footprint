/**
 * The projectInterface is the interface between frontend and backend.
 * 
 * @author Martin Wagner, Julian Oelhaf
 */

import logo from 'assets/logo/LogoCarbonteam.png'
import logo_1 from 'assets/dummyImages/Image_1.PNG'
import logo_2 from 'assets/dummyImages/Image_2.PNG'

/**
 * should get all the Products from the backend (soon) //TODO: declare and write.
 * @returns 
 */
export function getProducts() {
    return ([logo,logo_1,logo_2,logo_1,logo_2,logo_1]);
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
    return null;
}

/**
 * should get the material compositon of a specific model
 * inputs contribibuting less than 1% each, should have been filtered out by Siemens Energy
 * @param modelID the id of the specific model, which we want to display data
 * data is for the pie chart
 */
 export function getImpactCategories(){
    return null;
}

/**
 * should get the material compositon of a specific model
 * inputs contribibuting less than 1% each, should have been filtered out by Siemens Energy
 * @param modelID the id of the specific model, which we want to display data
 * data is for the pie chart
 */
 export function getResultsImpactAssessment(){
    return null;
}
