const matrix = [
    [1, 2],
    [3, 4],
];

function towelSort(matrix) {
    if (matrix === "undefined") {
        return [];
    }
    if (arguments.length === 0) {
        return [];
    }
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 != 0) {
            matrix[i].reverse();
        }
        for (let j = 0; j < matrix[i].length; j++) {
            result.push(matrix[i][j]);
        }
    }
    return result;
}

console.log(towelSort(matrix));
