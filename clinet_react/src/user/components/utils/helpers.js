export const isDataChanged = (oldData, newData) => {
  return JSON.stringify(oldData) !== JSON.stringify(newData)
}
