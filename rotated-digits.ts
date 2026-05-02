function rotatedDigits(n: number): number {
  let count: number = 0;
  for (let i: number = 1; i <= n; i++) {
    const num: String = i.toString();
    if (num.includes("3") || num.includes("4") || num.includes("7")) {
      continue;
    } else if (
      num.includes("2") ||
      num.includes("5") ||
      num.includes("6") ||
      num.includes("9")
    ) {
      count++;
    }
  }
  return count;
}
