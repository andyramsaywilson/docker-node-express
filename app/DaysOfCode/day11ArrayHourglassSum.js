class Hourglass {
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

		this.x = 0;
		this.y = 1;
		this.size = 3;
	}

	calculateForMatrix(matrix, startX, startY) {
		let matrixSize = matrix.length;
		if (matrixSize - startX < this.size || matrixSize - startY < this.size) {
			return null;
		}

		let total = 0;

		let x = this.x;
		let y = this.y;

		this.hourglass.forEach(function(relative) {
			let absoluteX = startX + relative[x];
			let absoluteY = startY + relative[y];
			total += matrix[absoluteY][absoluteX];
		});
		return total;
	}
}

module.exports = class Day11ArrayHourglassSum {
	constructor() {
		this.hourglass = new Hourglass();
	}

	calculate (arr) {

		let highestTotal = null;

		for (let x = 0; x < arr.length; x++) {
			for (let y = 0; y <= arr.length; y++) {
				let total = this.hourglass.calculateForMatrix(arr, x, y);
				if (total === null) {
					continue;
				}
				highestTotal = (highestTotal === null || highestTotal < total) ? total : highestTotal;
			}
		}
		return highestTotal;
	}
}