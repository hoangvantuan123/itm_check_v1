import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../services'

export const fetchOneCoreCode = createAsyncThunk(
  'coreCode/fetchOneCoreCode',
  async (id) => {
    try {
      const response = await fetch(`${HOST_API}/core/app-code/project/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch core : ${response.statusText}`)
      }

      return response.json()
    } catch (error) {
      console.error('Error fetching core:', error.message)
      throw error
    }
  },
)
