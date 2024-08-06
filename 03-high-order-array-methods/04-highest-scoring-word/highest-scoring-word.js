// Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3, and so on.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

/**
 * Returns the highest scoring word from a string.
 * @param {string} str - The input string.
 * @returns {string} - The highest scoring word.
 */

function highestScoringWord(str) {
    const splitString = str.split(" ")
    const mapped = splitString.map((item, index) => item.charCodeAt(index))
    console.log("mapped:", mapped);
}

module.exports = highestScoringWord;

console.log(highestScoringWord("man i need a taxi up to ubud")); // 'taxi'
console.log(highestScoringWord("what time are we climbing up the volcano")); // 'volcano'
console.log(highestScoringWord("take me to semynak")); // 'semynak'
