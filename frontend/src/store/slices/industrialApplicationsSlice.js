import { createSlice } from '@reduxjs/toolkit';

export const industrialApplicationsSlice = createSlice({
    name: 'industralApplications',
    initialState: {
        data: []
    },
    reducers: {
        processingIndustrialApplications: (state, action) => {
            state.data = [...action.payload];
        }
    }
});

export const { processingIndustrialApplications } = industrialApplicationsSlice.actions;

export default industrialApplicationsSlice.reducer;
