function findMissingLetter(arr) {
	let missingChar = "";
	const alphabetArray = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];

	for (let i = 0; i < arr.length; i++) {
		if (alphabetArray.indexOf(arr[i])) {
            missingChar += arr.splice([i])
		}
	}

	return missingChar;
}

module.exports = findMissingLetter;

console.log(findMissingLetter(["a", "b", "c", "d", "f"])); // => "e"
console.log(findMissingLetter(["O", "Q", "R", "S"])); // => "P"
console.log(findMissingLetter(["t", "u", "v", "w", "x", "z"])); // => "y"
