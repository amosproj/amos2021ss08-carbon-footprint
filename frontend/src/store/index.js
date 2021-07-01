import { configureStore } from '@reduxjs/toolkit';
import industrialApplicationsReducer from './slices/industrialApplicationsSlice';
import generationReducer from './slices/generationSlice';
import transmissionReducer from './slices/transmissionSlice';

export default configureStore({
    reducer: {
        products: industrialApplicationsReducer,
        generation: generationReducer,
        transmission: transmissionReducer
    }
});
