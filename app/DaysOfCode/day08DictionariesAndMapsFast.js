const fs = require("fs");
const readline = require("readline");

module.exports = class Day08DictionariesAndMapsFast {

	constructor (fileName) {
		console.log(fileName);

		let input = fs.readFileSync(fileName).toString();
		let addressBook = new Map();
		let entries = -1;
		input.split("\n").forEach(function(line) {
			if (entries === -1) {
				entries = parseInt(line);
				return;
			}
			if (entries > 0) {
				let parts = line.split(' ');
				let name = parts[0];
				let number = parts[1];
				addressBook.set(name, number);
				entries --;
				return;
			}
			let match = addressBook.get(line);
			if (match === undefined) {
				console.log('Not found');
				return;
			}
			console.log(`${line}=${match}`);
		});
	}
}
