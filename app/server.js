// server.js
const express = require("express");
const app = express();

const Day00Loader = require('./DaysOfCode/day00Loader.js');

const PORT = process.env.PORT || 8080;

app.get("/daysOfCode/:day", (req, res) => {

	const myDayLoader = new Day00Loader(req.params.day);

	let result = myDayLoader.handle();

	if (result) {
  	  res.send(result);
  	  return;
    }
    res.send('Unknown day');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
