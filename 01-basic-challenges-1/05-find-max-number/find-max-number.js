function compareNums(a, b) {
    return a - b;
}

function findMaxNumber(arr) {
    // variables value is an array element
    let max = arr[0];

    // setting i = 1 since max is set to 0
    for (let i = 1; i < arr.length; i++) {
        // dynymically changfeds the value of max to the highest number in the array 
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    // returning the maximum number
    return max;
}

module.exports = findMaxNumber;
