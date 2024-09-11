import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../services'

export const deleteWorkflowUserDeploy = createAsyncThunk(
  'deployWorkflow/deleteWorkflowUser',
  async (id) => {
    try {
      const response = await fetch(`${HOST_API}/workflow-corn/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(
          `Failed to fetch runWorkflow User: ${response.statusText}`,
        )
      }

      return id
    } catch (error) {
      console.error('Error fetching runWorkflow user:', error.message)
      throw error
    }
  },
)
