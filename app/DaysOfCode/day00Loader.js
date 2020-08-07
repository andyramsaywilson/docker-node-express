const Day07Arrays = require('./day07Arrays.js');
const Day08DictionariesAndMaps = require('./day08DictionariesAndMaps.js');
const Day08DictionariesAndMapsFast = require('./day08DictionariesAndMapsFast.js');
const Day09FactorialRecursion = require('./day09FactorialRecursion.js');
const Day10BinaryNumbers = require('./day10BinaryNumbers.js');
const Day11ArrayHourglassSum = require('./day11ArrayHourglassSum.js');
const Day15LinkedLists = require('./Day15LinkedLists.js');

module.exports = class Day00Loader {
  constructor(day) {
    this.day = day;
  }

  handle() {
    switch (this.day) {
    	case '07':
	    	return (new Day07Arrays()).calculate([0,1,2,3,4]).join(',');

		case '08-fast':
			const day08Fast = new Day08DictionariesAndMapsFast(__dirname + '/TestCases/08-01.txt');
			return 'See logs';
    	case '08':
	    	const day08 = new Day08DictionariesAndMaps(['andy 1234', 'steve 6745']);
	    	let result = [];
	    	day08.lookup(
	    		['john', 'andy'],
	    		function (name, number) {
	    			result.unshift(`${name}=${number}`);
	    		},
	    		function (name) {
	    			result.unshift('Not found');
	    		},
	    	);
	    	return result.join("\n");
    	case '09':
	    	return (new Day09FactorialRecursion()).calculate(5).toString();
    	case '09-nonRecursive':
	    	return (new Day09FactorialRecursion()).calculateNonRecursive(5).toString();
    	case '10':
	    	return (new Day10BinaryNumbers()).calculate(10123).toString();
	    case '11':
	    	return (new Day11ArrayHourglassSum()).calculate([
						[1,1,1,0,0,0],
						[0,1,0,0,0,0],
						[1,1,1,0,0,0],
						[0,0,0,0,0,0],
						[0,0,0,0,0,0],
						[0,0,0,0,0,0]	    		
	    	]).toString();
	    case '15':
	    	let day15Solution = new Day15LinkedLists([2,4,3,1]);
	    	return day15Solution.addThenDisplay();
	    	
    }
    return null;
  }
};