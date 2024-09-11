import { HOST_API } from '../../services'

export const updateWorkflow = async (id, userId, updates) => {
  const response = await fetch(`${HOST_API}/workflow/${id}?userId=${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  })

  const result = await response.json()

  if (response.ok) {
    return result
  } else {
    throw new Error(result.status)
  }
}
