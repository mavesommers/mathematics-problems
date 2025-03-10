function getRandomMathematicalProblem() {
  // Generate two random numbers between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  
  // Generate a random mathematical operation (+, -, x, /)
  const op = Math.random() < 0.5 ? '+' : '-';
  
  // Return the problem and solution in an object
  return {
    problem: `${num1} ${op} ${num2}`,
    solution: eval(`${num1} ${op} ${num2}`),
  };
}
