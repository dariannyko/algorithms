function findClosest(x: number, y: number, z: number): number {
    let xDist = Math.abs(x - z)
    let yDist = Math.abs(y - z)
    if (xDist === yDist) {
        return 0
    }
    return xDist < yDist ? 1 : 2;
};