function prim(graph) {
    const vertices = Object.keys(graph);
    const mst = {};
    const visited = new Set();
    
    // Initialize MST with the first vertex
    const startVertex = vertices[0];
    mst[startVertex] = { parent: null, cost: 0 };

    while (visited.size < vertices.length) {
        let minCost = Infinity;
        let minCostEdge = null;

        // Find the minimum cost edge connecting visited and unvisited vertices
        for (const vertex in mst) {
            if (!visited.has(vertex)) {
                const edges = graph[vertex];
                for (const neighbor in edges) {
                    const cost = edges[neighbor];
                    if (!visited.has(neighbor) && cost < minCost) {
                        minCost = cost;
                        minCostEdge = { vertex, neighbor, cost };
                    }
                }
            }
        }

        // Add the minimum cost edge to the MST
        if (minCostEdge) {
            const { vertex, neighbor, cost } = minCostEdge;
            mst[neighbor] = { parent: vertex, cost };
        }

        // Mark the vertex as visited
        visited.add(minCostEdge?.neighbor);
    }

    return mst;
}

module.exports = prim;
