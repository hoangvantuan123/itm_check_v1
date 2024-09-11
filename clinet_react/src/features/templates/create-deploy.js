import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../services'

export const createTemplatesWorkflowAsync = createAsyncThunk(
  'templatesWorkflow/createTemplatesWorkflow',
  async (dataToSend) => {
    try {
      const response = await fetch(`${HOST_API}/templates-workflow`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })

      if (!response.ok) {
        throw new Error(`Failed to deploy: ${response.statusText}`)
      }
      return response.json()
    } catch (error) {
      console.error('Error deploy:', error.message)
      throw error
    }
  },
)
