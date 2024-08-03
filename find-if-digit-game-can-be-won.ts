function canAliceWin(nums: number[]): boolean {
  let firstSum = 0;
  let secondSum = 0;

  for (let num of nums) {
    if (num > 9) {
      secondSum += num;
    } else {
      firstSum += num;
    }
  }

  return firstSum !== secondSum;
}

canAliceWin([1, 2, 3, 4, 10]); // false
