import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../../services'
import { createCornWorkflowAsync } from '../create-deploy'
import { fetchWorkflowUserDeploy } from '../fetch-user-workflow-deploy'
import { deleteWorkflowUserDeploy } from '../delete-deploy'
import { updateCornWorkflowAsync } from '../update-deploy'

const deployWorkflowSlice = createSlice({
  name: 'deployWorkflow',
  initialState: {
    data: [],
    userData: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setDeployWorkflow: (state, action) => {
      state.data = action.payload
    },
    deleteWorkflowDeploy: (state, action) => {
      state.userData = state.userData.filter(
        (workflow) => workflow.id !== action.payload,
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCornWorkflowAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(createCornWorkflowAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data.push(action.payload)
      })
      .addCase(createCornWorkflowAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchWorkflowUserDeploy.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchWorkflowUserDeploy.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.userData = action.payload
      })
      .addCase(fetchWorkflowUserDeploy.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(deleteWorkflowUserDeploy.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(deleteWorkflowUserDeploy.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state = deployWorkflowSlice.caseReducers.deleteWorkflowDeploy(
          state,
          action,
        )
      })
      .addCase(deleteWorkflowUserDeploy.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(updateCornWorkflowAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const updateWorkflow = action.payload
        const index = state.userData.findIndex(
          (workflow) => workflow.id === updateWorkflow.id,
        )
        if (index !== -1) {
          state.data[index] = updateWorkflow
        }
      })
  },
})

export const { setDeployWorkflow, deleteWorkflowDeploy } =
  deployWorkflowSlice.actions

export default deployWorkflowSlice.reducer
