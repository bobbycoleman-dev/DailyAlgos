/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */

//Stack implemented with an array -- too easy, lets kick it up a notch
class Stack {
	/**
	 * The constructor is executed when instantiating a new Stack() to construct
	 * a new instance.
	 * @returns {Stack} This new Stack instance is returned without having to
	 *    explicitly write 'return' (implicit return).
	 */
	constructor() {
		this.items = [];
	}

	/**
	 * Adds a new given item to the top / back of this stack.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @param {any} item The new item to be added to the top / back.
	 * @returns {number} The new length of this stack.
	 */
	push(item) {
		this.items.push(item);
	}

	/**
	 * Removes the top / last item from this stack.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @returns {any} The removed item or undefined if this stack was empty.
	 */
	pop() {
		return this.items.pop();
	}

	/**
	 * Retrieves the top / last item from this stack without removing it.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @returns {any} The top / last item of this stack.
	 */
	peek() {
		return this.items[this.items.length - 1];
	}

	/**
	 * Returns whether or not this stack is empty.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @returns {boolean}
	 */
	isEmpty() {
		return this.items.length === 0;
	}

	/**
	 * Returns the size of this stack.
	 * - Time: O(1) constant.
	 * - Space: O(1) constant.
	 * @returns {number} The length.
	 */
	size() {
		return this.items.length;
	}
}

//use this class for your nodes in the linked list version of Stack
class StackNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

//Stack implemented with a singly linked list, now we're talking
class LinkedListStack {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	push(item) {
		let newNode = new StackNode(item);

		if (this.head) newNode.next = this.head;

		this.length++;
		this.head = newNode;
		return this;
	}

	pop() {
		if (!this.head) return undefined;

		let removed = this.head;
		this.head = removed.next;
		this.length--;
		return removed.data;
	}

	peek() {
		if (!this.head) return undefined;
		return this.head.data;
	}

	isEmpty() {
		if (!this.head) return true;
		return false;
	}

	size() {
		return this.length;
	}

	print() {
		let runner = this.head;
		let vals = "";

		while (runner) {
			vals += `${runner.data}${runner.next ? ", " : ""}`;
			runner = runner.next;
		}
		return vals;
	}
}

const stack = new LinkedListStack();

console.log(stack.isEmpty()); // true
console.log(stack.size()); // 0
stack.push(1);
console.log(stack.isEmpty()); // false
stack.push(2);
stack.push(3);
console.log(stack.peek()); // 3
console.log(stack.print()); // 3, 2, 1
console.log(stack.size()); // 3
console.log(stack.pop()); // 3
console.log(stack.print()); // 2, 1
console.log(stack.size()); // 2
