class Stack {
	constructor() {
		this.stack = [];
	}

	pop() {
		return this.stack.pop();
	}

	peek() {
		return this.stack.slice(-1)[0];
	}

	push(item) {
		return this.stack.push(item);
	}

	clear() {
		this.stack = [];
	}
}

class Queue {
	constructor() {
		this.queue = [];
	}

	enqueue(item) {
		this.queue.push(item);
	}

	dequeue() {
		return this.queue.shift();
	}
}


module.exports = class Day18QueuesAndStacks {
	constructor() {}

	arePalindromes(words) {
		let results = [];

		let _this = this;
		words.forEach(function(word) {
			results.push(`${word} : ${_this.isPalindrome(word)}`);
		});

		return results;
	}

	isPalindrome(word) {
		let queue = new Queue();
		let stack = new Stack();

		word.split("").forEach(function(character) {
			queue.enqueue(character);
			stack.push(character);
		});

		let character = null;
		while (character = queue.dequeue()) {
			if (stack.pop() !== character) {
				return false;
			}
		}

		return true;
	}
}