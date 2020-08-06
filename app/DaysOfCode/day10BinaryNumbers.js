module.exports = class Day10BinaryNumbers {
	constructor() {}

	calculate(n) {
		let s = (n >>> 0).toString(2).split("");
		let longest = 0;
		let current = 0;
		s.forEach(function(v) {
			let i = parseInt(v);
			current = current * i + i;
			longest = current > longest ? current : longest;
		});
		return longest;
	}

	calculateLonghand(base10Number) {
		let base2NumberAsString = (n >>> 0).toString(2);
		let longestSequence = 0;
		let currentSequence = 0;
		for (var characterPosition = 0; characterPosition < base2NumberAsString.length; characterPosition++) {
			if (base2NumberAsString.charAt(characterPosition) === '0') {
				currentSequence = 0;
			} else {
				currentSequence++;
			}
			if (currentSequence > longestSequence) {
				longestSequence = currentSequence;
			}
		}
		return longestSequence;
	}
}