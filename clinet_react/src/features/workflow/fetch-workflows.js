import { HOST_API } from '../../services'

export const fetchWorkflows = async (userId, page, pageSize) => {
  try {
    const response = await fetch(
      `${HOST_API}/workflows?userId=${userId}&page=${page}&pageSize=${pageSize}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch workflows: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching workflows:', error.message)
    throw error
  }
}
