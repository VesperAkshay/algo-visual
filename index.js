// index.js

// Sorting algorithms
const bubbleSort = require('./sorting/bubbleSort');
const mergeSort = require('./sorting/mergeSort');
const quickSort = require('./sorting/quickSort');
const selectionSort = require('./sorting/selectionSort');
const insertionSort = require('./sorting/insertionSort');
const heapSort = require('./sorting/heapSort');
const radixSort = require('./sorting/radixSort');

// Searching algorithms
const binarySearch = require('./searching/binarySearch');
const linearSearch = require('./searching/linearSearch');

// Graph algorithms
const bfs = require('./graph/bfs');
const dfs = require('./graph/dfs');
const dijkstra = require('./graph/dijkstra');
const prim = require('./graph/prim');

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
    radixSort,

    // Searching algorithms
    binarySearch,
    linearSearch,

    // Graph algorithms
    bfs,
    dfs,
    dijkstra,
    prim,
    

    // Dynamic programming algorithms
    fibonacci,
    knapsack
};
