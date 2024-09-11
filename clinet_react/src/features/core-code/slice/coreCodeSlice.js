import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../../services'
import { fetchCoreCodeUserDeploy } from '../fetch-core'
import { createCoreCodeAsync } from '../create-core'
import { deleteCoreCode } from '../delete-core'
import { fetchOneCoreCode } from '../fetch-one-core'
const coreCodeSlice = createSlice({
  name: 'coreCode',
  initialState: {
    data: [],
    userData: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setCoreCode: (state, action) => {
      state.data = action.payload
    },
    coreDelete: (state, action) => {
      state.userData = state.userData.filter(
        (item) => item.id !== action.payload,
      )
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchCoreCodeUserDeploy.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchCoreCodeUserDeploy.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchCoreCodeUserDeploy.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchOneCoreCode.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchOneCoreCode.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.userData = action.payload
      })
      .addCase(fetchOneCoreCode.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(createCoreCodeAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(createCoreCodeAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data.push(action.payload)
      })
      .addCase(createCoreCodeAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(deleteCoreCode.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(deleteCoreCode.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state = coreCodeSlice.caseReducers.coreDelete(state, action)
      })
      .addCase(deleteCoreCode.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { setCoreCode } = coreCodeSlice.actions

export default coreCodeSlice.reducer
