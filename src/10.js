const getRandomMathProblem = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  let operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
  let problem = `${num1} ${operator} ${num2}`;
  return problem;
};
