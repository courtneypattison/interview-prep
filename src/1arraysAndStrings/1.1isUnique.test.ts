import { allUniqueChars, allUniqueCharsSet } from './1.1isUnique';

describe("urlify", () => {
    test("All characters are unique", () => {
        expect(allUniqueChars("🍎abcå")).toBeTruthy();
        expect(allUniqueCharsSet("🍎abcå")).toBeTruthy();
    })

    test("All characters are not unique", () => {
        expect(allUniqueChars("🍎🍎abc")).toBeFalsy();
        expect(allUniqueCharsSet("🍎🍎abc")).toBeFalsy();
    })
});