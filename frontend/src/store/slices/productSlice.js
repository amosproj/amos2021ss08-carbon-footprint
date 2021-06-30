import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
  },
  reducers: {
    processingProducts: (state, action) => {
      state.data = [...action.payload]
    },
  },
})

export const { processingProducts } = productSlice.actions

export default productSlice.reducer
