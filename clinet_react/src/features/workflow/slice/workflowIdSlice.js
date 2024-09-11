import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { updateWorkflow } from '../update-workflow'

export const updateWorkflowAsync = createAsyncThunk(
  'workflow/updateWorkflow',
  async ({ id, userId, updates }) => {
    const response = await updateWorkflow(id, userId, updates)
    return response
  },
)

const workflowSlice = createSlice({
  name: 'workflow',
  initialState: {
    data: null,
  },
  reducers: {
    setWorkflowData: (state, action) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateWorkflowAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateWorkflowAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(updateWorkflowAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { setWorkflowData } = workflowSlice.actions
export const selectWorkflowData = (state) => state.workflow.data
export const selectWorkflowStatus = (state) => state.workflow.status
export const selectWorkflowError = (state) => state.workflow.error

export default workflowSlice.reducer
