function countOperations(num1: number, num2: number): number {
  let operations = 0;

  while (num1 && num2) {
    operations++;
    if (num1 >= num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }

  return operations;
}
