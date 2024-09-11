import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createBuildCoreAsync } from '../create-run-fun'
import { fetchFunCoreAsync } from '../fetch-run-fun'

const funCoreSlice = createSlice({
  name: 'funCore',
  initialState: {
    data: [],
    funCore: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setFunCore: (state, action) => {
      state.funCore = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBuildCoreAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(createBuildCoreAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(createBuildCoreAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchFunCoreAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchFunCoreAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.funCore = action.payload
      })
      .addCase(fetchFunCoreAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { setFunCore } = funCoreSlice.actions

export default funCoreSlice.reducer
