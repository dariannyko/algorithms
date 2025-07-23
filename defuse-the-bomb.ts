function decrypt(code: number[], k: number): number[] {
  const res = new Array(code.length).fill(0);

  for (let i = 0; i < code.length; i++) {
    if (k === 0) return res;

    if (k > 0) {
      for (let j = i + 1; j < i + k + 1; j++) {
        res[i] += code[j % code.length];
      }
    } else {
      for (let j = i - Math.abs(k); j < i; j++) {
        res[i] += code[(code.length + j) % code.length];
      }
    }
  }
  console.log(res);

  return res;
}

decrypt([5, 7, 1, 4], 3);
