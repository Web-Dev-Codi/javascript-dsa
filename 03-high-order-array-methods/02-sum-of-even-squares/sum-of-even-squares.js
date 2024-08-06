function sumOfEvenSquares(num) {
	let output = 0;

	const filtered = num.filter((item) => item % 2 === 0);

	const mapped = filtered.map((item) => item * item);

	const reduced = mapped.reduce((prev, curr) => prev + curr, 0);

	output += reduced;

	return output;
}

module.exports = sumOfEvenSquares;

console.log(sumOfEvenSquares([1, 2, 3, 4, 5])); // 20 (2^2 + 4^2)
console.log(sumOfEvenSquares([-1, 0, 1, 2, 3, 4])); // 20 (0^2 + 2^2 + 4^2)
console.log(sumOfEvenSquares([])); // 0
