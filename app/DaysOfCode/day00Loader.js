const Day07Arrays = require('./day07Arrays.js');
const Day08DictionariesAndMaps = require('./day08DictionariesAndMaps.js');

module.exports = class Day00Loader {
  constructor(day) {
    this.day = day;
  }

  handle() {
    switch (this.day) {
    	case '07':
	    	return (new Day07Arrays()).calculate([0,1,2,3,4]).join(',');
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
    }
    return null;
  }
};