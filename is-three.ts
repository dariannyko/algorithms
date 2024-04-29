function isThree(n: number): boolean {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (!(n % i)) count++;
    if (count > 3) return false;
  }

  return count == 3;
}

console.log(isThree(9)); // true
