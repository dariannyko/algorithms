function canCompleteCircuit(gas: number[], cost: number[]): number {
    let tot = 0,
        res = 0,
        tank = 0;

    for (let idx = 0; idx < gas.length; idx++) {
        const val = gas[idx] - cost[idx];
        tot += val;
        tank += val;

        if (tot < 0) {
            tot = 0;
            res = idx + 1;
        }
    }
    if (tank < 0) return -1;
    return res;
}