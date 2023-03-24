function minimumNumber(n, password) {
	let count = 0;
	const hasLowerCase = /[a-z]/.test(password);
	const hasUpperCase = /[A-Z]/.test(password);
	const hasDigit = /\d/.test(password);
	const hasSpecialChar = /[!@#$%^&*()\-+]/.test(password);

	count = [ !hasLowerCase, !hasUpperCase, !hasDigit, !hasSpecialChar ].filter(Boolean).length;

	if (n + count < 6) {
		count += 6 - (n + count);
	}

	return count;
}
