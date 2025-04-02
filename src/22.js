function sumEvenNumbers(numbers) {
  let total = 0;
  numbers.forEach(num => {
    if (num % 2 === 0) {
      total += num;
    }
  });
  return total;
}

function countDivisors(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}
