module.exports = class Day16Exceptions {
	constructor () {}

	convertArray(arr) {
		let results = [];

		let _this = this;
		arr.forEach(function (value) {
			try {
				results.push(_this.convert(value));
			} catch(err) {
				results.push('Bad String');
			}
		});

		return results;
	}

	convert(value) {
		let number = new Number(value);
		let int = parseInt(value);
		if (isNaN(number)) {
			throw `Not a number`;
		}
		if (number.toString() !== int.toString()) {
			throw `Not an integer`;
		}
		return int;		
	}
}
