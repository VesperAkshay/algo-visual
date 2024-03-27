// Import necessary dependencies
const assert = require('assert');
const bfs = require('../graph/bfs'); // Adjust the path accordingly
const dijkstra = require('../graph/dijkstra'); // Adjust the path accordingly

// Test cases for BFS
console.log('Testing Breadth-First Search (BFS)...');
const graphBFS = {
    1: [2, 3],
    2: [4, 5],
    3: [6],
    4: [],
    5: [],
    6: []
};
const bfsStartNode = 1;
const bfsExpected = [1, 2, 3, 4, 5, 6];
assert.deepStrictEqual(bfs(graphBFS, bfsStartNode), bfsExpected);

// Test cases for Dijkstra's algorithm
console.log('Testing Dijkstra\'s algorithm...');
const graphDijkstra = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};
const dijkstraStartNode = 'A';
const dijkstraExpected = { A: 0, B: 1, C: 3, D: 4 };
assert.deepStrictEqual(dijkstra(graphDijkstra, dijkstraStartNode), dijkstraExpected);

console.log('All tests passed successfully.');
