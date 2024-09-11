import { HOST_API } from '../../services'

export const createEdges = async (edgesData) => {
  try {
    const response = await fetch(`${HOST_API}/edges`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(edgesData),
    })

    if (!response.ok) {
      throw new Error(`Failed to create edgesData: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error creating edgesData:', error.message)
    throw error
  }
}
