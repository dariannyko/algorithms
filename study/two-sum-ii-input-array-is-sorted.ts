// #3
function twoSum(numbers: number[], target: number): number[] {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    const sum = numbers[start] + numbers[end];

    if (sum === target) {
      return [start + 1, end + 1];
    } else if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
}

twoSum([2, 7, 11, 15], 9); // [1, 2]
