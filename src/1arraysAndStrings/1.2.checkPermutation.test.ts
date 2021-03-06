import isPermutation from './1.2checkPermutation';

describe('checkPermutation', () => {
    test('"strttyv" is a permutation of "srtttvy"', () => {
        expect(isPermutation("strttyv", "srtttvy")).toBeTruthy;
    });

    test('"str" is not a permutation of "srtt"', () => {
        expect(isPermutation("str", "srtt")).toBeFalsy;
    });

    test('"stryyyyy" is not a permutation of "srtttttt"', () => {
        expect(isPermutation("stryyyyy", "srtttttt")).toBeFalsy;
    });
});