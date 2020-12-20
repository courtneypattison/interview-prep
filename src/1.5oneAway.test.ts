import isOneEditAway from './1.5oneAway';

describe("oneAway", () => {
    test("pale, ple -> true", () => {
        expect(isOneEditAway("pale", "ple")).toBeTruthy();
    });
    
    test("pales, pale -> true", () => {
        expect(isOneEditAway("pales", "pale")).toBeTruthy();
    });

    test("pale, bale -> true", () => {
        expect(isOneEditAway("pale", "bale")).toBeTruthy();
    });

    test("pale, bae -> true", () => {
        expect(isOneEditAway("pale", "bae")).toBeFalsy();
    });
});