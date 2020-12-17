import replaceSpaces, { replaceSpacesRegex } from './1.3urlify';

test("test if whitespace replaced by %20", () => {
	expect(replaceSpaces(" a  a ")).toEqual("a%20a");
});

test("test if whitespace replaced by %20", () => {
	expect(replaceSpacesRegex(" a  a ")).toEqual("a%20a");
});
