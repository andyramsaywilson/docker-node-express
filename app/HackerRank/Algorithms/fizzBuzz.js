function fizzBuzz(n) {

	let render = function (text) {
		process.stdout.write(text);
	}

	let process = function(i) {

	    if ((i % 3 === 0) && (i % 5 === 0)) {
	    	render('FizzBuzz');
	    	return ;
	    }
	    if (i % 3 === 0) {
	    	render('Fizz');
	    	return ;
	    }
	    if (i % 5 === 0) {
	    	render('Buzz');
	    	return ;
	    }
	    render(i.toString());		
	}

	for (let i = 1; i <= n; i++) {
		process(i);
	}
}
