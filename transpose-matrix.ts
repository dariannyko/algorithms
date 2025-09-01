const transpose = (matrix: number[][]) =>
    matrix[0].map((_, i) => matrix.map((row) => row[i]));