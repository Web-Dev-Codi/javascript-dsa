function validateEmail(str) {
	const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

   return str.charAt(regEx)
}

module.exports = validateEmail;

console.log(validateEmail("john@gmail.com")); // true
console.log(validateEmail("john@gmail")); // false
