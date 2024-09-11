import { HOST_API } from '../../services'

export const fetchIDWorkflows = async (id, userId) => {
  try {
    const response = await fetch(
      `${HOST_API}/workflow/${id}?userId=${userId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (!response.ok) {
      throw new Error(`Failed id to fetch workflows: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching workflows:', error.message)
    throw error
  }
}
