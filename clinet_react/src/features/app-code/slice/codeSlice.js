import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../../services'
import { fetchCodeUserDeploy } from '../fetch-app-code'
import { createProjectAsync } from '../create-project'
import { updateProjectAsync } from '../update-project'
import { fetchOneCodeUser } from '../fetch-finone-code'
import { deleteProject } from '../delete-project'
const appCodeSlice = createSlice({
  name: 'appCode',
  initialState: {
    data: [],
    userData: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setAppCode: (state, action) => {
      state.data = action.payload
    },
    deleteProject: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchCodeUserDeploy.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchCodeUserDeploy.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchCodeUserDeploy.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchOneCodeUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchOneCodeUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.userData = action.payload
      })
      .addCase(fetchOneCodeUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(createProjectAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(createProjectAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data.push(action.payload)
      })
      .addCase(createProjectAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(deleteProject.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state = appCodeSlice.caseReducers.deleteProject(state, action)
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { setAppCode } = appCodeSlice.actions

export default appCodeSlice.reducer
