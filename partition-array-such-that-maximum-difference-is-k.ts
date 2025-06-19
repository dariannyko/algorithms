function partitionArray(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let ans = 1;
    let l = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[l] > k) {
            ans++;
            l = i;
        }
    }

    return ans;
}