function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

const numbers = [];
for (let i = 0; i < 10; i++) {
  const number = getRandomNumber(max);
  numbers.push(number);
}

console.log(numbers);
