// I was suppost to use hihg order functions

// function calculateTotalSalesWithTax(products, tax) {
// 	let output = 0;

// 	for (const key in products) {
// 		output += products[key].price * products[key].quantity;
// 	}
// 	const taxed = output * `0.0${tax}`;
// 	return output + taxed;
// }

// The solution

function calculateTotalSalesWithTax(products, taxRate) {
	const totalSales = products.reduce(
		(sum, product) => sum + product.price * product.quantity,
		0,
	);
	const taxAmount = (totalSales * taxRate) / 100;
	const totalSalesWithTax = totalSales + taxAmount;
	return totalSalesWithTax;
}

module.exports = calculateTotalSalesWithTax;

console.log(
	calculateTotalSalesWithTax(
		[
			{ name: "Apple", price: 0.5, quantity: 10 },
			{ name: "Banana", price: 0.3, quantity: 20 },
			{ name: "Orange", price: 0.6, quantity: 15 },
		],
		8,
	),
); // 21.6 (20 + 8% tax)

console.log(
	calculateTotalSalesWithTax(
		[
			{ name: "Chocolate", price: 2.5, quantity: 5 },
			{ name: "Chips", price: 1.2, quantity: 10 },
			{ name: "Soda", price: 1.0, quantity: 8 },
			{ name: "Candy", price: 0.5, quantity: 15 },
		],
		5,
	),
); // 42 (40 + 5% tax)
