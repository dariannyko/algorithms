function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalGas = 0;
  let currentGas = 0;
  let index = 0;

  for (let i = 0; i < gas.length; i++) {
    const value = gas[i] - cost[i];

    totalGas += value;
    currentGas += value;

    if (currentGas < 0) {
      currentGas = 0;
      index = i + 1;
    }
  }

  return totalGas < 0 ? -1 : index;
}

canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]); // 3
