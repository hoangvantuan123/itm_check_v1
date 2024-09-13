import { HOST_API } from '../../../services'

export const loginAuth = async ({ login, password }) => {
  try {
    const response = await fetch(`${HOST_API}/login`, {
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
    console.log(data)
    return data
  } catch (error) {
    throw new Error('Đăng nhập thất bại: ' + error.message)
  }
}
