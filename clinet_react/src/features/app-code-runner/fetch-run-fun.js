/* fun-node/:nodeId */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../services'

export const fetchFunCoreAsync = createAsyncThunk(
  'funCore/fetchFunCore',
  async (id) => {
    try {
      const response = await fetch(`${HOST_API}/fun-core/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch core  User: ${response.statusText}`)
      }

      return response.json()
    } catch (error) {
      console.error('Error fetching  core user:', error.message)
      throw error
    }
  },
)
