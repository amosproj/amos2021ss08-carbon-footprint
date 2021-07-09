/**
 *
 * @param {String} projectID - ID of the Project to check for
 * @returns - null: No data found / The formatted calculation Data
 */

export function checkForCachedCalculationData(projectID) {
    return null;
}

/**
 * Saves the calculated setup in store.
 *
 * @param {String} projectID
 * @param {[String]} materialCompositionLabels
 * @param {[Number]} materialCompositionData
 * @param {[Number]} impactAssessmentData
 * @param {[Number]} columnChartData
 */
export function formatCalculationData(
    projectID,
    materialCompositionLabels,
    materialCompositionData,
    impactAssessmentData,
    columnChartData
) {
    console.log('Hii');
    const dataset = {
        projectID: projectID,
        data: {
            materialCompositionLabels: materialCompositionLabels,
            materialCompositionData: materialCompositionData,
            impactAssessmentData: impactAssessmentData,
            columnChartData: columnChartData
        }
    };
    return dataset;
}
