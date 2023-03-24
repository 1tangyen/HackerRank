function missingNumbers(arr, brr) {
	const freqArr = {};
	const freqBrr = {};

	for (let i = 0; i < arr.length; i++) {
		freqArr[arr[i]] = (freqArr[arr[i]] || 0) + 1;
	}

	for (let i = 0; i < brr.length; i++) {
		freqBrr[brr[i]] = (freqBrr[brr[i]] || 0) + 1;
	}

	const missing = [];

	for (const num in freqBrr) {
		if (freqBrr[num] > (freqArr[num] || 0)) {
			missing.push(parseInt(num));
		}
	}
	return missing.sort((a, b) => a - b);
}
