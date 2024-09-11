import { HOST_API } from '../../services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const deleteNodesAsync = createAsyncThunk(
  'nodes/deleteNodes',
  async (id) => {
    try {
      const response = await fetch(`${HOST_API}/nodes/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error(`Failed to delete nodes: ${response.statusText}`)
      }
      return id // Trả về ID của node đã bị xóa để cập nhật trạng thái sau này
    } catch (error) {
      console.error('Error deleting nodes:', error.message)
      throw error
    }
  },
)
