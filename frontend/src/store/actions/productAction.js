import { getCategorizedProducts } from 'interface/simaProInterface';
import { processingIndustrialApplications } from 'store/slices/industrialApplicationsSlice';
import { processingGeneration } from 'store/slices/generationSlice';
import { processingTransmission } from 'store/slices/transmissionSlice';

export const loadProjects = (selectedCategory, selectedType) => async (dispatch) => {
    try {
        await getCategorizedProducts(selectedCategory).then((products) => {
            dispatch(processingIndustrialApplications(JSON.parse(JSON.stringify(products))));
        });
    } catch (error) {
        console.warn('loading projects didnt work', error);
    }
};
