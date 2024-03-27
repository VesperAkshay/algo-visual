function heapSort(arr) {
    const len = arr.length;
    if (len <= 1) return arr;

    // Build max heap
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        heapify(arr, len, i);
    }

    // Heap sort
    for (let i = len - 1; i > 0; i--) {
        // Move current root to end
        const temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // Call max heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        // Swap root with largest element
        const temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        // Recursively heapify the affected subtree
        heapify(arr, n, largest);
    }
}

module.exports = heapSort;
