import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../../services'
import { deleteNodesAsync } from '../delete-nodes'
import { updateNodesAsync } from '../update-nodes'
export const createNodesAsync = createAsyncThunk(
  'nodes/createNodes',
  async (nodesData) => {
    try {
      const response = await fetch(`${HOST_API}/nodes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nodesData),
      })

      if (!response.ok) {
        throw new Error(`Failed to create nodes: ${response.statusText}`)
      }

      return response.json()
    } catch (error) {
      console.error('Error creating nodes:', error.message)
      throw error
    }
  },
)

export const fetchNodesAsync = createAsyncThunk(
  'nodes/fetchNodes',
  async (id) => {
    try {
      const response = await fetch(`${HOST_API}/nodes/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch nodes: ${response.statusText}`)
      }

      return response.json()
    } catch (error) {
      console.error('Error fetching nodes:', error.message)
      throw error
    }
  },
)

const nodesSlice = createSlice({
  name: 'nodes',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setNodesData: (state, action) => {
      state.data = action.payload
    },
    updateNodeData: (state, action) => {
      const updatedNode = action.payload
      const index = state.data.findIndex((node) => node.id === updatedNode.id)
      if (index !== -1) {
        state.data[index] = updatedNode
      }
    },
    deleteNodesData: (state, action) => {
      state.data = state.data.filter((node) => node.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNodesAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchNodesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchNodesAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(createNodesAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(createNodesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(createNodesAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(updateNodesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const updatedNode = action.payload
        const index = state.data.findIndex((node) => node.id === updatedNode.id)
        if (index !== -1) {
          state.data[index] = updatedNode
        }
      })
      .addCase(deleteNodesAsync.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(deleteNodesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state = nodesSlice.caseReducers.deleteNodesData(state, action)
      })
      .addCase(deleteNodesAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

// Export actions
export const { setNodesData, deleteNodesData, updateNodeData } =
  nodesSlice.actions

// Export reducer
export default nodesSlice.reducer
