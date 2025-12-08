function countTriples(n: number): number {
  let cnt = 0;
  for (let a = 3; a < n; a++) {
    let sqrtA = a * a;
    for (let b = 3; b < n; b++) {
      let sqrtSum = sqrtA + b * b;
      let c = Math.floor(Math.sqrt(sqrtSum));
      if (c > n) break;
      if (c * c === sqrtSum) {
        cnt++;
      }
    }
  }
  return cnt;
}
