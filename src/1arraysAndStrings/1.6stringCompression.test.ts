import compressString from './1.6stringCompression';

describe("stringCompression", () => {
    test("aabccccaaa -> a2b1c4a3", () => {
        expect(compressString("aabccccaaa")).toEqual("a2b1c4a3");
    });
    
    test("abcde -> abcde", () => {
        expect(compressString("abcde")).toEqual("abcde");
    });
});