function finalValueAfterOperations(operations: string[]): number {
  let count = 0;

  for (let operation of operations) {
    if (operation === "--X" || operation === "X--") {
      count--;
    } else {
      count++;
    }
  }

  return count;
}
finalValueAfterOperations(["--X", "X++", "X++"]);
