import { HOST_API } from '../../services'

export const createWorkflow = async (workflowData) => {
  try {
    const response = await fetch(`${HOST_API}/workflow`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(workflowData),
    })

    if (!response.ok) {
      throw new Error(`Failed to create workflow: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error creating workflow:', error.message)
    throw error
  }
}
