function arrayPairSum(nums: number[]): number {
    const arr = nums.sort((a, b) => a - b)
    let result = 0
    for(let i = 0; i<nums.length; i+=2) {
        result += Math.min(arr[i], arr[i+1])
    }

    return result
};