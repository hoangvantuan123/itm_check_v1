import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../services'

export const createRunWorkflowAsync = createAsyncThunk(
  'runWorkflow/createRunWorkflow',
  async (dataToSend) => {
    try {
      const response = await fetch(`${HOST_API}/workflow-results`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })

      if (!response.ok) {
        throw new Error(`Failed to update node: ${response.statusText}`)
      }
      return response.json()
    } catch (error) {
      console.error('Error updating node:', error.message)
      throw error
    }
  },
)
