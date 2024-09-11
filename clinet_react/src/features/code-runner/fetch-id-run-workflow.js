import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../services'

export const fetchRunWorkflowAsync = createAsyncThunk(
  'runWorkflow/fetchrunWorkflow',
  async (id) => {
    try {
      const response = await fetch(`${HOST_API}/workflow-results/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch runWorkflow: ${response.statusText}`)
      }

      return response.json()
    } catch (error) {
      console.error('Error fetching runWorkflow:', error.message)
      throw error
    }
  },
)
