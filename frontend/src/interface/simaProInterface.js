/**
 * The simaProInterface is the interface between frontend, backend (and Sima Pro API).
 * It provides the needed utility functions.
 *
 */

import logo from 'assets/logo/LogoCarbonteam.png';
import { getSimaProProjects } from 'interface/BackendConnect';
import { projectCategoryProcessing, projectNameProcessing } from './processBackendData';
import { getDummyProductData } from 'assets/dummyData/dummyData';

// Toggle to NOT use SimaPro Data
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
    } else {
        return await getSimaProducts();
    }
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

    // Format all the SimaPro Products in a way where we can work with them
    products.forEach((product) => {
        let description = product.Description;
        let splittedString = description.split(/[#,:,/]/);

        if (description === null) {
        } else {
            let productSolutionService;

            switch (splittedString) {
                case splittedString.includes('Product'):
                    productSolutionService = 'Product';
                    break;
                case splittedString.includes('Solution'):
                    productSolutionService = 'Solution';
                    break;
                case splittedString.includes('Service'):
                    productSolutionService = 'Service';
                    break;
                default:
                    productSolutionService = '';
                    break;
            }

            let productObject = {
                productID: product.Id,
                productName: projectNameProcessing(product.Name),
                categories: projectCategoryProcessing(product.Description),
                productImage: useDummyData ? product.productImage : logo,
                type: productSolutionService
            };

            formattedProducts.push(productObject);
        }
    });
    console.log(formattedProducts);

    // Now put the formattedProducts where they belong (Store)

    // storeFormattedProducts(formattedProducts);

    return formattedProducts;
}
