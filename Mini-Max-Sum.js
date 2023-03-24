function miniMaxSum(arr) {
	//sort the arr
	arr.sort((a, b) => a - b);

	let minFour = arr.slice(0, 4);
	let maxFour = arr.slice(1);

	let minSum = 0;
	let maxSum = 0;

	minFour.forEach((num) => {
		minSum += num;
	});

	maxFour.forEach((num) => {
		maxSum += num;
	});

	console.log(minSum, maxSum);
}
