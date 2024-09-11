import { HOST_API } from '../../../services'

export const registerUser = async ({
  login,
  password
}) => {
  try {
    const response = await fetch(`${HOST_API}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
      credentials: 'same-origin',
    })

    if (!response.ok) {
      throw new Error('Invalid credentials')
    }

    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Đăng ký thất bại: ' + error.message)
  }
}
