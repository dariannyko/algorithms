function calculateTax(brackets: number[][], income: number): number {
  let out = 0;
  for (let i = 0; i < brackets.length; i++) {
    let p = Math.min(income, brackets[i][0]);
    if (i) p -= brackets[i - 1][0];
    out += (p * brackets[i][1]) / 100;
    if (brackets[i][0] >= income) break;
  }
  return out;
}
