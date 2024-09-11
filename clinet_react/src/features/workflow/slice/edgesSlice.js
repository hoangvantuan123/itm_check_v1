import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../../services'
import { deleteEdgesAsync } from '../delete-edges'
export const createEdgesAsync = createAsyncThunk(
  'edges/createEdges',
  async (edgesData) => {
    try {
      const response = await fetch(`${HOST_API}/edges`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(edgesData),
      })

      if (!response.ok) {
        throw new Error(`Failed to create edges: ${response.statusText}`)
      }

      return response.json()
    } catch (error) {
      console.error('Error creating edges:', error.message)
      throw error
    }
  },
)

export const fetchEdgesAsync = createAsyncThunk(
  'edges/fetchEdges',
  async (id) => {
    try {
      const response = await fetch(`${HOST_API}/edges/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch edges: ${response.statusText}`)
      }

      return response.json()
    } catch (error) {
      console.error('Error fetching edges:', error.message)
      throw error
    }
  },
)

const edgesSlice = createSlice({
  name: 'edges',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setEdgesData: (state, action) => {
      state.data = action.payload
    },
    deleteEdgesData: (state, action) => {
      state.data = state.data.filter((edge) => edge.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEdgesAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchEdgesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchEdgesAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(createEdgesAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(createEdgesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(createEdgesAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(deleteEdgesAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(deleteEdgesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state = edgesSlice.caseReducers.deleteEdgesData(state, action)
      })
      .addCase(deleteEdgesAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { setEdgesData, deleteEdgesData } = edgesSlice.actions

export default edgesSlice.reducer
