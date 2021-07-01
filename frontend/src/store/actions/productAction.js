import { getCategorizedProducts } from 'interface/simaProInterface';
import { processingIndustrialApplications } from 'store/slices/industrialApplicationsSlice';
import { processingGeneration } from 'store/slices/generationSlice';
import { processingTransmission } from 'store/slices/transmissionSlice';

export const loadProjects = () => async (dispatch) => {
    try {
        await getCategorizedProducts().then((products) => {
            dispatch(processingGeneration(JSON.parse(JSON.stringify(products.generation))));
            dispatch(processingTransmission(JSON.parse(JSON.stringify(products.transmission))));
            dispatch(
                processingIndustrialApplications(
                    JSON.parse(JSON.stringify(products.industrialApplication))
                )
            );
        });
    } catch (error) {
        console.warn('loading projects didnt work', error);
    }
};
