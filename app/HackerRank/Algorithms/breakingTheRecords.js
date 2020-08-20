function (scores) {
	let last = null;
	let min = null;
	let max = null;

	let recordMin = 0;
	let recordMax = 0;

	scores.forEach(function(score) {
		if (last === null) {
			last = score;
			min = score;
			max = score;
			return;
		}
		if (score < min) {
			min = score;
			recordMin++;
		}
		if (score > max) {
			max = score;
			recordMax++;
		}
	});

	return [
		recordMax,
		recordMin
	];
}



/*
	last = scores.pop()



*/