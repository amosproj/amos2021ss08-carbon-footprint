import { createSlice } from '@reduxjs/toolkit';

export const generationSlice = createSlice({
    name: 'generation',
    initialState: {
        products: [],
        solutions: [],
        services: []
    },
    reducers: {
        processingGeneration: (state, action) => {
            state.products = [...action.payload.products];
            state.solutions = [...action.payload.solutions];
            state.services = [...action.payload.services];
        }
    }
});

export const { processingGeneration } = generationSlice.actions;

export default generationSlice.reducer;
