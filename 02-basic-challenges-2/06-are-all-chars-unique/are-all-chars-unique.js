function areAllCharactersUnique(string) {
	for (let i = 0; i < string.length; i++) {
		
	}
    return false
}

module.exports = areAllCharactersUnique;

console.log(areAllCharactersUnique("abcdefg")); // true
console.log(areAllCharactersUnique("abcdefgA")); // true
console.log(areAllCharactersUnique("programming")); // false
console.log(areAllCharactersUnique("")); // true
console.log(areAllCharactersUnique("a")); // true
