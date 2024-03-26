function visualizeMergeSort(array, delay = 1000) {
    function merge(arr, l, m, r) {
        const n1 = m - l + 1;
        const n2 = r - m;
        
        const L = new Array(n1);
        const R = new Array(n2);
        
        for (let i = 0; i < n1; i++) {
            L[i] = arr[l + i];
        }
        for (let j = 0; j < n2; j++) {
            R[j] = arr[m + 1 + j];
        }
        
        let i = 0;
        let j = 0;
        let k = l;
        
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            setTimeout(() => {
                console.log(arr.slice(l, k + 1));
            }, delay);
            k++;
        }
        
        while (i < n1) {
            arr[k] = L[i];
            setTimeout(() => {
                console.log(arr.slice(l, k + 1));
            }, delay);
            i++;
            k++;
        }
        
        while (j < n2) {
            arr[k] = R[j];
            setTimeout(() => {
                console.log(arr.slice(l, k + 1));
            }, delay);
            j++;
            k++;
        }
    }
    
    function mergeSortHelper(arr, l, r) {
        if (l < r) {
            const m = Math.floor((l + r) / 2);
            mergeSortHelper(arr, l, m);
            mergeSortHelper(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }
    
    const originalArray = [...array];
    mergeSortHelper(originalArray, 0, originalArray.length - 1);
}

module.exports = visualizeMergeSort;