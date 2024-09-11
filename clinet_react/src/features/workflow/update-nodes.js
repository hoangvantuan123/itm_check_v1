import { HOST_API } from '../../services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const updateNodesId = async (id, updates) => {
  const response = await fetch(`${HOST_API}/nodes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  })

  const result = await response.json()

  if (response.ok) {
    return result
  } else {
    throw new Error(result.status)
  }
}

export const updateNodesAsync = createAsyncThunk(
  'nodes/updateNodes',
  async ({ id, updates }) => {
    try {
      const response = await fetch(`${HOST_API}/nodes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      })

      if (!response.ok) {
        throw new Error(`Failed to update node: ${response.statusText}`)
      }

      const updatedNode = await response.json()
      return updatedNode
    } catch (error) {
      console.error('Error updating node:', error.message)
      throw error
    }
  },
)
