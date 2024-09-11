import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createBuildNodeAsync } from '../create-run-node'
import { fetchFunNodeAsync } from '../fetch-id-fun-node'

const funNodeSlice = createSlice({
  name: 'funNode',
  initialState: {
    data: [],
    funNode: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setFunNodes: (state, action) => {
      state.funNode = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBuildNodeAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(createBuildNodeAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(createBuildNodeAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchFunNodeAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchFunNodeAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.funNode = action.payload
      })
      .addCase(fetchFunNodeAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

// Export actions
export const { setFunNodes } = funNodeSlice.actions

// Export reducer
export default funNodeSlice.reducer
