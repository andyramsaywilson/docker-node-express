function longestSubarray(arr) {
    // Write your code here
    let longest = 0;
    for(let i = 0; i < arr.length; i ++) {
    	let first = arr[i];
    	let other = null;
    	let count = 1;
    	for (let j = i+1; j < arr.length; j++) {
    		let couldBeValid = Math.abs(first - arr[j]) <= 1;
    		if (!couldBeValid) {
    			break;
    		}
    		if (first === arr[j]) {
    			count++;
    			continue;
    		}
    		if (other === null || other === arr[j]) {
    			other = arr[j];
    			count++;
    			continue;
    		}
    		break;
    	}
    	longest = count > longest ? count : longest;
    }
    return longest;
}