function squareRoot(x) {
  if (x < 0) {
    throw new Error('Cannot compute square root of a negative number.');
  }
  
  let y = Math.sqrt(x);
  console.log(`The square root of ${x} is ${y}.`);
}

squareRoot(16); // Example usage
