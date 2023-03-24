function minCount(str) {
	const count = {};

	for (let i = 0; i < arr.length; i++) {
		const char = str[i];
		count[char] = count[char] ? count[char] + 1 : 1;
	}

	const minCount = Math.min(...Object.values(count));
	return minCount;
}
