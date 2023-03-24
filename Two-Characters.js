function alternate(s) {
	const letters = [ ...new Set(s) ];

	let maxValidLength = 0;

	for (let i = 0; i < letters.length - 1; i++) {
		for (let j = i + 1; j < letters.length; j++) {
			const validLetters = [ letters[i], letters[j] ];

			let isValid = true;
			let prevLetter = '';

			for (const letter of s) {
				if (validLetters.includes(letter)) {
					if (letter === prevLetter) {
						isValid = false;
						break;
					}
					prevLetter = letter;
				}
			}

			if (isValid) {
				const currValidLength = s.split('').filter((letter) => validLetters.includes(letter)).length;
				maxValidLength = Math.max(currValidLength, maxValidLength);
			}
		}
	}
	return maxValidLength;
}
