function pangrams(s) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const lowercaseS = s.toLowerCase();

	for (const letter of alphabet) {
		if (!lowercaseS.includes(letter)) {
			return 'not pangram';
		}
	}
	return 'pangram';
}
