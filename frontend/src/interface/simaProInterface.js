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
        console.log('formattedProduct');
        console.log(formattedProduct);
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
        let splittedString = description.split(/[#,:,/]/);

        console.log(splittedString);

        if (description === null) {
        } else {
            let productSolutionService;

            if (splittedString.includes(simaProTypes.product)) {
                productSolutionService = types.product;
            } else if (splittedString.includes(simaProTypes.solution)) {
                productSolutionService = types.solution;
            } else if (splittedString.includes(simaProTypes.service)) {
                productSolutionService = types.service;
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
    console.log('The formatted Products (getSimaProducts)');
    console.log(formattedProducts);

    // Now put the formattedProducts where they belong (Store)

    // storeFormattedProducts(formattedProducts);

    return formattedProducts;
}
