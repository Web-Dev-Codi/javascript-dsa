function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}


function arrayIntersection(arrOne, arrTwo) {
    var newArray = [];

    for (let i = 0; i < arrOne.length; i++) {
        if (arrTwo.includes(arrOne[i]) && !newArray.includes(arrOne[i])) {
            newArray.push(arrOne[i])
        }
    }
    return newArray;
}

module.exports = arrayIntersection;
