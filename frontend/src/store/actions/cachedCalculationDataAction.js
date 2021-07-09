import { processingCachedCalculationData } from 'store/slices/cachedCalculationDataSlice';

export const updateCachedCalculationData = (cachedDataset) => async (dispatch) => {
    console.log('cachedDataset');
    console.log(cachedDataset);
    try {
        await dispatch(processingCachedCalculationData(JSON.parse(JSON.stringify(cachedDataset))));
    } catch (error) {
        console.warn('loading projects didnt work', error);
    }
};
