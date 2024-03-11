function calPoints(operations: string[]): number {
  const res: number[] = [];

  for (let operation of operations) {
    if (!Number.isNaN(+operation)) res.push(+operation);
    if (operation === "+") {
      res.push(res.at(-1) + res.at(-2));
    }
    if (operation === "C") {
      res.pop();
    }
    if (operation === "D") {
      res.push(res.at(-1) * 2);
    }
  }

  return res.reduce((sum, item) => sum + item, 0);
}

calPoints(["5", "2", "C", "D", "+"]);
