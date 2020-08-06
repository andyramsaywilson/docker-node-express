module.exports = class Day09FactorialRecursion {
	constructor() {}

	calculate(current) {
		if (current === 0) {
			return 1;
		}
		return current * this.calculate(current - 1);
	}

	calculateNonRecursive(total) {
		let result = 1;
		while (total > 0) {
			result = result * total;
			total --;
		}
		return result;
	}
}