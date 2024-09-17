import axios from 'axios'
import { HOST_API_SERVER_P } from '../../services'

export const DeleteResUsers = async (ids, token) => {
  try {
    const response = await axios.delete(`${HOST_API_SERVER_P}/res_users`, {
      data: { ids },
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    if (response.status === 200 || response.status === 201) {
      return {
        success: true,
        message: response.data.message || 'Operation successful',
        data: response.data,
      }
    } else {
      return {
        success: false,
        message: `Unexpected status code: ${response.status}`,
      }
    }
  } catch (error) {
    return {
      success: false,
      message: error.response
        ? error.response.data.message || 'Có lỗi xảy ra'
        : 'Không thể kết nối tới server',
    }
  }
}
