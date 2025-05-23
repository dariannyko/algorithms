class ArrayWrapper {
  private nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  valueOf(): number {
    return this.nums.reduce((prev, curr) => prev + curr, 0);
  }

  toString(): string {
    return JSON.stringify(this.nums);
  }
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
obj1 + obj2; // 10
 