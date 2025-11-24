function prefixesDivBy5(nums: number[]): boolean[] {
  let res = [];

  let remainder = 0;

  for (let num of nums) {
    remainder = (remainder * 2 + num) % 5;
    res.push(remainder === 0);
  }

  return res;
}

prefixesDivBy5([0, 1, 1]); // [true, false, false]
