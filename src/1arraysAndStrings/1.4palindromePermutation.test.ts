import isPalindromePermutation, {isPalindromePermutationBoolean, isPalindromePermutationBit} from './1.4palindromePermutation';

describe("palindromePermutation", () => {
    test("'taco cat' is a palindrome", () => {
        expect(isPalindromePermutation('taco cat')).toBeTruthy();
    });

    test("'\u{1F408}popo\u{1F408}' is a palindrome", () => {
        expect(isPalindromePermutation('\u{1F408}popo\u{1F408}')).toBeTruthy();
    });

    test("'cou c' is not a palindrome", () => {
        expect(isPalindromePermutation('cou c')).toBeFalsy();
    });

    test("'taco cat' is a palindrome", () => {
        expect(isPalindromePermutationBoolean('taco cat')).toBeTruthy();
    });

    test("'\u{1F408}popo\u{1F408}' is a palindrome", () => {
        expect(isPalindromePermutationBoolean('\u{1F408}popo\u{1F408}')).toBeTruthy();
    });

    test("'cou c' is not a palindrome", () => {
        expect(isPalindromePermutationBoolean('cou c')).toBeFalsy();
    });

    test("'taco cat' is a palindrome", () => {
        expect(isPalindromePermutationBit('taco cat')).toBeTruthy();
    });

    test("'\u{1F408}popo\u{1F408}' is a palindrome", () => {
        expect(isPalindromePermutationBit('\u{1F408}popo\u{1F408}')).toBeTruthy();
    });

    test("'cou c' is not a palindrome", () => {
        expect(isPalindromePermutationBit('cou c')).toBeFalsy();
    });
});