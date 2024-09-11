/* fun-node-results */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../services'

export const createBuildCoreAsync = createAsyncThunk(
  'funCore/createBuildCore',
  async (data) => {
    try {
      const response = await fetch(`${HOST_API}/fun-core-results`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`Failed to create : ${response.statusText}`)
      }
      return response.json()
    } catch (error) {
      console.error('Error create :', error.message)
      throw error
    }
  },
)
