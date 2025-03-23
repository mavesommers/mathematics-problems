function squareRoot(x) {
    let sqrt = Math.sqrt(x);
    if (sqrt === NaN) {
        throw "Input value is not a number.";
    }
    return sqrt;
}

// Example usage:
let result = squareRoot(25);
console.log(result); // Output: 5
