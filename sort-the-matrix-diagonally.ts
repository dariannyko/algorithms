function diagonalSort(mat: number[][]): number[][] {
    
    const sortedMat = Array(mat.length).fill(0).map(a => []);
    
    function getDiag(r, c) {
        const out = [];
        while (r < mat.length && c < mat[0].length) {
            out.push(mat[r++][c++]);
        }
        return out;
    }
    
    function setDiag(r, c, cells) {
        while (r < mat.length && c < mat[0].length) {
            sortedMat[r++][c++] = cells.shift();
        }
    }
    
    for (let c = 0; c < mat[0].length; c++) {
        const diag = getDiag(0, c);
        setDiag(0, c, diag.sort((a,b) => a - b));
    }
    
    for (let r = 0; r < mat.length; r++) {
        const diag = getDiag(r, 0);
        setDiag(r, 0, diag.sort((a,b) => a - b));
    }
    
    return sortedMat;
};