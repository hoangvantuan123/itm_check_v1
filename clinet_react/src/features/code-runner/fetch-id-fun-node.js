/* fun-node/:nodeId */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../services'

export const fetchFunNodeAsync = createAsyncThunk(
  'funNode/fetchfunNode',
  async (id) => {
    try {
      const response = await fetch(`${HOST_API}/fun-node/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(
          `Failed to fetch fetchFunNodeAsync User: ${response.statusText}`,
        )
      }

      return response.json()
    } catch (error) {
      console.error('Error fetching fetchFunNodeAsync user:', error.message)
      throw error
    }
  },
)
