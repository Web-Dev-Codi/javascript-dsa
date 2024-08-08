// Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3, and so on.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

/**
 * Returns the highest scoring word from a string.
 * @param {string} str - The input string.
 * @returns {string} - The highest scoring word.
 */

// Solution 1

function highestScoringWord(str) {
	const words = str.split(" ");

	const scores = words.map((word) =>
		Array.from(word).reduce(
			(score, letter) => score + letter.charCodeAt(0) - 96,
			0,
		),
	);

	const highestScore = Math.max(...scores);
	const highestIndex = scores.indexOf(highestScore);

	return words[highestIndex];
}

// Solution 2

// function highestScoringWord(str) {
// 	const words = str.split(" ");

// 	const scores = words.map((word) => {
// 		let score = 0;
// 		for (const letter of word) {
// 			score += letter.charCodeAt(0) - 96;
// 		}
// 		return score;
// 	});

// 	let highestScore = 0;
// 	let highestIndex = 0;

// 	for (let i = 0; i < scores.length; i++) {
// 		if (scores[i] > highestScore) {
// 			highestScore = scores[i];
// 			highestIndex = i;
// 		}
// 	}

// 	return words[highestIndex];
// }

module.exports = highestScoringWord;

console.log(highestScoringWord("man i need a taxi up to ubud")); // 'taxi'
console.log(highestScoringWord("what time are we climbing up the volcano")); // 'volcano'
console.log(highestScoringWord("take me to semynak")); // 'semynak'
