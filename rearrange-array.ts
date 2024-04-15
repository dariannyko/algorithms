function rearrangeArray(nums: number[]): number[] {
  const res: number[] = [];

  let negativeIndex = 1;
  let positiveIndex = 0;

  for (let num of nums) {
    if (num > 0) {
      res[positiveIndex] = num;
      positiveIndex += 2;
    } else {
      res[negativeIndex] = num;
      negativeIndex += 2;
    }
  }

  return res;
}

rearrangeArray([3, 1, -2, -5, 2, -4]); // [3,-2,1,-5,2,-4]
