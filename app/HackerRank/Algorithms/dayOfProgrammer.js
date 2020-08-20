function dayOfProgrammer(year) {
	let render = function(day, month) {
		let daysFormatted = day.toString().length == 1 ? '0' + day : day.toString();
		let monthsFormatted = month.toString().length == 1 ? '0' + month : month.toString();
		return `${daysFormatted}.${monthsFormatted}.${year}`;
	};
	let febDays = null;
	if (year <= 1917) {
		// use julian calendar
		febDays = (year % 4 === 0) ? 29 : 28;
	} else if (year === 1918) {
		// use transition calendar
		febDays = 15;
	} else {
		// use gregorian calendar
		if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
			febDays = 29;
		} else {
			febDays = 28;
		}
	}

	let daysToSep01 = 31 + febDays + 31 + 30 + 31 + 30 + 31 + 31;
	let sepDays = 256 - daysToSep01;
	return render(sepDays, 9);
}
