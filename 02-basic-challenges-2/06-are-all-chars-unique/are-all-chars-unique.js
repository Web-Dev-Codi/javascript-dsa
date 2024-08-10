// Solution One

// function areAllCharactersUnique(str) {
// 	const charSet = new Set();

// 	for (let i = 0; i < str.length; i++) {
// 		const char = str[i];
// 		if (charSet.has(char)) {
// 			return false;
// 		}
// 		charSet.add(char);
// 	}

// 	return true;
// }

function areAllCharactersUnique(str) {
	const charCount = {};

	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (charCount[char]) {
			return false;
		}
		charCount[char] = true;
	}

	return true;
}

module.exports = areAllCharactersUnique;

console.log(areAllCharactersUnique("abcdefg")); // true
console.log(areAllCharactersUnique("abcdefgA")); // true
console.log(areAllCharactersUnique("programming")); // false
console.log(areAllCharactersUnique("")); // true
console.log(areAllCharactersUnique("a")); // true
