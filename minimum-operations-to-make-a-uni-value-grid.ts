function minOperations(grid: number[][], x: number): number {
    const flatGrid = grid.flat();
    const middleIndex = Math.floor(flatGrid.length / 2);
    const remainder = flatGrid[0] % x;

    for (const num of flatGrid) {
        if (num % x !== remainder) {
            return -1;
        }
    }

    flatGrid.sort((a, b) => a - b);

    const median = flatGrid[middleIndex];

    return flatGrid.reduce((acc, num) => acc + Math.abs(num - median) / x, 0);
}