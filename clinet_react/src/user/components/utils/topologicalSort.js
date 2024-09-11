const topologicalSort = (nodes, edges) => {
  const visited = new Set()
  const sortedNodes = []

  function dfs(nodeId) {
    visited.add(nodeId)

    const neighbors = edges
      .filter((edge) => edge.source === nodeId)
      .map((edge) => edge.target)

    for (const neighborId of neighbors) {
      if (!visited.has(neighborId)) {
        dfs(neighborId)
      }
    }

    sortedNodes.unshift(nodeId)
  }

  for (const node of nodes) {
    if (!visited.has(node.id)) {
      dfs(node.id)
    }
  }

  return sortedNodes
}

export default topologicalSort
