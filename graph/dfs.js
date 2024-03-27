// graph/dfs.js
function dfs(graph, startNode, visited = new Set(), result = []) {
    visited.add(startNode);
    result.push(startNode);

    for (const neighbor of graph[startNode]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited, result);
        }
    }

    return result;
}

module.exports = dfs;
