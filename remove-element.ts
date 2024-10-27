function removeElement(nums: number[], val: number): number {
  let ind = 0;

  for (const num of nums) {
    if (num !== val) nums[ind++] = num;
  }

  return ind;
}

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2); // [0,1,3,0,4,_,_,_]
