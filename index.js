// index.js

// Sorting algorithms
const bubbleSort = require('./sorting/bubbleSort');
const mergeSort = require('./sorting/mergeSort');
const quickSort = require('./sorting/quickSort');
const selectionSort = require('./sorting/selectionSort');
const insertionSort = require('./sorting/insertionSort');
const heapSort = require('./sorting/heapSort');

// Searching algorithms
const binarySearch = require('./searching/binarySearch');
const linearSearch = require('./searching/linearSearch');

// Graph algorithms
const bfs = require('./graph/bfs');
const dfs = require('./graph/dfs');
const dijkstra = require('./graph/dijkstra');

// Dynamic programming algorithms
const fibonacci = require('./dynamicProgramming/fibonacci');
const knapsack = require('./dynamicProgramming/knapsack');

module.exports = {
    // Sorting algorithms
    bubbleSort,
    mergeSort,
    quickSort,
    selectionSort,
    insertionSort,
    heapSort,

    // Searching algorithms
    binarySearch,
    linearSearch,

    // Graph algorithms
    bfs,
    dfs,
    dijkstra,

    // Dynamic programming algorithms
    fibonacci,
    knapsack
};
