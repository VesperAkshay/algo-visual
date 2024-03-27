function dijkstra(graph, startNode) {
    const distances = {};
    const visited = new Set();

    // Initialize distances with Infinity except for the startNode which has distance 0
    for (const node in graph) {
        distances[node] = Infinity;
    }
    distances[startNode] = 0;

    while (true) {
        let closestNode = null;
        let shortestDistance = Infinity;

        // Find the closest unvisited node
        for (const node in graph) {
            if (!visited.has(node) && distances[node] < shortestDistance) {
                closestNode = node;
                shortestDistance = distances[node];
            }
        }

        if (closestNode === null) break;

        // Mark the closestNode as visited
        visited.add(closestNode);

        // Update distances to neighboring nodes
        for (const neighbor in graph[closestNode]) {
            const distance = graph[closestNode][neighbor];
            const totalDistance = distances[closestNode] + distance;
            if (totalDistance < distances[neighbor]) {
                distances[neighbor] = totalDistance;
            }
        }
    }

    return distances;
}

module.exports = dijkstra;
