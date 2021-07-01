import { createSlice } from '@reduxjs/toolkit';

export const transmissionSlice = createSlice({
    name: 'transmission',
    initialState: {
        data: [],
        products: [],
        solutions: [],
        services: []
    },
    reducers: {
        processingTransmission: (state, action) => {
            state.data = [...action.payload];
        }
    }
});

export const { processingTransmission } = transmissionSlice.actions;

export default transmissionSlice.reducer;
