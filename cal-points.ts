function calPoints(operations: string[]): number {
  let res = 0;
  let current: number[] = [];

  for (let i = 0; i < operations.length; i++) {
    switch (true) {
      case !isNaN(Number(operations[i])): {
        const value = Number(operations[i]);
        res += value;
        current.push(value);
        break;
      }
      case operations[i] == "+": {
        const lastIndex = current.length;
        const value = current[lastIndex - 1] + current[lastIndex - 2];

        res += value;
        current.push(value);
        break;
      }
      case operations[i] == "C": {
        const lastIndex = current.length - 1;
        res = res - Number(current[lastIndex]);
        current.pop();

        break;
      }
      case operations[i] == "D": {
        const value = current[current.length - 1] * 2;
        res += value;
        current.push(value);
        break;
      }
    }
  }
  console.log(res);

  console.log(current);
}

calPoints(["5", "2", "C", "D", "+"]);
