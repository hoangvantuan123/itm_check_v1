import { HOST_API } from '../../services'

export const createNodes = async (nodesData) => {
  try {
    const response = await fetch(`${HOST_API}/nodes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nodesData),
    })

    if (!response.ok) {
      throw new Error(`Failed to create nodes: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error creating nodes:', error.message)
    throw error
  }
}
