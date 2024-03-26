// sorting.test.js

const {
    bubbleSort,
    quickSort,
    mergeSort,
    visualizeBubbleSort,
    visualizeQuickSort,
    visualizeMergeSort
} = require('./index');

// Test Bubble Sort
test('Bubble Sort sorts the array correctly', () => {
    const unsortedArray = [5, 3, 8, 1, 2];
    const sortedArray = [1, 2, 3, 5, 8];
    expect(bubbleSort(unsortedArray)).toEqual(sortedArray);
});

// Test Quick Sort
test('Quick Sort sorts the array correctly', () => {
    const unsortedArray = [5, 3, 8, 1, 2];
    const sortedArray = [1, 2, 3, 5, 8];
    expect(quickSort(unsortedArray)).toEqual(sortedArray);
});

// Test Merge Sort
test('Merge Sort sorts the array correctly', () => {
    const unsortedArray = [5, 3, 8, 1, 2];
    const sortedArray = [1, 2, 3, 5, 8];
    expect(mergeSort(unsortedArray)).toEqual(sortedArray);
});

// Test Visualization Functions (Mocking console.log)
test('Visualization functions print correct steps', async () => {
    const log = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    const array = [5, 3, 8, 1, 2];
    
    // Promisify the visualization functions
    const bubblePromise = new Promise(resolve => {
        visualizeBubbleSort(array, resolve);
    });
    const quickPromise = new Promise(resolve => {
        visualizeQuickSort(array, resolve);
    });
    const mergePromise = new Promise(resolve => {
        visualizeMergeSort(array, resolve);
    });

    // Wait for all promises to resolve
    await Promise.all([bubblePromise, quickPromise, mergePromise]);

    // Assert that console.log was called the expected number of times
    expect(log).toHaveBeenCalledTimes(array.length * (array.length - 1) / 2);

    // Restore console.log
    log.mockRestore();
}, 10000); // Increased timeout to 10 seconds
