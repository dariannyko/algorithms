function maximumTripletValue(nums: number[]): number {
  let max = 0;
  let maxDiff = 0;
  let maxTriplet = 0;

  for (const num of nums) {
    maxTriplet = Math.max(maxTriplet, num * maxDiff);
    maxDiff = Math.max(maxDiff, max - num);
    max = Math.max(max, num);
  }
}

maximumTripletValue([12, 6, 1, 2, 7]);
