/**
 * The simaProInterface is the interface between frontend, backend (and Sima Pro API).
 * It provides the needed utility functions.
 *
 */

import logo from 'assets/logo/LogoCarbonteam.png';
import { getSimaProProjects } from 'interface/BackendConnect';
import { projectCategoryProcessing, projectNameProcessing } from './processBackendData';
import { getDummyProductData } from 'assets/dummyData/dummyData';
import { types, categories } from 'resources/globalConstants/categories';
import { simaProTypes } from 'resources/globalConstants/SimaProProductCategories';
import { processScenarios } from './processProjects';

// Toggle to NOT use SimaPro Data
let useDummyData = true;

/**
 *
 * Sorts all projects in as per category and type.
 *
 * @returns the sorted projects object
 */
export async function getCategorizedProducts() {
    // We need to be able to get either all products from the backend, or only the Products of a selected Category
    // e.g. '/generation/products'; '/transmission/services'; 'industrialApplications/solutions'
    // The expected Product has a unique productID, a productName and an imagePath (if any)
    // TODO: IMPROVE!
    let formattedProducts = await getSimaProducts();
    let productCategoriesAndTypes = {
        industrialApplications: { products: [], solutions: [], services: [] },
        transmission: { products: [], solutions: [], services: [] },
        generation: { products: [], solutions: [], services: [] }
    };
    formattedProducts.forEach((formattedProduct) => {
        switch (formattedProduct.categories[0]) {
            case categories.transmission:
                switch (formattedProduct.type) {
                    case types.product:
                        productCategoriesAndTypes.transmission.products.push(formattedProduct);
                        break;
                    case types.solution:
                        productCategoriesAndTypes.transmission.solutions.push(formattedProduct);
                        break;
                    case types.service:
                        productCategoriesAndTypes.transmission.services.push(formattedProduct);
                        break;
                    default:
                        break;
                }
                break;
            case categories.generation:
                switch (formattedProduct.type) {
                    case types.product:
                        productCategoriesAndTypes.generation.products.push(formattedProduct);
                        break;
                    case types.solution:
                        productCategoriesAndTypes.generation.solutions.push(formattedProduct);
                        break;
                    case types.service:
                        productCategoriesAndTypes.generation.services.push(formattedProduct);
                        break;
                    default:
                        break;
                }
                break;
            case categories.industrialApplications:
                switch (formattedProduct.type) {
                    case types.product:
                        productCategoriesAndTypes.industrialApplications.products.push(
                            formattedProduct
                        );
                        break;
                    case types.solution:
                        productCategoriesAndTypes.industrialApplications.solutions.push(
                            formattedProduct
                        );
                        break;
                    case types.service:
                        productCategoriesAndTypes.industrialApplications.services.push(
                            formattedProduct
                        );
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    });
    console.log('Typified and Categorized Products');
    console.log(productCategoriesAndTypes);

    return productCategoriesAndTypes;
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
        if (description === null) {
        } else {
            let splittedString = description.split(/[#,:,/]/);

            console.log(splittedString);
            let productSolutionService;

            if (splittedString.includes(simaProTypes.product)) {
                productSolutionService = types.product;
            } else if (splittedString.includes(simaProTypes.solution)) {
                productSolutionService = types.solution;
            } else if (splittedString.includes(simaProTypes.service)) {
                productSolutionService = types.service;
            }

            let projectAndScenarioName = projectNameProcessing(product.Name);

            // Definition of the object that is used to hold the data

            let productObject = {
                modelID: product.Id, // since there is no model defined yet
                modelName: projectAndScenarioName.projectName,
                productID: product.Id,
                productName: projectAndScenarioName.projectName,
                categories: projectCategoryProcessing(product.Description),
                productImage: useDummyData ? product.productImage : logo,
                type: productSolutionService,
                scenarioType: projectAndScenarioName.scenarioName,
                scenarioList: [] // A list of products starting with itself as the baseline Scenario
            };

            formattedProducts.push(productObject);
        }
    });
    console.log('The formatted Products (getSimaProducts)');
    console.log(formattedProducts);

    // Now sort the Products Alphabetically and put the baseline Scenario in first place if the Names are identical
    formattedProducts.sort(compareProducts);

    // and then process them to not show scenario duplicates
    let processedAndSortedTastyProducts = processScenarios(formattedProducts);

    return processedAndSortedTastyProducts;
}

/**
 * Function used to determine the order of the elements.
 * It is expected to return
 * - a negative value if first argument is less than second argument,
 * - zero if they're equal and
 * - a positive value otherwise.
 * If omitted, the elements are sorted in ascending, ASCII character order.
 * @param {{productName: String, scenarioType: String}} productA
 * @param {{productName: String, scenarioType: String}} productB
 */
function compareProducts(productA, productB) {
    let evaluation = productA.productName.localeCompare(productB.productName);

    // Put the baseline first
    if (evaluation === 0) {
        if (productA.scenarioType.includes('baseline')) {
            return -1;
        } else if (productB.scenarioType.includes('baseline')) {
            return 1;
        } else {
            return productA.scenarioType.localeCompare(productB.scenarioType);
        }
    } else {
        return evaluation;
    }
}
