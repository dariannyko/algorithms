function maxSubsequence(nums: number[], k: number): number[] {
    const res = nums.map((num, i) => [num, i])
                    .sort((a, b) => b[0] - a[0])
                    .slice(0, k);

    return res.sort((a, b) => a[1] - b[1]).map(el => el[0]);
};