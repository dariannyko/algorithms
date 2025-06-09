function pivotInteger(n: number): number {
    const total = (n * (n + 1)) / 2;
    const x = Math.floor(Math.sqrt(total));

    return x * x === total ? x : -1;
}