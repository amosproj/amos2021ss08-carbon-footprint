import { createSlice } from '@reduxjs/toolkit';

export const cachedCalculationDataSlice = createSlice({
    name: 'cachedCalculationData',
    initialState: {
        productIdDataMap: new Map()
    },
    reducers: {
        processingCachedCalculationData: (state, action) => {
            state.productIdDataMap.set(action.payload.projectID, action.payload.dataset);
            console.log('action.payload');
            console.log(action.payload);
        }
    }
});

export const { processingCachedCalculationData: processingCachedCalculationData } =
    cachedCalculationDataSlice.actions;

export default cachedCalculationDataSlice.reducer;
