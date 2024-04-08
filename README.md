# algo-visual

This package contains a collection of algorithms implemented in JavaScript. It provides a set of common algorithms for tasks such as sorting, searching, graph traversal, and dynamic programming.

## Installation

You can install this package via npm. Run the following command in your project directory:

```bash
npm install algo-visual
```
## Usage

You can import individual algorithms from the package as follows:

```javascript
const algorithms = require('algo-visual');


const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log('Unsorted Array:', unsortedArray);
const sortedArray = algorithms.bubbleSort(unsortedArray);
console.log('Sorted Array (Bubble Sort):', sortedArray);
```
# Algorithm Package

This package includes the following algorithms:

## Sorting Algorithms:
- Bubble Sort
- Merge Sort

## Searching Algorithms:
- Binary Search
- Linear Search

## Graph Algorithms:
- Breadth-First Search (BFS)
- Depth-First Search (DFS)

## Dynamic Programming Algorithms:
- Fibonacci Sequence Calculation
- Knapsack Problem

## Contributing

Contributions are welcome! If you have implemented a new algorithm or want to improve existing ones, feel free to open a pull request.
[Github Repo](https://github.com/VesperAkshay/algo-visual)

## License

This package is open-source and available under the MIT License. You are free to use, modify, and distribute this software in accordance with the terms of the license.