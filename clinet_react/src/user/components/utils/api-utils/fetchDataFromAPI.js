const fetchDataFromAPI = async (url) => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Error fetching data from API: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data from API:', error)
    return null
  }
}

export default fetchDataFromAPI
