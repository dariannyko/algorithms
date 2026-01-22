function minimumPairRemoval(nums: number[]): number {
  let sorted = false;
  let sw = 0;
  while (!sorted) {
    sorted = true;
    let idx = 0;
    let min = null;

    for (let i = 0; i < nums.length - 1; i++) {
      let curr = nums[i];
      let next = nums[i + 1];
      if (min === null) min = curr + next;
      else if (curr + next < min) {
        min = curr + next;
        idx = i;
      }

      if (curr > next) sorted = false;
    }

    if (!sorted) {
      sw++;
      nums.splice(idx, 2, nums[idx] + nums[idx + 1]);
    }
  }

  return sw;
}
