class Node {
	constructor (data) {
		this._data = data;
		this._next = null;
	}

	set data (data) {
		this._data = data;
	}

	get data () {
		return this._data;
	}

	set next (next) {
		this._next = next;
	}

	get next() {
		return this._next;
	}
}

module.exports = class Day15LinkedLists {
	constructor (arr) {
		this.data = arr;
	}

	addThenDisplay() {
		let _this = this;
		let head = null;

		this.data.forEach(function (data) {
			head = _this.insert(head, data);
		});

		if (head === null) {
			return '';
		}

		let result = '';
		while (head.next !== null) {
			result += head.data + ' ';
			head = head.next;
		}
		result += head.data + ' ';
		return result.trim();
	}

	insert(head, data) {
		if (head === null) {			
			return new Node(data);
		}
		let last = head;
		while (last.next !== null) {
			last = last.next;
		}
		last.next = new Node(data);
		return head;
	};
}