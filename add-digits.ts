function addDigits(num: number): number {
  if (String(num).split("").length < 2) {
    return num;
  }

  let sum = String(num)
    .split("")
    .reduce((acc, curr) => acc + parseInt(curr), 0);

  return addDigits(sum);
}
