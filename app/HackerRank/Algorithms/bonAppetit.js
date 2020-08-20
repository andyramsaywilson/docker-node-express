function bonAppetit(bill, k, b) {
	let total = bill.reduce(function (total, current, index) {
		if (index === k) {
			return total;
		}
		return total + current;
	}, 0);
	let overchargedBy = b - (total / 2);
	if (overchargedBy === 0) {
		process.stdout.write('Bon Appetit');
	} else {
		process.stdout.write(overchargedBy.toString());
	}
}
