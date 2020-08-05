module.exports = class Day07Arrays {
	constructor() {}
	calculate(arrayOfInts) {
		let reversed = [];
		let i = null;		
		while (typeof(i = arrayOfInts.shift()) === 'number')  {
			reversed.unshift(i);
		}
		return reversed;
	}	
}
