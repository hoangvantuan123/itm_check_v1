import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../services'

export const createCoreCodeAsync = createAsyncThunk(
  'coreCode/createCoreCode',
  async (dataToSend) => {
    try {
      const response = await fetch(`${HOST_API}/core/app-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })

      if (!response.ok) {
        throw new Error(`Failed to project: ${response.statusText}`)
      }
      return response.json()
    } catch (error) {
      console.error('Error project:', error.message)
      throw error
    }
  },
)
