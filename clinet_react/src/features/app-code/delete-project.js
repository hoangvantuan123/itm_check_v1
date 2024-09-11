import { HOST_API } from '../../services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const deleteProject = createAsyncThunk(
  'appCode/deleteProject',
  async (id) => {
    try {
      const response = await fetch(`${HOST_API}/app-code/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error(`Failed to delete : ${response.statusText}`)
      }
      return id
    } catch (error) {
      console.error('Error deleting ', error.message)
      throw error
    }
  },
)
