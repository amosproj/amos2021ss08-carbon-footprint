import {
    setMaterialCompositionLabels,
    setMaterialCompositionData,
    setImpactAssessmentData,
    setColumnChartData
} from 'interface/projectInterface';

export function processBackendData(data, callback) {
    const items = data;
    let materialData = items.data.Result.Results[0].Tables[0].Rows;
    let finalMaterials = [];
    let materialMap = new Map();
    for (let z = 0; z < materialData.length; z++) {
        if (materialData[z][5] === 'kg') {
            if (materialData[z][6] > 0) {
                finalMaterials.push(materialData[z]);
            }
        }
    }
    for (let i = 0; i < finalMaterials.length; i++) {
        materialMap.set(finalMaterials[i][0], finalMaterials[i][6]);
    }

    /**
     * Filters the carbon impact data recieved from API.
     * Filter the Carbon Values of GlobalWarming
     * Maps the Carbon Values and its corresponding life cycle stage.
     * @param data data recieved from PostCalculationRequest
     */

    let carbonData = items.data.Result.Results[0].Tables[1].Rows;
    let impactMap = new Map();
    for (let i = 0; i < carbonData.length; i++) {
        impactMap.set(carbonData[i][0], carbonData[i][2]);
    }

    /*
    console.log('Material Labels');
    console.log(materialMap.keys());
    console.log('Material Values');
    console.log(materialMap.values());
    console.log('ImpactAssessmentData');
    console.log(impactMap);
    */

    setMaterialCompositionLabels(materialMap.keys());
    setMaterialCompositionData(materialMap.values());
    setImpactAssessmentData(impactMap.values());
    setColumnChartData();

    callback();
}
