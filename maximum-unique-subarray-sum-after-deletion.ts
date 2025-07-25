function maxSum(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0]
    }
    const positives = nums.filter(n => n > 0);
    if (positives.length === 0) {
        return Math.max(...nums)
    } else {
        const uniqueArr = Array.from(new Set(positives))
        const sum = uniqueArr.reduce((acc, current) => acc + current, 0)
        return sum
    }


};