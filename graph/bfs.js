// graph/bfs.js
function bfs(graph, startNode) {
    const visited = new Set();
    const queue = [startNode];
    const result = [];

    visited.add(startNode);

    while (queue.length) {
        const currentNode = queue.shift();
        result.push(currentNode);

        for (const neighbor of graph[currentNode]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return result;
}

module.exports = bfs;
