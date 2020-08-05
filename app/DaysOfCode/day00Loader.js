const Day07Arrays = require('./day07Arrays.js');

module.exports = class Day00Loader {
  constructor(day) {
    this.day = day;
  }

  handle() {
    switch (this.day) {
    	case '07':
	    	const day07 = new Day07Arrays();
	    	let result = day07.calculate([0,1,2,3,4]);
	    	return result.join(',');
    }
    return null;
  }
};