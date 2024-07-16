function reverseNumber(num: number) {
  let res = 0;

  while (num) {
    res = res * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return res;
}

function countDistinctIntegers(nums: number[]): number {
  const set = new Set(nums);

  for (let num of nums) {
    set.add(reverseNumber(num));
  }

  return set.size;
}

countDistinctIntegers([1, 13, 10, 12, 31]); // 6
