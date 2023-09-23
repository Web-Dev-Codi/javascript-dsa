function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}


function arrayIntersection(arrOne, arrTwo) {
    var newArray = new Array()

    for (let i = 0; i < arrOne.length; i++) {
        for (let j = 0; j <= arrTwo.length; j++) {
            if (arrOne[i] === arrTwo[j]) {
                newArray.push(arrTwo[j])
            }
        }
    }
    return newArray;
}

module.exports = arrayIntersection;
