// dynamicProgramming/fibonacci.js
function fibonacci(n) {
    if (n <= 1) return n;

    let prev = 0;
    let current = 1;

    for (let i = 2; i <= n; i++) {
        const temp = current;
        current += prev;
        prev = temp;
    }

    return current;
}

module.exports = fibonacci;
