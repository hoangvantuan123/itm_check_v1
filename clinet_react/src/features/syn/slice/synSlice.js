import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../../services'
import { createSynCornWorkflowAsync } from '../create-syn'
import { fetchSynWorkflowUser } from '../fetch-syn'
import { deleteSynWorkflowUser } from '../delete-syn'
import { fetchSynIdWorkflowUser } from '../fetch-id-syn'

const synWorkflowSlice = createSlice({
  name: 'synWorkflow',
  initialState: {
    data: [],
    userData: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setSynWorkflow: (state, action) => {
      state.data = action.payload
    },
    deleteWorkflowSyn: (state, action) => {
      state.userData = state.userData.filter(
        (workflow) => workflow.id !== action.payload,
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSynCornWorkflowAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(createSynCornWorkflowAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data.push(action.payload)
      })
      .addCase(createSynCornWorkflowAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchSynWorkflowUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchSynWorkflowUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.userData = action.payload
      })
      .addCase(fetchSynWorkflowUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchSynIdWorkflowUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchSynIdWorkflowUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.userData = action.payload
      })
      .addCase(fetchSynIdWorkflowUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(deleteSynWorkflowUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(deleteSynWorkflowUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state = synWorkflowSlice.caseReducers.deleteWorkflowSyn(state, action)
      })
      .addCase(deleteSynWorkflowUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { setSynWorkflow, deleteWorkflowSyn } = synWorkflowSlice.actions

export default synWorkflowSlice.reducer
