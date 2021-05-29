/**
 * The simaProInterface is the interface between frontend, backend (and Sima Pro API).
 * It provides the needed utility functions.
 *
 * @author Martin Wagner
 */

import logo from 'assets/logo/LogoCarbonteam.png';
import logo_1 from 'assets/dummyImages/Image_1.PNG';
import logo_2 from 'assets/dummyImages/Logo2.png';
import { categories } from './categories';
import { BackendConnect } from 'interface/BackendConnect';

/**
 * should get all the Products from the backend (soon) //TODO: declare and write.
 * @returns
 */
export function getProducts(scope = 'All') {
    // We need to be able to get either all products from the backend, or only the Products of a selected Category
    // e.g. '/generation/products'; '/transmission/services'; 'industrialApplications/solutions'
    // The expected Product has a unique productID, a productName and an imagePath (if any)
    if (scope === 'All') {
        return getSimaProducts();
    } else {
        return getSimaProducts();
    }
}

/**
 * should get all the Models for one Product
 * @param productID the id of the Project to get the models for
 * @returns
 */
export function getModels(productID) {
    switch (productID) {
        case '09f64eeb-13b0-4e09-9fb4-50398483ecfd':
            return [{ modelID: 1, productID: productID, modelName: 'Electric Motor Type 25b' }];
        case 'aufwlc93-kldp-4fer-15s7-51245631fega':
            return [
                { modelID: 2, productID: productID, modelName: 'Motor Type 42a' },
                { modelID: 3, productID: productID, modelName: 'Motor Type 42b' },
                { modelID: 4, productID: productID, modelName: 'Motor Type 42b' },
                { modelID: 5, productID: productID, modelName: 'Motor Type 42b' }
            ];
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
            break;
    }
}
/**
 * Reducing the SimaPro projects to products.
 *
 */
export async function getSimaProducts() {
    const httpreq = new BackendConnect();
    const products = await httpreq.getSimaProProjects();
    return products;
    let formattedProducts = [];
    //console.log(products);
    products.map((product) => {
        const productObject = {
            productID: product.Id,
            productName: product.Name,
            categories: [categories.generation, categories.transmission],
            productImage: logo
        };
        formattedProducts.push(productObject);
    });
    return formattedProducts;
}

function getDummyProducts() {
    // WTH are we looking for here? do we need to iterate over projects (api_demo_project, ...) or over final processes?
    const products = [
        {
            productID: '09f64eeb-13b0-4e09-9fb4-50398483ecfd', //(project_id?) final_process_id? (final_product_id?)
            productName: 'Electric Motors', //final_process_name? -> probably rather the project name later. But unclear!
            categories: [categories.generation, categories.transmission],
            productImage: logo
        },
        {
            productID: 'aufwlc93-kldp-4fer-15s7-51245631fega', //(project_id?) final_process_id? (final_product_id?)
            productName: 'Motors Type XYZb', //final_process_name?
            categories: [categories.transmission],
            productImage: logo_1
        },
        {
            productID: '7ghnaoeb-kfue-qp04-slfg-12059492begp', //(project_id?) final_process_id? (final_product_id?)
            productName: 'Transformers', //final_process_name?
            categories: [categories.transmission],
            productImage: logo_2
        },
        {
            productID: 'whatis00-this-id00-just-d01n9352rnow', //(project_id?) final_process_id? (final_product_id?)
            productName: 'Gas Turbines', //final_process_name?
            categories: [categories.generation],
            productImage: logo
        },
        {
            productID: 'aufglc25-kldd-4ger-16s2-51002631fell', //(project_id?) final_process_id? (final_product_id?)
            productName: 'Allround Product', //final_process_name?
            categories: [categories.transmission, categories.generation],
            productImage: logo_1
        }
    ];
    return products;
}
