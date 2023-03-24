function superDigit(n, k) {
	if (n.length === 1) {
		return parseInt(n);
	}
	const sum = [ ...n ].reduce((acc, curr) => acc + parseInt(curr), 0) * k;
	return superDigit(sum.toString(), 1);
}
