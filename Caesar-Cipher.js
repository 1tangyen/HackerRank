function caesarCipher(s, k) {
	let encrypted = '';
	for (let i = 0; i < s.length; i++) {
		let charCode = s.charCodeAt(i);
		if (charCode >= 65 && charCode <= 90) {
			// uppercase letters
			encrypted += String.fromCharCode((charCode - 65 + k) % 26 + 65);
		} else if (charCode >= 97 && charCode <= 122) {
			// lowercase letters
			encrypted += String.fromCharCode((charCode - 97 + k) % 26 + 97);
		} else {
			// non-letter characters
			encrypted += s[i];
		}
	}
	return encrypted;
}
