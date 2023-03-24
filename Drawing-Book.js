function pageCount(n, p) {
	// Write your code here
	let pageFromFront = Math.floor(p / 2);
	let pageFromEnd = Math.floor(n / 2) - pageFromFront;

	return Math.min(pageFromFront, pageFromEnd);
}
