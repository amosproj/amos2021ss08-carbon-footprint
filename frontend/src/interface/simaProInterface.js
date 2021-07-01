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
        industrialApplication: { products: [], solutions: [], services: [] },
        transmission: { products: [], solutions: [], services: [] },
        generation: { products: [], solutions: [], services: [] }
    };
    formattedProducts.forEach((formattedProduct) => {
        switch (formattedProduct.categories[0]) {
            case 'Transmission':
                switch (formattedProduct.type) {
                    case 'Product':
                        productCategoriesAndTypes.transmission.products.push(formattedProduct);
                        break;
                    case 'Solution':
                        productCategoriesAndTypes.transmission.solutions.push(formattedProduct);
                        break;
                    case 'Service':
                        productCategoriesAndTypes.transmission.services.push(formattedProduct);
                        break;
                    default:
                        break;
                }
                break;
            case 'Generation':
                switch (formattedProduct.type) {
                    case 'Product':
                        productCategoriesAndTypes.generation.products.push(formattedProduct);
                        break;
                    case 'Solution':
                        productCategoriesAndTypes.generation.solutions.push(formattedProduct);
                        break;
                    case 'Service':
                        productCategoriesAndTypes.generation.services.push(formattedProduct);
                        break;
                    default:
                        break;
                }
                break;
            case 'IndustrialApplication':
                switch (formattedProduct.type) {
                    case 'Product':
                        productCategoriesAndTypes.industrialApplication.products.push(
                            formattedProduct
                        );
                        break;
                    case 'Solution':
                        productCategoriesAndTypes.industrialApplication.solutions.push(
                            formattedProduct
                        );
                        break;
                    case 'Service':
                        productCategoriesAndTypes.industrialApplication.services.push(
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
        let splittedString = description.split(/[#,:,/]/);

        console.log(splittedString);

        if (description === null) {
        } else {
            let productSolutionService;

            if (splittedString.includes('Product')) {
                productSolutionService = 'Product';
            } else if (splittedString.includes('Solution')) {
                productSolutionService = 'Solution';
            } else if (splittedString.includes('Service')) {
                productSolutionService = 'Service';
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
