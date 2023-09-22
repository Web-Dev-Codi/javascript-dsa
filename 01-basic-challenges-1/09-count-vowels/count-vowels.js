function countVowels(str) {
    let vowels = /^[aAeEiIoOuU]+$/;

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(vowels)) {
            count++;
        }
    }
    return count;
}

module.exports = countVowels;
