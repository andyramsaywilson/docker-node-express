module.exports = class Day11ArrayHourglassSum {
	constructor() {
		this.hourglass = [
			[0, 0],
			[1, 0],
			[2, 0],
			[1, 1],
			[0, 2],
			[1, 2],
			[2, 2],
		];

		this.hourglassX = 0;
		this.hourglassY = 1;
		this.hourglassSize = 3;
	}

	calculate (arr) {
		const furthestStart = arr.length - this.hourglassSize;

		let highestTotal = null;
		for (var x = 0; x <= furthestStart; x++) {
			for (var y = 0; y <= furthestStart; y++) {
				let total = this.calculateHourglass(arr, x, y);
				highestTotal = (highestTotal === null || highestTotal < total) ? total : highestTotal;
			}
		}
		return highestTotal;
	}

	calculateHourglass(matrix, startX, startY) {
		let total = 0;
		let x = this.hourglassX;
		let y = this.hourglassY;
		this.hourglass.forEach(function(relative) {
			let absoluteX = startX + relative[x];
			let absoluteY = startY + relative[y];
			total += matrix[absoluteY][absoluteX];
		});
		return total;
	}
}