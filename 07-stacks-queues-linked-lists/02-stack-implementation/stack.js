class Stack {
	constructor() {
		this.maxSize = 100;
		this.stack = [];
		this.top = -1; // -1 means empty. If there is 1 item then it starts at 0
	}

	// push() method for adding items to the stack
	push(value) {
		// Checking if the stack is full
		if (this.isFull()) {
			return false;
		}
		// incrementing top by one
		this.top++;
		// placing item on top of the stack
		this.stack[this.top] = value;
		return true;
	}

	pop() {
		// Checking if the stack is empty
		if (this.isEmpty()) {
			return null;
		}
		// decrementing top
		this.top--;
		// removing the last item in the stack
		return this.stack.pop();
	}

	peek() {
		if (this.isEmpty()) {
			return null;
		}

		return this.stack[this.top];
	}

	isEmpty() {
		// Checking it the stack is empty
		return this.top === -1;
	}

	isFull() {
		return this.top === this.maxSize - 1;
	}
}

module.exports = Stack;
