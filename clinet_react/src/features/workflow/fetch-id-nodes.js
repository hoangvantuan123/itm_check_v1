import { HOST_API } from '../../services'

export const fetchNodes = async (id) => {
  try {
    const response = await fetch(`${HOST_API}/nodes/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed id to fetch nodes: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching nodes:', error.message)
    throw error
  }
}
