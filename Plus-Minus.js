function plusMinus(arr) {
	// Write your code here
	let pos = 0;
	let neg = 0;
	let zero = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			pos++;
		} else if (arr[i] < 0) {
			neg++;
		} else {
			zero++;
		}
	}
	console.log(
		(pos / arr.length).toFixed(6) + '\n' + (neg / arr.length).toFixed(6) + '\n' + (zero / arr.length).toFixed(6)
	);
}
