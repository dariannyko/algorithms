function frequencySort(nums: number[]): number[] {
    const countHash = new Map();

    for (let i = 0; i < nums.length; i++) {
        countHash.set(nums[i], (countHash.get(nums[i]) || 0) + 1);
    }

    return nums.sort((a, b) => countHash.get(a) - countHash.get(b) || b - a);
};