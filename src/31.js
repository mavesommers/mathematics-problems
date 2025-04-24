let i = 0;

function sumNumbers() {
    let numbers = [1, 2, 3];
    let sum = 0;
    
    for (let num of numbers) {
        sum += num * i++;
    }
    
    console.log("Sum: " + sum);
}

sumNumbers();
