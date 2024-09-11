import { HOST_API } from '../../../services'

export const login = async ({ email, password }) => {
  try {
    const response = await fetch(`${HOST_API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'same-origin',
    })

    if (!response.ok) {
      throw new Error('Invalid credentials')
    }

    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Đăng nhập thất bại: ' + error.message)
  }
}

export const loginGoogle = async () => {
  try {
    const response = await fetch(`${HOST_API}/auth/google/callback`, {
      method: 'GET',
    })

    if (!response.ok) {
      throw new Error('Invalid credentials')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error('Đăng nhập thất bại: ' + error.message)
  }
}
