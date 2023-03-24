function matchingStrings(strings, queries) {
	let results = [];
	queries.forEach((query) => {
		const count = strings.filter((s) => s === query).length;
		results.push(count);
	});

	return results;
}
