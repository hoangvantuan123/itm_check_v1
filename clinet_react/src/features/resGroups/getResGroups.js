import axios from 'axios';
import { HOST_API_SERVER_P } from '../../services';

export const GetAllResGroups = async (page = 1, limit = 10, token) => {
  try {
    const response = await axios.get(
      `${HOST_API_SERVER_P}/res_groups`,
      {
        params: {
          page,
          limit
        },
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return {
      success: true,
      data: response.data,
    };

  } catch (error) {
    return {
      success: false,
      message: error.response 
        ? error.response.data.message || 'Có lỗi xảy ra' 
        : 'Không thể kết nối tới server',
    };
  }
};
