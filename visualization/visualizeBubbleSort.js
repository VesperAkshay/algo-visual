function visualizeBubbleSort(array, delay = 1000) {
    const originalArray = [...array];
    const n = originalArray.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            setTimeout(() => {
                console.log(originalArray.slice(0, j + 1));
            }, (i * n + j) * delay);
        }
    }
}

module.exports = visualizeBubbleSort;