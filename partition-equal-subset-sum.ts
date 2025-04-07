
// TODO: refactor
function canPartition(nums: number[]): boolean {
    const sum = nums.reduce((a, b) => a + b, 0);
    if ((sum & 1) !== 0) return false;
  
    const half = sum / 2;
    const dp = new Array(half + 1).fill(false);
    
    dp[0] = true;
    
    for (const num of nums) {
        if (dp[half - num]) return true;
      for (let i = half - 1; i >= num; i--) {
        dp[i] = dp[i] || dp[i - num];
      }
    }
    return false;
  };

canPartition([1,5,11,5]);
// canPartition([1, 2, 3, 5]);
