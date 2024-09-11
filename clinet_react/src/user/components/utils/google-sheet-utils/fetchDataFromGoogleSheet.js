const fetchDataFromGoogleSheet = async (sheetId, tableName) => {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${tableName}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(
        `Error fetching data from Google Sheet: ${response.statusText}`,
      )
    }

    const csvData = await response.text()

    return csvData
  } catch (error) {
    console.error('Error fetching data from Google Sheet:', error)
    return null
  }
}

export default fetchDataFromGoogleSheet
