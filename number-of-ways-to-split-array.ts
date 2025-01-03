function waysToSplitArray(nums: number[]): number {
    let noOfSplits: number = 0;
    let sum: number = 0;
    let totalSum: number = 0;
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i]
    }
    for (let i = 0; i < nums.length - 1; i++) {
        sum += nums[i];
        let sumRight: number = totalSum - sum;
        if (sum >= sumRight) noOfSplits++
    }
    return noOfSplits;
};