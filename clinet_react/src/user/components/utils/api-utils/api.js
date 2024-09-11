import axios from 'axios'

export const fetchWebHookDataFromAPI = async (url) => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('Error accessing API:', error)
    return null
  }
}
