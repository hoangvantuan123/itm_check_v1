import axios from 'axios'
import { HOST_API_SERVER_P } from '../../services'
import { accessToken } from '../../services/tokenService'

export const PutPermissionsID = async (data) => {
  try {
    const token = accessToken()
    const response = await axios.put(
      `${HOST_API_SERVER_P}/permission_menus`,
      data,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )

    if (response.status === 200 || response.status === 204) {
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
