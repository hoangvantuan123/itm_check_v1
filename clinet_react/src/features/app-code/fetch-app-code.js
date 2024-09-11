import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../services'

export const fetchCodeUserDeploy = createAsyncThunk(
  'appCode/fetchCodeUser',
  async (id) => {
    try {
      const response = await fetch(`${HOST_API}/app-code/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch Code User: ${response.statusText}`)
      }

      return response.json()
    } catch (error) {
      console.error('Error fetching Code user:', error.message)
      throw error
    }
  },
)
