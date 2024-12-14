function isHappy(n: number): boolean {
  const visited = new Set();

  while (n !== 1) {
    const nums = n.toString().split("");
    const sum = nums.reduce((sum, prev) => sum + Math.pow(+prev, 2), 0);

    if (visited.has(sum)) return false;
    visited.add(sum);
    n = sum;
  }
  return true;
}

isHappy(19); // true
