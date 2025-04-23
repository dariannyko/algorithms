const getDigitSum = (num: number) => {
  let sum = 0;
  while (num > 0) {
    const digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }

  return sum;
};

function countLargestGroup(n: number): number {
  const map = new Map();
  let max = 0;

  for (let num = 1; num <= n; num++) {
    let sum = getDigitSum(num);

    const groupNum = (map.get(sum) || 0) + 1;
    max = Math.max(max, groupNum);
    map.set(sum, groupNum);
  }

  let res = 0;
  for (let value of map.values()) {
    if (value === max) res++;
  }

  return res;
}

countLargestGroup(13); // 4
