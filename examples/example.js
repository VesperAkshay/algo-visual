// example.js

// Import the algorithms package
const algorithms = require('../index');

// Example usage of bubbleSort
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log('Unsorted Array:', unsortedArray);
const sortedArray = algorithms.bubbleSort(unsortedArray);
console.log('Sorted Array (Bubble Sort):', sortedArray);

// Example usage of binarySearch
const sortedArrayForSearch = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Sorted Array for Binary Search:', sortedArrayForSearch);
const target = 5;
const index = algorithms.binarySearch(sortedArrayForSearch, target);
if (index !== -1) {
    console.log(`Target ${target} found at index ${index}.`);
} else {
    console.log(`Target ${target} not found in the array.`);
}

// Add more example usages for other algorithms...
