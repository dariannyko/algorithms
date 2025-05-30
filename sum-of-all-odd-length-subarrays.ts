function sumOddLengthSubarrays(arr: number[]): number {
    const count = (index: number): number => Math.ceil(n / 2) + Math.floor(0.5 * index * (n - index - 1));
    const n = arr.length;
    return arr.reduce((acc, x, i) => acc + x * count(i), 0);
}