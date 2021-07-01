/**
 * The simaProInterface is the interface between frontend, backend (and Sima Pro API).
 * It provides the needed utility functions.
 *
 */

import logo from 'assets/logo/LogoCarbonteam.png';
import logo_1 from 'assets/dummyImages/Image_1.PNG';
import logo_2 from 'assets/dummyImages/Logo2.png';
import { getSimaProProjects } from 'interface/BackendConnect';
import {
    projectCategoryProcessing,
    projectNameProcessing as projectNameProcessing
} from './processBackendData';

let useDummyData = true;
/**
 * should get all the Products from the backend (soon)
 * @returns
 */
export async function getCategorizedProducts(scope = 'All') {
    // We need to be able to get either all products from the backend, or only the Products of a selected Category
    // e.g. '/generation/products'; '/transmission/services'; 'industrialApplications/solutions'
    // The expected Product has a unique productID, a productName and an imagePath (if any)
    // TODO: IMPROVE!
    if (scope === 'All') {
        return await getSimaProducts();
    } else if (scope === 'solutions') {
        return getDummyProducts();
    } else {
        return await getSimaProducts();
    }
}

/**
 * should get all the Models for one Product
 * @param productID the id of the Project to get the models for
 * @returns
 */
//export async function getModels(productID) {
export function getModels(productName, productID) {
    switch (productID) {
        case '09f64eeb-13b0-4e09-9fb4-50398483ecfd':
            return [{ modelID: 1, productID: productID, modelName: 'Electric Motor Type 25b' }];
        case 'aufwlc93-kldp-4fer-15s7-51245631fega':
            return [];
        case '7ghnaoeb-kfue-qp04-slfg-12059492begp':
            return [
                { modelID: 6, productID: productID, modelName: 'Transformer DIN42a' },
                { modelID: 7, productID: productID, modelName: 'Transformer DIN42b' },
                { modelID: 8, productID: productID, modelName: 'Transformer DIN42b' },
                { modelID: 9, productID: productID, modelName: 'Transformer DIN42b' }
            ];
        case 'whatis00-this-id00-just-d01n9352rnow':
            return [
                { modelID: 10, productID: productID, modelName: 'Gas Turbine Type 1' },
                { modelID: 11, productID: productID, modelName: 'Gas Turbine Type 2' },
                { modelID: 12, productID: productID, modelName: 'Gas Turbine Type 3' },
                { modelID: 13, productID: productID, modelName: 'Gas Turbine Type 4' }
            ];
        case 'aufglc25-kldd-4ger-16s2-51002631fell':
            return [
                { modelID: 14, productID: productID, modelName: 'Allround Product 1' },
                { modelID: 15, productID: productID, modelName: 'Allround Product 2' },
                { modelID: 16, productID: productID, modelName: 'Allround Product 3' },
                { modelID: 17, productID: productID, modelName: 'Allround Product 4' }
            ];
        default:
            return [{ modelID: 42, productID: productID, modelName: productName }];
    }
}

function getDummyProductData() {
    // WTH are we looking for here? do we need to iterate over projects (api_demo_project, ...) or over final processes?
    const products = [
        {
            Id: '09f64eeb-13b0-4e09-9fb4-50398483ecfd', //(project_id?) final_process_id? (final_product_id?)
            Name: 'Electric Motors#ID:09f64eeb-13b0-4e09-9fb4-50398483ecfd#Scenario:scenario_baseline',
            description:
                'Categorie:Generation/Product#Model:09f64eeb-13b0-4e09-9fb4-50398483ecfd#Location:Germany',
            productImage: logo
        },
        {
            Id: 'aufwlc93-kldp-4fer-15s7-51245631fega', //(project_id?) final_process_id? (final_product_id?)
            Name: 'Electric Motors#ID:aufwlc93-kldp-4fer-15s7-51245631fega#Scenario:scenario_scemarop 1', //final_process_name?
            description:
                'Categorie:Generation/Product#Model:09f64eeb-13b0-4e09-9fb4-503984f3ecfd#Location:Germany',
            productImage: logo_1
        },
        {
            Id: '7ghnaoeb-kfue-qp04-slfg-12059492begp', //(project_id?) final_process_id? (final_product_id?)
            Name: 'Wireless Power Transmittor#ID:7ghnaoeb-kfue-qp04-slfg-12059492begp#Scenario:scenario_baseline',
            description:
                'Categorie:Transmission/Product#Model:09f64eeb-12f0-4e09-9fb4-50398483ecfd#Location:Germany',
            productImage: logo_2
        },
        {
            Id: 'whatis00-this-id00-just-d01n9352rnow', //(project_id?) final_process_id? (final_product_id?)
            Name: 'Gas Turbine#ID:whatis00-this-id00-just-d01n9352rnow#Scenario:scenario_baseline',
            description:
                'Categorie:Generation/Product#Model:09f64eeb-12f0-4e09-9fb4-50395583ecfd#Location:Germany',
            productImage: logo
        },
        {
            Id: 'aufglc25-kldd-4ger-16s2-51002631fell', //(project_id?) final_process_id? (final_product_id?)
            Name: 'Alround Product#ID:aufglc25-kldd-4ger-16s2-51002631fell#Scenario:scenario_baseline',
            description:
                'Categorie:Generation/Product#Model:09f64eeb-1234-4e09-9fb4-50398483ecfd#Location:Germany',
            productImage: logo_1
        }
    ];
    return products;
}

/**
 * Reducing the SimaPro projects to products.
 * The segrigation is based on the comment mentioned in the SimaPro application
 * Further split the products based on the category
 * sample comment: "Categorie:[Generation/Transmission/IndustrialApplication]/[Solutions/Product/Services]#Model:ModelId#Location:loaction"
 *This function filters out all the products obtained from API
 */
export async function getSimaProducts() {
    let products;
    if (!useDummyData) {
        products = await getSimaProProjects();
    } else {
        products = getDummyProductData();
    }
    let formattedProducts = [];
    await products.forEach((product) => {
        let description = product.Description;
        if (description != null && description.split(/[#,:,/]/).includes('Product')) {
            const productObject = {
                productID: product.Id,
                productName: projectNameProcessing(product.Name),
                categories: projectCategoryProcessing(product.Description),
                productImage: logo
            };
            if (useDummyData) {
                productObject = {
                    productID: product.Id,
                    productName: projectNameProcessing(product.Name),
                    categories: projectCategoryProcessing(product.Description),
                    productImage: productImage
                };
            }
            formattedProducts.push(productObject);
        }
    });
    console.log(formattedProducts);
    return formattedProducts;
}

/**
 * Reducing the SimaPro projects to Solutions.
 * The segrigation is based on the comment mentioned in the SimaPro application
 * Further split the products based on the category
 * sample comment: "Categorie:[Generation/Transmission/IndustrialApplication]/[Solutions/Product/Services]#Model:ModelId#Location:loaction"
 *This function filters out all the solutions obtained from API
 */
//ToDo need make the Solutions page call this. As of now I am getting some errors when calling this function instead of dummy products.
export async function getSimaProSolutions() {
    let solutions = await getSimaProProjects();
    let formattedSolutions = [];
    solutions.forEach((solution) => {
        let description = solution.Description;
        if (description != null && description.split(/[#,:,/]/).includes('Solutions')) {
            const solutionObject = {
                productID: solution.Id,
                productName: solution.Name,
                //categories: [categories.generation, categories.transmission],
                categories: projectCategoryProcessing(solution.Description),
                productImage: logo
            };
            formattedSolutions.push(solutionObject);
        }
    });
    console.log(formattedSolutions);
    return formattedSolutions;
}
/**
 * Reducing the SimaPro projects to Services.
 * The segrigation is based on the comment mentioned in the SimaPro application
 * Further split the products based on the category
 * sample comment: "Categorie:[Generation/Transmission/IndustrialApplication]/[Solutions/Product/Services]#Model:ModelId#Location:loaction"
 *This function filters out all the services obtained from API
 */
//ToDo need make the Services page call this. As of now I am getting some errors when calling this function instead of dummy products.
export async function getSimaProServices() {
    let services = await getSimaProProjects();
    let formattedServices = [];
    services.forEach((service) => {
        let description = service.Description;
        if (description != null && description.split(/[#,:,/]/).includes('Services')) {
            const serviceObject = {
                productID: services.Id,
                productName: services.Name,
                //categories: [categories.generation, categories.transmission],
                categories: projectCategoryProcessing(services.Description),
                productImage: logo
            };
            formattedServices.push(serviceObject);
        }
    });
    console.log(formattedServices);
    return formattedServices;
}
