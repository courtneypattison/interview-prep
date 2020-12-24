import rotateMatrix, {rotateMatrixInPlace} from './1.7rotateMatrix';

test("[[1, 2, 3], [4, 5, 6], [7, 8, 9]] -> [[7, 4, 1], [8, 5, 2], [9, 6, 3]]", () => {
      expect(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
});

test("[[1, 2, 3], [4, 5, 6], [7, 8, 9]] -> [[7, 4, 1], [8, 5, 2], [9, 6, 3]]", () => {
      let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
      expect(rotateMatrixInPlace(matrix)).toBeTruthy();
      expect(matrix).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]])
});
  