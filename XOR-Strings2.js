process.stdin.resume();
process.stdin.setEncoding('ascii');
var input = '';
process.stdin.on('data', function(chunk) {
	input += chunk;
});
process.stdin.on('end', function() {
	// now we can read/parse input
	const data = input.trim().split('\n');
	const string1 = data[0].trim();
	const string2 = data[1].trim();

	let  = '';
	for (let i = 0; i < string1.length; i++) {
		result += string1[i] !== string2[i] ? '1' : '0';
	}

	console.log(result);
});
