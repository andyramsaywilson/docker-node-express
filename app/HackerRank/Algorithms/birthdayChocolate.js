function(s, d, m) {
	let results = 0;
	let i = 0;
	for (i=0; i <= s.length - m; i++) {
		let slice = s.slice(i, m+i);

		let sum = slice.reduce(function(total, current) {
			return total + current;
		});
		if (sum === d) {
			results ++;
		}
	}
	return results;
}

function(s, d, m) {
	let results = 0;
	let i = 0;
	for (i=0; i <= s.length - m; i++) {
		results += s.slice(i, m+i).reduce(function(total, current) {
			return total + current;
		}) === d ? 1 : 0;
	}
	return results;
}