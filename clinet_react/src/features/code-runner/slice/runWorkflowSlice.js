import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../../services'
import { fetchRunWorkflowAsync } from '../fetch-id-run-workflow'
import { fetchRunWorkflowUserAsync } from '../fetch-id-user'
import { createRunWorkflowAsync } from '../create-run-workflow'

const runWorkflowSlice = createSlice({
  name: 'runWorkflow',
  initialState: {
    data: [],
    userData: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setRunWorkflow: (state, action) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRunWorkflowAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchRunWorkflowAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchRunWorkflowAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchRunWorkflowUserAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchRunWorkflowUserAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.userData = action.payload
      })
      .addCase(fetchRunWorkflowUserAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })

      .addCase(createRunWorkflowAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(createRunWorkflowAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data.push(action.payload)
      })
      .addCase(createRunWorkflowAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

// Export actions
export const { setRunWorkflow } = runWorkflowSlice.actions

// Export reducer
export default runWorkflowSlice.reducer
