function getSum(start: number, end: number, num: number) {
  let sum = 0;

  for (let j = start; j < end; j++) {
    sum += Number(num.toString()[j]);
  }

  return sum;
}

function isSymmetric(num: number) {
  const numLength = num.toString().length;

  if (numLength % 2) return false;

  let leftSum = getSum(0, numLength / 2, num);
  let rightSum = getSum(numLength / 2, numLength, num);

  return leftSum === rightSum;
}

function countSymmetricIntegers(low: number, high: number): number {
  let symmetric = 0;

  for (let i = low; i <= high; i++) {
    if (isSymmetric(i)) symmetric++;
  }

  return symmetric;
}

countSymmetricIntegers(1200, 1230);
