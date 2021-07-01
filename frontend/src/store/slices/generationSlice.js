import { createSlice } from '@reduxjs/toolkit';

export const generationSlice = createSlice({
    name: 'generation',
    initialState: {
        data: []
    },
    reducers: {
        processingGeneration: (state, action) => {
            state.data = [...action.payload];
        }
    }
});

export const { processingGeneration } = generationSlice.actions;

export default generationSlice.reducer;
