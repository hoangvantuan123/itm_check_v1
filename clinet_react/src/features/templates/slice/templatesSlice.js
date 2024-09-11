import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../../services'

import { createTemplatesWorkflowAsync } from '../create-deploy'
import { fetchCategoriesWorkflow } from '../fetch-categories'

const templatesWorkflowSlice = createSlice({
  name: 'templatesWorkflow',
  initialState: {
    data: [],
    templates: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setDeployWorkflow: (state, action) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTemplatesWorkflowAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(createTemplatesWorkflowAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data.push(action.payload)
      })
      .addCase(createTemplatesWorkflowAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchCategoriesWorkflow.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchCategoriesWorkflow.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.templates = action.payload
      })
      .addCase(fetchCategoriesWorkflow.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { setDeployWorkflow } = templatesWorkflowSlice.actions

export default templatesWorkflowSlice.reducer
