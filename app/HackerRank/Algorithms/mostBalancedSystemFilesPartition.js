function mostBalancedPartition(parent, files_size) {

	let totals = [];
	parent.forEach(function(parentIndex, index) {
		totals[index] = sumPath(index, files_size, parent);
		/*
		if (parentIndex === -1) {
			totals[index] = 0;
		} else {
			totals[index] = sumPath(index, files_size, parent);
		}
		*/
	});

	console.log(totals);

}


function sumPath(nodeIndex, files_size, parent) {
	let thisSize = files_size[nodeIndex];
	let children = [];
	parent.forEach(function(parentIndex, childIndex) {
		if (parentIndex === nodeIndex) {
			children.push(childIndex);
		}
	});
	children.forEach(function(childIndex) {
		thisSize += sumPath(childIndex, files_size, parent);
	});
	return thisSize;
}

/*
0 	0
3 4	5
*/


4

-1
0
1
2

4

1
4
3
4

1
4
3
4

