function minSum(nums1: number[], nums2: number[]): number {
    const sum1 = nums1.reduce((a, b) => a + b, 0);
    const zero1 = nums1.filter(x => x === 0).length;

    const sum2 = nums2.reduce((a, b) => a + b, 0);
    const zero2 = nums2.filter(x => x === 0).length;

    if ((zero1 === 0 && sum1 < sum2 + zero2) || (zero2 === 0 && sum2 < sum1 + zero1)) {
        return -1;
    }

    return Math.max(sum1 + zero1, sum2 + zero2);
}