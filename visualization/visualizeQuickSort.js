function visualizeQuickSort(array, delay = 1000) {
    function partition(arr, low, high) {
        const pivot = arr[high];
        let i = low - 1;
        
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }
    
    function quickSortHelper(arr, low, high) {
        if (low < high) {
            const pi = partition(arr, low, high);
            
            setTimeout(() => {
                console.log(arr.slice(0, pi + 1));
            }, delay);
            
            quickSortHelper(arr, low, pi - 1);
            quickSortHelper(arr, pi + 1, high);
        }
    }
    
    const originalArray = [...array];
    quickSortHelper(originalArray, 0, originalArray.length - 1);
}

module.exports = visualizeQuickSort;