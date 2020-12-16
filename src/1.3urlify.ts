export default function replaceSpaces(str: string): string {
	let url = [];
    let prevChar = "";

	let charArray = Array.from(str.trim());
	for (let i = 0; i < charArray.length; i++) {
		if (charArray[i] == " ") {
			if (prevChar != " ") url.push("%20");
		} else {
			url.push(charArray[i]);
		}
		prevChar = charArray[i];
	}

	return url.join("");
}
