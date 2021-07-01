import { getCategorizedProducts } from 'interface/simaProInterface';
import { processingIndustrialApplications } from 'store/slices/industrialApplicationsSlice';

export const loadProjects = (selectedCategory) => async (dispatch) => {
    try {
        await getCategorizedProducts(selectedCategory).then((products) => {
            dispatch(processingIndustrialApplications(JSON.parse(JSON.stringify(products))));
        });
    } catch (error) {
        console.warn('loading projects didnt work', error);
    }
};
