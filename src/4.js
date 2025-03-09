function getRandomMathProblem() {
  const operators = ["+", "-", "*", "/"];
  let problem = "";
  let solution = 0;

  for (let i = 0; i < 3; i++) {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let operator = operators[Math.floor(Math.random() * operators.length)];

    problem += `${num1} ${operator} ${num2} `;
    solution += calculateProblem(num1, num2, operator);
  }

  return { problem, solution };
}

function calculateProblem(num1, num2, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        return "Division by zero is not allowed.";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      console.log("Unknown operator");
      break;
  }
  return result;
}
