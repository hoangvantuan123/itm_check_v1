import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HOST_API } from '../../services'

export const updateCornWorkflowAsync = createAsyncThunk(
  'deployWorkflow/updateCornWorkflow',
  async ({ id, updates }) => {
    try {
      const response = await fetch(`${HOST_API}/workflow-corn/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      })

      if (!response.ok) {
        throw new Error(`Failed to update: ${response.statusText}`)
      }

      const updatedNode = await response.json()
      return updatedNode
    } catch (error) {
      console.error('Error updating:', error.message)
      throw error
    }
  },
)
