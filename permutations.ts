function permute(nums: number[]): number[][] {
    const n: number = nums.length;
    const result: number[][] = [];
    const used: boolean[] = new Array(n).fill(false);
    
    function backtrack (sets: number[]): void {
        if (sets.length === nums.length) {
            result.push([...sets]);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (used[i] === true) { continue; }
            used[i] = true;
            sets.push(nums[i]);
            backtrack(sets);
            sets.pop();
            used[i] = false;
        }
    }
    backtrack([]);
    return result;       
};