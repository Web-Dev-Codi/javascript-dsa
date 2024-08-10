const Stack = require('./stack');

// Creating a new instence of the Stack Object using the new operartor

const stack = new Stack();

stack.push(1)
stack.push(2)
stack.push(3)


console.log(stack.pop());
console.log(stack.peek());
console.log(stack);