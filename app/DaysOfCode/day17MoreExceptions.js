module.exports = class Day17MoreExceptions {
	constructor() {}

	power(value, power) {
		let n = parseInt(value);
		let p = parseInt(power);
		if (isNaN(n) || isNaN(p)) {
			throw 'n and p should be numbers';
		}
		if (n < 0 || p < 0) {
			throw 'n and p should be non-negative';
		}
		return Math.pow(n, p);
	}

	allPowers(arr) {
		let power = this.power;
		let results = [];
		arr.forEach(function (line) {
			try {
				results.push(power(line[0], line[1]));
			} catch (err) {
				results.push(err);
			}
		});
		return results;
	}
}