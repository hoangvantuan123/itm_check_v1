import axios from 'axios'

export const fetchWebHookDataFromGoogleSheet = async (sheetId, range) => {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&range=${range}`
  try {
    const response = await axios.get(url)

    const data = response.data
    const processedData = processWebHookDataFromGoogleSheet(data) // Xử lý dữ liệu
    return processedData
  } catch (error) {
    console.error('Error accessing Google Sheet:', error)
    return null
  }
}

const processWebHookDataFromGoogleSheet = (data) => {
  const regex = /google\.visualization\.Query\.setResponse\((.*)\);/
  const matches = regex.exec(data)
  if (matches && matches.length > 1) {
    const jsonData = JSON.parse(matches[1])
    if (
      jsonData &&
      jsonData.table &&
      jsonData.table.rows &&
      jsonData.table.cols
    ) {
      const rows = jsonData.table.rows
      const cols = jsonData.table.cols.map((col) => col.label)
      const processedData = rows.map((row) => {
        const rowData = {}
        row.c.forEach((cell, index) => {
          rowData[cols[index]] = cell ? cell.v : null
        })
        return rowData
      })
      return processedData
    }
  }
  return null
}
