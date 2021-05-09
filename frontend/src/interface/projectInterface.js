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
