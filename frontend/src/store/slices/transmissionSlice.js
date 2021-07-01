import { createSlice } from '@reduxjs/toolkit';

export const transmissionSlice = createSlice({
    name: 'transmission',
    initialState: {
        products: [],
        solutions: [],
        services: []
    },
    reducers: {
        processingTransmission: (state, action) => {
            state.products = [...action.payload.products];
            state.solutions = [...action.payload.solutions];
            state.services = [...action.payload.services];
        }
    }
});

export const { processingTransmission } = transmissionSlice.actions;

export default transmissionSlice.reducer;
