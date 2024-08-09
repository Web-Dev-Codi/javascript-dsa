// My Solution

// function diceGameSimulation(numSimulations) {
// 	const obj = [];

// 	for (let i = 0; i < numSimulations; i++) {
// 		const dice1 = Math.floor(Math.random() * 6) + 1;
// 		const dice2 = Math.floor(Math.random() * 6) + 1;
// 		const sum = dice1 + dice2;

// 		if (sum === 2 || sum === 3 || sum === 12) {
// 			obj.push(
// 				`{dice1: ${dice1}, dice2: ${dice2}, sum: ${sum}, result: "lose" }`,
// 			);
// 		}

// 		if (sum === 7) {
// 			obj.push(
// 				`{dice1: ${dice1}, dice2: ${dice2}, sum: ${sum}, result: "win" }`,
// 			);
// 		}

// 		if (sum === 11) {
// 			obj.push(
// 				`{dice1: ${dice1}, dice2: ${dice2}, sum: ${sum}, result: "win" }`,
// 			);
// 		}
// 		if ((sum >= 4 && sum <= 6) || (sum >= 8 && sum <= 10)) {
// 			obj.push(
// 				`{dice1: ${dice1}, dice2: ${dice2}, sum: ${sum}, result: "roll again" }`,
// 			);
// 		}
// 	}

// 	return obj;
// }

function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function diceGameSimulation(numSimulations) {
	const results = [];

	for (let i = 0; i < numSimulations; i++) {
		const dice1 = rollDice();
		const dice2 = rollDice();
		const sum = dice1 + dice2;

		let result = "";
		if (sum === 7 || sum === 11) {
			result = "win";
		} else if (sum === 2 || sum === 3 || sum === 12) {
			result = "lose";
		} else {
			result = "roll again";
		}

		results.push({ dice1, dice2, sum, result });
	}

	return results;
}

module.exports = diceGameSimulation;

console.log(diceGameSimulation(6));
