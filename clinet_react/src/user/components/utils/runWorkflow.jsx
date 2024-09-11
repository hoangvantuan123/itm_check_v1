import fetchDataFromGoogleSheet from './google-sheet-utils/fetchDataFromGoogleSheet'
import topologicalSort from './topologicalSort'
import fetchDataFromAPI from './api-utils/fetchDataFromAPI'

function runFunctionSafely(code) {
  try {
    const result = eval(code)
    return result
  } catch (error) {
    console.error('Error running code:', error)
    return null
  }
}
async function runCodeQuery(code) {
  try {
    const functionToRun = new Function(code)

    const result = functionToRun()

    return result
  } catch (error) {
    console.error('Error running code:', error)
    return null
  }
}
let isRunningWorkflow = false

const runWorkflow = async (nodes, edges) => {
  if (isRunningWorkflow) {
    console.log('runWorkflow is already running, skipping this call.')
    return
  }

  const workflowResult = []
  const currentTime = new Date().toISOString()
  isRunningWorkflow = true

  const sortedNodes = topologicalSort(nodes, edges)

  for (const nodeId of sortedNodes) {
    const node = nodes.find((node) => node.id === nodeId)
    if (!node) {
      console.error(`Node with ID ${nodeId} not found.`)
      continue
    }

    const nodeType = node.type
    const nodeDetails = node.details
    const nameNodes = node.data.label

    switch (nodeType) {
      case 'function':
        const functionCode = nodeDetails.code_function.code
        const functionResult = runFunctionSafely(functionCode)
        workflowResult.push({
          nodeId,
          type: 'function',
          name_node: nameNodes,
          result: functionResult,
        })
        break
      case 'trigger':
        break
      case 'filter':
        const expression = nodeDetails.filter.expression
        workflowResult.push({
          nodeId,
          type: 'filter',
          result: expression,
          name_node: nameNodes,
          runTime: currentTime,
        })
        break
      case 'query':
        const queryDetails = nodeDetails.query
        const queryType = queryDetails.type
        let queryResult = null

        switch (queryType) {
          case 'API':
            const apiUrl = queryDetails.api_url
            queryResult = await fetchDataFromAPI(apiUrl)
            workflowResult.push({
              nodeId,
              type: 'query',
              result: queryResult,
              name_node: nameNodes,
              runTime: currentTime,
            })
            break
          case 'GoogleSheet':
            const sheetId = queryDetails.sheet_id
            const sheetName = queryDetails.sheet_name
            queryResult = await fetchDataFromGoogleSheet(sheetId, sheetName)
            workflowResult.push({
              nodeId,
              type: 'query',
              result: queryResult,
              name_node: nameNodes,
              runTime: currentTime,
            })
            break
          case 'CODE':
            const codeToExecute = queryDetails.code
            queryResult = await runCodeQuery(codeToExecute)
            console.log('queryResult', queryResult)
            workflowResult.push({
              nodeId,
              type: 'CODE',
              name_node: nameNodes,
              result: queryResult,
              runTime: currentTime,
            })
            break
          default:
            console.log('Unknown query type:', queryType)
        }

        break
      default:
        console.log('Unknown nodeType:', nodeType)
    }
  }

  isRunningWorkflow = false
  return workflowResult
}

export default runWorkflow
