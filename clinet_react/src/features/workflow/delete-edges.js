import { HOST_API } from '../../services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const deleteEdgesAsync = createAsyncThunk(
  'edges/deleteEdges',
  async (id) => {
    try {
      const response = await fetch(`${HOST_API}/edges/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error(`Failed to delete edges: ${response.statusText}`)
      }
      return id // Trả về ID của node đã bị xóa để cập nhật trạng thái sau này
    } catch (error) {
      console.error('Error deleting edges:', error.message)
      throw error
    }
  },
)
