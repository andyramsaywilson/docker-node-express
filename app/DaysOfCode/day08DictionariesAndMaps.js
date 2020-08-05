module.exports = class Day08DictionariesAndMaps {
	constructor(nameAndNumberList) {
		this.dictionary = function() {
			let dictionary = new Map();
			nameAndNumberList.forEach(function(nameAndNumber) {
				let parts = nameAndNumber.split(' ');
				let name = parts[0];
				let number = parts[1];
				dictionary.set(name, number);
			});
			return dictionary;
		}();
	}

	lookup(names, foundCallback, notFoundCallback) {
		const dictionary = this.dictionary;
		names.forEach(function(name) {
			let number = dictionary.get(name);
			if (number === undefined) {
				notFoundCallback(name);
				return;
			}
			foundCallback(name, number);
		});
	}
}