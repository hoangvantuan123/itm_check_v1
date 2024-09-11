/* fun-node-results */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../services'

export const createBuildNodeAsync = createAsyncThunk(
  'funNode/createBuildNode',
  async (data) => {
    try {
      const response = await fetch(`${HOST_API}/fun-node-results`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
