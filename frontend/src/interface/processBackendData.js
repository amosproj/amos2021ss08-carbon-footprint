import {
    setMaterialCompositionLabels,
    setMaterialCompositionData,
    setImpactAssessmentData,
    setColumnChartData
} from 'interface/projectInterface';

/*
 * Function to process the data recieved from the backend
 * Filters the carbon impact data recieved from API.
 * Filter the Carbon Values of GlobalWarming
 * Maps the Carbon Values and its corresponding life cycle stage.
 * Filters out the material composition labels and data
 * Filters out all materials less than 1%
 * Calculate the impact assesment in percent for the column charts
 *
 * @param data:     data recieved from PostCalculationRequest
 * @param callback: the handleFinishedDataRequest function from the DetailsComponent.js, this function is called at the end of the data process
 * the function changes the state of the DetailsComponent thus triggering a rerender and causing the DetailsComponent to display the charts
 * instead of the loading circle
 */
export function processBackendData(data, callback) {
    const items = data;
    /*
     * Filter out the "correct" materials
     * ignore everything that is not unit = 'kg", because there is also Energy and Power in the List with unit MJ
     * ignore all the material that are small than 0kg, because scrap and waste materials are represended by a
     * negativ value and we want to exclude srap and waste
     */
    let materialData = items.data.Result.Results[0].Tables[0].Rows;
    let finalMaterials = [];
    let materialMap = new Map();
    var sumOfMaterials = 0;
    for (let z = 0; z < materialData.length; z++) {
        //check if unit is kg
        if (materialData[z][5] === 'kg') {
            //check if weight is positiv --> input material
            if (materialData[z][6] > 0) {
                sumOfMaterials = sumOfMaterials + Number(materialData[z][6]);
                finalMaterials.push(materialData[z]);
            }
        }
    }
    console.log('Sum of Material:');
    console.log(sumOfMaterials);
    for (let i = 0; i < finalMaterials.length; i++) {
        if (Number(finalMaterials[i][6]) / sumOfMaterials > 0.01) {
            materialMap.set(finalMaterials[i][0], finalMaterials[i][6]);
        }
    }

    let carbonData = items.data.Result.Results[0].Tables[1].Rows;
    let impactMap = new Map();
    for (let i = 0; i < carbonData.length; i++) {
        impactMap.set(carbonData[i][0], Number(carbonData[i][2]).toFixed(0));
    }

    let assessmentDataInPercent = [];
    let assessmentValues = Array.from(impactMap.values());
    let total = assessmentValues[4];

    for (let i = 0; i < assessmentValues.length - 2; i++) {
        if (!isNaN(assessmentValues[i])) {
            assessmentDataInPercent[i] = (Number(assessmentValues[i] / total) * 100).toFixed(1);
        }
    }

    setMaterialCompositionLabels(materialMap.keys());
    setMaterialCompositionData(materialMap.values());
    setImpactAssessmentData(impactMap);
    setColumnChartData(assessmentDataInPercent);

    callback();
}
