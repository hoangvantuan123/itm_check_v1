import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../services'

export const createSynCornWorkflowAsync = createAsyncThunk(
  'synWorkflow/createSynCornWorkflow',
  async (dataToSend) => {
    try {
      const response = await fetch(`${HOST_API}/syn-workflow`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })

      if (!response.ok) {
        throw new Error(`Failed to syn: ${response.statusText}`)
      }
      return response.json()
    } catch (error) {
      console.error('Error syn:', error.message)
      throw error
    }
  },
)
