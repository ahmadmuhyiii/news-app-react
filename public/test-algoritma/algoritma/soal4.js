function calculateDiagonalDifference(matrix) {
    let diagonal1 = 0;
    let diagonal2 = 0;

    for (let i = 0; i < matrix.length; i++) {
        diagonal1 += matrix[i][i];
        diagonal2 += matrix[i][matrix.length - 1 - i];
    }

    return Math.abs(diagonal1 - diagonal2);
}

const matrix = [[3, 2, 8], [1, 9, 6], [5, 7, 9]];
const result = calculateDiagonalDifference(matrix);
console.log(result);
