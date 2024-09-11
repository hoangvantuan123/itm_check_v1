import { HOST_API } from '../../../services'

export const RunnerCodeFilter = async (codeRun) => {
  try {
    // Gửi đoạn mã lên server
    const response = await fetch(`http://localhost:3000/code-runner/run`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code: codeRun }),
      credentials: 'same-origin',
    })

    if (!response.ok) {
      throw new Error('Failed to execute code on the server')
    }

    const data = await response.json()
    console.log(data)
    if (data.error) {
      throw new Error(data.error)
    }

    // Trả về kết quả
    return { success: true, result: data?.logs }
  } catch (error) {
    // Xử lý lỗi
    return { success: false, error: error.message }
  }
}
