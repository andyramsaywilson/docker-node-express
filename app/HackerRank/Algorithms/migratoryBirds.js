function migratoryBirds(arr) {
	let counts = [];
	arr.forEach(function (birdId) {
		if (counts[birdId] === undefined) {
			counts[birdId] = 0;
		}
		counts[birdId]++;
	});
console.log(`COUNTS : ${counts[birdId]}`);
	let maxCount = counts.reduce(function(current, count) {
		if (current === null) {
			return count;
		}
		if (count > current) {
			return count;
		}
		return current;
	}, null);
console.log(`MAX COUNT : ${maxCount}`);

	let birdIds = [];
	counts.forEach(function(count, birdId) {
		if (count === maxCount) {
			birdIds.push(birdId);
		}
	});
console.log(`BIRD IDS : ${birdIds}`);
	let birdId = birdIds.reduce(function(current, birdId) {
		if (current === null) {
			return birdId;
		}
		if (birdId < current) {
			return birdId;
		}
		return current;
	}, null);

console.log(`BIRD IDS : ${birdIds}`);	

	return birdId;
}
