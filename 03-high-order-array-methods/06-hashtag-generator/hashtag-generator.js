// function generateHashtag(str) {
// 	if (str.trim() === "") {
// 		return false;
// 	}

// 	const words = str.trim().split(/\s+/);
// 	const capitalizedWords = words.map(
// 		(word) => word.charAt(0).toUpperCase() + word.slice(1),
// 	);

// 	const hashtag = `#${capitalizedWords.join("")}`;

// 	if (hashtag.length > 140) {
// 		return false;
// 	}

// 	return hashtag;
// }

function generateHashtag(str) {
	const hashtag = str.split(" ").reduce((tag, word) => tag + word.charAt(0).toUpperCase() + word.substring(1), "#");

	return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag;
}
module.exports = generateHashtag;

console.log(generateHashtag("JavaScript is awesome")); // "#JavaScriptIsAwesome"
console.log(generateHashtag("hello world")); // "#HelloWorld"
console.log(
	generateHashtag(
		"This is a very very very very very very very very very very very very very very long input that should result in a false hashtag because it exceeds the character limit of 140",
	),
); // false
console.log(generateHashtag("")); // false
