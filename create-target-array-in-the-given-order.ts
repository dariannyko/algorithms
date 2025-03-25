function createTargetArray(nums: number[], index: number[]): number[] {
  let res: number[] = [];

  for (let i = 0; i < index.length; i++) {
    const targetIndex = index[i];

    if (res[targetIndex] === undefined) {
      res.push(nums[targetIndex]);
    } else {
      const start = res.slice(0, targetIndex);
      const end = res.slice(targetIndex);

      res = start.concat([nums[i]], end);
    }
  }

  return res;
}

createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]);
