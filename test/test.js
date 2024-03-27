// test.js

// Import necessary dependencies
const assert = require('assert');
const algorithms = require('../index');

// Test cases for bubbleSort
console.log('Testing Bubble Sort...');
const bubbleSortInput = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const bubbleSortExpected = [1, 1, 2, 3, 4, 5, 5, 6, 9];
assert.deepStrictEqual(algorithms.bubbleSort(bubbleSortInput), bubbleSortExpected);

// Test cases for binarySearch
console.log('Testing Binary Search...');
const binarySearchArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const binarySearchTarget = 5;
const binarySearchExpectedIndex = 4;
assert.strictEqual(algorithms.binarySearch(binarySearchArray, binarySearchTarget), binarySearchExpectedIndex);

console.log('All tests passed successfully.');
