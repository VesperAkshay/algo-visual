# algo-visual

A Node.js module for visualizing various sorting algorithms.

## Installation

You can install the `algo-visual` package via npm: npm install algo-visual


## Usage

```javascript
const algoVisual = require('algo-visual');

// Sort an array using bubble sort
const unsortedArray = [5, 3, 8, 1, 2];
const sortedArray = algoVisual.bubbleSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 5, 8]

// Visualize bubble sort
algoVisual.visualizeBubbleSort(unsortedArray, () => {
    console.log('Bubble sort visualization complete.');
});

## Available Algorithms

- `bubbleSort(array)`: Sorts an array using the bubble sort algorithm.
- `quickSort(array)`: Sorts an array using the quick sort algorithm.
- `mergeSort(array)`: Sorts an array using the merge sort algorithm.

## Visualization Functions

Visualization functions are available for each sorting algorithm. These functions log each step of the sorting process to the console.

- `visualizeBubbleSort(array, callback)`: Visualizes the bubble sort algorithm.
- `visualizeQuickSort(array, callback)`: Visualizes the quick sort algorithm.
- `visualizeMergeSort(array, callback)`: Visualizes the merge sort algorithm.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

