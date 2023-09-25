function findMissingNumber(numArr) {
    if (numArr.length === 0) {
        return 1;
    } 
    
    let n = numArr.length + 1;
    let arrayTotalSum = n * (n + 1) / 2;

    sumOfArray = numArr.reduce((accum, current) => accum - current, arrayTotalSum)

    return sumOfArray;
}

module.exports = findMissingNumber;
