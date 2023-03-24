function lonelyinteger(a) {
	return a.sort((a, b) => a - b).filter((t, i, arr) => {
		return t !== a[i - 1] && t !== a[i + 1];
	});
}
