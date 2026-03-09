class NumArray {
  private pre: number[];

  constructor(nums: number[]) {
    this.pre = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
      this.pre[i + 1] = this.pre[i] + nums[i];
    }
  }

  sumRange(left: number, right: number): number {
    return this.pre[right + 1] - this.pre[left];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
