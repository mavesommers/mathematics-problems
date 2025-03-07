// Random math problem generator
function getRandomMathProblem() {
  const operators = ["+", "-", "*", "/"];
  const numbers = [1, 2, 3, 4, 5];
  const problem = `${numbers[Math.floor(Math.random() * numbers.length)]} ${operators[Math.floor(Math.random() * operators.length)]} ${numbers[Math.floor(Math.random() * numbers.length)]}`;
  return `What is the result of ${problem}?`;
}
