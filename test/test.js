// Import necessary dependencies
const assert = require('assert');
const algorithms = require('../index');

// Test cases for sorting algorithms
console.log('Testing Bubble Sort...');
const bubbleSortInput = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const bubbleSortExpected = [1, 1, 2, 3, 4, 5, 5, 6, 9];
assert.deepStrictEqual(algorithms.bubbleSort(bubbleSortInput), bubbleSortExpected);

// Test cases for searching algorithms
console.log('Testing Binary Search...');
const binarySearchArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const binarySearchTarget = 5;
const binarySearchExpectedIndex = 4;
assert.strictEqual(algorithms.binarySearch(binarySearchArray, binarySearchTarget), binarySearchExpectedIndex);

// Test cases for graph algorithms
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
assert.deepStrictEqual(algorithms.bfs(graphBFS, bfsStartNode), bfsExpected);

// Test cases for dynamic programming algorithms
// Add your test cases for dynamic programming algorithms here

console.log('All tests passed successfully.');
