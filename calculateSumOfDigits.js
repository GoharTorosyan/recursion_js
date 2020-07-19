/**
 * @description calculates sum of given number's digits
 * @param {number}
 * @return {number} - sum of digits
 */

function calculateSumOfDigits(number) {
    function iter(number, acc) {
        let lastDigit = number % 10;

        if (number === 0 && acc < 10) {
            return acc;
        }

        if (number === 0 && acc >= 10) {
            let lastDig = acc % 10;

            return iter(parseInt((acc - lastDig) / 10), lastDig);
        }
        return iter(parseInt((number - lastDigit) / 10), acc + lastDigit);
    }
    return iter(number, 0);
}

console.log(calculateSumOfDigits(5)); //5
console.log(calculateSumOfDigits(29)); //2
console.log(calculateSumOfDigits(999999999999)); //9