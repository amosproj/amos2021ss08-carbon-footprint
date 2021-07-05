/**
 *
 * Filters out any duplicate Products and stores them as a child of the basline Scneario
 *
 * @param {{ industrialApplications: { products: [], solutions: [], services: [] }, transmission: { products: [], solutions: [], services: [] },generation: { products: [], solutions: [], services: [] }}} typifiedAndCategorizedProducts the Products as previously arranged
 * @returns
 */
export function processScenarios(typifiedAndCategorizedProducts) {
    let baselineScneariosOnly = [];
    let firstElement = { productName: '-1', scenarioType: '-1' };

    for (let index = 0; index < typifiedAndCategorizedProducts.length; index++) {
        const secondElement = typifiedAndCategorizedProducts[index];
        // First check whether we are looking at a duplicate pair
        if (firstElement.productName.localeCompare(secondElement.productName) === 0) {
            // Then make sure we have the baseline
            if (firstElement.scenarioType.includes('baseline')) {
                // Add the second one to the baseline and remove it from the array by not inserting it into the new array
                firstElement.scenarioList.push(secondElement);
                // Do not advance the firstElement Pointer, there might be more than one other scenario to come.
                if (index === typifiedAndCategorizedProducts.length - 1) {
                    // We reached the end and the last element was a duplicate. Don't push that duplicate element but push
                    // the baseline element.
                    baselineScneariosOnly.push(firstElement);
                }
            } else {
                // We have a scenario selected, and there somehow still is a duplicate
                console.error('Invalid Duplicate found in processScenarios');
            }
        } else {
            // No duplicate: Advance firstElement Pointer
            if (index > 0) {
                // Skip the dummy first Element, then
                // Add the finished first Element to the stack
                baselineScneariosOnly.push(firstElement);
            }
            if (index === typifiedAndCategorizedProducts.length - 1) {
                // We reached the end of the Array and don't have a duplicate, append second element as well.
                baselineScneariosOnly.push(secondElement);
            } else {
                // Not at the end yet, advance pointer
                firstElement = secondElement;
            }
        }
    }
    // When done with one iteration, return new Array
    return baselineScneariosOnly;
}
