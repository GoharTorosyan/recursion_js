const findAllOddDigits = (number) => {
    let lastDigit = number % 10;

    if (lastDigit % 2 === 0) {
        return false;
    }

    if (number - lastDigit === 0) {
        return true;
    }

    return findAllOddDigits((number - lastDigit) / 10);
};

console.log(findAllOddDigits(4211133)); // false
console.log(findAllOddDigits(7791)); // true
console.log(findAllOddDigits(5)); // true
