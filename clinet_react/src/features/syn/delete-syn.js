import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../services'

export const deleteSynWorkflowUser = createAsyncThunk(
  'synWorkflow/deleteWorkflowSyn',
  async (id) => {
    try {
      const response = await fetch(`${HOST_API}/syn-workflow/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(
          `Failed to fetch syn-workflow User: ${response.statusText}`,
        )
      }

      return id
    } catch (error) {
      console.error('Error fetching syn-workflow user:', error.message)
      throw error
    }
  },
)
