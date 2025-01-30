function largestAltitude(gain: number[]): number {
  let max = 0;
  let curr = 0;

  for (let num of gain) {
    curr += num;
    max = Math.max(curr, max);
  }

  return max;
}
largestAltitude([-5, 1, 5, 0, -7]); // 1
