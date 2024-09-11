import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../services'

export const fetchCoreCodeUserDeploy = createAsyncThunk(
  'coreCode/fetchCoreCodeUser',
  async (id) => {
    try {
      const response = await fetch(`${HOST_API}/core/app-code/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch core User: ${response.statusText}`)
      }

      return response.json()
    } catch (error) {
      console.error('Error fetching Code user:', error.message)
      throw error
    }
  },
)
