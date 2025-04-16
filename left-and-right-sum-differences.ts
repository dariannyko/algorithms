function leftRightDifference(nums: number[]): number[] {
  let result: number[] = [];
  let leftSum: number = 0;
  let totalSum: number = 0;

  for (let num of nums) totalSum += num;

  for (let num of nums) {
    let rightSum = totalSum - leftSum - num;
    let difference = Math.abs(leftSum - rightSum);
    result.push(difference);
    leftSum += num;
  }
  return result;
}
