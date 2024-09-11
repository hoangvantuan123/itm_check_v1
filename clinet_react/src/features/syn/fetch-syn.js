import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../services'

export const fetchSynWorkflowUser = createAsyncThunk(
  'synWorkflow/fetchSynWorkflowUser',
  async (id) => {
    try {
      const response = await fetch(`${HOST_API}/syn-workflow/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`)
      }

      return response.json()
    } catch (error) {
      console.error('Error fetching:', error.message)
      throw error
    }
  },
)
