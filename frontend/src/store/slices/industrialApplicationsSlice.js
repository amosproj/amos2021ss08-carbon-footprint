import { createSlice } from '@reduxjs/toolkit';

export const industrialApplicationsSlice = createSlice({
    name: 'industralApplications',
    initialState: {
        products: [],
        solutions: [],
        services: []
    },
    reducers: {
        processingIndustrialApplications: (state, action) => {
            state.products = [...action.payload.products];
            state.solutions = [...action.payload.solutions];
            state.services = [...action.payload.services];
        }
    }
});

export const { processingIndustrialApplications } = industrialApplicationsSlice.actions;

export default industrialApplicationsSlice.reducer;
