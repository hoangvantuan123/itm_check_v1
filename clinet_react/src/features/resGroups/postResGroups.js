import axios from 'axios'
import { HOST_API_SERVER_P } from '../../services'

export const PostResGroups = async (name, comment, token) => {
  try {
    const response = await axios.post(
      `${HOST_API_SERVER_P}/res_groups`,
      {
        name: name,
        comment: comment,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )

    if (response.status === 200 || response.status === 201) {
      return { success: true, message: response.data.message || 'Operation successful', data: response.data }
    } else {
      return {
        success: false,
        message: `Unexpected status code: ${response.status}`,
      }
    }
  } catch (error) {
    // Xử lý lỗi tốt hơn
    return {
      success: false,
      message: error.response ? error.response.data.message || 'Có lỗi xảy ra' : 'Không thể kết nối tới server',
    }
  }
}
