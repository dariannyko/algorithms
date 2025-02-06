function tupleSameProduct(nums: number[]): number {
    const m = new Map<number, number>()
    const n = nums.length
    let res = 0

    for(let i = 0; i<n; i+=1) {
        for(let j = i+1; j<n; j+=1) {
            const curr = nums[i]*nums[j]
            const count = m.get(curr) || 0
            if(count >= 1) {
                res += count
            }
            m.set(curr, count + 1)
        }
    }

    return res * 8
};