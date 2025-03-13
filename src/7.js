// Example of Random JS Code
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const getRandomString = () => {
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomString = '';
    for (let i = 0; i < 10; i++) {
        const charIndex = getRandomInt(possibleChars.length);
        randomString += possibleChars[charIndex];
    }
    return randomString;
};

const getRandomNumber = () => {
    return Math.floor(Math.random() * 1000) + 1;
}
