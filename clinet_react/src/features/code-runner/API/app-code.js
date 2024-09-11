import { HOST_API } from '../../../services'

export const RunnerAppCode = async (codeRun, functionName) => {
  try {
    // Gửi đoạn mã và tên hàm lên server
    const response = await fetch(`${HOST_API}/run/app-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code: codeRun, functionName: functionName }),
      credentials: 'same-origin',
    })

    if (!response.ok) {
      throw new Error('Failed to execute code on the server')
    }

    const data = await response.json()
    if (data.error) {
      throw new Error(data.error)
    }

    return { success: true, result: data?.logs }
  } catch (error) {
    // Xử lý lỗi
    return { success: false, error: error.message }
  }
}
