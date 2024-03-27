// index.js

// Sorting algorithms
const bubbleSort = require('./sorting/bubbleSort');
const mergeSort = require('./sorting/mergeSort');

// Searching algorithms
const binarySearch = require('./searching/binarySearch');
const linearSearch = require('./searching/linearSearch');

// Graph algorithms
const bfs = require('./graph/bfs');
const dfs = require('./graph/dfs');

// Dynamic programming algorithms
const fibonacci = require('./dynamicProgramming/fibonacci');
const knapsack = require('./dynamicProgramming/knapsack');

module.exports = {
    // Sorting algorithms
    bubbleSort,
    mergeSort,

    // Searching algorithms
    binarySearch,
    linearSearch,

    // Graph algorithms
    bfs,
    dfs,

    // Dynamic programming algorithms
    fibonacci,
    knapsack
};
