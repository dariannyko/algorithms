function areSimilar(mat: number[][], k: number): boolean {
  const rows = mat.length;
  const cols = mat[0].length;
  k %= cols;

  if (k === 0) {
    return true;
  }

  for (let i = 0; i < rows; i++) {
    let shifted_row = mat[i].slice(k).concat(mat[i].slice(0, k));

    for (let j = 0; j < cols; j++) {
      if (mat[i][j] !== shifted_row[j]) {
        return false;
      }
    }
  }

  return true;
}
