export default function rotateMatrix(matrix: number[][]): number[][] {
	let rotatedMatrix: number[][] = [[]];

	for (let row of matrix) {
		for (let index in row) {
            if (!rotatedMatrix[index]) rotatedMatrix[index] = [];
			rotatedMatrix[index].unshift(row[index]);
		}
    }

	return rotatedMatrix;
}

export function rotateMatrixInPlace(matrix: number[][]): boolean {
	if (!matrix.length || matrix.length != matrix[0].length) return false;

	for (let layer = 0; layer < matrix.length / 2; layer++) {
		let first = layer;
		let last = matrix.length - 1 - layer;

		for (let i = first; i < last; i++) {
			let offset = i - first;
			let top = matrix[first][i]; // Save top

			matrix[first][i] = matrix[last - offset][first]; // left -> top
			matrix[last - offset][first] = matrix[last][last - offset]; // bottom -> left
			matrix[last][last - offset] = matrix[i][last]; // right -> bottom
			matrix[i][last] = top; // top -> right
		}
	}

	return true;
}